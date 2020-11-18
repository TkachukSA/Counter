import React from 'react';

import s from "./totalTest.module.css"

type TotalT={
    counter: number
}

function TotalTest(props: TotalT) {

    let totlnumbers= props.counter

    return (<div className={s.window}>

        <div className={s.total}>{totlnumbers}</div>
<div className={s.click}/>

    </div>  );
}

export default TotalTest;
