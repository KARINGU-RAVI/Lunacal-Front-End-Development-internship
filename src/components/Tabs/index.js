import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const renderContent = () => {
    switch (activeTab) {
      case 'About Me':
        return (
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now. I was born and raised
            in Albany, NY and have been living in Santa Carla for the past 10 years.
          </p>
        );
      case 'Experiences':
        return <p>Experiences content goes here...</p>;
      case 'Recommended':
        return <p>Recommended content goes here...</p>;
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {['About Me', 'Experiences', 'Recommended'].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
