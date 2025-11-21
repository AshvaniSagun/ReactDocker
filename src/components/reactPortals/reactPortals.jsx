import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ visible, onClose }) => {
  if (!visible) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}
    >
      <div style={{ background: 'white', padding: '20px', borderRadius: '5px' }}>
        <h3>Modal Content</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
};

const ReactPortals = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>My App</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal visible={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ReactPortals;
