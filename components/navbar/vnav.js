import React, {useState} from 'react'
import VnavbarIcon from "./vnavbarIcon"
import VnavFull from "./vnavFull"
    let initialState = {
        display2:"none",
        display1:"block",
        
    }
    
let Vnavbar= (props)=>{
    let [displayState, setdisplayState] = useState(initialState)
    let onclick = ()=>{
        if (displayState.display1 == "block"){
            setdisplayState((previouState)=>({
                ...previouState,
                display2:"block",
                display1:"none",
                
            }))
        }
        else{
            setdisplayState((previouState)=>({
                ...previouState,
                display2:"none",
                display1:"block",
                
            }))
        }
    }

    return (
        <React.Fragment>
            <VnavFull display1 = {displayState.display1} onclick={onclick} />
            <VnavbarIcon display2={displayState.display2} onclick={onclick}/>
        </React.Fragment>
    )
}

export default Vnavbar