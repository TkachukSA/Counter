import React, {ChangeEvent, useState} from 'react';
import s from './App2.module.css';
import Bottoms from "./bottom";
import Total from "./total";
import TotalInstruktor from "./totalInstruktor";


function App2() {

    const [maxNum, setMaxnum] = useState(0)
    const [minNum, setMinNum] = useState(0)
    const [counter, setCounter] = useState(0)
    let [incDisabled, setIncDisabled] = useState<boolean>(true)
    let [resetDisabled, setResetDisabled] = useState<boolean>(true)
    let [error, setError] = useState<string>('')
    let [settingsButtonDisabled, setSettingsButtonDisabled] = useState<boolean>(true)




    const changeMaxValue = (maxValue: number) => {

        if (maxValue == minNum || maxValue < 0 || minNum < 0) {
            setError('Incorrect Value')
            setSettingsButtonDisabled(true)
        } else {
            setSettingsButtonDisabled(false)
            setError('Enter values and press SET')
        }
        setMaxnum(maxValue)
    }


    const changeMinValue = (minValue: number) => {
        if (minValue < 0 ) {
          setError('Incorrect Value')
            setSettingsButtonDisabled(true)
            setIncDisabled(true)
            setResetDisabled(true)

        } else {
            setSettingsButtonDisabled(false)
            setError("Enter values and press SET")
        }
        setMinNum(minValue)
    }

    const set = () => {
        setError('')
        setSettingsButtonDisabled(true)
        setCounter(minNum)
        setIncDisabled(false)
        setResetDisabled(false)

        // Setting data into local storage
       // localStorage.setItem('minValue', minValue.toString())
        //localStorage.setItem('maxValue', maxValue.toString())
    }



    const increment = () => {
       // current = counter + 1
       // localStorage.setItem('current', current.toString())
        if (counter< maxNum) {
            setSettingsButtonDisabled(true)
            setCounter(counter + 1)
        }
        if (counter === maxNum) {
            setIncDisabled(true)
            setResetDisabled(false)
        }
    }

    const reset = () => {
        setCounter(minNum)
        setIncDisabled(false)
    }




    return (
        <div className={s.App2}>
            <div className={s.window}>
                <div className={s.total}><TotalInstruktor

                                                     counter={counter}
                                                     maxNum={maxNum}
                                                     minNum={minNum}
                                                     error={error}
                />
                </div>
                <div className={s.click}>
                    <div className={s.one}><Bottoms title="inc"
                                                    disabled={incDisabled}
                                                    execFunc={increment}

                    /></div>



                    <div className={s.one}><Bottoms title="reset"
                                                    disabled={resetDisabled}
                                                    execFunc={reset}
                    />

                    </div>
                </div>
            </div>


            {/*вторая часть */}


            <div className={s.window1}>
                <Total
                       maxValueTitle={'max-value'}
                       startValueTitle={'start-value'}
                       minNum={minNum}
                       maxNum={maxNum}
                       changeMaxValue={changeMaxValue}
                       changeMinValue={changeMinValue}
                />
                {error}
                <div>
                    <Bottoms title="Set"
                             disabled={settingsButtonDisabled}
                             execFunc={set}
                    />

                </div>
            </div>
            <div>
            </div>


        </div>


    );
}

export default App2;
