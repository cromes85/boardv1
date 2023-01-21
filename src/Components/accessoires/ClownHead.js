import React, { useState, useEffect } from 'react';

const ClownHead = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    if (isHovered) {
      setAnimation('swing 5s');
    } else {
      setAnimation('');
    }
  }, [isHovered]);

  return (
    <div className="center">
      <img
        style={{ animation: animation }}
        className="clown-head"
        src="./crane.jpg"
        alt="Clown Head"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default ClownHead;
