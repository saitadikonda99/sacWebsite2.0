import React, { useState } from 'react';

const RandomMessageGenerator = () => {
  const [message, setMessage] = useState('');
  
  const handleClick = () => {
    const messages = ["hello", "welcome", "hi", "hola", "how are you"]; 

    const randomChoice = Math.floor(Math.random() * messages.length);

    const randomMessage = messages[randomChoice]; 
    setMessage(randomMessage);
  };

  return (
    <div className="RanMessageGen">
      <h1>Random Message Generator - 2100031817</h1>
      <p>{message}</p>

      <button onClick={handleClick}>Generate Random String</button>
    </div>
  );
}

export default RandomMessageGenerator;
