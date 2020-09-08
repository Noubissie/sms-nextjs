import { FaLifeRing, FaGraduationCap, FaPlus ,
    FaUserPlus, FaChalkboardTeacher, FaUserFriends, FaBookReader,FaBookOpen,
    FaDoorOpen, FaMoneyCheckAlt,FaCalendarAlt, FaCalendarCheck, FaPagelines, FaBusAlt, FaWarehouse, FaInfo, FaEnvelopeOpenText, FaUikit,  FaUser, FaMapMarkedAlt} from 'react-icons/fa'
import {BsChevronDoubleDown} from "react-icons/bs"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import React from 'react'
import Link from "next/link"

let VnavFull = (props) =>{

return (
<div style={{"display":props.display1,"backgroundColor":props.color,"position":props.position,zIndex:5}}  className="fontsizeNavbar">

<Navbar expand="md" id="vnav" className="w-100 m-0 p-0 flex-column nobackground"    fluid="true">
        
            <Navbar.Toggle style={{top:"100px",width:"100%"}} aria-controls="basic-navbar-nav" >
                <BsChevronDoubleDown color="white" />
            </Navbar.Toggle>
       

  
        <Navbar.Collapse  id="basic-navbar-nav" className="w-100 m-0 p-0 nobackground " >
            
            <Accordion /* defaultActiveKey="DashBoard" */ className="w-100 m-0 p-0 ">
            <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div"   eventKey="section" className="pixel15  p-2 white">
                            <i className="pl-3 float-left"><FaBookOpen  size="14"/></i><span className=" p-2 ">Section</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                        
                            <Accordion.Collapse eventKey="section" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/section/sections" href="/section/sections" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Sections 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/section/addnewsection" href="/section/addnewsection" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Add New section 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="class">
                            <i className="pl-3 float-left"><FaDoorOpen color="smokewhite" size="14"/></i><span className="p-2">Class</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="class" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/classes/classses" href="/classes/classses">
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                All Classes 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/classes/addclasses" href="/classes/addclasses" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Add New Class 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="subject">
                            <i className="pl-3 float-left"><FaBookOpen color="smokewhite" size="14"/></i><span className="p-2">Subject</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="subject" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/subject/subject" href="/subject/subject" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Subject 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/subject/addsubject" href="/subject/addsubject" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Add New subject 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/subject/subjectClassAssign" href="/subject/subjectClassAssign" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Assign Subjects 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/subject/subjectClassTable" href="/subject/subjectClassTable" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Subject To Class 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                
                <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                    <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="DashBoard">
                        <i className="pl-3 float-left"><FaLifeRing  color="smokewhite" size="14" /></i><span className="p-2">Dashboard</span>
                        <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="DashBoard" className="colornav">
                    <Card.Body className="m-0 p-0">  
                           
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/admin" href="/admin" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                    <i className="text-dark p-2">&#11044;</i>
                                        Admin 
                                </a>
                            </Link>
                      </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                    <i className="text-dark p-2">&#x25C8;</i>
                                        student 
                                    
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                    <i className="text-dark p-2">&#x25C8;</i>
                                        Parent 
                                    
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                    <i className="text-dark p-2">&#x25C8;</i>
                                        Teacher 
                                    
                                </a>
                            </Link>
                        </Nav.Item>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                    <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="students">
                        <i className="pl-3 float-left"><FaUserPlus color="smokewhite" size="14"/></i><span className="p-2">Students</span>
                        <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="students" className="colornav">
                    <Card.Body className="m-0 p-0">  
                    <Nav.Item  className="m-0 p-0">
                            <Link as="/student/AllStudent" href="/student/AllStudent" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                    <i className="text-dark p-2">&#x25C8;</i>
                                        All Students 
                                    
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                    <i className="text-dark p-2">&#x25C8;</i>
                                        Student Details 
                                    
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/student/admissionForm" href="/student/admissionForm" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                    <i className="text-dark p-2">&#x25C8;</i>
                                        Admission Form 
                                    
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                    <i className="text-dark p-2">&#x25C8;</i>
                                        Student Promotion 
                                    
                                </a>
                            </Link>
                        </Nav.Item>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                    <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="Teacher">
                        <i className="pl-3 float-left"><FaChalkboardTeacher color="smokewhite" size="14"/></i><span className="p-2">Teachers</span>
                        <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="Teacher" className="colornav">
                    <Card.Body className="m-0 p-0">  
                    <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                    <i className="text-dark p-2">&#x25C8;</i>
                                        All Teachers 
                                    
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                    <i className="text-dark p-2">&#x25C8;</i>
                                        Teachers Details
                                    
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                    <i className="text-dark p-2">&#x25C8;</i>
                                        Add Teacher 
                                    
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item  className="m-0 p-0">
                            <Link as="/index" href="/index" >
                                <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                    <i className="text-dark p-2">&#x25C8;</i>
                                        Payment 
                                    
                                </a>
                            </Link>
                        </Nav.Item>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="parents">
                            <i className="pl-3 float-left"><FaUserFriends color="smokewhite" size="14"/></i><span className="p-2">Parents</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="parents" className="colornav">
                            <Card.Body className="m-0 p-0">  
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                All Parents 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Parent Detail 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Add Parent 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="library">
                            <i className="pl-3 float-left"><FaBookReader color="smokewhite" size="14"/></i><span className="p-2">Library</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="library" className="colornav">
                            <Card.Body className="m-0 p-0">  
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                All Books 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Add New Book 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="Accounts">
                            <i className="pl-3 float-left"><FaMoneyCheckAlt color="smokewhite" size="14"/></i><span className="p-2">Accounts</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="Accounts" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                All Fees Collected 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Expenses
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Add Expenses 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="classRoutine">
                            <i className="pl-3 float-left"><FaCalendarAlt color="smokewhite" size="14"/></i><span className="p-2">Class Routines</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="classRoutine" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Class Routines
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Make Time Tables
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="Attendance">
                            <i className="pl-3 float-left"><FaCalendarCheck color="smokewhite" size="14"/></i><span className="p-2">Attendance</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="Attendance" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Attendance 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Take Attendance 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="Exams">
                            <i className="pl-3 float-left"><FaPagelines color="smokewhite" size="14"/></i><span className="p-2">Exams</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="Exams" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Exam Schedule 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Exam Grade 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="Transport">
                            <i className="pl-3 float-left"><FaBusAlt color="smokewhite" size="14"/></i><span className="p-2">Transport</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="Transport" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Transport 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Add smt 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="Hostel">
                            <i className="pl-3 float-left"><FaWarehouse color="smokewhite" size="14"/></i><span className="p-2">Hostel</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="Hostel" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Hostel 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Add hostel info 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="Notice">
                            <i className="pl-3 float-left"><FaInfo color="smokewhite" size="14"/></i><span className="p-2">Notice</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="Notice" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Notice 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Add new notice 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="Message">
                            <i className="pl-3 float-left"><FaEnvelopeOpenText color="smokewhite" size="14"/></i><span className="p-2">Message</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="Message" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Message 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Add New Message
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="ui-Elements">
                            <i className="pl-3 float-left"><FaUikit color="smokewhite" size="14"/></i><span className="p-2">UI-Elements</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="ui-Elements" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                / 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                /
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="map">
                            <i className="pl-3 float-left"><FaMapMarkedAlt color="smokewhite" size="14"/></i><span className="p-2">Map</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="map" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                school Location 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Region map 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle as="div" className="pixel15  p-2 white" eventKey="userAccount">
                            <i className="pl-3 float-left"><FaUser color="smokewhite" size="14"/></i><span className="p-2">User Account</span>
                            <i className=" float-right"> <FaPlus color="smokewhite" size="10" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="userAccount" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                User Account 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/index" href="/index" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 pixel15  p-2 white" >
                                            <i className="text-dark p-2">&#x25C8;</i>
                                                Modifier Account 
                                            
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
            </Accordion>
            <div style={{height:"20vh"}}>

            </div>
        </Navbar.Collapse>
</Navbar>

</div>
)
}
export default VnavFull