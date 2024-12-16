import React, { useState, useEffect } from 'react';
import { getOptions } from '../../services/filter';

export default function Filter({ filter, changeFilter, filterText }) {
    const options = getOptions();

    // If no options are available, display a message
    if (!options || Object.keys(options).length === 0) {
        return <p>No filters available</p>;
    }

    // Determine the selected filter's class
    const getClass = (key) => (key === filter ? 'selected' : '');

    // Search logic to filter based on text
    const search = (text) => {
        if (typeof text === 'string') {
            return text.toLowerCase().includes(filterText.toLowerCase());
        }
        // If text is not a string, return false
        return false;
    };

    return (
        <ul className="filters list-unstyled clearfix">
            {Object.keys(options).map(key => (
                <li key={key}>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); // Prevent default link behavior
                            changeFilter(key); // Change the selected filter
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
