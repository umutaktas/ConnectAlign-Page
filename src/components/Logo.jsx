import React from 'react';

const Logo = ({ isDark = false, className = "" }) => {
  const baseColor = isDark ? '#6B8E99' : '#94B3BE';

  return (
    <div className={`flex items-center ${className}`}>
      <span
        className="text-2xl md:text-3xl font-light tracking-tight transition-colors duration-300"
        style={{
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          letterSpacing: '-0.02em',
          color: baseColor
        }}
      >
        Connec
        <span
          className="text-3xl md:text-4xl font-extralight relative -top-0.5 mx-0.5"
          style={{ color: baseColor }}
        >
          +
        </span>
        Align
      </span>
    </div>
  );
};

export default Logo;
