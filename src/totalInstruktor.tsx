import React, {ChangeEvent, useState} from 'react';
import s from"./totalInstruktor.module.css"

type TotalT={
    counter: number
    maxNum: number
    error: string
}

function TotalInstruktor(props: TotalT) {

    let totlnumbers= props.error? "error": props.counter
    let errorColor = props.counter == props.maxNum? s.red: s.yellow






    return (<div>



        <div className={errorColor}>{totlnumbers}</div>


    </div> );
}

export default TotalInstruktor;
