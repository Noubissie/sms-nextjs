import {Nav,Navbar,Form,FormControl,Button} from "react-bootstrap"
import { FaLifeRing, FaGraduationCap, FaPlus ,
    FaUserPlus, FaChalkboardTeacher, FaUserFriends, FaBookReader,FaBookOpen,
    FaDoorOpen, FaMoneyCheckAlt,FaCalendarAlt, FaCalendarCheck, FaPagelines, FaBusAlt, FaWarehouse, FaInfo, FaEnvelopeOpenText, FaUikit,  FaUser, FaMapMarkedAlt, FaLongArrowAltDown} from 'react-icons/fa'
let Hnav = (props)=>{
    return (
    <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="#home"  id="brand" className=" text-light pt-3 pb-3 ">
          
            <span className="p-2">
                GBHS MOTENGENE 
            </span>

            {/* <i>
            <FaGraduationCap color="black" size="32" />
            </i> */}
        </Navbar.Brand>
        <button onClick={props.onclick} className="d-md-none m-2">
                <FaLongArrowAltDown color="blue" sm="12"/>
            </button>
        <Navbar.Toggle>
            +
        </Navbar.Toggle>
        <Navbar.Collapse>
            
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            
            <Form inline>
            
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar.Collapse>
        
    </Navbar>
    )
}
export default Hnav