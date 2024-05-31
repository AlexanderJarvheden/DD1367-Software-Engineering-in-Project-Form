import React, { useState } from 'react';
import '../Assets/Styles/ChooseTeam.css';
import newTeam from '../Assets/Icons/newTeam.svg';
import Picture1 from '../Assets/Icons/teamspic1.png';
import Picture2 from '../Assets/Icons/teamspic2.png';
import Picture3 from '../Assets/Icons/teamspic3.png';
import Picture4 from '../Assets/Icons/teamspic4.png';
import addTeam from '../Assets/Icons/plussi.png';
import Buttons from './DashboardPage.js'

const ChooseTeam = () => {
  const initialTeams = [
    { name: 'Krups', img: Picture4 },
    { name: 'OBH Nordica', img: Picture1 },
    { name: 'Tefal', img: Picture2 },
    { name: 'Delta', img: Picture3 },
    { name: 'Add new', img: newTeam, isAddNew: true },
  ];

  const additionalPictures = [Picture1, Picture2, Picture3, Picture4];

  const [teams, setTeams] = useState(initialTeams);
  const [showInputBox, setShowInputBox] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');

  const handleAddNewTeamClick = () => {
    setShowInputBox(true);
  };

  const handleInputChange = (e) => {
    setNewTeamName(e.target.value);
  };

  const handleAddTeam = () => {
    if (newTeamName.trim() !== '') {
      const nextImg = additionalPictures[teams.length % additionalPictures.length];
      setTeams([...teams, { name: newTeamName, img: nextImg }]);
      setNewTeamName('');
      setShowInputBox(false);
    }
  };

  return (
    <div>
      <Buttons />
      <div className='textContainer'>
        <span className='chooseTeamText'>Choose Team</span>
        <span className='questionText'>Which team do you want to work with today</span>
      </div>
      <div className='mainContainer'>
        {teams.map((team, index) => (
          <div className='teamWithName' key={index}>
            <div className='teamImage' style={{ backgroundImage: `url(${team.img})` }}>
              {team.isAddNew && (
                <div className="addIconContainer" onClick={handleAddNewTeamClick}>
                  <img src={addTeam} alt="Add new team" className='addIcon' />
                </div>
              )}
            </div>
            <span className='addNewTeamText'>{team.name}</span>
          </div>
        ))}
      </div>
      {showInputBox && (
        <div className='inputContainer'>
          <input
            type='text'
            value={newTeamName}
            onChange={handleInputChange}
            placeholder='Enter team name'
            className='teamNameInput'
          />
          <button onClick={handleAddTeam} className='addTeamButton'>Add Team</button>
        </div>
      )}
    </div>
  );
};

export default ChooseTeam;
