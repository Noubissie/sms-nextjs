import {useState, useRef,useEffect} from "react"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
// import {Input,Select} from "antd"


let initialState = {
    brightness:100,
    contrast:100,
    saturation:150,
}

let BackgroundControler = ({backgroundImageRef})=>{
    
    let [state, setState] = useState(initialState)
    let brightnessControlRef = useRef()
    let contrastControlRef = useRef() 
    let saturationControlRef = useRef()

    let onchange = (e)=>{
        // localStorage.removeItem("brightness")
        // localStorage.removeItem("contrast")
        // localStorage.removeItem("saturation")
        setState((prevstate)=>({
            ...prevstate,
            brightness: brightnessControlRef.current.value,
            contrast: contrastControlRef.current.value,
            saturation: saturationControlRef.current.value
        }))

        localStorage.setItem("brightness",brightnessControlRef.current.value)
        localStorage.setItem("contrast",contrastControlRef.current.value)
        localStorage.setItem("saturation",saturationControlRef.current.value)

        console.log("brightnessValue::",state.brightness)
        console.log("contrastValue::",state.contrast)
        console.log("saturationValue::",state.saturation)
        document.body.style.filter = `contrast(${state.contrast}%) saturate(${state.saturation}%)  brightness(${state.brightness}%)`
    }

    useEffect(()=>{
        setState((prevstate)=>({
            ...prevstate,
            brightness: localStorage.getItem("brightness") ?  localStorage.getItem("brightness") : prevstate.brightness,
            contrast: localStorage.getItem("contrast") ?  localStorage.getItem("contrast") : prevstate.contrast,
            saturation: localStorage.getItem("saturation") ?  localStorage.getItem("saturation") : prevstate.saturation,
        }))

        backgroundImageRef.current.style.backgroundImage = localStorage.getItem("backgroundImage") || "url('/2.jpeg')"
    },[])

    return(
        <React.Fragment>
            {/* <Container className="bg-light border rounded"  fluid={true}> */}
                <Card className="bg-light border rounded w-100 m-0 p-0">
                    <Card.Header>
                        <Card.Title>
                            Setting
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        
                        <div id="themes" className="m-0 p-0 w-100">
                            
                            <hr className="m-0 p-0 w-100"/>
                                <div>THEMES</div>
                            <hr className="m-0 p-0 w-100"/>
                            <Row>
                                <button className="m-1 p-0 border-info" onClick={()=>{
                                    backgroundImageRef.current.style.backgroundImage = "url('/1.jpeg')"
                                    localStorage.setItem("backgroundImage","url('/1.jpeg')")
                                }}>
                                    <Card md="3" style={{ width: '3rem' }} className="" >
                                        <Card.Img   src="/1.jpeg"  className="m-0 h-100"/>
                                    </Card>
                                </button>
                                
                            
                                <button className="m-1 p-0 border-info" onClick={()=>{
                                    backgroundImageRef.current.style.backgroundImage = "url('/2.jpeg')"
                                    localStorage.setItem("backgroundImage","url('/2.jpeg')")
                                }}>
                                    <Card md="3" style={{ width: '3rem' }} className="h-100 m-0" >
                                        <Card.Img   src="/2.jpeg"  className="m-0 h-100"/>
                                    </Card>
                                </button>
                                
                            
                                <button className="m-1 p-0 border-info" onClick={()=>{
                                    backgroundImageRef.current.style.backgroundImage = "url('/3.jpeg')"
                                    localStorage.setItem("backgroundImage","url('/3.jpeg')")
                                }}>
                                    <Card md="3" style={{ width: '3rem' }} className="" >
                                        <Card.Img   src="/3.jpeg"  className="m-0 h-100"/>
                                    </Card>
                                </button>
                                
                            
                                <button className="m-1 p-0 border-info" onClick={()=>{
                                    backgroundImageRef.current.style.backgroundImage = "url('/4.jpeg')"
                                    localStorage.setItem("backgroundImage","url('/4.jpeg')")
                                }}>
                                    <Card md="3" style={{ width: '3rem' }} className="" >
                                        <Card.Img   src="/4.jpeg"  className="m-0 h-100"/>
                                    </Card>
                                </button>
                            
                            </Row>
                            <Row>
                                <button className="m-1 p-0 border-info" onClick={()=>{
                                        backgroundImageRef.current.style.backgroundImage = "url('/5.jpeg')"
                                        localStorage.setItem("backgroundImage","url('/5.jpeg')")
                                    }}>
                                        <Card md="3" style={{ width: '3rem' }} className="" >
                                            <Card.Img   src="/5.jpeg"  className="m-0 h-100"/>
                                        </Card>
                                </button>
                                
                                <button className="m-1 p-0 border-info" onClick={()=>{
                                    backgroundImageRef.current.style.backgroundImage = "url('/6.jpeg')"
                                    localStorage.setItem("backgroundImage","url('/6.jpeg')")
                                }}>
                                    <Card md="3" style={{ width: '3rem' }} className="" >
                                        <Card.Img   src="/6.jpeg"  className="m-0 h-100"/>
                                    </Card>
                                </button>
                            
                                
                                <button className="m-1 p-0 border-info" onClick={()=>{
                                    backgroundImageRef.current.style.backgroundImage = "url('/7.jpeg')"
                                    localStorage.setItem("backgroundImage","url('/7.jpeg')")
                                }}>
                                    <Card md="3" style={{ width: '3rem' }} className="" >
                                        <Card.Img   src="/7.jpeg"  className="m-0 h-100"/>
                                    </Card>
                                </button>
                            
                        
                                <button className="m-1 p-0 border-info" onClick={()=>{
                                    backgroundImageRef.current.style.backgroundImage = "url('/8.jpeg')"
                                    localStorage.setItem("backgroundImage","url('/8.jpeg')")
                                }}>
                                    <Card md="3" style={{ width: '3rem' }} className="" >
                                        <Card.Img   src="/8.jpeg"  className="m-0 h-100"/>
                                    </Card>
                                </button>
                            
                            </Row>
                        </div>

                        <div id="general" className="w-100 m-0 p-0">
                            
                            <hr className="m-0 p-0 w-100"/>
                                <div>THEMES</div>
                            <hr className="m-0 p-0 w-100"/>
                            <Row className="w-100 m-0 p-0">
                                <div className="m-0 p-0 w-100">
                                    <div className="border boder-info">
                                        brightness
                                    </div>
                                        <input type="range" min="1" max="100" onChange={onchange} value={state.brightness} step="1" ref={brightnessControlRef} className="w-100"/> 
                                </div>
                            </Row>
                            <Row className="w-100 m-0 p-0">
                                <div className="w-100 m-0 p-0">
                                    <div className="border boder-info w-100 m-0 p-0">
                                        Contrast
                                    </div>
                                        <input type="range" min="1" max="100" onChange={onchange} value={state.contrast} step="1" ref={contrastControlRef} className="m-0 p-0 w-100"/>
                                </div>
                            </Row>
                            <Row className="w-100 m-0 p-0">
                                <div className="w-100 m-0 p-0">
                                    <div className="border boder-info w-100 m-0 p-0">
                                        Saturation
                                    </div>
                                        <input type="range" min="1" max="200" onChange={onchange} value={state.saturation} step="1" ref={saturationControlRef} className="m-0 p-0 w-100"/>
                                </div>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            {/* </Container> */}
        </React.Fragment>
    )
}

export default BackgroundControler