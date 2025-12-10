import React, { useEffect, useState } from 'react';
import '../styles/modal.css';

const Modal = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 300); // Match the transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${show ? 'show' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Contact Information</h2>
        <p>Email: saiduduru@gmail.com</p>
        <p>Email: dudurusai@vt.edu</p>
        {/* <p>Phone: (123) 456-7890</p> */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
