import React from 'react';

const Logo = ({ isDark = false, className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/assets/logo.png"
        alt="ConnectAlign"
        className={`transition-all duration-300 ${
          isDark ? 'opacity-90' : 'brightness-0 invert opacity-90'
        }`}
        style={{
          height: 'auto',
          width: '320px',
          maxWidth: '100%'
        }}
      />
    </div>
  );
};

export default Logo;
