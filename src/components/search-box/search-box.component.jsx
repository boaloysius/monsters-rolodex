import React from 'react';

import "./search-box.style.css";

export const SearchBox = ({placeholder, handleChange}) => (
    <div className="search-box">
        <input 
          className="search"
          type="search" 
          placeholder={placeholder} 
          onChange= {handleChange} 
        />
    </div>
)