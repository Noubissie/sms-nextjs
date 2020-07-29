import React , {useEffect} from "react"
import {Card,Container,Col,Row,Breadcrumb} from "react-bootstrap"
import { DynamicBarChart } from 'react-dynamic-charts';
import Layout from "../components/layout"
import Link from "next/link"
import Donutchart from "../components/charts/DonutsChart"
import Barchart from "../components/charts/BarChart"
import { FaUser,FaUserFriends,FaUserGraduate, FaChalkboardTeacher, FaMoneyCheckAlt } from "react-icons/fa"
import { PieChart, Pie ,ResponsiveContainer} from 'recharts';
import Agenda from "../components/calendar/calendar"
import NoticeBoard from "../components/noticeBoard/noticeboard"
import {NextApiRequest,NextApiResponse,NextApiHandler} from "next"
let urlpath = "/"


let Admin = (NextApiRequest  ,NextApiResponse)=>{
    let date = new Date()
    
    
    let data = [
        {
          "name": "Round 1",
          "values": [
            {
              "id": 1,
              "label": `${date.getDay()}/${date.getFullYear()}`,
              "value": 0,
              "color": "red"
            },
            {
              "id": 2,
              "label": `${date.getDay()}/${date.getFullYear()}`,
              "value": 0,
              "color": ["yellow", "green"]
            }
          ]
        },
        {
          "name": "Round 2",
          "values": [
            {
              "id": 1,
              "label": `${date.getDay()}/${date.getFullYear()}`,
              "value": 10,
              "color": "red"
            },
            {
              "id": 2,
              "label": `${date.getDay()}/${date.getFullYear()}`,
              "value": 5,
              "color": ["yellow", "green"]
            }
          ]
        },
        {
          "name": "Round 3",
          "values": [
            {
              "id": 1,
              "label": `${date.getDay()}/${date.getFullYear()}`,
              "value": 12,
              "color": "red"
            },
            {
              "id": 2,
              "label": `${date.getDay()}/${date.getFullYear()}`,
              "value": -21,
              "color": ["yellow", "green"]
            }
          ]
        }
      ]
  
    useEffect(()=>{
            urlpath=location.pathname
            console.log(urlpath)
    })      
    return (
        <React.Fragment>
            <Layout>
                <div className="mt-3 mb-4 ml-3">
                    <h3 >Admin Dashboard</h3>
                    
                    <Breadcrumb className="mr-3 ">
                        <Link as="/home" href="/">
                            <a>Home </a>
                        </Link> 
                        <Breadcrumb.Item active>{urlpath}</Breadcrumb.Item>
                        
                    </Breadcrumb>
                </div>
                <Container  fluid="true" className="p-3">
                    <Row>
                        <Col xs="12"  md="6" lg="3" className="mb-3">
                            <Card className="">
                                <Card.Body className="overflows">
                                    <i >
                                        <FaUserGraduate color="blue" size="70" className="border rounded-circle bg-info"/>
                                    </i>
                                    
                                    <div className="float-right p-3">
                                        <Card.Subtitle className="text-primary">Students</Card.Subtitle>
                                        <Card.Title>150000</Card.Title>
                                    </div>
                                    
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        <Col xs="12"  md="6"  lg="3" className="mb-3">
                            <Card>
                                <Card.Body className="overflows">
                                    
                                        <FaChalkboardTeacher color="black" size="70" className="border rounded-circle bg-info"/>
                                    
                                    
                                    <div className="float-right p-3">
                                        <Card.Subtitle className="text-primary">Teachers</Card.Subtitle>
                                        <Card.Title>150000</Card.Title>
                                    </div>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="12"  md="6"  lg="3" className="mb-3">
                            <Card>
                                <Card.Body className="overflows">
                                    
                                        <FaUserFriends color="yellow" size="70" className="border rounded-circle bg-info"/>
                                    
                                    
                                    <div className="float-right p-3">
                                        <Card.Subtitle className="text-primary">Parents</Card.Subtitle>
                                        <Card.Title>150000</Card.Title>
                                    </div>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="12"  md="6"  lg="3" className="mb-3">
                            <Card>
                                <Card.Body className="overflows">
                                    
                                        <FaMoneyCheckAlt color="rgb(99, 23, 23)" size="70" className="border rounded-circle bg-info"/>
                                    
                                    
                                    <div className="float-right p-3">
                                        <Card.Subtitle className="text-info">Account</Card.Subtitle>
                                        <Card.Title>150000</Card.Title>
                                    </div>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="6" className="mb-3 heightcontrol ">
                            <Card className="heightcontrol">
                                <Card.Header>
                                    <Card.Title>
                                        Gender Distribution
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="overflows">
                                    
                                    <Donutchart gender_distribution="" />
                                    
                                </Card.Body>
                            </Card>
                           
                        </Col>
                        <Col xs="12" lg="6" className="mb-3 heightcontrol ">
                            <Card className="heightcontrol">
                                <Card.Header>
                                    <Card.Title>
                                        Weekly Expenses
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="overflows">
                                    
                                    <DynamicBarChart
                                        data={data}
                                        // iterationTimeout={5000}
                                        baseline={0}
                                        
                                        startAutomatically={true}
                                        showStartButton={false}
                                        startButtonText={'Click Me!'}
                                    />
                                    
                                </Card.Body>
                            </Card>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" xl="6" className="mb-3 heightcontrol">
                            <Card className="heightcontrol">
                                <Card.Header>
                                    <Card.Title >
                                        Agenda
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="overflows">
                                   
                                    <Agenda />
                                    
                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col xs="12" xl="6" className="mb-3 heightcontrol">
                            <NoticeBoard />
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" xl="6" className="mb-3 heightcontrol">
                        <Card className=" heightcontrol ">
                                <Card.Header >
                                    <Card.Title className="zIndex">
                                        Earning-Expendses-Total
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="overflows">
                                   
                                    <Barchart />
                                    
                                </Card.Body>
                            </Card>
                           
                            
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </React.Fragment>
        
    )
}
export default Admin