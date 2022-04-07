import React from "react"
import { Backbutton } from "./Button"

const Question = ({ setStepCount, stepCount, handleStepCountChangeIncrement, handleAgeBracketChange, ageBracket }) => {
    return (
        <React.Fragment>
            <h1 style={{ fontWeight: 600, color: '#808080' }}>
                What type of age bracket is needed ?
            </h1>
            <p style={{ color: '#D3D3D3', fontWeight: 400, fontSize: '1.3rem' }}>
                Make a selection based on the desired age group
            </p>
            <div style={{ marginTop: '3rem' }}>
                <select style={{ width: '100%' }} onChange={handleAgeBracketChange} value={ageBracket}>
                    <option value=''>
                        Select Age Bracket
                    </option>
                    <option value='adult'>
                        Adult
                    </option>
                    <option value='junior'>
                        Junior
                    </option>
                </select>

            </div>
            <div style={{ justifyContent: 'flex-end', marginTop: '3rem', display: 'flex', gap: '20px' }}>
                <Backbutton label="Back" disabled />
                <Backbutton label="Next" disabled={ageBracket == '' ? true : false} onClick={handleStepCountChangeIncrement} />
            </div>
        </React.Fragment>
    )
}
export default Question