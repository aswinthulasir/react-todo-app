import React, { useState, useEffect } from 'react';
import { getOptions } from '../../services/filter';

export default function Filter({ filter, changeFilter, filterText }) {
    const options = getOptions();

    
    if (!options || Object.keys(options).length === 0) {
        return <p>No filters available</p>;
    }

   
    const getClass = (key) => (key === filter ? 'selected' : '');

   
    const search = (text) => {
        if (typeof text === 'string') {
            return text.toLowerCase().includes(filterText.toLowerCase());
        }
        
        return false;
    };

    return (
        <ul className="filters list-unstyled clearfix">
            {Object.keys(options).map(key => (
                <li key={key}>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            changeFilter(key); 
                        }}
                        className={getClass(key)}
                    >
                        {options[key]}
                    </a>
                </li>
            ))}
        </ul>
    );
}
