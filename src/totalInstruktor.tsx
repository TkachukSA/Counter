import React, {ChangeEvent, useState} from 'react';
import s from"./totalInstruktor.module.css"

type TotalT={
    counter: number
    maxNum: number
    minNum: number
    error: string
}

function TotalInstruktor(props: TotalT) {

   /* let totlnumbers= props.error? "error": props.counter
    let errorColor = props.counter >= props.maxNum || props.counter < 0 || props.maxNum <0? s.red: s.yellow
*/

    return (<div>
{/*   //     //<div className={errorColor}>{totlnumbers}</div>*/}

        {props.error ? <h3 className={props.error === 'Incorrect Value!' ? s.red : s.yellow}>{props.error}</h3> :
            <h3 className={props.counter === props.maxNum ? s.red : s.yellow}>{props.counter}</h3>}

    </div> );
}

export default TotalInstruktor;
