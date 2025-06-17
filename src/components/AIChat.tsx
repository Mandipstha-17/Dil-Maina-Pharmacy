import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: 'Hello! Welcome to Dil Maina Pharmacy. How can I assist you today?',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('hour') || lowerMessage.includes('time') || lowerMessage.includes('open')) {
      return 'Our pharmacy is open Sunday-Friday: 7:30 AM - 9:30 PM, Saturday: 8:00 AM - 9:00 PM. For emergencies, call +977-1-4567899 (24/7).';
    }

    if (lowerMessage.includes('doctor') || lowerMessage.includes('consultation')) {
      return 'Doctor consultations are available every day throughout the day, based on the doctor availability. Please call +977-1-4567890 to book an appointment.';
    }

    if (lowerMessage.includes('lab') || lowerMessage.includes('test')) {
      return 'We offer comprehensive lab tests with home collection service. Sample collection is available from 7:00 AM to 10:00 AM daily. Results are typically ready within 24 hours.';
    }

    if (lowerMessage.includes('payment') || lowerMessage.includes('pay') || lowerMessage.includes('esewa')) {
      return 'We accept multiple payment methods including eSewa, QR code payments, mobile banking, and cash. All online transactions are secure with instant confirmation.';
    }

    if (lowerMessage.includes('delivery') || lowerMessage.includes('home')) {
      return 'Home delivery is not available at the moment. We are working on it and hope to offer the service soon—thank you for your patience!';
    }

    if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent')) {
      return 'For medical emergencies, call our 24/7 emergency line: +977-9818068544. For life-threatening emergencies, please call 911 or go to the nearest hospital immediately.';
    }

    if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
      return 'We are located at Chamati, Kathmandu, Nepal (Postal Code: 44600). You can also call us at +977-1-4567890 for directions.';
    }

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('namaste')) {
      return 'Hello! Welcome to Dil Maina Pharmacy. How can I assist you today? You can ask me about our services, hours, appointments, or any other questions.';
    }

    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return 'You\'re welcome! Is there anything else I can help you with regarding our pharmacy services?';
    }

    return 'Thank you for your question! For specific inquiries, please call us at +977-1-4567890 or visit our pharmacy at chamati, Kathmandu. Our staff will be happy to assist you personally.';
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 transform hover:scale-110"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-96 rounded-2xl shadow-2xl bg-white border border-gray-200">
          <div className="p-4 rounded-t-2xl bg-teal-600 text-white">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 p-2 rounded-full">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={`p-3 rounded-2xl ${message.sender === 'user' ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="p-2 rounded-full bg-gray-200 text-gray-700">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="p-3 rounded-2xl bg-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
