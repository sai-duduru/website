// const tabs = document.querySelector('.tabs');

// tabs.addEventListener('click', e => handleClick(e));

// function handleClick(e) {
//   const target = e.target;
//   const tabNum = target.dataset.tab;
//   const activeTab = document.querySelector('.tabs .active');
//   const activeContent = document.querySelector('.content .visible');
//   const currentContent = document.querySelector(`.content__section[data-tab='${tabNum}']`);

//   if (!tabNum) {
//     return;
//   }

//   activeTab.classList.remove('active');
//   target.classList.add('active');
//   activeContent.classList.remove('visible');
//   currentContent.classList.add('visible');
// }

// src/pages/tabs.js
import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleClick = (tabNum) => {
    setActiveTab(tabNum);
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={activeTab === 'tab1' ? 'tab active' : 'tab'}
          onClick={() => handleClick('tab1')}
        >
          Tab 1
        </button>
        <button
          className={activeTab === 'tab2' ? 'tab active' : 'tab'}
          onClick={() => handleClick('tab2')}
        >
          Tab 2
        </button>
        {/* Add more tabs as needed */}
      </div>
      <div className="content">
        <div className={activeTab === 'tab1' ? 'content__section visible' : 'content__section'}>
          {/* Content for Tab 1 */}
          <p>This is content for Tab 1</p>
        </div>
        <div className={activeTab === 'tab2' ? 'content__section visible' : 'content__section'}>
          {/* Content for Tab 2 */}
          <p>This is content for Tab 2</p>
        </div>
        {/* Add more content sections as needed */}
      </div>
    </div>
  );
};

export default Tabs;
