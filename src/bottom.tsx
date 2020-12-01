import React from 'react';
import s from "./bottom.module.css"

type BottomsType={
    onClick?: ()=>void
    title: string
    btnStartFunction?: boolean
    disabledBtnStart?: boolean

}

function Bottoms(props: BottomsType) {

    return (


            <button className={s.bottoms}
                    disabled={props.disabledBtnStart? true: false}
                    onClick={props.onClick}
            >
                {props.title}
            </button>


    );
}

export default Bottoms;
