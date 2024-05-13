import React, { useState } from 'react';
import '../../Assets/Styles/filterbuttons.css';
import SearchIcon from '../../Assets/Icons/search_icon.svg';

const FilterButtons = ({ setActiveFilter }) => {
    const [activeFilter, setActiveLocalFilter] = useState('All'); // Local active filter state

    const handleFilterClick = (filter) => {
        setActiveLocalFilter(filter); // Set local active filter state
        setActiveFilter(filter);      // Propagate the change upwards to the parent component
    };

    return (
        <div className="filter-buttons">
            <button
                className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
                onClick={() => handleFilterClick('All')}
            >
                All
            </button>
            <button
                className={`filter-btn ${activeFilter === 'RESEARCH' ? 'active' : ''}`}
                onClick={() => handleFilterClick('RESEARCH')}
            >
                RESEARCH
            </button>
            <button
                className={`filter-btn ${activeFilter === 'IDEATION' ? 'active' : ''}`}
                onClick={() => handleFilterClick('IDEATION')}
            >
                IDEATION
            </button>
            <button
                className={`filter-btn ${activeFilter === 'SOLUTION' ? 'active' : ''}`}
                onClick={() => handleFilterClick('SOLUTION')}
            >
                SOLUTION
            </button>
            <div className="search-btn">
                <button className="search-btn2">
                    <img src={SearchIcon} alt="Search" />
                </button>
            </div>
        </div>
    );
};

export default FilterButtons;
