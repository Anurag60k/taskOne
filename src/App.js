import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AgeRange from "./components/ageRangeComponent";
import Gender from "./components/genderComponent";
import Question from "./components/questionComponent";
import Skills from "./components/skills";

function App() {
  const [stepCount, setStepCount] = useState(1)
  const [ageBracket, setAgeBracket] = useState('')
  const [gender, setGender] = useState('')
  const [ageRange, setAgeRange] = useState('')
  const [isSubmitAllowed, setIsSubmitAllowed] = useState(true)
  const skillsArray = [
    {
      id: 1,
      skill: 'A',
      status: false
    },
    {
      id: 2,
      skill: 'AA',
      status: false
    },
    {
      id: 3,
      skill: 'AAA',
      status: false
    },
    {
      id: 4,
      skill: 'Novice',
      status: false
    },
    {
      id: 5,
      skill: 'Masters',
      status: false
    }
  ]
  const [skills, setSkills] = useState(skillsArray)
  const handleStepCountChangeIncrement = () => {
    setStepCount(stepCount + 1)
  }
  const handleStepCountChangeDecrement = () => {
    setStepCount(stepCount - 1)
  }
  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }
  const handleAgeBracketChange = (e) => {

    setAgeBracket(e.target.value)
  }
  const handleAgeRangeChange = (e) => {

    setAgeRange(e.target.value)
  }
  const onSkillSelectHandler = (skill) => {
    if (skill.status === false) {

      const updatedSkills = skills.map((ele) => {
        if (ele.id === skill.id) {
          skill.status = true
          setIsSubmitAllowed(false)
          return skill
        }
        return ele

      })

      setSkills(updatedSkills)
    } else {

      const updatedSkills = skills.map((ele) => {
        if (ele.id === skill.id) {
          skill.status = false
          return skill
        }
        return ele

      })

      setSkills(updatedSkills)
    }


  }
  const onTeamSubmit = () => {
    alert('Team Will be Saved')
    const teamObject = {
      ageBracket,
      gender,
      ageRange,
      skills
    }
    let teams = []
    teams = localStorage.getItem('teams') ?
      JSON.parse(localStorage.getItem('teams'))
      : []

    teams.push(teamObject)

    localStorage.setItem('teams', JSON.stringify(teams))
    setSkills(skillsArray)
    setAgeBracket('')
    setGender('')
    setAgeRange('')
    setStepCount(1)
  }
  useEffect(() => {
    return (() => {

    })
  }, [])
  function returnComponent() {

    switch (stepCount) {
      case 1:
        return (

          <Question {...{ stepCount, handleAgeBracketChange, setStepCount, ageBracket, gender, setGender, handleStepCountChangeIncrement, handleStepCountChangeDecrement }} />


        )
      case 2:
        return (
          ageBracket === 'adult' ?
            <Gender {...{ stepCount, handleAgeBracketChange, setStepCount, ageBracket, gender, setGender, handleStepCountChangeIncrement, handleGenderChange, handleStepCountChangeDecrement }} />
            :
            <AgeRange {...{ stepCount, handleAgeRangeChange, setStepCount, handleStepCountChangeIncrement, ageRange, setAgeRange, handleStepCountChangeDecrement, ageBracket }} />

        )
      case 3:
        return (
          ageBracket === 'adult' ?
            <AgeRange {...{ stepCount, handleAgeRangeChange, setStepCount, handleStepCountChangeIncrement, ageRange, setAgeRange, handleStepCountChangeDecrement, ageBracket }} />
            :
            <Skills {...{ stepCount, handleAgeRangeChange, setStepCount, handleStepCountChangeIncrement, ageRange, setAgeRange, handleStepCountChangeDecrement, ageBracket, onSkillSelectHandler, skills, onTeamSubmit, isSubmitAllowed }} />

        )
      case 4:
        return (
          <Skills {...{ stepCount, handleAgeRangeChange, setStepCount, handleStepCountChangeIncrement, ageRange, setAgeRange, handleStepCountChangeDecrement, ageBracket, onSkillSelectHandler, skills, onTeamSubmit, isSubmitAllowed }} />

        )

      default:
    }
  }
  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5%', padding: '20px' }}>
        <div>
          <div style={{ display: 'flex', justifySelf: 'flex-start' }}>

            <h4>
              {
                ageBracket === 'adult' ? `${stepCount}/4` : `${stepCount}/3`
              }

            </h4>
          </div>

          {
            returnComponent()
          }
        </div>
      </div>
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', }}>
        <div style={{ minWidth: '50%' }}>


          <h3 style={{ color: 'darkblue' }}> Selected Teams:</h3>

          {
            localStorage.getItem('teams') && JSON.parse(localStorage.getItem('teams')).length ?
              JSON.parse(localStorage.getItem('teams')).map((team) => (
                <div>
                  <div>
                    <span style={{ fontWeight: 500 }}>Age Bracket:</span>  {team?.ageBracket}
                  </div>
                  <div>
                    <span style={{ fontWeight: 500 }}> Age Range: </span>
                    {team?.ageRange}
                  </div>
                  <div>
                    {team.gender != '' ?
                      <div>
                        <span style={{ fontWeight: 500 }}>Gender: </span>
                        <span>{team.gender} </span>
                      </div>
                      :
                      ''}
                  </div>
                  <div>
                    Skill(s): {team.skills.map(skill => (<span style={{ marginRight: '5px' }}>
                      {skill.status ? skill.skill : null}</span>))}
                  </div>
                  <hr />
                </div>
              ))
              :
              <span> ----N/A---- </span>
          }
        </div>
      </div>

    </React.Fragment>
  );
}

export default App;
