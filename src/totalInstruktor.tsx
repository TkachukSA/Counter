import React, {ChangeEvent, useState} from 'react';
import './chack.css';

type TotalT={
    counter: number

}

function TotalInstruktor(props: TotalT) {

    let totlnumbers= props.counter





    return (<div>


       {/* <input type="number" value={3} onChange={}></input>*/}

        <div>{totlnumbers}</div>


    </div> );
}

export default TotalInstruktor;
