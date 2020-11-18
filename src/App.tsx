import React, {useState} from 'react';
import s from './App.module.css';
import "./App.module.css"
import Chec from "./chack";
import Bottoms from "./bottom";
import TotalTest from "./counterTest/totalTest";
import BottomsTest from "./counterTest/bottomTest";


function App() {

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
        <div className={s.App}>

           <TotalTest counter={startNumber}/>
           <BottomsTest title="start" onClick={numPlusOne}/>
           <BottomsTest title="stop" onClick={resetNumber}/>


          <TotalTest counter={maxNum}/>
          <BottomsTest onClick={maxNumber} title="max"/>
          <BottomsTest onClick={minNumber} title="min"/>
        </div>

)
}

export default App
