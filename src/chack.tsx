import React from 'react';
import './chack.css';

type ChType={
    adda: ()=> void
    num:number
    incr: ()=>void
}
function Chec(props: ChType) {
    return (
        <div className="qw">
            <div className="num">{props.num}</div>

            <div className="one"><button onClick={()=>{props.adda()}}>inc</button>
                <button>diskr</button></div>

        </div>
    );
}

export default Chec;
