import React from 'react';
import '../Assets/Styles/PlaceholderForHome.css';
import plannerLogo from '../Assets/Images/plannerLogo.png';

const PlannerPage = () => {
  return (
    <div className='plannerMainContainer'>
      <div className='sidebar'>
        <div className='logo'>
          <img src={plannerLogo} alt="Loop Box" />
        </div>
        <div className='team'>
          <span className='teamName'>KRUPS Team</span>
          <div className='teamStatus'>
            <span className='statusDot'></span>
            <span className='statusDot'></span>
            <span className='statusDot'></span>
            <span className='statusDot'></span>
            <span className='statusDot'></span>
            <span className='points'>+11</span>
          </div>
        </div>
        <div className='menu'>
          <span className='menuItem'>Get started</span>
          <span className='menuItem'>Activity details</span>
          <span className='menuItem'>Dashboard</span>
          <span className='menuItem'>Projects</span>
          <span className='menuItem'>Teams</span>
        </div>
        <div className='version'>
          <span>Version 1.0.3</span>
        </div>
      </div>
      <div className='mainContent'>
        <div className='plannerHeader'>
          <button className='libraryBtn'>Library</button>
          <button className='plannerBtn'>Condense planner</button>
          <button className='plannerBtn'>Enlarge planner</button>
        </div>
        <div className='planner'>
          <div className='plannerLine'>
            <span className='start'>START</span>
            <span className='addNew'>ADD NEW</span>
            <span className='end'>END</span>
          </div>
        </div>
        <div className='activityLegend'>
          <div className='legendItem'><span className='activityDone'></span> = ACTIVITY DONE</div>
          <div className='legendItem'><span className='research'></span> = RESEARCH</div>
          <div className='legendItem'><span className='ideation'></span> = IDEATION</div>
          <div className='legendItem'><span className='evaluation'></span> = EVALUATION</div>
        </div>
        <div className='activityStatus'>
          <span>0/0 Activities DONE</span>
          <span>0% of the project COMPLETE</span>
        </div>
      </div>
    </div>
  );
}

export default PlannerPage;
