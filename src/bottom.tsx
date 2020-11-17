import React from 'react';
import s from "./bottom.module.css"

type BottomsType={
    onClick: ()=>void
    title: string
}

function Bottoms(props: BottomsType) {
    return (

            <div className={s.bottoms} onClick={props.onClick}>{props.title}</div>


    );
}

export default Bottoms;
