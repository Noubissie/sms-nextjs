import { FaLifeRing, FaGraduationCap, FaPlus ,
    FaUserPlus, FaChalkboardTeacher, FaUserFriends, FaBookReader,FaBookOpen,
    FaDoorOpen, FaMoneyCheckAlt,FaCalendarAlt, FaCalendarCheck, FaPagelines, FaBusAlt, FaWarehouse, FaInfo, FaEnvelopeOpenText, FaUikit,  FaUser, FaMapMarkedAlt} from 'react-icons/fa'
import {Navbar, Nav,Accordion, Card} from 'react-bootstrap'
import React, {useState} from 'react'
import VnavbarIcon from "./vnavbarIcon"
import Link from "next/link"

let VnavFull = (props) =>{

return (
<div style={{"display":props.display1}}>
<div className="">
    <button className="position-fixed t-0 zIndex3 d-none d-md-block border border-none bg-warning  m-0 p-0" onClick={props.onclick}><FaUikit size="32" color="blue"/></button>
</div>
<Navbar id="vnav" className="w-100 m-0 p-0 flex-column"   expand="md" fluid="true">
<Navbar.Brand href="#home"  id="brand" className=" text-light pt-3 pb-3 sticky t-0">
    <i className="p-1">
        <FaGraduationCap color="black" size="32" />
    </i>
    <span className="p-2">
        GBHS MOTENGENE 
    </span>
    <i>
    <FaGraduationCap color="black" size="32" />
    </i>
</Navbar.Brand>

<Navbar.Toggle className="justify-content-left bg-info" aria-controls="basic-navbar-nav" >+</Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav" className="w-100 m-0 p-0" >
            
            <Accordion defaultActiveKey="DashBoard" className="w-100 m-0 p-0 bg-primary">
                
                <Card className="text-light color-nav-menu mb-1">
                    <Accordion.Toggle as={Card.Header} eventKey="DashBoard">
                        <i className="pl-3"><FaLifeRing  color="yellow" size="25" /></i><span className="p-2">Dashboard</span>
                        <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="DashBoard" className="colornav">
                    <Card.Body className="m-0 p-0">  
                           
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/admin" href="/admin" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                    <i className="orange-color p-2">&#x25C8;</i>
                                        Admin 
                                    <i className=" float-right orange-color">&#x21E8;</i>
                                </a>
                            </Link>
                      </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                    <i className="orange-color p-2">&#x25C8;</i>
                                        student 
                                    <i className=" float-right orange-color">&#x21E8;</i>
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                    <i className="orange-color p-2">&#x25C8;</i>
                                        Parent 
                                    <i className=" float-right orange-color">&#x21E8;</i>
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                    <i className="orange-color p-2">&#x25C8;</i>
                                        Teacher 
                                    <i className=" float-right orange-color">&#x21E8;</i>
                                </a>
                            </Link>
                        </Nav.Item>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className=" color-nav-menu text-light mb-1">
                    <Accordion.Toggle as={Card.Header} eventKey="students">
                        <i className="pl-3"><FaUserPlus color="yellow" size="25"/></i><span className="p-2">Students</span>
                        <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="students" className="colornav">
                    <Card.Body className="m-0 p-0">  
                    <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                    <i className="orange-color p-2">&#x25C8;</i>
                                        All Students 
                                    <i className=" float-right orange-color">&#x21E8;</i>
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                    <i className="orange-color p-2">&#x25C8;</i>
                                        Student Details 
                                    <i className=" float-right orange-color">&#x21E8;</i>
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                    <i className="orange-color p-2">&#x25C8;</i>
                                        Admission Form 
                                    <i className=" float-right orange-color">&#x21E8;</i>
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                    <i className="orange-color p-2">&#x25C8;</i>
                                        Student Promotion 
                                    <i className=" float-right orange-color">&#x21E8;</i>
                                </a>
                            </Link>
                        </Nav.Item>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className=" color-nav-menu text-light mb-1">
                    <Accordion.Toggle as={Card.Header} eventKey="Teacher">
                        <i className="pl-3"><FaChalkboardTeacher color="yellow" size="25"/></i><span className="p-2">Teachers</span>
                        <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="Teacher" className="colornav">
                    <Card.Body className="m-0 p-0">  
                    <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                    <i className="orange-color p-2">&#x25C8;</i>
                                        All Teachers 
                                    <i className=" float-right orange-color">&#x21E8;</i>
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                    <i className="orange-color p-2">&#x25C8;</i>
                                        Teachers Details
                                    <i className=" float-right orange-color">&#x21E8;</i>
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                    <i className="orange-color p-2">&#x25C8;</i>
                                        Add Teacher 
                                    <i className=" float-right orange-color">&#x21E8;</i>
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                    <i className="orange-color p-2">&#x25C8;</i>
                                        Payment 
                                    <i className=" float-right orange-color">&#x21E8;</i>
                                </a>
                            </Link>
                        </Nav.Item>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="parents">
                            <i className="pl-3"><FaUserFriends color="yellow" size="25"/></i><span className="p-2">Parents</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="parents" className="colornav">
                            <Card.Body className="m-0 p-0">  
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                All Parents 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Parent Detail 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Add Parent 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="library">
                            <i className="pl-3"><FaBookReader color="yellow" size="25"/></i><span className="p-2">Library</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="library" className="colornav">
                            <Card.Body className="m-0 p-0">  
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                All Books 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Add New Book 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="Accounts">
                            <i className="pl-3"><FaMoneyCheckAlt color="yellow" size="25"/></i><span className="p-2">Accounts</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="Accounts" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                All Fees Collected 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Expenses
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Add Expenses 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="class">
                            <i className="pl-3"><FaDoorOpen color="yellow" size="25"/></i><span className="p-2">Class</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="class" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                All Classes 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Add New Class 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="subject">
                            <i className="pl-3"><FaBookOpen color="yellow" size="25"/></i><span className="p-2">Subject</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="subject" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Subject 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Add New subject 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="classRoutine">
                            <i className="pl-3"><FaCalendarAlt color="yellow" size="25"/></i><span className="p-2">Class Routines</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="classRoutine" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Class Routines
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Make Time Tables
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="Attendance">
                            <i className="pl-3"><FaCalendarCheck color="yellow" size="25"/></i><span className="p-2">Attendance</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="Attendance" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Attendance 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Take Attendance 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="Exams">
                            <i className="pl-3"><FaPagelines color="yellow" size="25"/></i><span className="p-2">Exams</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="Exams" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Exam Schedule 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Exam Grade 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="Transport">
                            <i className="pl-3"><FaBusAlt color="yellow" size="25"/></i><span className="p-2">Transport</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="Transport" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Transport 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Add smt 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="Hostel">
                            <i className="pl-3"><FaWarehouse color="yellow" size="25"/></i><span className="p-2">Hostel</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="Hostel" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Hostel 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Add hostel info 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="Notice">
                            <i className="pl-3"><FaInfo color="yellow" size="25"/></i><span className="p-2">Notice</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="Notice" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Notice 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Add new notice 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="Message">
                            <i className="pl-3"><FaEnvelopeOpenText color="yellow" size="25"/></i><span className="p-2">Message</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="Message" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Message 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Add New Message
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="ui-Elements">
                            <i className="pl-3"><FaUikit color="yellow" size="25"/></i><span className="p-2">UI-Elements</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="ui-Elements" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                / 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                /
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="map">
                            <i className="pl-3"><FaMapMarkedAlt color="yellow" size="25"/></i><span className="p-2">Map</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="map" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                school Location 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Region map 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu text-light mb-1">
                        <Accordion.Toggle as={Card.Header} eventKey="userAccount">
                            <i className="pl-3"><FaUser color="yellow" size="25"/></i><span className="p-2">User Account</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="userAccount" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                User Account 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Modifier Account 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
            </Accordion>
        </Navbar.Collapse>
</Navbar>
</div>
)
}
export default VnavFull