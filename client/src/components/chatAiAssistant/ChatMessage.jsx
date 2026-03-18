import { Bot, User } from 'lucide-react';
// import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const ChatMessage = ({ role, content }) => {
  const isUser = role === 'user';

  return (
    <div
      className={
        `flex gap-3 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300
        ${isUser ? 'justify-end' : 'justify-start'}`
      }
    >
      {!isUser && (
        <div className="flex-shrink-0 flex items-start pt-1">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff4d4d] to-red-500 flex items-center justify-center text-white shadow-lg">
            <Bot className="w-5 h-5" />
          </div>
        </div>
      )}

      <div
        className={
          `  max-w-xs lg:max-w-md px-4 py-3 rounded-2xl text-sm leading-relaxed backdrop-blur-md
          ${isUser
            ? 'bg-red-100 text-gray-900 rounded-br-none shadow-md'
            : 'bg-white/10 text-gray-900 border border-white/20 rounded-bl-none'}`
        }
      >
        {/* {content} */}
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
              return !inline ? (
                <pre className="bg-gray-800 text-white p-2 rounded overflow-auto">
                  <code {...props}>{children}</code>
                </pre>
              ) : (
                <code className="bg-gray-200 rounded px-1" {...props}>{children}</code>
              );
            },
            a({ href, children }) {
              return <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{children}</a>;
            },
          }}
        />
      </div>

      {isUser && (
        <div className="flex-shrink-0 flex items-start pt-1">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
            <User className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  );
}
export default ChatMessage;