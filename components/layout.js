import {useState} from "react"
import VnavFull from "./navbar/vnavFull"
import Hnav from "./navbar/hnavbar"

let initialState = {
    display:"none"
}
let Layout = (props)=>{
    let [state, setState] = useState(initialState)

    let onclick = (e)=>{
        if(state.display=="inline"){
            setState(()=>({
                display:"none"
            }))
        }
        else{
            setState(()=>({
                display:"inline"
            }))
        }
        
    }
    return(
        <div className="check" >
            <div className="  text-light   sticky t-0 w-100 ">
                <Hnav onclick={onclick} />
            </div>
            <hr/>
            <div  className="d-md-block darkwhite nobackground " >
                    
                    <div style={{height:"100vh", overflowX:"hidden",overflowY:"scroll"}} className="d-none d-md-inline position-relative sticky t-0 float-left    navwidth ">
                        <VnavFull/>
                        <div style={{height:"20vh"}}>

                        </div>
                    </div>
                    <div style={{height:"100vh", overflow:"scroll"}} className=" d-md-none position-absolute sticky t-0 float-left    navwidth ">
                        <VnavFull color="whitesmoke" position="absolute" />
                        <div style={{height:"20vh"}}>

                        </div>
                    </div>
                    <div>
                        <div style={{height:"100vh"}}  className="overflows  ">
                            {props.children}
                            <div style={{height:"20vh"}}>

                            </div>
                        </div>
                            
                    </div>
                    
            </div>
            
            
        </div>
    )
}
export default Layout