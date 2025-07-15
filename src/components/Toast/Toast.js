import React, { useEffect, useState } from 'react';
import './Toast.css'; // Import CSS riêng của Toast

const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) {
        setTimeout(onClose, 500); // Give time for fadeOut animation
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`toast toast-${type}`}>
      <span className="toast-icon">
        {type === 'success' && '✅'}
        {type === 'error' && '❌'}
        {type === 'info' && 'ℹ️'}
        {type === 'warning' && '⚠️'}
      </span>
      <p className="toast-message">{message}</p>
      <button className="toast-close-button" onClick={() => setIsVisible(false)}>&times;</button>
    </div>
  );
};

export default Toast;