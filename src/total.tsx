import React, {ChangeEvent, useState} from 'react';
import s from "./total.module.css"

type TotalT = {
    counter: number
    maxNum: number
    changeNumber: (e: ChangeEvent<HTMLInputElement>) => void
    startNumber: number
    changeNumberStart: (e: ChangeEvent<HTMLInputElement>) => void
}

function Total(props: TotalT) {

    let totlnumbers = props.counter


    return (<div className={s.total1}>
        <div className={s.click1}>
            <div className={s.one1}> Max Value <input type="number"
                                                      step={1}
                                                      value={props.maxNum}
                                                      onChange={props.changeNumber}
            /></div>

            <div className={s.one1}> Start Value <input type="number"
                                                        step={1}
                                                        value={props.startNumber}
                                                        onChange={props.changeNumberStart}
            /></div>


            <div>{totlnumbers}</div>


        </div>
    </div>);
}

export default Total;
