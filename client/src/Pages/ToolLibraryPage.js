import React, { useState } from 'react';
import FilterButtons from '../Components/LibraryComponents/FilterButtons';
import Cards from '../Components/LibraryComponents/CardsLibrary';
import Snaker from '../Components/LibraryComponents/SnakeLibrary';
import '../Assets/Styles/librarypage.css';

const ToolLibraryPage = () => {
    const [nodes, setNodes] = useState([]); // Store node data as an array of objects
    const [activeFilter, setActiveFilter] = useState('All'); // Added a state for filtering

    const handleUse = (node) => {
        setNodes([...nodes, node]);
    };

    // Example card data with categories for filtering
    const cardData = [
        { title: "Prestudies", description: "Basics", category: "RESEARCH", onUse: handleUse },
        { title: "Aftermath", description: "Advanced", category: "IDEATION", onUse: handleUse },
        { title: "Invention", description: "Sparking", category: "IDEATION", onUse: handleUse },
        { title: "Inspiration", description: "Ignite", category: "IDEATION", onUse: handleUse },
        { title: "Ideas", description: "Unleash", category: "IDEATION", onUse: handleUse },
        { title: "Storming", description: "Fast", category: "SOLUTION", onUse: handleUse },
        { title: "Creation", description: "Fears", category: "RESEARCH", onUse: handleUse },
        { title: "Innovation", description: "Forging", category: "RESEARCH", onUse: handleUse },
        { title: "Exploration", description: "Discover", category: "RESEARCH", onUse: handleUse },
        { title: "Imagination", description: "Create worlds", category: "RESEARCH", onUse: handleUse },
        { title: "Courage", description: "Fears", category: "SOLUTION", onUse: handleUse },
        { title: "Acceptance", description: "Embracing", category: "SOLUTION", onUse: handleUse },
        { title: "Transformation", description: "Overcome", category: "SOLUTION", onUse: handleUse }

    ];

    const filteredCards = cardData.filter(card => activeFilter === 'All' || card.category === activeFilter);

    return (
        <div className="tool-library-page">
            <FilterButtons setActiveFilter={setActiveFilter} />
            {filteredCards.map((card, index) => (
                <Cards key={index} title={card.title} description={card.description} onUse={card.onUse} />
            ))}
            <Snaker nodes={nodes} />
        </div>
    );
};

export default ToolLibraryPage;
