import React, {ChangeEvent, useState} from 'react';
import s from "./total.module.css"

type TotalT = {

    maxNum: number
    minNum: number
    changeMaxValue:(maxValue: number)=>void
    changeMinValue:(minValue: number)=>void
    maxValueTitle: string
    startValueTitle: string

}

function Total(props: TotalT) {


    const changeNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const value = (+e.currentTarget.value)
        props.changeMaxValue(value)

    }
    const changeNumberStart = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        props.changeMinValue(value)

    }




    return (<div className={s.total1}>
        <div className={s.click1}>
            <div className={s.one1}> Max Value <input type="number"
                                                      step={1}
                                                      value={props.maxNum}
                                                      onChange={changeNumber}
            /></div>

            <div className={s.one1}> Start Value <input type="number"
                                                        step={1}
                                                        value={props.minNum}
                                                        onChange={changeNumberStart}
            /></div>




        </div>
    </div>);
}

export default Total;
