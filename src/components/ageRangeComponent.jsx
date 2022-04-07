import { Backbutton } from "./Button"
import React from 'react';

const AgeRange = ({ ageBracket, handleStepCountChangeIncrement, handleAgeRangeChange, handleStepCountChangeDecrement, ageRange }) => {
    return (
        <React.Fragment>
            {
                ageBracket === 'adult' ?
                    <div>
                        <h1 style={{ fontWeight: 600, color: '#808080' }}>
                            Adult Type is Selected
                        </h1>
                        <p style={{ color: '#D3D3D3', fontWeight: 400, fontSize: '1.3rem' }}>
                            Please Select Age Range
                        </p>
                        <div style={{ marginTop: '3rem' }}>
                            <select style={{ width: '100%' }} onChange={handleAgeRangeChange} value={ageRange}>
                                <option value=''>
                                    Select Age Range
                                </option>
                                <option value='26-u'>
                                    26-U
                                </option>
                                <option value='40'>
                                    40
                                </option>
                                <option value='50'>
                                    50
                                </option>
                                <option value='60'>
                                    60
                                </option>
                                <option value='70'>
                                    70
                                </option>
                            </select>

                        </div>
                        <div style={{ justifyContent: 'flex-end', marginTop: '3rem', display: 'flex', gap: '20px' }}>
                            <Backbutton label="Back" onClick={handleStepCountChangeDecrement} />
                            <Backbutton label="Next" disabled={ageRange == '' ? true : false} onClick={handleStepCountChangeIncrement} />
                        </div>
                    </div> :
                    <div>
                        <h1 style={{ fontWeight: 600, color: '#808080' }}>
                            Junior Type is Selected
                        </h1>
                        <p style={{ color: '#D3D3D3', fontWeight: 400, fontSize: '1.3rem' }}>
                            Please Select Age Range
                        </p>
                        <div style={{ marginTop: '3rem' }}>
                            <select style={{ width: '100%' }} onChange={handleAgeRangeChange} value={ageRange}>
                                <option value=''>
                                    Select Age Range
                                </option>
                                <option value='26-u'>
                                    13-U
                                </option>
                                <option value='40'>
                                    14-U
                                </option>
                                <option value='50'>
                                    15-U
                                </option>
                                <option value='60'>
                                    16-U
                                </option>
                                <option value='70'>
                                    17-U
                                </option>
                            </select>

                        </div>
                        <div style={{ justifyContent: 'flex-end', marginTop: '3rem', display: 'flex', gap: '20px' }}>
                            <Backbutton label="Back" onClick={handleStepCountChangeDecrement} />
                            <Backbutton label="Next" disabled={ageRange == '' ? true : false} onClick={handleStepCountChangeIncrement} />
                        </div>
                    </div>
            }
        </React.Fragment>
    )
}
export default AgeRange