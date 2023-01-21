import React, { useState, useEffect } from 'react';

const ClownHead = () => {
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    setAnimation('swing 5s');
  }, []);

  return (
    <div>
      <img
        style={{ animation: animation }}
        className="w-32 rounded-full"
        src="./crane.jpg"
        alt="Clown Head"
      />
    </div>
  );
};

export default ClownHead;
