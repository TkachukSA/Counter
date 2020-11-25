import React from 'react';
import s from "./bottom.module.css"

type BottomsType={
    onClick?: ()=>void
    title: string
    btnStartFunction?: boolean
}

function Bottoms(props: BottomsType) {
  //  const backgroundColor = props.btnStartFunction  ? s.bottomsRed : s.bottoms
    return (


            <button className={s.bottoms} disabled={props.btnStartFunction? true: false} onClick={props.onClick}>{props.title}</button>


    );
}

export default Bottoms;
