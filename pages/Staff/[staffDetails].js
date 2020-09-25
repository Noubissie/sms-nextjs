// import {useRouter} from "next/router"
import {useState,useEffect,useRef} from "react"
import Layout from "../../components/layout"
import dynamic from "next/dynamic"
import Card from "@material-ui/core/Card"
import useSWR from "swr"
// import StudentDatabase from "../../database/studentDatabase"
import Button from "@material-ui/core/Button"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from "@material-ui/core/Grid"
import  CardHeader  from "@material-ui/core/CardHeader"
import { Avatar } from "@material-ui/core"
import {useRouter} from "next/router"

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
// import StudentTemplate from "../../components/topdfContainer/studentTemplate"
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from "../../components/topdfContainer/studentTemplate"
import PrintIcon from '@material-ui/icons/Print';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload'



import TextField from "@material-ui/core/TextField"
import {Field,Formik,Form,ErrorMessage, FastField} from "formik"
// import Styles from "../../components/studentComponent/student.module.css"
import Input from '@material-ui/core/Input';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import AddIcon from '@material-ui/icons/Add';



import Autocomplete from "@material-ui/lab/Autocomplete"
// import {errorFieldMessage} from "../../components/error/errorFieldMessage"
// import GenderDatabase from "../../database/GeneralDatabase"
// import SectionDatabase from "../../database/sectiondatabase"





import {ImageConverter} from "../../components/imageConverter/imageconvert"

import {ValidationSchema, initialValue} from "../../components/studentfile/studentFormschema"
// import GenderDatabase from "../../database/GeneralDatabase"
// import SectionDatabase from "../../database/sectiondatabase"

const BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})

        // const initialState = {
        //     stuImage: null
        // }

let religiondata =[{id:1,doctrine:"Christain"},{id:2,doctrine:"Muslim"},{id:3,doctrine:"Pegan"},{id:4,doctrine:"Traditionalist"}]
let bloodgroupdata =[{id:1,group:"A+"},{id:2,group:"A-"},{id:3,group:"B+"},{id:4,group:"B-"},{id:5,group:"AB"},{id:6,group:"0+"},{id:7,group:"O-"}]

let initialStateImageValues = {
    
    imagesizeError:"none",
    imagedataBack:null,
    filename:""
}
let initialEditIcons = {

        studentImageIconEditOff:"none",
        FamilyNameIconEditOff:"none",
        GivenNameIconEditOff:"none",
        DateOfBirthIconEditOff:"none",
        GenderIconEditOff: "none",
        StudentAddressIconEditOff:"none",
        BloodGroupIconEditOff:"none",
        ReligionIconEditOff:"none",
        eMailIconEditOff:"none",
        
        sectionIconEditOff:"none",
        AdmissionIDIconEditOff:"none",
        PhoneIconEditOff:"none",
        shortBioIconEditOff:"none",
        // imageholder:state.filename

        FatherNameIconEditOff:"none",
        FatherOccupationIconEditOff:"none",
        FatherAddressIconEditOff:"none",
        FatherContactIconEditOff:"none",
        // Mother info
        MotherNameIconEditOff:"none",
        MotherOccupationIconEditOff:"none",
        MotherAddressIconEditOff:"none",
        MotherContactIconEditOff:"none",
}

let initialDisplay = {
        studentImageEditon:"inline",
        FamilyNameEditOn:"inline",
        GivenNameEditOn:"inline",
        DateOfBirthEditOn:"inline",
        GenderEditOn: "inline",
        StudentAddressEditOn:"inline",
        BloodGroupEditOn:"inline",
        ReligionEditOn:"inline",
        eMailEditOn:"inline",
        
        sectionEditOn:"inline",
        AdmissionIDEditOn:"inline",
        PhoneEditOn:"inline",
        shortBioEditOn:"inline",
        // imageholder:state.filename

        FatherNameEditOn:"inline",
        FatherOccupationEditOn:"inline",
        FatherAddressEditOn:"inline",
        FatherContactEditOn:"inline",
        // Mother info
        MotherNameEditOn:"inline",
        MotherOccupationEditOn:"inline",
        MotherAddressEditOn:"inline",
        MotherContactEditOn:"inline",
// 
// 
// 
        studentImageEditOff:"none",
        FamilyNameEditOff:"none",
        GivenNameEditOff:"none",
        DateOfBirthEditOff:"none",
        GenderEditOff: "none",
        StudentAddressEditOff:"none",
        BloodGroupEditOff:"none",
        ReligionEditOff:"none",
        eMailEditOff:"none",
        
        sectionEditOff:"none",
        AdmissionIDEditOff:"none",
        PhoneEditOff:"none",
        shortBioEditOff:"none",
        // imageholder:state.filename

        FatherNameEditOff:"none",
        FatherOccupationEditOff:"none",
        FatherAddressEditOff:"none",
        FatherContactEditOff:"none",
        // Mother info
        MotherNameEditOff:"none",
        MotherOccupationEditOff:"none",
        MotherAddressEditOff:"none",
        MotherContactEditOff:"none",
}

let n = 0
let StudentDetails =  ()=>{
    // n = n+1
    let [stateDownloadIcon,setStateDownloadIcon] = useState(null)
    let [displayState , setDisplayState] = useState(initialDisplay)
    let [displayEditIconState , setDisplayEditIconState] = useState(initialEditIcons)

    let [state , setstate] = useState(initialStateImageValues)

    let {data:sectionGetData, error:sectionGetError} =  useSWR("/api/sectionapi")
    let {data:genderGetData, error:genderGetError} =  useSWR("/api/generalapi")
    let sectiondata = (sectionGetData ? sectionGetData.length != 0 && sectionGetData :undefined) || [{id_:"",section:"", languages:""}]
    let genderdata = (genderGetData ? genderGetData.length != 0 && genderGetData :undefined) || [{id:"",gender:""}]

    // let initialValues=initialValue(genderdata,bloodgroupdata,religiondata,sectiondata)
    

    let router = useRouter()
    console.log("router::",router.query)
    // let [state , setstate] = useState(initialState)
    // // let router = useRouter()
    // oneStudent = JSON.parse(oneStudent)
    // // console.log("router::",router)
    // console.log("students:::",oneStudent)
    let {AdmissionID:studentAdmissionID} = router.query
    // const {data:oneStudentdata, error:onStudentError} = useSWR("/api/studentapi?AdmissionID=GO10&student=GO11")
    const {data:oneStudentdata, error:onStudentError} = useSWR(`/api/studentapi?AdmissionID=${studentAdmissionID}`)
   
     // student=GO11 NOT USEFUL JUST TESTING the end point
    let initialValues={
        FamilyName:oneStudentdata ? oneStudentdata.oneStudent.familyname:"",
        GivenName:oneStudentdata ? oneStudentdata.oneStudent.givenname:"",
        DateOfBirth:oneStudentdata ? oneStudentdata.oneStudent.dateofbirth:"",
        Gender: genderdata[0],
        StudentAddress:oneStudentdata ? oneStudentdata.oneStudent.StudentAddress:"",
        BloodGroup:bloodgroupdata[0],
        Religion:religiondata[0],
        eMail:oneStudentdata ? oneStudentdata.oneStudent.email:"",
        
        section:sectiondata[0],
        // AdmissionID:"",
        Phone:oneStudentdata ? oneStudentdata.oneStudent.phonenumber:"",
        shortBio:oneStudentdata ? oneStudentdata.oneStudent.shortbiography:"",
        // imageholder:state.filename
    
        FatherName:oneStudentdata ? oneStudentdata.oneStudent.FatherName:"",
        FatherOccupation:oneStudentdata ? oneStudentdata.oneStudent.FatherOccupation:"",
        FatherAddress:oneStudentdata ? oneStudentdata.oneStudent.FatherAddress:"",
        FatherContact:oneStudentdata ? oneStudentdata.oneStudent.FatherContact:"",
        // Mother info
        MotherName:oneStudentdata ? oneStudentdata.oneStudent.MotherName:"",
        MotherOccupation:oneStudentdata ? oneStudentdata.oneStudent.MotherOccupation:"",
        MotherAddress:oneStudentdata ? oneStudentdata.oneStudent.MotherAddress:"",
        MotherContact:oneStudentdata ? oneStudentdata.oneStudent.MotherContact:"",
        }
    // const {data:oneStudentdata, error:onStudentError} = useSWR("public/uploads/Student/images/GO10_photo.jpeg")
    // console.log("check",oneStudentdata)
    console.log("onestudent",oneStudentdata)
    useEffect(()=>{
        setStateDownloadIcon(true)
      },[])
    
        // console.log("type::",typeof(oneStudentdata.studentImage))
        // let responce =  URL.createObjectURL(oneStudentdata.studentImage)
        // console.log(responce)
        // const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
        //     const byteCharacters = atob(b64Data);
        //     const byteArrays = [];

        //     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        //         const slice = byteCharacters.slice(offset, offset + sliceSize);

        //         const byteNumbers = new Array(slice.length);
        //         for (let i = 0; i < slice.length; i++) {
        //         byteNumbers[i] = slice.charCodeAt(i);
        //         }

        //         const byteArray = new Uint8Array(byteNumbers);
        //         byteArrays.push(byteArray);
        //     }
                
        //     const blob = new Blob(byteArrays, {type: contentType});
        //     return blob;
        //     }

        //     const contentType = 'image/png';

        //     const b64Data = oneStudentdata.studentImage

        //     const blob = b64toBlob(b64Data, contentType);
        //     const blobUrl = URL.createObjectURL(blob);
        //      setstate((prev)=>({
        //         stuImage: blobUrl
        //      }))
        let imageState = ImageConverter(oneStudentdata)
       
        
        
    // if(oneStudent){
        // const imageURL = new Image()    
        // imageURL.src = oneStudent.studentImage
        // document.body.appendChild(imageURL)
        // console.log(oneStudent.studentImage)
        // const imageURL = reader.readAsBinaryString(oneStudent.studentImage)
        
    // }
    
    
    return (
        
        <Layout>
            
            <div>
                {/* <Button onClick={pdfConverter}>help</Button> */}
                
                <div className="mt-4 mb-4 ml-3">
                    <h3 className="whitesnow mr-3 p-1 ">Student Details</h3>
                    <BrowserSiteOutput marginRight="mr-3"/>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={ValidationSchema}
                    enableReinitialize
                >
                    {
                        ({
                            values,
                            getFieldProps,
                            setFieldValue,
                            setFieldError,
                            errors,
                            validateOnBlur,
                            handleSubmit,
                            handleBlur,
                            handleChange,
                            isValid,
                            dirty,
                            touched
                        })=>{
                            return(
                        
                            <Form>
                                <Card id="testDiv">
                                        <div className="float-right">
                                            <ul className="listStyle">
                                                {/* <li className="p-2">
                                                    {stateDownloadIcon ? <PDFDownloadLink   document={<MyDocument 
                                                            help={oneStudentdata ? oneStudentdata.oneStudent.familyname : null}
                                                        />} fileName="studentID.pdf">
                                                        {({ blob, url, loading, error }) => (loading ? '' : <CloudDownloadIcon />)}
                                                    </PDFDownloadLink>: null}
                                                </li> */}
                                                <li className="p-2">{stateDownloadIcon?<a href="#"  download target="_blank" rel="noopener noreferrer"> <PrintIcon /> </a>:null}</li>
                                            </ul>
                                            
                                        </div>
                                        <CardHeader
                                            
                                            className="p-4 largeSize"
                                            avatar = {
                                                <Avatar className="bg-info">
                                                    {` ${oneStudentdata ?  oneStudentdata.oneStudent.givenname.substring(0,1).toUpperCase() : null}`}
                                                </Avatar>
                                            }
                                            
                                            title = {`${oneStudentdata ? "ABOUT".concat(" ",oneStudentdata.oneStudent.familyname," ",oneStudentdata.oneStudent.givenname).toUpperCase() : null}`}
                                            subheader={`${new Date().toLocaleDateString()}`}
                                        />
                                        
                                    
                                        <Grid container  spacing={0} >

                                                <Grid item xs={12}  md={4}  className="text-center" >
                                                
                                                <div style={{display:displayState.studentImageEditon}} className="centralize" 
                                                    
                                                    onMouseOver={
                                                        ()=>setDisplayEditIconState((prev)=>({
                                                                ...prev,
                                                                studentImageIconEditOff:"inline"
                                                                
                                                            }))
                                                        }
                                                    onMouseOut={
                                                        ()=>setDisplayEditIconState((prev)=>({
                                                            ...prev,
                                                            studentImageIconEditOff:"none"
                                                            
                                                        }))
                                                    }    
                                                        > 
                                                    <div style={{display:displayEditIconState.studentImageIconEditOff}} >

                                                        <Button  onClick={()=>{
                                                                setDisplayState((prev)=>({
                                                                    ...prev,
                                                                    studentImageEditOff:"inline",
                                                                    studentImageEditon:"none"
                                                                }))
                                                            }}><EditIcon />
                                                        </Button>

                                                        <Button>
                                                            <DeleteForeverIcon />
                                                        </Button>
                                                    </div>
                                                    <img  src={imageState} className="studentImage"/>
                                                </div>
                                                <div style={{display:displayState.studentImageEditOff}}>
                                                    <div>  
                                                        <label htmlFor="image" className="bg-info">
                                                            
                                                                <AddIcon fontSize="large" color="primary"/>
                                                            
                                                        </label>
                                                        <Button onClick={()=>{
                                                                setDisplayState((prev)=>({
                                                                    ...prev,
                                                                    studentImageEditOff:"none",
                                                                    studentImageEditon:"inline"
                                                                }))
                                                            }}><CloseIcon />
                                                        </Button>
                                                        <Button onClick={async ()=>{
                                                                let studentImageEdit = await fetch("/api/studentapi",{
                                                                    body: JSON.stringify(
                                                                        {
                                                                            studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                            imageEditValue:state.imagedataBack
                                                                        }),
                                                                    method:"PUT"
                                                                })
                                                                setDisplayState((prev)=>({
                                                                    ...prev,
                                                                    studentImageEditOff:"none",
                                                                    studentImageEditon:"inline"
                                                                }))
                                                            }}><DoneIcon />         
                                                        </Button>
                                                    </div>

                                                    <div className="bg-info text-center">
                                                        <TextField 
                                                            // component={TextField}
                                                            // error={errors.hasOwnProperty("imageholder") && touched.hasOwnProperty("imageholder") ? true : false }
                                                            
                                                            // label={errors.hasOwnProperty("imageholder") && touched.hasOwnProperty("imageholder") ? errors.imageholder : "image" }
                                                            disabled
                                                            name="imageholder"
                                                            id="imageholder"
                                                            className="w-100 bg-light text-danger"
                                                            // {...getFieldProps("imageholder")}
                                                            value={state.filename} />
                                                        <h4 style={{display:state.imagesizeError,color:"red"}} >Image size less than 1MB</h4>
                                                        <Field
                                                            width="200cm"
                                                            height="200cm"
                                                            className="border border-info rounded-circle m-0 p-0 bg-secondary"
                                                            // onerror="this.onerror=null;this.src='./default.jpg';"
                                                            // component={(params)=><img {...params} src={state}/>}
                                                            component={params=>{
                                                            if(state.imagedataBack){
                                                                return <img {...params} src={state.imagedataBack}/>
                                                            }
                                                            else{
                                                                return <img  {...params} src="/default.jpg"/>
                                                            }
                                                            }
                                                        }
                                                            />
                                                    </div> 
                                                    
                                                    <Field
                                                        // error={errors.hasOwnProperty("image") && touched.hasOwnProperty("image") ? true : false }
                                                        // {...getFieldProps("image")}
                                                        // label={errors.hasOwnProperty("image") && touched.hasOwnProperty("image") ? errors.DateOfBirth : "image" }
                                                        // value={values.image}
                                                        // name="image"
                                                        id="image"
                                                        component={Input}
                                                        className="w-100 d-none"
                                                        variant="filled"
                                                        type="file"
                                                        accept=".jpg, .jpeg, .png"
                                                        // multiple
                                                        onChange={(event)=>{
                                                            // handleChange
                                                            let fileList = event.target.files

                                                            const formData = new FormData()
                                                            
                                                            for(const file of fileList){
                                                                const name = file.name ? file.name : 'NOT SUPPORTED';

                                                                const type = file.type ? file.type : 'NOT SUPPORTED';

                                                                const size = file.size ? file.size : 'NOT SUPPORTED';

                                                                        if (file.type && file.type.indexOf('image') === -1) {
                                                                            console.log('File is not an image.', file.type, file,file.type.indexOf('image'));
                                                                            return;
                                                                        }
                                                                        if(file.size > 1000000){
                                                                            setstate((prev)=>({
                                                                                ...prev,
                                                                                filename:null,
                                                                                imagedataBack:null,
                                                                                imagesizeError:"inline"
                                                                            }))
                                                                            return
                                                                        }
                                                                        const reader = new FileReader();
                                                                        
                                                                        reader.addEventListener('load', (event) => {
                                                                            
                                                                            setstate((prev)=>({
                                                                                ...prev,
                                                                                imagedataBack:event.target.result,
                                                                                filename:file.name
                                                                            }))
                                                                            console.log("filename::",state.filename)
                                                                            
                                                                        });
                                                                        reader.readAsDataURL(file)

                                                                        formData.append("file",file)
                                                                    
                                                            }
                                                            // setFieldValue("image",fileList[0].name)
                                                            
                                                            
                                                            // handleChange(event)
                                                        }}
                                                        />
                                                        
                                                    
                                                      
                                                    </div>     
                                                </Grid>
                                                {/* <Grid item xs={12}  md={4} className="bg-info text-center" style={{display:displayState.studentImageEditOff}}> */}
                                                    {/* <FastField */}
                                                    

                                                        
                                                {/* </Grid> */}
                                                
                                        
                                            <Grid item container  xs={12} md={8} spacing={0}>
                                                
                                                <TableContainer >
                                                    <Table size="small" stickyHeader={true} padding="default" >
                                                        <TableHead>
                                                            <TableRow hover role="checkbox" tabIndex={-1} >
                                                                <TableCell colSpan="2"className="bg-info" >
                                                                    <div className="bolder">Student Information</div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover role="checkbox" tabIndex={-1} >
                                                                <TableCell colSpan="2">
                                                                    <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    shortBioIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                shortBioIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        <div className="bolder">
                                                                            Biography
                                                                        </div>
                                                                            <span style={{display:displayState.shortBioEditOn}}>
                                                                                <span >
                                                                                    {oneStudentdata ? oneStudentdata.oneStudent.shortbiography : null}
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.shortBioIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                shortBioEditOff: "inline",
                                                                                                shortBioEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.shortBioEditOff}}>
                                                                            <Field
                                                                                // error={errors.hasOwnProperty("shortBio") && touched.hasOwnProperty("shortBio") ? true : false }
                                                                                {...getFieldProps("shortBio")}
                                                                                label={errors.hasOwnProperty("shortBio") && touched.hasOwnProperty("shortBio") ? errors.shortBio : "shortBio" }
                                                                                value={values.shortBio}
                                                                                name="shortBio"
                                                                                id="shortBio"
                                                                                // component={()=><textarea></textarea>}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                as="textarea"
                                                                                
                                                                            />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        shortBioEditOff:"none",
                                                                                        shortBioEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                shortbiography:values.shortBio
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        shortBioEditOff:"none",
                                                                                        shortBioEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                    
                                                                </TableCell>
                                                                
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>
                                                                    Family Name
                                                                </TableCell>
                                                                <TableCell >
                                                                    
                                                                    
                                                                    <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    
                                                                                    FamilyNameIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                FamilyNameIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.FamilyNameEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.familyname : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.FamilyNameIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                FamilyNameEditOff: "inline",
                                                                                                FamilyNameEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.FamilyNameEditOff}}>
                                                                        <Field
                                                                            error={errors.hasOwnProperty("FamilyName") && touched.hasOwnProperty("FamilyName") ? true : false }
                                                                            {...getFieldProps("FamilyName")}
                                                                            label={errors.hasOwnProperty("FamilyName") && touched.hasOwnProperty("FamilyName") ? errors.FamilyName : "Family Name" }
                                                                            value={values.FamilyName}
                                                                            name="FamilyName"
                                                                            id="FamilyName"
                                                                            component={TextField}
                                                                            className="w-100"
                                                                            variant="filled"
                                                                            
                                                                            />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        FamilyNameEditOff:"none",
                                                                                        FamilyNameEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                familyname:values.FamilyName
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        FamilyNameEditOff:"none",
                                                                                        FamilyNameEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>


                                                                </TableCell>
                                                            </TableRow>
                                                            
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Given Name
                                                                </TableCell>
                                                                <TableCell  >
                                                                    <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    GivenNameIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                GivenNameIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.GivenNameEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.givenname : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.GivenNameIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                GivenNameEditOff: "inline",
                                                                                                GivenNameEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.GivenNameEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("GivenName") && touched.hasOwnProperty("GivenName") ? true : false }
                                                                                {...getFieldProps("GivenName")}
                                                                                label={errors.hasOwnProperty("GivenName") && touched.hasOwnProperty("GivenName") ? errors.GivenName : "Given Name" }
                                                                                value={values.GivenName}
                                                                                name="GivenName"
                                                                                id="GivenName"
                                                                                component={TextField}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        GivenNameEditOff:"none",
                                                                                        GivenNameEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                givenname:values.GivenName
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        GivenNameEditOff:"none",
                                                                                        GivenNameEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell  >
                                                                    Admision ID
                                                                </TableCell>
                                                                <TableCell  >
                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.AdmissionID : null}</span>
                                                                {/* <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    AdmissionIDIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                AdmissionIDIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.AdmissionIDEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.AdmissionID : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.AdmissionIDIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                AdmissionIDEditOff: "inline",
                                                                                                AdmissionIDEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.AdmissionIDEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("GivenName") && touched.hasOwnProperty("GivenName") ? true : false }
                                                                                {...getFieldProps("GivenName")}
                                                                                label={errors.hasOwnProperty("GivenName") && touched.hasOwnProperty("GivenName") ? errors.GivenName : "Given Name" }
                                                                                value={values.GivenName}
                                                                                name="GivenName"
                                                                                id="GivenName"
                                                                                component={TextField}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        AdmissionIDEditOff:"none",
                                                                                        AdmissionIDEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                AdmissionID:values.AdmissionID
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        AdmissionIDEditOff:"none",
                                                                                        AdmissionIDEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>  */}
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell >
                                                                    Date of Birth
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    DateOfBirthIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                DateOfBirthIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.GivenNameEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? new Date(oneStudentdata.oneStudent.dateofbirth).toLocaleDateString() : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.DateOfBirthIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                DateOfBirthEditOff: "inline",
                                                                                                DateOfBirthEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.DateOfBirthEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("DateOfBirth") && touched.hasOwnProperty("DateOfBirth") ? true : false }
                                                                                {...getFieldProps("DateOfBirth")}
                                                                                label={errors.hasOwnProperty("DateOfBirth") && touched.hasOwnProperty("DateOfBirth") ? errors.DateOfBirth : "Date Of Birth" }
                                                                                value={values.DateOfBirth}
                                                                                name="DateOfBirth"
                                                                                id="DateOfBirth"
                                                                                component={TextField}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                type="date"
                                                                                InputLabelProps={{
                                                                                    shrink:true
                                                                                }}
                                                                                
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        DateOfBirthEditOff:"none",
                                                                                        DateOfBirthEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                dateofbirth:values.DateOfBirth
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        DateOfBirthEditOff:"none",
                                                                                        DateOfBirthEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>   
                                                                </TableCell>
                                                            </TableRow>

                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Age
                                                                </TableCell>
                                                                <TableCell>
                                                                    <div className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.age : null}</div>
                                                                </TableCell>
                                                            </TableRow>

                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Blood Group
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    BloodGroupIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                BloodGroupIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.BloodGroupEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.bloodgroup : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.BloodGroupIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                BloodGroupEditOff: "inline",
                                                                                                BloodGroupEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.BloodGroupEditOff}}>
                                                                            <Field
                                                                
                                                                                component={Autocomplete}
                                                                                // {...getFieldProps("Gender")}
                                                                                value={values.BloodGroup}
                                                                                defaultValue={values.BloodGroup}
                                                                                onBlur={handleBlur}
                                                                                onChange={(e,selectedOption )=>
                                                                                    {setFieldValue("BloodGroup", selectedOption)
                                                                                    //  setFieldError("Gender",errors.Gender)
                                                                                        }
                                                                                }
                                                                                
                                                                                // inputValue={values.Gender.title}
                                                                                
                                                                                options={bloodgroupdata}
                                                                                name="BloodGroup"
                                                                                id="BloodGroup"
                                                                                getOptionSelected={(option,value)=>option.group == value.group}
                                                                                getOptionLabel={option => option.group}
                                                                                renderInput={params => (
                                                                                    <>
                                                                                    
                                                                                    <Field 
                                                                                    component={TextField}
                                                                                    {...params}
                                                                                    
                                                                                    name="BloodGroup"
                                                                                    error={errors.hasOwnProperty("BloodGroup") && touched.hasOwnProperty("BloodGroup") ? true : false }
                                                                                    label={errors.hasOwnProperty("BloodGroup") && touched.hasOwnProperty("BloodGroup") ? errors.BloodGroup : "BloodGroup" }
                                                                                    variant="filled"    
                                                                                    
                                                                                />
                                                                                    </>
                                                                                
                                                                                )}

                                                                                renderOption={(option, { inputValue }) => {
                                                                                const matches = match(option.group, inputValue);
                                                                                const parts = parse(option.group, matches);
                                                                        
                                                                                return (
                                                                                    <div>
                                                                                    {parts.map((part, index) => (
                                                                                        <span key={index} >
                                                                                        {part.text}
                                                                                        </span>
                                                                                    ))}
                                                                                    </div>
                                                                                );
                                                                                }}
                                                                            />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        BloodGroupEditOff:"none",
                                                                                        BloodGroupEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                bloodgroup:values.BloodGroup
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        BloodGroupEditOff:"none",
                                                                                        BloodGroupEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>   
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Gender
                                                                </TableCell>
                                                                <TableCell  >
                                                                    <div 
                                                                            onMouseOver={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                        ...prev,
                                                                                        GenderIconEditOff:"inline"
                                                                                        
                                                                                    }))
                                                                                }
                                                                            onMouseOut={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    GenderIconEditOff:"none"
                                                                                    
                                                                                }))
                                                                        } >
                                                                        
                                                                            <span style={{display:displayState.GenderEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.Gender.gender : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.GenderIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                GenderEditOff: "inline",
                                                                                                GenderEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.GenderEditOff}}>
                                                                        <Field
                                                        
                                                                                component={Autocomplete}
                                                                                // {...getFieldProps("Gender")}
                                                                                value={values.Gender}
                                                                                onBlur={handleBlur}
                                                                                onChange={(e,selectedOption )=>
                                                                                    {setFieldValue("Gender", selectedOption)
                                                                                    //  setFieldError("Gender",errors.Gender)
                                                                                        }
                                                                                }
                                                                                
                                                                                // inputValue={values.Gender.title}
                                                                                options={genderdata}
                                                                                name="Gender"
                                                                                id="Gender"
                                                                                
                                                                                getOptionSelected = {(option,value)=> option.gender == value.gender}
                                                                                getOptionLabel={option => option.gender}
                                                                                renderInput={params => (
                                                                                    <>
                                                                                    
                                                                                    <Field 
                                                                                    component={TextField}
                                                                                    {...params}
                                                                                    
                                                                                    name="Gender"
                                                                                    error={errors.hasOwnProperty("Gender") && touched.hasOwnProperty("Gender") ? true : false }
                                                                                    label={errors.hasOwnProperty("Gender") && touched.hasOwnProperty("Gender") ? errors.Gender : "Gender" }
                                                                                    variant="filled"    
                                                                                    
                                                                                />
                                                                                    </>
                                                                                
                                                                                )}

                                                                                    renderOption={(option, { inputValue }) => {
                                                                                    const matches = match(option.gender, inputValue);
                                                                                    const parts = parse(option.gender, matches);
                                                                            
                                                                                    return (
                                                                                        <div>
                                                                                        {parts.map((part, index) => (
                                                                                            <span key={index} >
                                                                                            {part.text}
                                                                                            </span>
                                                                                        ))}
                                                                                        </div>
                                                                                    );
                                                                                    }}
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        GenderEditOff:"none",
                                                                                        GenderEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                gender:values.Gender
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        GenderEditOff:"none",
                                                                                        GenderEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>  
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Email
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    eMailIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                eMailIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.eMailEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.email : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.eMailIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                eMailEditOff: "inline",
                                                                                                eMailEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.eMailEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("eMail") && touched.hasOwnProperty("eMail") ? true : false }
                                                                                {...getFieldProps("eMail")}
                                                                                label={errors.hasOwnProperty("eMail") && touched.hasOwnProperty("eMail") ? errors.eMail : "email" }
                                                                                value={values.eMail}
                                                                                name="eMail"
                                                                                id="eMail"
                                                                                component={TextField}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                type="email"
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        eMailEditOff:"none",
                                                                                        eMailEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                email:values.eMail
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        eMailEditOff:"none",
                                                                                        eMailEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                    
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Phone Number
                                                                </TableCell>
                                                                <TableCell  >
                                                                    <div 
                                                                            onMouseOver={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                        ...prev,
                                                                                        PhoneIconEditOff:"inline"
                                                                                        
                                                                                    }))
                                                                                }
                                                                            onMouseOut={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    PhoneIconEditOff:"none"
                                                                                    
                                                                                }))
                                                                        } >
                                                                            
                                                                                <span style={{display:displayState.PhoneEditOn}}>
                                                                                    <span >
                                                                                        <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.phonenumber : null}</span>
                                                                                    </span>
                                                                                    <span style={{display:displayEditIconState.PhoneIconEditOff}}>

                                                                                        <Button  onClick={()=>{
                                                                                                setDisplayState((prev)=>({
                                                                                                    ...prev,
                                                                                                    
                                                                                                    PhoneEditOff: "inline",
                                                                                                    PhoneEditOn:"none"
                                                                                                }))
                                                                                            }}><EditIcon />
                                                                                        </Button>

                                                                                        <Button>
                                                                                            <DeleteForeverIcon />
                                                                                        </Button>
                                                                                    </span>
                                                                            
                                                                                    
                                                                                </span>
                                                                            <span style={{display:displayState.PhoneEditOff}}>
                                                                                <Field
                                                                                        error={errors.hasOwnProperty("Phone") && touched.hasOwnProperty("Phone") ? true : false }
                                                                                        {...getFieldProps("Phone")}
                                                                                        label={errors.hasOwnProperty("Phone") && touched.hasOwnProperty("Phone") ? errors.Phone : "Phone" }
                                                                                        value={values.Phone}
                                                                                        name="Phone"
                                                                                        id="Phone"
                                                                                        component={TextField}
                                                                                        className="w-100"
                                                                                        variant="filled"
                                                                                        type="tel"
                                                                                        
                                                                                        
                                                                                        />
                                                                                <Button onClick={()=>{
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            PhoneEditOff:"none",
                                                                                            PhoneEditOn:"inline"
                                                                                        }))
                                                                                    }}><CloseIcon />
                                                                                </Button>
                                                                                <Button onClick={async ()=>{
                                                                                        let studentbiography = await fetch("/api/studentapi",{
                                                                                            body: JSON.stringify(
                                                                                                {
                                                                                                    studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                    phonenumber:values.Phone
                                                                                                }),
                                                                                            method:"PUT"
                                                                                        })
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            PhoneEditOff:"none",
                                                                                            PhoneEditOn:"inline"
                                                                                        }))
                                                                                    }}><DoneIcon />
                                                                                </Button>
                                                                            </span>
                                                                        </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Religion
                                                                </TableCell>
                                                                <TableCell  >
                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    ReligionIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                ReligionIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.ReligionEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.religion : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.ReligionIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                ReligionEditOff: "inline",
                                                                                                ReligionEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.ReligionEditOff}}>
                                                                            <Field
                                                            
                                                                                    component={Autocomplete}
                                                                                    // {...getFieldProps("Gender")}
                                                                                    value={values.Religion}
                                                                                    defaultValue={values.Religion}
                                                                                    onBlur={handleBlur}
                                                                                    onChange={(e,selectedOption )=>
                                                                                        {setFieldValue("Religion", selectedOption)
                                                                                        //  setFieldError("Gender",errors.Gender)
                                                                                            }
                                                                                    }
                                                                                    
                                                                                    // inputValue={values.Gender.title}
                                                                                    options={religiondata}
                                                                                    name="Religion"
                                                                                    id="Religion"
                                                                                    getOptionSelected = {(option,value)=> option.doctrine == value.doctrine}
                                                                                    getOptionLabel={option => option.doctrine}
                                                                                    renderInput={params => (
                                                                                        <>
                                                                                        
                                                                                        <Field 
                                                                                        component={TextField}
                                                                                        {...params}
                                                                                        
                                                                                        name="Religion"
                                                                                        error={errors.hasOwnProperty("Religion") && touched.hasOwnProperty("Religion") ? true : false }
                                                                                        label={errors.hasOwnProperty("Religion") && touched.hasOwnProperty("Religion") ? errors.Religion : "Religion" }
                                                                                        variant="filled"    
                                                                                        
                                                                                    />
                                                                                        </>
                                                                                    
                                                                                    )}

                                                                                    renderOption={(option, { inputValue }) => {
                                                                                    const matches = match(option.doctrine, inputValue);
                                                                                    const parts = parse(option.doctrine, matches);
                                                                            
                                                                                    return (
                                                                                        <div>
                                                                                        {parts.map((part, index) => (
                                                                                            <span key={index} >
                                                                                            {part.text}
                                                                                            </span>
                                                                                        ))}
                                                                                        </div>
                                                                                    );
                                                                                    }}
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        ReligionEditOff:"none",
                                                                                        ReligionEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                religion:values.Religion
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        ReligionEditOff:"none",
                                                                                        ReligionEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Date of errollment
                                                                </TableCell>
                                                                <TableCell  >
                                                                    <div className="bolder">
                                                                        {oneStudentdata ? new Date(oneStudentdata.oneStudent.dateOfEnrollment).toLocaleDateString() : null}
                                                                        <div>{oneStudentdata ? new Date(oneStudentdata.oneStudent.dateOfEnrollment).toLocaleTimeString() : null}</div>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Section
                                                                </TableCell>
                                                                <TableCell  >

                                                                    <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    sectionIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                sectionIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.sectionEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.Section.section : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.sectionIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                sectionEditOff: "inline",
                                                                                                sectionEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.sectionEditOff}}>
                                                                        <Field
                                                                            component={Autocomplete}
                                                                            // {...getFieldProps("Gender")}
                                                                            value={values.section}
                                                                            onBlur={handleBlur}
                                                                            onChange={(e,selectedOption )=>
                                                                                {setFieldValue("section", selectedOption)
                                                                                //  setFieldError("Gender",errors.Gender)
                                                                                    }
                                                                            }
                                                                            
                                                                            // inputValue={values.Gender.title}
                                                                            options={sectiondata}
                                                                            name="section"
                                                                            id="section"
                                                                            getOptionSelected={(option, value) => option.section == value.section}
                                                                            getOptionLabel={option => option.section}
                                                                            renderInput={params => (
                                                                                <>
                                                                                
                                                                                <Field 
                                                                                    component={TextField}
                                                                                    {...params}
                                                                                    name="section"
                                                                                    error={errors.hasOwnProperty("section") && touched.hasOwnProperty("section") ? true : false }
                                                                                    label={errors.hasOwnProperty("section") && touched.hasOwnProperty("section") ? errors.section : "section" }
                                                                                    variant="filled"    
                                                                                    
                                                                                />
                                                                                </>
                                                                            
                                                                            )}
                            
                                                                                        renderOption={(option, { inputValue }) => {
                                                                                        const matches = match(option.section, inputValue);
                                                                                        const parts = parse(option.section, matches);
                                                                                
                                                                                        return (
                                                                                            <div>
                                                                                            {parts.map((part, index) => (
                                                                                                <span key={index} >
                                                                                                {part.text}
                                                                                                </span>
                                                                                            ))}
                                                                                            </div>
                                                                                        );
                                                                                        }}
                                                                                    />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        sectionEditOff:"none",
                                                                                        sectionEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                Section:values.section
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        sectionEditOff:"none",
                                                                                        sectionEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Address
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    StudentAddressIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                StudentAddressIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.StudentAddressEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.StudentAddress : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.StudentAddressIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                StudentAddressEditOff: "inline",
                                                                                                StudentAddressEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                            <span style={{display:displayState.StudentAddressEditOff}}>
                                                                                <Field
                                                                                        error={errors.hasOwnProperty("StudentAddress") && touched.hasOwnProperty("StudentAddress") ? true : false }
                                                                                        {...getFieldProps("StudentAddress")}
                                                                                        label={errors.hasOwnProperty("StudentAddress") && touched.hasOwnProperty("StudentAddress") ? errors.roll : "StudentAddress" }
                                                                                        value={values.StudentAddress}
                                                                                        name="StudentAddress"
                                                                                        id="StudentAddress"
                                                                                        component={TextField}
                                                                                        className="w-100"
                                                                                        variant="filled"
                                                                                        
                                                                                        
                                                                                    />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        StudentAddressEditOff:"none",
                                                                                        StudentAddressEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                StudentAddress:values.StudentAddress
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        StudentAddressEditOff:"none",
                                                                                        StudentAddressEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                            
                                                                <TableCell  colSpan="2" className="bg-info">
                                                                    <div className="bolder">Guadiant Information</div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Guidant Name
                                                                </TableCell>
                                                                <TableCell  >
                                                                    {/* <div className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.Gender.gender : null}</div> */}
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Relationship
                                                                </TableCell>
                                                                <TableCell  >
                                                                    {/* <div className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.Gender.gender : null}</div> */}
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Occupation
                                                                </TableCell>
                                                                <TableCell  >
                                                                    {/* <div className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.Gender.gender : null}</div> */}
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Address
                                                                </TableCell>
                                                                <TableCell  >
                                                                    {/* <div className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.Gender.gender : null}</div> */}
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Email
                                                                </TableCell>
                                                                <TableCell  >
                                                                    {/* <div className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.Gender.gender : null}</div> */}
                                                                </TableCell>
                                                            </TableRow>

                                                            <TableRow hover>
                                                                <TableCell colSpan="2"  className="bg-info">
                                                                    <div className="bolder">Parents Information</div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell colSpan="2"  className="bg-info pl-4">
                                                                    <div className="bolder">Father Information</div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Father Name
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    FatherNameIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                FatherNameIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.FatherNameEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.FatherName : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.FatherNameIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                FatherNameEditOff: "inline",
                                                                                                FatherNameEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                            <span style={{display:displayState.FatherNameEditOff}}>
                                                                                <Field
                                                                                    error={errors.hasOwnProperty("FatherName") && touched.hasOwnProperty("FatherName") ? true : false }
                                                                                    {...getFieldProps("FatherName")}
                                                                                    label={errors.hasOwnProperty("FatherName") && touched.hasOwnProperty("FatherName") ? errors.FatherName : "FatherName" }
                                                                                    value={values.FatherName}
                                                                                    name="FatherName"
                                                                                    id="FatherName"
                                                                                    component={TextField}
                                                                                    className="w-100"
                                                                                    variant="filled"
                                                                                    
                                                                                    />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        FatherNameEditOff:"none",
                                                                                        FatherNameEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                FatherName:values.FatherName
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        FatherNameEditOff:"none",
                                                                                        FatherNameEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Father occupation
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    FatherOccupationIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                FatherOccupationIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.FatherOccupationEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.FatherOccupation : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.FatherOccupationIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                FatherOccupationEditOff: "inline",
                                                                                                FatherOccupationEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.FatherOccupationEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("FatherOccupation") && touched.hasOwnProperty("FatherOccupation") ? true : false }
                                                                                {...getFieldProps("FatherOccupation")}
                                                                                label={errors.hasOwnProperty("FatherOccupation") && touched.hasOwnProperty("FatherOccupation") ? errors.FatherOccupation : "FatherOccupation" }
                                                                                value={values.FatherOccupation}
                                                                                name="FatherOccupation"
                                                                                id="FatherOccupation"
                                                                                component={TextField}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        FatherOccupationEditOff:"none",
                                                                                        FatherOccupationEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                FatherOccupation:values.FatherOccupation
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        FatherOccupationEditOff:"none",
                                                                                        FatherOccupationEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Father Address
                                                                </TableCell>
                                                                <TableCell  >
                                                                        <div 
                                                                                onMouseOver={
                                                                                    ()=>setDisplayEditIconState((prev)=>({
                                                                                            ...prev,
                                                                                            FatherAddressIconEditOff:"inline"
                                                                                            
                                                                                        }))
                                                                                    }
                                                                                onMouseOut={
                                                                                    ()=>setDisplayEditIconState((prev)=>({
                                                                                        ...prev,
                                                                                        FatherAddressIconEditOff:"none"
                                                                                        
                                                                                    }))
                                                                            } >
                                                                        
                                                                            <span style={{display:displayState.FatherAddressEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.FatherAddress : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.FatherAddressIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                FatherAddressEditOff: "inline",
                                                                                                FatherAddressEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.FatherAddressEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("FatherAddress") && touched.hasOwnProperty("FatherAddress") ? true : false }
                                                                                {...getFieldProps("FatherAddress")}
                                                                                label={errors.hasOwnProperty("FatherAddress") && touched.hasOwnProperty("FatherAddress") ? errors.FatherAddress : "FatherAddress" }
                                                                                value={values.FatherAddress}
                                                                                name="FatherAddress"
                                                                                id="FatherAddress"
                                                                                component={TextField}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        FatherAddressEditOff:"none",
                                                                                        FatherAddressEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                FatherAddress:values.FatherAddress
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        FatherAddressEditOff:"none",
                                                                                        FatherAddressEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Father Contact
                                                                </TableCell>
                                                                <TableCell  >
                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    FatherContactIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                FatherContactIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.FatherContactEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.FatherContact : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.FatherContactIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                FatherContactEditOff: "inline",
                                                                                                FatherContactEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.FatherContactEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("FatherContact") && touched.hasOwnProperty("FatherContact") ? true : false }
                                                                                {...getFieldProps("FatherContact")}
                                                                                label={errors.hasOwnProperty("FatherContact") && touched.hasOwnProperty("FatherContact") ? errors.FatherContact : "FatherContact" }
                                                                                value={values.FatherContact}
                                                                                name="FatherContact"
                                                                                id="FatherContact"
                                                                                component={TextField}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        FatherContactEditOff:"none",
                                                                                        FatherContactEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                FatherContact:values.FatherContact
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        FatherContactEditOff:"none",
                                                                                        FatherContactEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>

                                                            <TableRow hover>
                                                                <TableCell colSpan="2"  className="bg-info pl-4">
                                                                    <div className="bolder">Mother Information</div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Mother Name
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    MotherNameIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                MotherNameIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.MotherNameEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.MotherName : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.MotherNameIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                MotherNameEditOff: "inline",
                                                                                                MotherNameEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.MotherNameEditOff}}>
                                                                            <Field
                                                                                    error={errors.hasOwnProperty("MotherName") && touched.hasOwnProperty("MotherName") ? true : false }
                                                                                    {...getFieldProps("MotherName")}
                                                                                    label={errors.hasOwnProperty("MotherName") && touched.hasOwnProperty("MotherName") ? errors.MotherName : "MotherName" }
                                                                                    value={values.MotherName}
                                                                                    name="MotherName"
                                                                                    id="MotherName"
                                                                                    component={TextField}
                                                                                    className="w-100"
                                                                                    variant="filled"
                                                                                    
                                                                                    />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        MotherNameEditOff:"none",
                                                                                        MotherNameEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                MotherName:values.MotherName
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        MotherNameEditOff:"none",
                                                                                        MotherNameEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Mother Occupation
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    MotherOccupationIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                MotherOccupationIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.MotherOccupationEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.MotherOccupation : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.MotherOccupationIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                MotherOccupationEditOff: "inline",
                                                                                                MotherOccupationEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.MotherOccupationEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("MotherOccupation") && touched.hasOwnProperty("MotherOccupation") ? true : false }
                                                                                {...getFieldProps("MotherOccupation")}
                                                                                label={errors.hasOwnProperty("MotherOccupation") && touched.hasOwnProperty("MotherOccupation") ? errors.MotherOccupation : "MotherOccupation" }
                                                                                value={values.MotherOccupation}
                                                                                name="MotherOccupation"
                                                                                id="MotherOccupation"
                                                                                component={TextField}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        MotherOccupationEditOff:"none",
                                                                                        MotherOccupationEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                MotherOccupation:values.MotherOccupation
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        MotherOccupationEditOff:"none",
                                                                                        MotherOccupationEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Mother Address
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    MotherAddressIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                MotherAddressIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.MotherAddressEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.MotherAddress : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.MotherAddressIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                MotherAddressEditOff: "inline",
                                                                                                MotherAddressEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.MotherAddressEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("MotherAddress") && touched.hasOwnProperty("MotherAddress") ? true : false }
                                                                                {...getFieldProps("MotherAddress")}
                                                                                label={errors.hasOwnProperty("MotherAddress") && touched.hasOwnProperty("MotherAddress") ? errors.MotherAddress : "MotherAddress" }
                                                                                value={values.MotherAddress}
                                                                                name="MotherAddress"
                                                                                id="MotherAddress"
                                                                                component={TextField}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        MotherAddressEditOff:"none",
                                                                                        MotherAddressEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                MotherAddress:values.MotherAddress
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        MotherAddressEditOff:"none",
                                                                                        MotherAddressEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Mother Contact
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    MotherContactIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                MotherContactIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.MotherContactEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStudentdata ? oneStudentdata.oneStudent.MotherContact : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.MotherContactIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                MotherContactEditOff: "inline",
                                                                                                MotherContactEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.MotherContactEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("MotherContact") && touched.hasOwnProperty("MotherContact") ? true : false }
                                                                                {...getFieldProps("FatherContact")}
                                                                                label={errors.hasOwnProperty("MotherContact") && touched.hasOwnProperty("MotherContact") ? errors.MotherContact : "MotherContact" }
                                                                                value={values.MotherContact}
                                                                                name="MotherContact"
                                                                                id="MotherContact"
                                                                                component={TextField}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        MotherContactEditOff:"none",
                                                                                        MotherContactEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/studentapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                studentID: "GO10", // THIS VALUE WILL BE entered with cookies
                                                                                                MotherContact:values.MotherContact
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        MotherContactEditOff:"none",
                                                                                        MotherContactEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            <TableRow></TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Grid>
                                            
                                        </Grid>
                                    {/* </PdfConverter> */}
                                    
                                </Card>

                            </Form>

                            )
                        }
                    }
                   
                </Formik>
                
            </div>
        </Layout>
       
    )
}

export async function getStaticPaths(context){

    return{
        paths:[{params:{studentDetails:"staffDetails"}}],
        fallback:false
    }
}
// export const getStaticProps = async ({params,preview, previewData}) =>{
export const getStaticProps = async ({params}) =>{
    // const student = new StudentDatabase()
    // const oneStudent = JSON.stringify( await student.findOneStudent("GO10"))
    return{
        props:{
            // oneStudent
        }
    }
}
export default StudentDetails