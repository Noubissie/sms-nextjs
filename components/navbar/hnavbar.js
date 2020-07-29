import {Nav,Navbar,Form,FormControl,Button} from "react-bootstrap"

let Hnav = ()=>{
    return (
    <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
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