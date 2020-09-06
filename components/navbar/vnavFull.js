import { FaLifeRing, FaGraduationCap, FaPlus ,
    FaUserPlus, FaChalkboardTeacher, FaUserFriends, FaBookReader,FaBookOpen,
    FaDoorOpen, FaMoneyCheckAlt,FaCalendarAlt, FaCalendarCheck, FaPagelines, FaBusAlt, FaWarehouse, FaInfo, FaEnvelopeOpenText, FaUikit,  FaUser, FaMapMarkedAlt} from 'react-icons/fa'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import React from 'react'
import Link from "next/link"

let VnavFull = (props) =>{

return (
<div style={{"display":props.display1,"backgroundColor":props.color,"position":props.position,zIndex:5}}  className="">

<Navbar expand="md" id="vnav" className="w-100 m-0 p-0 flex-column nobackground"    fluid="true">
        
            <Navbar.Toggle style={{top:"100px"}} aria-controls="basic-navbar-nav" >
                +
            </Navbar.Toggle>
       

  
        <Navbar.Collapse  id="basic-navbar-nav" className="w-100 m-0 p-0 nobackground " >
            
            <Accordion /* defaultActiveKey="DashBoard" */ className="w-100 m-0 p-0 ">
            <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle  eventKey="section" className="pixel15 nobackground border border-secondary p-2 white">
                            <i className="pl-3 float-left"><FaBookOpen color="yellow" size="20"/></i><span className=" p-2 ml-1 ">Section</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="section" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/section/sections" href="/section/sections" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Sections 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/section/addnewsection" href="/section/addnewsection" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Add New section 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="class">
                            <i className="pl-3 float-left"><FaDoorOpen color="yellow" size="25"/></i><span className="p-2">Class</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="class" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/classes/classses" href="/classes/classses">
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                All Classes 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/classes/addclasses" href="/classes/addclasses" >
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
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="subject">
                            <i className="pl-3 float-left"><FaBookOpen color="yellow" size="25"/></i><span className="p-2">Subject</span>
                            <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="subject" className="colornav">
                            <Card.Body className="m-0 p-0">  
                            <Nav.Item  className="m-0 p-0">
                                    <Link as="/subject/subject" href="/subject/subject" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Subject 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/subject/addsubject" href="/subject/addsubject" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Add New subject 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/subject/subjectClassAssign" href="/subject/subjectClassAssign" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Assign Subjects 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="m-0 p-0">
                                    <Link as="/subject/subjectClassTable" href="/subject/subjectClassTable" >
                                        <a className="d-block w-80 h-100 pl-5 pr-3 p-2 border border-solid text-light text-decor" >
                                            <i className="orange-color p-2">&#x25C8;</i>
                                                Subject To Class 
                                            <i className=" float-right orange-color">&#x21E8;</i>
                                        </a>
                                    </Link>
                                </Nav.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                
                <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                    <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="DashBoard">
                        <i className="pl-3 float-left"><FaLifeRing  color="yellow" size="25" /></i><span className="p-2">Dashboard</span>
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
                <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                    <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="students">
                        <i className="pl-3 float-left"><FaUserPlus color="yellow" size="25"/></i><span className="p-2">Students</span>
                        <i className=" float-right"> <FaPlus color="orange" size="14" /></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="students" className="colornav">
                    <Card.Body className="m-0 p-0">  
                    <Nav.Item  className="m-0 p-0">
                            <Link as="/student/AllStudent" href="/student/AllStudent" >
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
                            <Link as="/student/admissionForm" href="/student/admissionForm" >
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
                <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                    <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="Teacher">
                        <i className="pl-3 float-left"><FaChalkboardTeacher color="yellow" size="25"/></i><span className="p-2">Teachers</span>
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

                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="parents">
                            <i className="pl-3 float-left"><FaUserFriends color="yellow" size="25"/></i><span className="p-2">Parents</span>
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
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="library">
                            <i className="pl-3 float-left"><FaBookReader color="yellow" size="25"/></i><span className="p-2">Library</span>
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
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="Accounts">
                            <i className="pl-3 float-left"><FaMoneyCheckAlt color="yellow" size="25"/></i><span className="p-2">Accounts</span>
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
                    
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="classRoutine">
                            <i className="pl-3 float-left"><FaCalendarAlt color="yellow" size="25"/></i><span className="p-2">Class Routines</span>
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
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="Attendance">
                            <i className="pl-3 float-left"><FaCalendarCheck color="yellow" size="25"/></i><span className="p-2">Attendance</span>
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
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="Exams">
                            <i className="pl-3 float-left"><FaPagelines color="yellow" size="25"/></i><span className="p-2">Exams</span>
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
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="Transport">
                            <i className="pl-3 float-left"><FaBusAlt color="yellow" size="25"/></i><span className="p-2">Transport</span>
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
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="Hostel">
                            <i className="pl-3 float-left"><FaWarehouse color="yellow" size="25"/></i><span className="p-2">Hostel</span>
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
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="Notice">
                            <i className="pl-3 float-left"><FaInfo color="yellow" size="25"/></i><span className="p-2">Notice</span>
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
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="Message">
                            <i className="pl-3 float-left"><FaEnvelopeOpenText color="yellow" size="25"/></i><span className="p-2">Message</span>
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
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="ui-Elements">
                            <i className="pl-3 float-left"><FaUikit color="yellow" size="25"/></i><span className="p-2">UI-Elements</span>
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
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="map">
                            <i className="pl-3 float-left"><FaMapMarkedAlt color="yellow" size="25"/></i><span className="p-2">Map</span>
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
                    <Card className=" color-nav-menu  mb-1 nobackground  navwidth noborder white">
                        <Accordion.Toggle className="pixel15 nobackground border border-secondary p-2 white" eventKey="userAccount">
                            <i className="pl-3 float-left"><FaUser color="yellow" size="25"/></i><span className="p-2">User Account</span>
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
            <div style={{height:"20vh"}}>

            </div>
        </Navbar.Collapse>
</Navbar>

</div>
)
}
export default VnavFull