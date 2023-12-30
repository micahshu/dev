// ThemeToggle.js
import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className = 'toggle-switch'>
            <label>
                <input onChange={toggleTheme} type = 'checkbox' />
                <span className = 'slider'></span>
            </label>
            
        </div>
    
    
  );
};

export default ThemeToggle;
