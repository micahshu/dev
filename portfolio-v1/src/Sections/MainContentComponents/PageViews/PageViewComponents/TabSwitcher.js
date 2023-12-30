import React, { useState } from 'react';
import './TabSwitcher.css'
import { useTheme } from '../../../../Context/ThemeContext';

const TabSwitcher = () => {
    const { isDarkMode } = useTheme();

  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={`tabSwitcher ${isDarkMode ? 'dark' : 'light'}`}>
      <div  className={`tabs ${isDarkMode ? 'dark' : 'light'}`}>
        <button
          className={` ${activeTab === 'tab1' ? 'active' : ''} ${
            isDarkMode ? 'dark' : 'light'}`}
          onClick={() => handleTabChange('tab1')}
        >
          About Me
        </button>
        <button
          className={` ${activeTab === 'tab2' ? 'active' : ''} ${
            isDarkMode ? 'dark' : 'light'
          }`}
          onClick={() => handleTabChange('tab2')}
        >
          About this Project
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'tab1' && (
          <div>
            <p className='scroll'>
            This is the content of Tab 1.This is the content of Tab 1.This is the content of Tab 1.This is the content of Tab 1.This is the content of Tab 1.This is the content of Tab 1.This is the contontent of Tab 1.This is the contontent of Tab 1.This is the contontent of Tab 1.This is the contontent of Tab 1.This is the contontent of Tab 1.This is the contontent of Tab 1.This is the contontent of Tab 1.This is the contontent of Tab 1.This is the contontent of Tab 1.This is the content of Tab 1.This is the content of Tab 1.
            
            </p>
          </div>
        )}

        {activeTab === 'tab2' && (
          <div>
            <p className='scroll'>This is the content of Tab 2.his is the content of Tab 2. his is the content s is the content of Tab 2.his is the content of Tab 2. his is the content s is the content of Tab 2.his is the content of Tab 2. his is the content s is the content of Tab 2.his is the content of Tab 2. his is the content s is the content of Tab 2.his is the content of Tab 2. his is the content s is the content of Tab 2.his is the content of Tab 2. his is the content s is the content of Tab 2.his is the content of Tab 2. his is the content s is the content of Tab 2.his is the content of Tab 2. his is the content s is the content of Tab 2.his is the content of Tab 2. his is the content of Tab 2. his is the content of Tab 2. his is the content of Tab 2. his is the content of Tab 2. his is the content of Tab 2.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSwitcher;