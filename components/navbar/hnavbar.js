import Navbar from "react-bootstrap/Navbar"

import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import {  GiLevelFourAdvanced, GiHelp} from 'react-icons/gi'
let Hnav = (props)=>{
    return (
        <>
    <Navbar   expand="lg" variant="dark" className="bg-info">
        
        <i><GiLevelFourAdvanced size="35" onClick={props.toggleNav}/></i>
        <Navbar.Brand href="/index"  id="brand" className=" pt-1 pb-1 ">
            
            <span className="p-0">
                GBHS MUTENGENE 
            </span>
        </Navbar.Brand>
        
        <Navbar.Toggle>
            <GiLevelFourAdvanced size="28"/>
        </Navbar.Toggle>
        <Navbar.Collapse>
            

            <Form inline>
                <FormControl  type="text" placeholder="Search" className="p-0 pl-5  ml-4 w-100 mr-sm-2 " />
            </Form>

            
            
        </Navbar.Collapse>
        
    </Navbar>
    
    </>
    )
}
export default Hnav