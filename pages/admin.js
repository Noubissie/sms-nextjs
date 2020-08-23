import React , {useEffect} from "react"
import dynamic from "next/dynamic"

import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import  Row  from "react-bootstrap/Row"
import { DynamicBarChart } from 'react-dynamic-charts';
import Layout from "../components/layout"
import Link from "next/link"
// import Donutchart from "../components/charts/DonutsChart"

import {FaUserFriends,FaUserGraduate, FaChalkboardTeacher, FaMoneyCheckAlt } from "react-icons/fa"
// import { PieChart, Pie ,ResponsiveContainer} from 'recharts';
// import {useRouter} from "next/router"


// import {NextApiRequest,NextApiResponse,NextApiHandler} from "next"
import useSWR from "swr";

import StudentDatabase from "../database/studentDatabase"
import StaffDatabase from "../database/staffDatabase"
import ParentDatabase from "../database/parentsDatabase"
// import { BrowserSiteOutput } from "../components/browserSiteOutput"

let BrowserSiteOutput = dynamic(
                                ()=>import("../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
                                    {ssr:false})
// let StudentDatabase = dynamic(
//     ()=>import ("../database/studentDatabase")/*.then((mod)=>mod.NoticeBoard)*/,
//     {ssr:true})

// import Agenda from "../components/calendar/calendar"
let Agenda = dynamic(
    ()=>import ("../components/calendar/calendar")/*.then((mod)=>mod.Agenda)*/,
    {ssr:false})
// import Barchart from "../components/charts/BarChart"
let Barchart = dynamic(
    ()=>import ("../components/charts/BarChart") /*.then((mod)=>mod.Barchart) */,
    {ssr:false})
// import NoticeBoard from "../components/noticeBoard/noticeboard"
let NoticeBoard = dynamic(
    ()=>import ("../components/noticeBoard/noticeboard")/*.then((mod)=>mod.NoticeBoard)*/,
    {ssr:false})

let urlpath = "/"


// let Donutchart = React.lazy(()=>{
//     import Donutchart from "../components/charts/DonutsChart"
// })
// let Agenda = React.lazy(()=>{
//     import Agenda from "../components/calendar/calendar"
// })
// let n = ()=>{
    
//         let urlpath=location.pathname
//         return urlpath
// }


let Admin = ({femaleNumber,malesNumber,countTotalStudents,femalestaffNumber,malessttaffNumber,countstaffTotal,countparentTotal})=>{
    
    let date = new Date()
    let {data, error} = useSWR('/api/a')
    console.log("error",error)
    console.log("data",data)
    // const router = useRouter()
    // console.log(router.query)
   
    let data2 = [
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
        }
      ]
    let click = async ()=>{
        // let fet = await fetch("/api/admin")
        // let answer = await fet.json()
        // console.log(answer)
        // console.log("dat",data)
    }
    // useEffect(()=>{
    //     setInterval(() => {
    //         let h = async ()=>{
    //             return await fetch("/api/a")

    //         }
    //        data = h()

    //     }, 5000);
    // })   
    
    // if(!data){
    //     return (
    //         <div>
    //             <div className="spinner-border text-danger" role="status">
    //             <span className="sr-only">Loading...</span>
    //             </div>
    //         </div>
    //         )
    // }
    return (
        <React.Fragment>
            {/* <button onClick={click}>=</button> */}
            <Layout>
                <div className="mt-3 mb-4 ml-3">
                    <h3 >Admin Dashboard</h3>
                    <BrowserSiteOutput />
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
                                        <Card.Title>{data ? data.countTotalStudents : countTotalStudents}</Card.Title>
                                    </div>
                                    
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        <Col xs="12"  md="6"  lg="3" className="mb-3">
                            <Card>
                                <Card.Body className="overflows">
                                    
                                        <FaChalkboardTeacher color="black" size="70" className="border rounded-circle bg-info"/>
                                    
                                    
                                    <div className="float-right p-3">
                                        <Card.Subtitle className="text-primary">Staffs</Card.Subtitle>
                                        <Card.Title>{countstaffTotal}</Card.Title>
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
                                        <Card.Title>{countparentTotal}</Card.Title>
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
                                        <Card.Title>15000</Card.Title>
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
                                    
                                    {/* <Donutchart gender_distribution="" /> */}
                                    
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
                                        data={data2}
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

// Admin.getInitialProps = () =>{
    
//     return {a:n()}
// }

export async function getStaticProps(){
    
    // const prisma = new PrismaClient()
    // let student = await prisma.studentProfile.count({
    //     where:{
    //         Gender:{
    //             gender:"Male"
    //         }
    //     }
    // })
    // console.log("student",student)

    // class StudentDatabase{
    //     constructor(){
    //         this.prisma = new PrismaClient()
    //     }
    //     countMale = () =>{
    //         let maleNumber =  this.prisma.studentProfile.count({
    //             where:{
    //                 Gender:{
    //                     gender:"Male"
    //                 }
    //             }
    //         })
    //         return maleNumber
    //     }
    //     CountFemale =  () =>{
    //         let femaleNumber =  this.prisma.studentProfile.count({
    //             where:{
    //                 Gender:{
    //                     gender:"Fenale"
    //                 }
    //             }
    //         })
    //         return femaleNumber
    //     }
    // }
    
    let student = new StudentDatabase()
    let staff = new StaffDatabase()
    let parent = new ParentDatabase()
    let femaleNumber = await student.CountFemale()
    let malesNumber = await student.CountMale()
    let countTotalStudents = await student.CountTotal()
    // console.log("name",femalesNumber)
    let femalestaffNumber = await staff.CountFemale()
    let malessttaffNumber = await staff.CountMale()
    let countstaffTotal = await staff.CountTotal()


    let countparentTotal = await parent.CountTotal()
    // let femaleNumber = await prisma.studentProfile.count({
    //     where:{
    //         Gender:{
    //             gender:"Fenale"
    //         }
    //     }
    // })
    // console.log("name",femaleNumber)
    return {
        props:{
            femaleNumber,
            malesNumber,
            countTotalStudents,

            femalestaffNumber,
            malessttaffNumber,
            countstaffTotal,

            countparentTotal,
        },
        unstable_revalidate:1,
    }
}
export default React.memo(Admin)