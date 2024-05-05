import React from 'react'
import '../Assets/Styles/ChooseTeam.css'
import newTeam from '../Assets/Icons/newTeam.svg'

const ChooseTeam = () => {
  return (
    <div>
        <div className='mainContainer'>
            <div className='teamWithName'>
                <img src={newTeam} alt=""/>
                <span className='addNewTeamText'>Add new</span>
            </div>
        </div>
        <div className='textContainer'>
            <span className='chooseTeamText'>Choose Team</span>
            <span className='questionText'>Which team do you want to work with today</span>
        </div>
    </div>
  )
}

export default ChooseTeam