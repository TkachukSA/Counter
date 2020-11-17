import React from 'react';
import './chack.css';

type TotalT={
    counter: number
}

function Total(props: TotalT) {

    let totlnumbers= props.counter

    return (

        <div>{totlnumbers}</div>

     
    );
}

export default Total;
