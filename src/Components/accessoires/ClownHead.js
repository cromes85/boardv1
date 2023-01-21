import React, { useState, useEffect } from 'react';

import './clownHead.css';


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
    
    <div>
      <img
        style={{ animation: animation }}
        className="w-32 rounded-full"
        src="./crane.jpg"
        alt="Clown Head"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default ClownHead;
