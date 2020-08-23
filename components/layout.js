import {useState,useRef} from "react"
import Navbar from './navbar/navbar'
// import {Container,Row,Col} from 'react-bootstrap'
import Hnav from "./navbar/hnavbar"
// import VnavFull from './navbar/vnavFull'
// import VnavbarIcon from './navbar/vnavbarIcon'
// import dynamic from "next/dynamic"
let initialState = {
    display:"none"
}
// let BrowserSiteOutput = dynamic(
//     ()=>import("./browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
//         {ssr:false})
let Layout = (props)=>{
    let [state, setState] = useState(initialState)
    let disappearRef  = useRef()

    // useEffect(()=>{
    //     disappearRef.current.
    // })
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
        <div className="overflow-visualHeight">
            <div className="  text-light   sticky t-0 w-100 ">
                <Hnav onclick={onclick} />
            </div>
            <div  className=" d-none d-md-block darkwhite " >
                    <div style={{height:"90vh", overflow:"scroll"}} className="  sticky t-0 float-left  bg-info  width300">
                        <Navbar/>
                    </div>
                    <div>
                        <div style={{height:"90vh"}}  className="overflow-visualHeight  ">
                            {/* <div className="mt-3 mb-4 ml-3">
                                <h3 >Admin Dashboard</h3>
                                <BrowserSiteOutput />
                            </div> */}
                            {props.children}
                        </div>
                    </div>
            </div>
           
        </div>
    )
}
export default Layout