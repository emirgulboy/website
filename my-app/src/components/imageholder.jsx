import React, { useState } from 'react';

const ImageHover = ({ imgSrc }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className="image-hover-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imgSrc}  alt="logo"/>

      {isHovering && (
        <div className="image-hover-overlay">
          <p>This is the hover overlay text</p>
        </div>
      )}
    </div>
  );
};

export default ImageHover;