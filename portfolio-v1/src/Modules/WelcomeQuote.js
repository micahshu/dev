import React, { useEffect, useState } from 'react';

const WelcomeQuote = () => {
  const welcomeQuote = [
    'hello there!',
    'hi :D',
    'welcome :)',
    'thanks for being here!',
    'nice to see you!',
    'greetings!',
    'great to have you!',
    'hello and welcome!',
    'hi there!',
    'thank you for joining!'
  ];

  const [selectedQuote, setSelectedQuote] = useState('');

  useEffect(() => {
    // Randomly select a quote on component mount
    const randomIndex = Math.floor(Math.random() * welcomeQuote.length);
    setSelectedQuote(welcomeQuote[randomIndex]);
  }, []); // Empty dependency array ensures it runs only on mount

  return (
    
      <li>{selectedQuote}</li>
    
  );
};

export default WelcomeQuote;
