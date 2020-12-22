import React from 'react';

function Modal({ selectedImg, setSelectedImg }) {
  const handleClick = e => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <div
      className="backdrop"
      onClick={handleClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
      }}
    >
      <img
        src={selectedImg}
        alt="enlarged pic"
        style={{
          display: 'block',
          maxWidth: '100%',
          maxHeight: '80%',
          margin: '60px auto',
          boxShadow: '3px 5px 7px rgba(0,0,0,0.5)',
          border: '3px solid white',
        }}
      />
    </div>
  );
}

export default Modal;
