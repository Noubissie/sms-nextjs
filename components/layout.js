import {useState,useRef,useEffect} from "react"
import VnavFull from "./navbar/vnavFull"
import Hnav from "./navbar/hnavbar"
import Button from "react-bootstrap/Button"
import BackgroundControler from "../components/settingsTabs/backgroundControlers"
import VnavRight from "./settingsTabs/vRightNav"
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';


let initialState = {
    displayImageContainer: "none"  
}
let Layout = (props)=>{
    let [state, setState] = useState(initialState)
    
    const [checked, setChecked] = React.useState(false);
    const handleNavChange = () => {
        setChecked((prev) => !prev);
      };

    let backgroundImageRef = useRef()
    let navrightRef = useRef()
    let onclickdisplayImageContainer = async (e)=>{
        if(state.displayImageContainer=="block"){
           setState(()=>({
                displayImageContainer:"none"
            }))
            localStorage.setItem("ImageContainer","none")
        }
        else{
            setState(()=>({
                displayImageContainer:"block"
            }))
             localStorage.setItem("ImageContainer","block")
        }
        
    }
    useEffect(()=>{
        setState((prevState)=>({
            displayImageContainer:localStorage.getItem("ImageContainer") ? localStorage.getItem("ImageContainer"): prevState.displayImageContainer
        }))
    },[])
    return(
        <div className="check" ref={backgroundImageRef} 
        // onScroll={(e)=>{
        //     if(navrightRef.current.style.display="inline"){
        //         navrightRef.current.style.display = "none"
        //     }
        //     else{
        //         navrightRef.current.style.display = "inline"
        //     }
            
        //     console.log(e.target.scrollLeft)}}
            >
            
            <div className="  text-light p-0  sticky t-0 w-100 ">
                <Hnav onclick={onclickdisplayImageContainer} toggleNav={handleNavChange}/>
            </div>
            <hr className="p-0 m-0"/>
            <div  className=" darkwhite nobackground ">
                    
                    <div className=" d-none d-lg-inline float-left  navwidth ">
                        
                        <Button style={{borderRadius:"40px",width:"200px"}} className=" pl-2 pr-2 pb-2 pt-2 m-2 ml-1 bg-light text-info    sticky t-0">hi</Button>
                        <div style={{height:"80vh", overflowX:"hidden",overflowY:"scroll"}} className="d-none d-lg-inline position-relative sticky t-0 float-left  ">
                            <VnavFull />
                        </div>
                        
                        <div style={{height:"20vh"}}>

                        </div>
                    </div>
                    <Slide direction="right" in={checked} mountOnEnter unmountOnExit >
                        <div ref={navrightRef} style={{height:"100vh", overflow:"scroll"}} className=" d-lg-none position-absolute sticky t-0 float-left    navwidth motion">
                            <VnavFull color="black" position="absolute" />
                            <div style={{height:"20vh"}}>

                            </div>
                        </div>
                    </Slide>
                    
                    <div style={{height:"100vh", overflow:"hidden",border:"1px solid grey "}} className="d-none d-xl-block  sticky t-0 float-right ">
                        <div style={{height:"100vh", overflow:"hidden",border:"1px solid grey "}} className="d-none d-md-block  sticky t-0 float-right ">
                            <VnavRight backgroundImageRef={backgroundImageRef} onclickdisplayImageContainer={onclickdisplayImageContainer}/>
                        </div>


                        <div style={{display:state.displayImageContainer,height:"92vh", overflow:"scroll",border:"1px solid grey "}} className=" sticky t-0 float-right bg-light  " >
                        <BackgroundControler backgroundImageRef={backgroundImageRef}/>
                        </div>
                    </div>
                    


                    <div>
                        <div style={{height:"100vh",overflow:"hidden"}}  className="">
                            <div  className=" ml-3 mr-3  p-0 ">
                                <button className="ml-2  noborder bg-light rounded">a</button>
                                <button className="ml-2  noborder bg-light rounded">b</button>
                                <button className="ml-2  noborder bg-light rounded">c</button>
                            </div>
                            <div style={{height:"100vh"}}  className="overflows">
                                {props.children}
                                <div style={{height:"20vh"}}>

                                </div>
                            </div>
                        </div>  
                    </div>
                    
                    
            </div>
            
            
        </div>
    )
}
export default Layout