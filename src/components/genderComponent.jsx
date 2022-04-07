import { Backbutton } from "./Button"

const Gender = ({ ageBracket, handleStepCountChangeIncrement, gender, handleGenderChange, stepCount, handleStepCountChangeDecrement }) => {

    return (
        ageBracket === 'adult' ?
            <div>
                <h1 style={{ fontWeight: 600, color: '#808080' }}>
                    Adult Type is Selected
                </h1>
                <p style={{ color: '#D3D3D3', fontWeight: 400, fontSize: '1.3rem' }}>
                    Please Select Gender
                </p>
                <div style={{ marginTop: '3rem' }}>
                    <select style={{ width: '100%' }} onChange={handleGenderChange} value={gender}>
                        <option value=''>
                            Select Gender
                        </option>
                        <option value='man'>
                            Man
                        </option>
                        <option value='#'>Test</option>

                        <option value='women'>
                            Women
                        </option>
                        <option value='coed'>
                            Coed
                        </option>
                    </select>

                </div>
                <div style={{ justifyContent: 'flex-end', marginTop: '3rem', display: 'flex', gap: '20px' }}>
                    <Backbutton label="Back" disabled={stepCount === 1 ? true : false} onClick={handleStepCountChangeDecrement} />
                    <Backbutton label="Next" disabled={gender == '' ? true : false} onClick={handleStepCountChangeIncrement} />
                </div>
            </div> :
            <div>
                <h1 style={{ fontWeight: 600, color: '#808080' }}>
                    Junior Type is Selected
                </h1>
                <p style={{ color: '#D3D3D3', fontWeight: 400, fontSize: '1.3rem' }}>
                    Please Select Gender
                </p>
                <div style={{ marginTop: '3rem' }}>
                    <select style={{ width: '100%' }} onChange={handleGenderChange}>
                        <option value=''>
                            Select Gender
                        </option>
                        <option value='man'>
                            Man
                        </option>
                        <option value='women'>
                            Women
                        </option>
                        <option value='coed'>
                            Coed
                        </option>
                    </select>

                </div>
                <div style={{ justifyContent: 'flex-end', marginTop: '3rem', display: 'flex', gap: '20px' }}>
                    <Backbutton label="Back" disabled={stepCount === 1 ? true : false} onClick={handleStepCountChangeDecrement} />
                    <Backbutton label="Next" disabled={gender == '' ? true : false} onClick={handleStepCountChangeIncrement} />
                </div>
            </div>

    )
}
export default Gender