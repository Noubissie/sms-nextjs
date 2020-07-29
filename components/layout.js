import Navbar from './navbar/navbar'
import {Container,Row,Col} from 'react-bootstrap'
import Hnav from "./navbar/hnavbar"
let Layout = (props)=>{
    return(
        <div>
            
            {/* <Container className="w-100 m-0 p-0 " fluid="true">
                <Row className="w-100 m-0 p-0">
                    <Col  md="3" className="d-none d-md-block w-100 m-0 p-0 sticky t-0  overflow-visualHeight">
                        <Navbar/>
                    </Col>
                    <Col xs="12" md="9"  className="w-100  m-0 p-0 sticky t-0  overflow-visualHeight"> */}
                        {/* <Hnavbar/> */}
                        {/* <div   className="zIndex d-md-none m-0 p-0 ">
                            <Navbar />
                        </div>
                        <div className="w-100 m-0 p-0 bg-info">
                            {props.children}
                        </div>

                    </Col>
                </Row>
            </Container> */}
            <div className="d-none d-md-block gridref">
                <div   className="sticky t-0 float-left bg-info overflow-visualHeight">
                    <Navbar />
                </div >
                <div className="sticky t-0 overflow-visualHeight darkwhite">
                    <Hnav />
                    {props.children}
                    
                </div>
            </div>
            <div className="d-md-none">
                <div className="sticky t-0 overflow-visualHeight darkwhite">
                    <Hnav />
                    {props.children}
                    
                </div>
            </div>
            
        </div>
    )
}
export default Layout