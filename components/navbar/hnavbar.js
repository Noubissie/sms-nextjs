import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

import {  FaEnvelope,FaImage} from 'react-icons/fa'
import {  GiLevelFourAdvanced, GiHelp} from 'react-icons/gi'
let Hnav = (props)=>{
    return (
    <Navbar   expand="lg" variant="dark" >
        <Navbar.Brand href="/index"  id="brand" className="nobackground pt-3 pb-3 ">
          
            <span className="p-2">
                <i><GiLevelFourAdvanced size="35"/></i>GBHS MOTENGENE 
            </span>
        </Navbar.Brand>
        
        <Navbar.Toggle>
            <GiLevelFourAdvanced size="28"/>
        </Navbar.Toggle>
        <Navbar.Collapse>
            <Nav className="ml-5 mr-auto">
                <Nav.Link href="#home"><FaEnvelope  className="m-2" size="40" title="read notifications"/><sup className="m-0 p-1  text-light bg-danger counter counter-lg">9</sup></Nav.Link>
                <Nav.Link href="#features"><GiHelp size="40" title="get help contacting us" className="m-2"/></Nav.Link>
                <Nav.Link href="#pricing"><FaImage size="40" title="change background image" className="m-2"/></Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
            
            
        </Navbar.Collapse>
        
    </Navbar>
    )
}
export default Hnav