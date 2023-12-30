// ThemeToggle.js
import React from 'react';
import { useTheme } from '../Context/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
