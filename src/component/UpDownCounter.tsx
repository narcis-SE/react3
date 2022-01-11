import React, { useState }from "react";
import './UpDownCounter.css'
let x = 0;
let y = 0;
let z = 0;

function UpDownCounter(){
    
    const [xCounter, setX] = useState<number>(0)
    const [yCounter, setY] = useState<number>(0)
    const [zCounter, setZ] = useState<number>(0)
    return(
        <div className="UpDownCounter ">
            <div className="button1">
            <button onClick={() => setX(x++)}> Up</button>
            <p>{xCounter}</p>
            <button onClick={() => setX(x--)}> Down</button>
            </div>
            <div className="button2">
            <button onClick={() => setY(y++)}> Up</button>
            <p>{yCounter}</p>
            <button onClick={() => setY(y--)}> Down</button>
            </div>
            <div className="button3">
            <button onClick={() => setZ(z++)}> Up</button>
            <p>{zCounter}</p>
            <button onClick={() => setZ(z--)}> Down</button>
            </div>

        </div>
    )
}

export default UpDownCounter