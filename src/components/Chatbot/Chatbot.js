import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = ({ allProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Xin chào! Tôi là trợ lý ảo của EduAI. Tôi có thể giúp gì cho bạn?', sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null); // Ref để tự động cuộn xuống cuối

  // Tự động cuộn xuống cuối tin nhắn khi có tin nhắn mới
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Hàm xử lý phản hồi của AI
  const handleAiResponse = (userMessage) => {
    setIsTyping(true);
    const lowerCaseMessage = userMessage.toLowerCase();
    let aiResponseText = "Xin lỗi, tôi chưa hiểu yêu cầu của bạn. Bạn có muốn hỏi về các khóa học AI, Machine Learning, Data Science, hoặc Tiếng Anh không?";
    let suggestedProducts = [];

    // Simple keyword matching for product suggestions
    if (lowerCaseMessage.includes('tiếng anh') || lowerCaseMessage.includes('english')) {
      suggestedProducts = allProducts.filter(p => p.keywords.includes('tiếng anh'));
      if (suggestedProducts.length > 0) {
        aiResponseText = "Chào bạn! Tôi có thể gợi ý một số khóa học/tài liệu tiếng Anh mà bạn có thể quan tâm:";
      } else {
        aiResponseText = "Chúng tôi có nhiều khóa học tiếng Anh. Bạn muốn tìm hiểu về giao tiếp, luyện thi hay tiếng Anh chuyên ngành?";
      }

      if (lowerCaseMessage.includes('người mỹ') || lowerCaseMessage.includes('giọng mỹ') || lowerCaseMessage.includes('american')) {
        suggestedProducts = allProducts.filter(p => p.keywords.includes('người mỹ'));
        if (suggestedProducts.length > 0) {
          aiResponseText = "Để học tiếng Anh với người Mỹ, bạn có thể tham khảo các khóa học sau:";
        } else {
          aiResponseText = "Chúng tôi có các khóa học luyện nói tiếng Anh chuẩn giọng Mỹ. Bạn có muốn tôi tìm kiếm không?";
        }
      }
    }
    else if (lowerCaseMessage.includes('ai') || lowerCaseMessage.includes('trí tuệ nhân tạo')) {
        suggestedProducts = allProducts.filter(p => p.keywords.includes('ai'));
        if (suggestedProducts.length > 0) {
            aiResponseText = "Tuyệt vời! Dưới đây là một số khóa học/tài liệu về Trí tuệ nhân tạo mà tôi tìm thấy:";
        } else {
            aiResponseText = "Chúng tôi có rất nhiều tài nguyên về AI. Bạn muốn tìm hiểu về mảng nào của AI?";
        }
    }
    else if (lowerCaseMessage.includes('data science') || lowerCaseMessage.includes('khoa học dữ liệu')) {
        suggestedProducts = allProducts.filter(p => p.keywords.includes('khoa học dữ liệu'));
        if (suggestedProducts.length > 0) {
            aiResponseText = "Đã tìm thấy các khóa học/tài liệu về Khoa học dữ liệu:";
        } else {
            aiResponseText = "Khoa học dữ liệu là một lĩnh vực rộng lớn. Bạn muốn tập trung vào Python, R, hay các công cụ khác?";
        }
    }
    else if (lowerCaseMessage.includes('khóa học') || lowerCaseMessage.includes('tài liệu')) {
        aiResponseText = "Bạn muốn tìm khóa học hoặc tài liệu về chủ đề gì?";
    }
    else if (lowerCaseMessage.includes('chào') || lowerCaseMessage.includes('hello')) {
      aiResponseText = "Chào bạn! Tôi có thể giúp gì cho bạn hôm nay?";
    }
    else if (lowerCaseMessage.includes('cảm ơn') || lowerCaseMessage.includes('thank you')) {
        aiResponseText = "Rất vui được giúp đỡ!";
    }

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: aiResponseText, sender: 'ai', suggestions: suggestedProducts.length > 0 ? suggestedProducts : null }
      ]);
      setIsTyping(false);
    }, 1500); // Giả lập thời gian AI xử lý
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = input;
    setMessages((prevMessages) => [...prevMessages, { id: prevMessages.length + 1, text: userMessage, sender: 'user' }]);
    setInput('');
    handleAiResponse(userMessage);
  };

  const handleQuickReply = (replyText) => {
    setInput(replyText);
    handleSendMessage(); // Gửi tin nhắn nhanh đi
  };

  const handleProductSuggestionClick = (productName) => {
    // Optionally, you can open the product detail modal from here in App.js
    // For now, let's just send a message
    setInput(`Tôi muốn biết thêm về ${productName}`);
    handleSendMessage();
  };

  return (
    <>
      <button className="chatbot-toggle-button" onClick={() => setIsOpen(!isOpen)}>
        🤖 {/* Biểu tượng chatbot */}
      </button>

      {isOpen && (
        <div className="chatbot-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="chatbot-container" onClick={(e) => e.stopPropagation()}>
            <div className="chatbot-header">
              <h3>Chatbot EduAI</h3>
              <button className="chatbot-close-button" onClick={() => setIsOpen(false)}>&times;</button>
            </div>
            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`message-bubble ${msg.sender}`}>
                  {msg.text}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="chatbot-product-suggestions">
                      {msg.suggestions.map(product => (
                        <div key={product.id} className="chatbot-product-item" onClick={() => handleProductSuggestionClick(product.name)}>
                          <img src={product.image} alt={product.name} />
                          <div className="product-item-info">
                            <h4>{product.name}</h4>
                            <p>{product.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="message-bubble ai is-typing">
                  <div className="typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} /> {/* Dùng ref để cuộn */}
            </div>
            {/* Quick Replies */}
            <div className="chatbot-quick-replies">
              <button className="quick-reply-button" onClick={() => handleQuickReply('Tôi muốn học tiếng Anh')}>Học tiếng Anh</button>
              <button className="quick-reply-button" onClick={() => handleQuickReply('Tìm khóa học AI')}>Tìm khóa học AI</button>
              <button className="quick-reply-button" onClick={() => handleQuickReply('Tài liệu mới')}>Tài liệu mới</button>
              <button className="quick-reply-button" onClick={() => handleQuickReply('Liên hệ tư vấn')}>Liên hệ tư vấn</button>
            </div>
            <div className="chatbot-input-area">
              <input
                type="text"
                placeholder="Gửi tin nhắn..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
              />
              <button onClick={handleSendMessage}>
                ➡️ {/* Biểu tượng gửi */}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;