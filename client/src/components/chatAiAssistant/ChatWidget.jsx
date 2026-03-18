import { ExternalLink, MessageCircle, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ChatInput from './chatInput';
import ChatMessage from './chatMessage';
import useManualFetch from '../../shared/hooks/useManualFetch';
import { useNavigate } from 'react-router-dom';

const ChatWidget = () => {
  const { data, status, execute } = useManualFetch();
  const [isOpen, setIsOpen] = useState(false);
  const naviagte = useNavigate();
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! 👋 I'm your Pizza AI Assistant. How can I help you with pizzas today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);


  // Auto-scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // const handleSendMessage = async (message) => {
  //   // Add user message
  //   const userMessage = { role: 'user', content: message };
  //   setMessages((prev) => [...prev, userMessage]);
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch('/api/chat', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ message }),
  //     });

  //     const data = await response.json();

  //     // Add assistant message
  //     const assistantMessage = {
  //       role: 'assistant',
  //       content: data.reply || "Sorry, I couldn't process that. Please try again.",
  //     };
  //     setMessages((prev) => [...prev, assistantMessage]);
  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //     const errorMessage = {
  //       role: 'assistant',
  //       content: 'Sorry, there was an error. Please try again.',
  //     };
  //     setMessages((prev) => [...prev, errorMessage]);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleSend = async (message) => {
    // if (!msg.trim()) return;

    const userMessage = { role: 'user', content: message };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    await execute('/ai/ai-chat/', "POST",
      { message: message }
    );
    // const data = await response.json();
    // } catch {
    //     setMessages((prev) => [...prev, { role: 'assistant', content: "Something went wrong. Please try again." }]);
    // } finally {
    //     setIsLoading(false);
    // }
  };
  useEffect(() => {
    if (status === "success" && data?.reply) {
      const assistantMessage = { role: 'assistant', content: data.reply || "Sorry, I couldn't process that." };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
      // setInput('');
    }
  }, [data?.reply, status]);

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#ff4d4d] to-red-800 text-white shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 group cursor-pointer"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-white rounded-3xl shadow-2xl border border-white/10 flex flex-col overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-red-900 bg-[#ff4d4d]">
            <div >
              <h2 className="text-white font-bold text-lg">Pizza AI Assistant</h2>
              <div className='flex items-center gap-3'>
                <p className="text-gray-900 text-sm">Always here to help</p>
              <button onClick={() => naviagte(`ai-chat`)}>
                <ExternalLink className='w-4 h-4 text-gray-900'/>
              </button>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-900 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <ChatMessage
                  key={idx}
                  role={msg.role}
                  content={msg.content}
                />
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex gap-3 mb-4">
                  <div className="flex-shrink-0 flex items-start pt-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="bg-white/10 border border-white/20 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              )}

              <div ref={scrollRef} />
            </div>
          </div>

          {/* Input Area */}
          <ChatInput onSend={handleSend} disabled={isLoading} />
        </div>
      )}
    </>
  );
}

export default ChatWidget;