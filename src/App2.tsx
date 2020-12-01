import React, {ChangeEvent, useState} from 'react';
import s from './App2.module.css';
import Bottoms from "./bottom";
import Total from "./total";
import TotalInstruktor from "./totalInstruktor";


function App2() {

    const [startNumber, setStartNumber] = useState(0)
    const [maxNum, setMaxnum] = useState(0)

    const [btnStart, setBtnStart] = useState(false)
    const [btnRest, setbtnRest] = useState(false)
    const [saveBtn, setSaveBtn] = useState(false)


    const changeNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(+e.currentTarget.value)
        setMaxnum(value)

    }
    const changeNumberStart = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(+e.currentTarget.value)
        setStartNumber(value)

    }


    function numPlusOne() {
        if (startNumber < maxNum) {
             setStartNumber(startNumber + 1)
            setBtnStart(false)
            setbtnRest(false)

        }
    }


    function resetNumber() {
         setStartNumber(0)

    }

    function saveBotton(){
        setSaveBtn(false)
        setbtnRest(true)
        setBtnStart(false)
    }


    const error = (startNumber >= maxNum || startNumber<0) ? "error" : "";


    return (
        <div className={s.App2}>
            <div className={s.window}>
                <div className={s.total}><TotalInstruktor
                                                     error={error}
                                                     counter={startNumber}
                                                     maxNum={maxNum}
                /> tut norm
                </div>
                <div className={s.click}>
                    <div className={s.one}><Bottoms title="start"
                                                    btnStartFunction={btnStart}
                                                    onClick={numPlusOne}
                                                    disabledBtnStart={startNumber===maxNum? true: false}
                    /></div>



                    <div className={s.one}><Bottoms title="stop"
                                                    btnStartFunction={btnRest}
                                                    onClick={resetNumber}/></div>
                </div>
            </div>


            {/*вторая часть */}


            <div className={s.window1}>
                <Total counter={maxNum}
                       changeNumber={changeNumber}
                       maxNum={maxNum}
                       changeNumberStart={changeNumberStart}
                       startNumber={startNumber}
                />
                {error}
                <div>
                    <Bottoms title="Set"
                             onClick={saveBotton}
                             /*onClick={}*/
                    />

                </div>
            </div>
            <div>
            </div>


        </div>


    );
}

export default App2;
