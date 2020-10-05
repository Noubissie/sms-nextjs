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
        {ssr:false}
        )

let StaffTable  = ()=>{

    let {data:AllStaff, error:AllStudentsError} = useSWR("/api/staffapi?AllstaffInSChool=true")
     
    
        
    let handleRefresh = async ()=>{
        let [AllStaff, setStudentState] = useState(undefined)
        let data = await fetch("/api/staffapi?AllstaffInSChool=true")
        let responces = await data.json()
        setStudentState(responces)
    }
        
    //     fetch("/api/staffapi?AllstaffInSChool=true",{
    //                 method:"GET"
    //             }).then((data)=>data.json()).then((Staff)=>{
    //                 AllStaff = Staff
    //                 console.log("data daata::",Staff)
    //             })
            
       
    //     // // AllStudentsError = result.error
    //     console.log("allStudents:",AllStaff)
    // },[AllStaff])

    let tablehead = [
        {header:"number"},
        {header:"staff id"},
        {header:"Family Name"},
        {header:"Given Name"},
        {header:"speciality"},
        {header:"Gender"},
        {header:"staffgrade"},
        {header:"diploma"},
        {header:"dateOfAssumption"},
        {header:"Blood Group"},
        {header:"grade"},
        {header:"matricle"},
        {header:"PhoneNumber"}

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
                                    
                                    {AllStaff ? AllStaff.map((data,index)=>{
                                        return(
                                            <TableRow hover key={data.staffID}>
                                                <TableCell>
                                                    <Link as={`/Staff/staffDetails?staffID=${data.staffID}&&staffToken`} href={`/Staff/staffDetails?staffID=${data.staffID}&&staffToken`}>
                                                        <a>
                                                            {index+1}
                                                        </a>
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    <Link as={`/Staff/staffDetails?staffID=${data.staffID}&&staffToken`} href={`/Staff/staffDetails?staffID=${data.staffID}&&staffToken`}>
                                                        <a>
                                                            {data.staffID}
                                                        </a>
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                <Link as={`/Staff/staffDetails?staffID=${data.staffID}&&staffToken`} href={`/Staff/staffDetails?staffID=${data.staffID}&&staffToken`}>
                                                        <a>
                                                            {data.lastname}
                                                        </a>
                                                    </Link>
                                                    
                                                </TableCell>
                                                <TableCell>{data.firstname}</TableCell>
                                                <TableCell>{data.Subjects.subject}</TableCell>
                                                
                                                <TableCell>{data.Gender.gender}</TableCell>
                                                <TableCell>{data.staffgrade.grade}</TableCell>
                                                <TableCell>{data.diploma}</TableCell>
                                                <TableCell>
                                                    <div>{new Date(data.dateOfAssumption).toLocaleDateString()}</div>
                                                    <div>{new Date(data.dateOfAssumption).toLocaleTimeString()}</div>
                                                </TableCell>
                                                
                                                
                                                <TableCell>{/* {data.bloodgroup} */}/</TableCell>
                                                <TableCell>{data.staffgrade.grade}</TableCell>
                                                <TableCell>{data.matricle}</TableCell>
                                                <TableCell>{data.phoneNumber}</TableCell>
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
export default StaffTable