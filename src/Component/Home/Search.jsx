import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './Banner.css'; // assuming you have a CSS file for your component

export default function Banner() {
  return (
    <div className="banner-container">
      <div className='main-input'>
        <div className="search-container">
          <SearchOutlined className="search-icon" />
          <input type="text" className="search-inputs" placeholder="Search..." />
        </div>
      </div>

      <div className="secondary-inputs">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Mechanical Project" />
          <SearchOutlined className="search-icon" />
        </div>

        <div className="search-container">
          <input type="text" className="search-input" placeholder="Electronic Project" />
          <SearchOutlined className="search-icon" />
        </div>

        <div className="search-container">
          <input type="text" className="search-input" placeholder="Software Project" />
          <SearchOutlined className="search-icon" />
        </div>

        <div className="add-query">
          <button className="query-button">Add Your Queries</button>
        </div>
      </div>

      <div className="title-section">
        <h1>MERAKI PROJECT</h1>
        <p>DIY / TECHNOLOGY / LEARNING</p>
      </div>
    </div>
  );
}
