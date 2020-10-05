// import StudentDatabase from "../../database/studentDatabase"
import {useState} from "react"
import Button from "@material-ui/core/Button"
import useSWR from "swr"
import Layout from "../../components/layout"
import Table from "@material-ui/core/Table"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import Card from "@material-ui/core/Card"
import TableContainer from '@material-ui/core/TableContainer';
import dynamic from "next/dynamic"
import Link from "next/link"
const BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})

let StudentTable  = ()=>{

    let {data:AllStudents, error:AllStudentsError} = useSWR("/api/studentapi?AllstudentInSChool=true")
     
    
        
    let handleRefresh = async ()=>{
        let [AllStudents, setStudentState] = useState(undefined)
        let data = await fetch("/api/studentapi?AllstudentInSChool=true")
        let responces = await data.json()
        setStudentState(responces)
        
    }
        
    //     fetch("/api/studentapi?AllstudentInSChool=true",{
    //                 method:"GET"
    //             }).then((data)=>data.json()).then((student)=>{
    //                 AllStudents = student
    //                 console.log("data daata::",student)
    //             })
            
       
    //     // // AllStudentsError = result.error
    //     console.log("allStudents:",AllStudents)
    // },[AllStudents])

    let tablehead = [
        {header:"number"},
        {header:"Admission id"},
        {header:"Family Name"},
        {header:"Given Name"},
        {header:"DOB"},
        {header:"Gender"},
        {header:"Date of Enrollment"},
        {header:"Age"},
        {header:"Religion"},
        {header:"Blood Group"},
        {header:"Email"},
        // {header:"Section"},
        {header:"PhoneNumber"},
        // {header:"Student Address"},
        // {header:"short biography"},
        // {header:"student Picture"},
        // {header:"Father Name"},
        // {header:"Father Occupation"},
        // {header:"Father Address"},
        // {header:"Father Contact"},
        // {header:"Mother Name"},
        // {header:"Mother Name"},
        // {header:"Mother Occupation"},
        // {header:"Mother Address"},
        // {header:"Mother Contact"}

    ]

    return(
        <React.Fragment>
            <Layout>
                <Button onClick = {handleRefresh}>Refresh</Button>
                <div>
                    <div className="mt-4 mb-4 ml-3">
                        <h3 className="whitesnow mr-3 p-1 ">Student Details</h3>
                        <BrowserSiteOutput marginRight="mr-3"/>
                    </div>
                    <Card className="m-3">
                        <TableContainer>
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow className="bg-dark">
                                        {tablehead.map((data,index)=>
                                            {
                                                return <TableCell key={index}>{data.header}</TableCell>
                                            }
                                            )
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    
                                    {AllStudents ? AllStudents.map((data,index)=>{
                                        return(
                                            <TableRow hover key={data.AdmissionID}>
                                                <TableCell>
                                                    <Link as={`/student/studentDetails?AdmissionID=${data.AdmissionID}&&studentToken`} href={`/student/studentDetails?AdmissionID=${data.AdmissionID}&&studentToken`}>
                                                        <a>
                                                            {index}
                                                        </a>
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    <Link as={`/student/studentDetails?AdmissionID=${data.AdmissionID}&&studentToken`} href={`/student/studentDetails?AdmissionID=${data.AdmissionID}&&studentToken`}>
                                                        <a>
                                                            {data.AdmissionID}
                                                        </a>
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                <Link as={`/student/studentDetails?AdmissionID=${data.AdmissionID}&&studentToken`} href={`/student/studentDetails?AdmissionID=${data.AdmissionID}&&studentToken`}>
                                                        <a>
                                                            {data.familyname}
                                                        </a>
                                                    </Link>
                                                    
                                                </TableCell>
                                                <TableCell>{data.givenname}</TableCell>
                                                <TableCell>{new Date(data.dateofbirth).toLocaleDateString()}</TableCell>
                                                
                                                <TableCell>{data.Gender.gender}</TableCell>
                                                <TableCell>
                                                    <div>{new Date(data.dateOfEnrollment).toLocaleDateString()}</div>
                                                    <div>{new Date(data.dateOfEnrollment).toLocaleTimeString()}</div>
                                                </TableCell>
                                                <TableCell>{new Date().getFullYear() - new Date(data.dateofbirth).getFullYear() }</TableCell>
                                                <TableCell>{data.religion}</TableCell>
                                                <TableCell>{data.bloodgroup}</TableCell>
                                                <TableCell>{data.email}</TableCell>
                                                {/* <TableCell>{data.Section.section}</TableCell> */}
                                                <TableCell>{data.phonenumber}</TableCell>
                                                {/* <TableCell>{data.StudentAddress}</TableCell> */}
                                            </TableRow>
                                        )
                                    })
                                    :null
                                }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </div>
            </Layout>
            
        </React.Fragment>
    )
}
export async function getStaticProps(){
    return{
        props:{
            
        }
    }
}
export default StudentTable