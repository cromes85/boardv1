import React, { useState, useEffect } from 'react';
import './clownHead.css';

const ClownHead = () => {
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    setAnimation('swing 5s');
  }, []);

  return (
    <div>
      <img
        style={{ animation: animation }}
        src="./crane.jpg"
        alt="Clown Head"
      />
    </div>
  );
};

export default ClownHead;
