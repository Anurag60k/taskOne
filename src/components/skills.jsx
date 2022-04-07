import React from 'react'
import { Backbutton } from './Button'
import '../components/button.css'
const Skills = ({ handleStepCountChangeDecrement, onSkillSelectHandler, skills, onTeamSubmit, ageBracket, isSubmitAllowed }) => {

    return (
        <React.Fragment>


            <div>
                <h1 style={{ fontWeight: 600, color: '#808080' }}>
                    {ageBracket === 'adult' ? "Adult" : 'Junior'} Type is Selected
                </h1>
                <p style={{ color: '#D3D3D3', fontWeight: 400, fontSize: '1.3rem' }}>
                    Please Select Appropriate Skills, You can Select Multiple Skills
                </p>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>

                    {
                        skills.map((skill) => (
                            <div className='button-skill' key={skill.id} onClick={() => onSkillSelectHandler(skill)} style={{ backgroundColor: skill.status ? 'teal' : 'transparent', color: skill.status ? 'white' : 'black' }}>
                                {skill.skill}
                            </div>
                        ))
                    }
                </div>
                <div style={{ justifyContent: 'flex-end', marginTop: '3rem', display: 'flex', gap: '20px' }}>
                    <Backbutton label="Back" onClick={handleStepCountChangeDecrement} />
                    <Backbutton label="Submit" onClick={onTeamSubmit} disabled={isSubmitAllowed} />
                </div>
            </div>

        </React.Fragment>
    )
}
export default Skills