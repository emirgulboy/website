import React, { useState, useEffect } from 'react';

const ImageHover = ({ imgSrc, text1, text2 }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [imageWidth, setImageWidth] = useState(0);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    setImageWidth(Math.min(window.innerWidth, 600));
    const handleResize = () => {
      setImageWidth(Math.min(window.innerWidth, 600));
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const duration = 0.5; // Change this value to adjust the fade duration

  return (
    <div
      className="image-hover-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
      }}
    >
      <img
        src={imgSrc}
        alt=""
        style={{
          display: 'block',
          objectFit: 'cover', 
          width: '100%',
          transition: `transform ${duration}s ease-out`,
          transform: isHovering ? 'scale(1.1)' : 'none',
          maxWidth: `${imageWidth}px`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          transition: `opacity ${duration}s ease-out`,
          opacity: isHovering ? 0 : 1,
          textAlign: 'center',
          width: '100%',
          zIndex: 1,
        }}
      >
        {text1}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          transition: `opacity ${duration}s ease-in`,
          opacity: isHovering ? 1 : 0,
          textAlign: 'center',
          width: '100%',
          zIndex: 1,
        }}
      >
        {text2}
      </div>
    </div>
  );
};

export default ImageHover;
