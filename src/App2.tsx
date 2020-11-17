import React, {useState} from 'react';
import s from'./App2.module.css';
import Chec from "./chack";
import Bottoms from "./bottom";
import Total from "./total";


function App2() {

    const [startNumber, setStartNumber] = useState<number>(0)
    const [maxNum, setMaxnum] = useState(3)
    if (startNumber > maxNum) {
        alert("error")
    }


    function maxNumber() {
        return setMaxnum(maxNum + 1)
    }

    function minNumber() {
        return setMaxnum(maxNum - 1)
    }


    function numPlusOne() {
        if (startNumber < maxNum) {
            return setStartNumber(startNumber + 1)
        }
    }

    function resetNumber() {
        return setStartNumber(0)
    }


    return (
        <div className={s.App2}>
            <div className={s.window}>
                <div className={s.total}><Total counter={startNumber}/></div>

                <div className={s.click}>
                    <div className={s.one}><Bottoms title="start" onClick={numPlusOne}/></div>
                        <div className={s.one}> <Bottoms title="stop" onClick={resetNumber}/></div>
                </div>
            </div>





{/*вторая часть */}



            <div className={s.window1}>
                <div className={s.total1}><Total counter={maxNum}/></div>

                <div className={s.click1}>
                    <div className={s.one1}><Bottoms onClick={maxNumber} title="max"/></div>
                    <div className={s.one1}> <Bottoms onClick={minNumber} title="min"/></div>
                </div>
            </div>
            <div>

            </div>







        </div>






    );
}

export default App2;
