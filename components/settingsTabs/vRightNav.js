import Nav from 'react-bootstrap/Nav'
import {FaEnvelope, FaImage} from "react-icons/fa"
import {  GiLevelFourAdvanced, GiHelp} from 'react-icons/gi'
import React from 'react'
import Link from "next/link"

let VnavRight = ({onclickdisplayImageContainer}) =>{

return (

    <div>
        <div className="m-0 p-0">
            <Nav className=" m-0 flex-column  p-0  nobackgound" style={{height:"100vh"}} >
                <Nav.Link  className="p-0 m-2 mr-0"><FaEnvelope   size="25" color="green" title="read notifications" className="m-0 p-0"/><sup className="m-0 p-0  text-light bg-danger counter counter-lg">9</sup></Nav.Link>
                <Nav.Link  className="p-0 m-2 mr-0"><GiHelp size="25" color="black" title="get help contacting us" className="p-0 m-0"/></Nav.Link>
                <Nav.Link onClick={onclickdisplayImageContainer} as="button" className="p-0 m-2 mr-0"><FaImage size="25" color="black" title="change background image" className="p-0 m-0"/></Nav.Link>
            </Nav>
        </div>
        
    </div>

)
}
export default VnavRight