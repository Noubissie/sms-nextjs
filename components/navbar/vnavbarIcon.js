import { FaLifeRing,
    FaUserPlus, FaChalkboardTeacher, FaUserFriends, FaBookReader,FaBookOpen,
    FaDoorOpen, FaMoneyCheckAlt,FaCalendarAlt, FaCalendarCheck,FaBusAlt, FaWarehouse, FaInfo, FaEnvelopeOpenText, FaUikit,  FaUser, FaMapMarkedAlt, FaClosedCaptioning, FaWindowClose, FaPencilRuler} from 'react-icons/fa'
import {Navbar, Nav} from 'react-bootstrap'
import React  from 'react'
import Link from "next/link"

let VnavbarIcon = (props)=>{

    return (
        <div style={{"display":props.display2}} className="colornav h-100">
                <div className="position-fixed zIndex3">
                        <button className=" d-none d-md-block border border-none bg-warning ml-2 m-0 p-0" onClick={props.onclick}><FaWindowClose size="32" color="blue"/></button>
                    </div>
                <Navbar id="vnav" className="w-100 m-0 p-0 flex-column"   expand="md" fluid="true">
                <Navbar.Brand href="#home"  id="brand" className=" text-light ">
                    
                </Navbar.Brand>
                {/* <Navbar.Toggle className="justify-content-left bg-info" aria-controls="basic-navbar-nav" >+</Navbar.Toggle> */}
                        
                        <Navbar.Collapse id="basic-navbar-nav" className="w-100 m-0 p-0  flex-column" >
                            <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn mt-4">
                                        <FaLifeRing  color="yellow" size="25" />
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                        Admin 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    student
                                            </a>
                                        </Link>
                                    <   Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Parent 
                                            </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Teacher 
                                            </a>
                                        </Link>
                                        
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaUserPlus color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                    All Students 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Student Detail
                                            </a>
                                        </Link>
                                    <   Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Admission Form 
                                            </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Student Promotion 
                                            </a>
                                        </Link>
                                        
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaChalkboardTeacher color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                        All Teachers 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Teacher Details
                                            </a>
                                        </Link>
                                    <   Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Add Teacher 
                                            </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Payment 
                                            </a>
                                        </Link>
                                        
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaUserFriends color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                        All Parents 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Parents Detail
                                            </a>
                                        </Link>
                                    <   Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Add Parent 
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                </Nav.Item>
                                
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaBookReader color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                        All Book 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Add New Books
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaMoneyCheckAlt color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                    All Fees Collected 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Expenses
                                            </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Add Expenses 
                                            </a>
                                        </Link>
                                        
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaDoorOpen color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                        All Classes 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Add New Class
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaBookOpen color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                        subject 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Add new subject
                                            </a>
                                        </Link>
                                        
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaCalendarAlt color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                        Class Routine 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Make Time Table
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaCalendarCheck color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                        Attendance 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Take Attendance
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaPencilRuler color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                    Exam Schedule 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Exam Grades
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaBusAlt color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                        Transport 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    /
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaWarehouse color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                        Hostel 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    /
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaInfo color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                        Notice 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    /
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaEnvelopeOpenText color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                        Message 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Add New Message
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaUikit color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                        / 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                /
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaMapMarkedAlt color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                        school Location 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                    Region Location
                                            </a>
                                        </Link>
                                        
                                    </div>
                                </div>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                <div className="dropright">
                                    <button className="dropbtn">
                                        <FaUser color="yellow" size="25"/>
                                    </button>
                                    
                                    <div className="dropright-content">
                                        <Link as="/index" href="/index" >
                                                <a className="d-block w-100 h-100  p-2  text-light text-decor colornav" >
                                                    User Account 
                                                </a>
                                        </Link>
                                        <Link as="/index" href="/index" >
                                            <a className="d-block w-100 h-100 pl-2 pr-3 p-2  text-light text-decor colornav" >
                                                Modifier Account
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                </Nav.Item>
                                
                        </Navbar.Collapse>
                </Navbar>
            </div>
)
}
export default VnavbarIcon