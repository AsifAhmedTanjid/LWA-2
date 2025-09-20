import { useState } from "react"

export default function Batsman(){
    const [runs,setRuns] =useState(0);

    const handleSingle=()=>{
        const updatedRuns =runs+1;
        setRuns(updatedRuns)
    }
    const handleSix=()=>{
        const updatedRuns =runs+6;
        setRuns(updatedRuns)
    }
    return(
        <div>
        <h3>Player: Bangla Batsman</h3>
        {
            runs>50 && <p>Congratulations on Half Century!!!</p>
        }
        <h1>Score: {runs}</h1>
        <button onClick={handleSingle}>Singles</button>
        <button>Four</button>
        <button onClick={handleSix}>Six</button>
        </div>
    )
}