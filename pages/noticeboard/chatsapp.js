import Layout from "../../components/layout"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Link from "next/link"

let Chatapp = ()=>{
   return(
    <React.Fragment>
        <Container fluid className="m-0 p-0">
        <Nav fill variant="tabs" defaultActiveKey="/StaffContact" className="bg-primary ">
            <Nav.Item>
                <Nav.Link eventKey="StaffContact" className="text-light">Staff Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/studentContact" className="text-light">student Contact</Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
                <Nav.Link eventKey="ParentContact" className="text-light">Parent Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="leavePage" className="text-light" >
                    Leave Page
                </Nav.Link>
            </Nav.Item>
        </Nav>
                        

            <Navbar expand="lg" variant="light" bg="info" className="m-1 p-3 overflow-visualHeight float-left height30">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Nav>
                <Nav.Item>
                    <Link as="/" href="/"><a>leave Chatapp</a></Link>
                </Nav.Item>
            </Nav>
            </Navbar>
            {/* <div className="overflow-visualHeight bg-warning">

            </div> */}
        </Container>
    </React.Fragment>
   ) 
}
export default Chatapp