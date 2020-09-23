import React from 'react';
import { Document, Page, Text, View, StyleSheet ,Image,BlobProvider, PDFDownloadLink,PDFViewer} from '@react-pdf/renderer';
import useSWR from "swr"
import {useState,useEffect,useRef} from "react"
import {ImageConverter} from "../../components/imageConverter/imageconvert"
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 1,
    padding: 5,
    flexGrow: 2
  },
  cells:{
      margin:4,

  }
});
 

    const MyDocument = ({imageState}) => {
            
            return (
                <Document title="student Information" author="Noubissie Landry">
                <Page size="A4"  style={styles.page} >
                {/* <View id="testDiv" > */}
                                {/* <CardHeader
                                    
                                    className="p-4 largeSize"
                                    avatar = {
                                        <Avatar className="bg-info">
                                            {` ${oneStudentdata ?  oneStudent.givenname.substring(0,1).toUpperCase() : null}`}
                                        </Avatar>
                                    }
                                    
                                    title = {`${oneStudentdata ? "ABOUT".concat(" ",oneStudentdata.oneStudent.familyname," ",oneStudentdata.oneStudent.givenname).toUpperCase() : null}`}
                                    subheader={`${new Date().toLocaleDateString()}`}
                                /> */}
                                
                            
                                
                                    <View className="centralize" style={styles.section}>
                                    {/* {imageState?<Image  source={{ uri:imageState.studentImage}} className="studentImage"/>:null} */}
                                        {/* {imageState?<Image  source={{ data: imageState, format:  'png' }} className="studentImage"/>:null} */}
                                        {imageState?<Image  source={{ uri: imageState }} className="studentImage"/>:null}
                                        
                                        {/* <img src={imageState} /> */}
                                        {/* <BlobProvider >
                                            {({ blob }) => {
                                            // const url = URL.createObjectURL(blob)
                                            const url = {imageState}
                                            return <a src={url}>Download</a>
                                            }}
                                        </BlobProvider> */}
                                    </View>
                                    {/* <View> */}
                                        
                                        {/* <TableContainer >
                                            <Table size="small" stickyHeader={true} padding="default" >
                                                <TableHead>
                                                    <TableRow hover role="checkbox" tabIndex={-1} >
                                                        <TableCell colSpan="2"className="bg-info" >
                                                            <View className="bolder">Student Information</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover role="checkbox" tabIndex={-1} >
                                                        <TableCell colSpan="2" >
                                                            <View className="bolder">Biography</View>
                                                            {oneStudentdata ? oneStudentdata.oneStudent.shortbiography : null}
                                                        </TableCell>
                                                        
                                                    </TableRow> */}
                                                    <View style={styles.section}>
                                                        <Text style={styles.cells}>
                                                            Family Name
                                                        </Text>
                                                        <Text style={styles.cells}>
                                                            given Name
                                                        </Text>
                                                    </View>
                                                    <View style={styles.section}>
                                                        
                                                        <Text style={styles.cells}>Noubissie</Text>
                                                        <Text style={styles.cells}>
                                                            Landry Placid
                                                        </Text>
                                                        
                                                    </View>
                                                    
                                                    
                                                    {/* <TableRow hover>
                                                        <TableCell  >
                                                            Given Name
                                                        </TableCell>
                                                        <TableCell  >
                                                        <View className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.givenname : null}</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Admision ID
                                                        </TableCell>
                                                        <TableCell  >
                                                        <View className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.AdmissionID : null}</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell >
                                                            Date of Birth
                                                        </TableCell>
                                                        <TableCell  >
                                                            <View className="bolder">{oneStudentdata ? new Date(oneStudentdata.oneStudent.dateofbirth).toLocaleDateString() : null}</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Age
                                                        </TableCell>
                                                        <TableCell  >
                                                            <View className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.age : null}</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Blood Group
                                                        </TableCell>
                                                        <TableCell  >
                                                            <View className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.bloodgroup : null}</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Gender
                                                        </TableCell>
                                                        <TableCell  >
                                                            <View className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.Gender.gender : null}</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Email
                                                        </TableCell>
                                                        <TableCell  >
                                                            <View className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.email : null}</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Phone Number
                                                        </TableCell>
                                                        <TableCell  >
                                                            <View className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.phonenumber : null}</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Religion
                                                        </TableCell>
                                                        <TableCell  >
                                                            <View className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.religion : null}</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Date of errollment
                                                        </TableCell>
                                                        <TableCell  >
                                                            <View className="bolder">
                                                                {oneStudentdata ? new Date(oneStudentdata.oneStudent.dateOfEnrollment).toLocaleDateString() : null}
                                                                <View>{oneStudentdata ? new Date(oneStudentdata.oneStudent.dateOfEnrollment).toLocaleTimeString() : null}</View>
                                                            </View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Section
                                                        </TableCell>
                                                        <TableCell  >
                                                            <View className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.Section.section : null}</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Address
                                                        </TableCell>
                                                        <TableCell  >
                                                            <View className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.StudentAddress : null}</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                    
                                                        <TableCell  colSpan="2" className="bg-info">
                                                            <View className="bolder">Guadiant Information</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Guidant Name
                                                        </TableCell>
                                                        <TableCell  >
                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Relationship
                                                        </TableCell>
                                                        <TableCell  >
                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Occupation
                                                        </TableCell>
                                                        <TableCell  >
                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Address
                                                        </TableCell>
                                                        <TableCell  >
                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Email
                                                        </TableCell>
                                                        <TableCell  >
                                                            
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow hover>
                                                        <TableCell colSpan="2"  className="bg-info">
                                                            <View className="bolder">Parents Information</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell colSpan="2"  className="bg-info pl-4">
                                                            <View className="bolder">Father Information</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Father Name
                                                        </TableCell>
                                                        <TableCell  >
                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Father occupation
                                                        </TableCell>
                                                        <TableCell  >
                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Father Address
                                                        </TableCell>
                                                        <TableCell  >
                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Father Contact
                                                        </TableCell>
                                                        <TableCell  >
                                                            
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow hover>
                                                        <TableCell colSpan="2"  className="bg-info pl-4">
                                                            <View className="bolder">Mother Information</View>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Mother Name
                                                        </TableCell>
                                                        <TableCell  >
                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Mother Occupation
                                                        </TableCell>
                                                        <TableCell  >
                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Mother Address
                                                        </TableCell>
                                                        <TableCell  >
                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow hover>
                                                        <TableCell  >
                                                            Mothers Contact
                                                        </TableCell>
                                                        <TableCell  >
                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow></TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer> */}
                                    {/* </View>
                                    
                                </View> */}
                </Page>
                </Document>
      )
                                    };

let test = ()=>{

    let [state,setState] = useState(null)
            const {data:oneStudentdata, error:onStudentError} = useSWR("/api/studentapi?AdmissionID=GO10")
            
            
            let imageState = ImageConverter(oneStudentdata)

            useEffect(()=>{
                setState(true)
            },[])
    
        if(state){return (
            // 
                    // <BlobProvider document={<MyDocument />}>
                    //     {({ blob }) => {
                    //     const url = imageState
                    //     return (
                    //         <>
                                // {/* <img src={url}/> */}
                    <PDFViewer width="100%" height="100%">
                        {/* <img src={imageState}/>  */}
                        <MyDocument imageState={imageState}/> 
                        {/* <MyDocument imageState={oneStudentdata}/>  */}
                    </PDFViewer>
                    //         </>
                    //             )
                    //     }}
                    // </BlobProvider>
                // </>
            // 
    )
    }
    else{
        return <div>hello</div>
    }}

export default test