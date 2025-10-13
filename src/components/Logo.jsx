import React from 'react';

const Logo = ({ isDark = false, className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/assets/logo.png"
        alt="ConnectAlign"
        className={`h-7 md:h-9 transition-all duration-300 ${
          isDark ? 'opacity-90' : 'brightness-0 invert opacity-90'
        }`}
        style={{ maxWidth: '240px' }}
      />
    </div>
  );
};

export default Logo;
