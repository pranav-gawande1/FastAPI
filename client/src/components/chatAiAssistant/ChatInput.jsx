import { Send } from 'lucide-react';
import { useRef, useState } from 'react';

const ChatInput = ({ onSend, disabled = false }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex gap-2 items-center p-4 bg-white/5 border-t border-white/10 backdrop-blur-xl">
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        disabled={disabled}
        className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4d4d] focus:border-transparent disabled:opacity-50 transition-all"
      />
      <button
        onClick={handleSend}
        disabled={disabled || !input.trim()}
        className="flex-shrink-0 h-11 w-11 rounded-full bg-[#ff4d4d] hover:bg-red-700 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
}
export default ChatInput;