import React, {ChangeEvent, useState} from 'react';
import s from'./App2.module.css';
import Chec from "./chack";
import Bottoms from "./bottom";
import Total from "./total";
import TotalInstruktor from "./totalInstruktor";


function App2() {

    const [startNumber, setStartNumber] = useState<number>(0)
    const [maxNum, setMaxnum] = useState(0)


    const changeNumber = (e: ChangeEvent<HTMLInputElement>)=> {
        const value = Number(e.currentTarget.value)
        setMaxnum(value)
    }
    const changeNumberStart = (e: ChangeEvent<HTMLInputElement>)=> {
        const value = Number(e.currentTarget.value)
        setStartNumber(value)
    }

    function maxNumber() {
        return setMaxnum(maxNum + 1)}
    function minNumber() {
        return setMaxnum(maxNum - 1)}
    function numPlusOne() {
        if (startNumber < maxNum) {
            return setStartNumber(startNumber + 1)}
    }
    function resetNumber() {
        return setStartNumber(0)
    }




    if (startNumber > maxNum) {
        alert("error")
    }




    return (
        <div className={s.App2}>
            <div className={s.window}>


                <div className={s.total}><TotalInstruktor counter={startNumber}/> tut norm</div>

                <div className={s.click}>
                    <div className={s.one}><Bottoms title="start" onClick={numPlusOne}/></div>
                        <div className={s.one}> <Bottoms title="stop" onClick={resetNumber}/></div>
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

                <div>
                    <Bottoms onClick={maxNumber} title="max"/>
                     <Bottoms onClick={minNumber} title="min"/>
                </div>
            </div>
            <div>

            </div>







        </div>






    );
}

export default App2;
