import { Send, MessageCircle, Bot, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import useManualFetch from '../../shared/hooks/useManualFetch';

const AIAssistantPage = () => {
    const { data, status, execute } = useManualFetch();
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hello! 👋 I'm your Pizza AI Assistant. I'm here to help you with pizza orders, recommendations, and any questions about our menu. What can I do for you today?",
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to latest message
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSend = async (msg) => {
        // if (!msg.trim()) return;

        const userMessage = { role: 'user', content: msg };
        setMessages((prev) => [...prev, userMessage]);
        setIsLoading(true);

        await execute('/ai/ai-chat/', "POST",
            { message: msg }
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
            setInput('');
        }
    }, [data?.reply, status]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend(input);
        }
    };

    return (
        <div className="h-screen w-full bg-gray-100 flex flex-col">
            {/* Header */}
            <header className="flex items-center justify-between p-6 border-b border-white/10 bg-white backdrop-blur-xl shadow-md">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff4d4d] to-red-800 flex items-center justify-center text-white shadow-lg">
                        <Bot className="w-7 h-7" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-[#ff4d4d]">Pizza Paradise Assistant</h1>
                        <p className="text-gray-900 text-sm">Your friendly pizza ordering helper</p>
                    </div>
                </div>
            </header>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-4xl mx-auto space-y-6 pb-8">
                    {messages.map((message, idx) => (
                        <div
                            key={idx}
                            className={`flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300 ${message.role === 'user' ? 'justify-end' : 'justify-start'
                                }`}
                        >
                            {message.role === 'assistant' && (
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff4d4d] to-red-800 flex items-center justify-center text-white shadow-lg">
                                        <Bot className="w-6 h-6" />
                                    </div>
                                </div>
                            )}

                            {/* <div
                                className={`max-w-2xl px-6 py-4 rounded-3xl text-base leading-relaxed backdrop-blur-md ${message.role === 'user'
                                    ? 'bg-blue-600 text-white rounded-br-none shadow-md'
                                    : 'bg-white/10 text-gray-100 border border-white/20 rounded-bl-none'
                                    }`}
                            >
                                {message.content}
                            </div> */}

                            {/* <div
                                className={`max-w-2xl px-6 py-4 rounded-3xl text-base leading-relaxed backdrop-blur-md ${message.role === 'user'
                                    ? 'bg-blue-600 text-white rounded-br-none shadow-md'
                                    : 'bg-white/10 text-gray-100 border border-white/20 rounded-bl-none'
                                    }`}
                            > */}
                            <div
                                className={`w-fit max-w-[90%] px-4 py-2 rounded-3xl text-base leading-relaxed backdrop-blur-md ${message.role === 'user'
                                    ? 'bg-red-200 text-gray-900 rounded-br-none shadow-md'
                                    : 'bg-gray-200 text-gray-500 border border-white/20 rounded-bl-none'
                                    }`}
                            >
                                <ReactMarkdown
                                    children={message.content}
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

                            {message.role === 'user' && (
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
                                        <User className="w-6 h-6" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Typing Indicator */}
                    {isLoading && (
                        <div className="flex gap-4 justify-start animate-in">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="bg-white/10 border border-white/20 rounded-3xl rounded-bl-none px-6 py-4 flex gap-2">
                                <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                            </div>
                        </div>
                    )}

                    <div ref={scrollRef} />
                </div>
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-white/10 bg-gray-600 backdrop-blur-xl">
                <div className="max-w-4xl mx-auto flex gap-3 items-center">
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message here..."
                        disabled={isLoading}
                        className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 text-base transition-all"
                    />
                    <button
                        onClick={() => handleSend(input)}
                        disabled={isLoading || !input.trim()}
                        className="flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg h-14 w-14 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        <Send className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default AIAssistantPage;