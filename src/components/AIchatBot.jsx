import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../mock';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! I'm Mr.Arman's AI Assistant. Ask me anything about his skills, projects, certifications, or contact details!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMessage = { sender: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError('');

    try {
      const systemPrompt = `You are an AI assistant representing Arman on his portfolio website.
Answer questions politely, accurately, and professionally based ONLY on this JSON context:
${JSON.stringify(portfolioData)}

Instructions:
- If the user asks about skills, projects, certifications, experience, education, or contact details, answer using the JSON context.
- Keep answers concise (2-4 sentences) unless more detail is requested.
- If a question cannot be answered using this context, politely inform the user to contact Arman directly via the Contact form on the website.`;

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: `${systemPrompt}\n\nUser Question: ${trimmed}` }]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 512
            }
          })
        }
      );

if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const status = response.status;

        // Friendly fallback for rate limiting / quota exceeded (HTTP 429)
        if (status === 429) {
          throw {
            isRateLimit: true,
            message:
              errorData?.error?.message ||
              'Rate limit exceeded. Please wait a moment and try again.'
          };
        }

        throw new Error(
          errorData?.error?.message || `API request failed with status ${status}`
        );
      }

      const data = await response.json();
      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't generate a response. Please try again.";

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    } catch (err) {
      const isRateLimit = err?.isRateLimit === true;
      setError(
        isRateLimit
          ? "You've reached the AI rate limit. Please try again in a moment."
          : err.message || 'Something went wrong.'
      );
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: isRateLimit
            ? "I've hit my rate limit for the moment. Please wait a few seconds and try your question again. In the meantime, you can explore the projects and skills sections of the site!"
            : "Sorry, I'm having trouble connecting right now. Please try again later."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-800 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={18} />
              </div>
<div>
                <h3 className="font-semibold text-sm">Arman's AI Assistant</h3>
<p className="text-xs text-white/80">Powered by Gemini 1.5 Flash</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages List */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 min-h-[300px] max-h-[340px]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-wrap break-words ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {error && (
              <div className="text-xs text-red-500 dark:text-red-400 italic">
                {error}
              </div>
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 rounded-2xl rounded-bl-none px-4 py-3 text-sm flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:0.15s]" />
                    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:0.3s]" />
                  </div>
                  <span className="italic">AI is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-gray-200 dark:border-zinc-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              placeholder="Ask about my skills, projects..."
              className="flex-1 px-3 py-2 text-sm bg-gray-100 dark:bg-zinc-800 rounded-xl outline-none dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 disabled:opacity-60"
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Toggle AI chat"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <>
            <MessageSquare size={24} />
            <span className="font-medium hidden sm:inline">Ask AI About Me</span>
          </>
        )}
      </button>
    </div>
  );
};

export default AIChatbot;
