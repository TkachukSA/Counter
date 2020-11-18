import React from 'react';
import s from "./bottomTest.module.css"

type BottomsType={
    onClick: ()=>void
    title: string
}

function BottomsTest(props: BottomsType) {
    return (
<div className={s.wid}>
            <div className={s.bottoms} onClick={props.onClick}>{props.title}</div>
</div>

    );
}

export default BottomsTest;
