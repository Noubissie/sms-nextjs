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
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import MyDocument from "../../components/topdfContainer/studentTemplate"
import PrintIcon from '@material-ui/icons/Print';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload'



import TextField from "@material-ui/core/TextField"
import {Field,Formik,Form} from "formik"
// import Styles from "../../components/studentComponent/student.module.css"
import Input from '@material-ui/core/Input';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import AddIcon from '@material-ui/icons/Add';



import Autocomplete from "@material-ui/lab/Autocomplete"



import {ImageConverter} from "../../components/imageConverter/imageconvert"

import {ValidationSchemaTeacher} from "../../components/teacherFile/teacherSchema"

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
    
        staffImageIconEditOff:"none",
        FamilyNameIconEditOff:"none",
        GivenNameIconEditOff:"none",
        DateOfBirthIconEditOff:"none",
        GenderIconEditOff: "none",
        TeacherAddressIconEditOff:"none",
        BloodGroupIconEditOff:"none",
        ReligionIconEditOff:"none",
        eMailIconEditOff:"none",
        specialityIconEditOff:"none",

        // staffIDIconEditOff:oneStaffdata ? oneStaffdata.oneStaff.staffID : "",
        phoneNumberIconEditOff:"none",
        shortBioIconEditOff: "none",
        // imageholder:state.filename
        GradeIconEditOff:"none",
        positionIconEditOff:"none",
        matricleIconEditOff:"none",
        formerPostIconEditOff:"none",
        locationOfFomerPostIconEditOff:"none",
        decisionNoIconEditOff:"none",
        decisionDateIconEditOff:"none",
        diplomaIconEditOff:"none",
        // speciality:"",
        dateOfAssumptionIconEditOff:"none",
        // professional address
        TitleIconEditOff:"none",

        // Emergecy Contact
        EcontactNameIconEditOff:"none",
        EcontactOccupationIconEditOff:"none",
        EcontactAddressIconEditOff:"none",
        EcontactContactMobileIconEditOff:"none",
        EContactEmailIconEditOff:"none",

}

let initialDisplay = {
        // imageholder:state.filename
        staffImageEditOn:"inline",
        FamilyNameEditOn:"inline",
        GivenNameEditOn:"inline",
        DateOfBirthEditOn:"inline",
        GenderEditOn: "inline",
        TeacherAddressEditOn:"inline",
        BloodGroupEditOn:"inline",
        ReligionEditOn:"inline",
        eMailEditOn:"inline",
        specialityEditOn:"inline",

        // staffIDIconEditOff:oneStaffdata ? oneStaffdata.oneStaff.staffID : "",
        phoneNumberEditOn:"inline",
        shortBioEditOn: "inline",
        // imageholder:state.filename
        GradeEditOn:"inline",
        positionEditOn:"inline",
        matricleEditOn:"inline",
        formerPostEditOn:"inline",
        locationOfFomerPostEditOn:"inline",
        decisionNoEditOn:"inline",
        decisionDateEditOn:"inline",
        diplomaIconEditOn:"inline",
        // speciality:"",
        dateOfAssumptionEditOn:"inline",
        // professional address
        TitleEditOn:"inline",

        // Emergecy Contact
        EcontactNameEditOn:"inline",
        EcontactOccupationEditOn:"inline",
        EcontactAddressEditOn:"inline",
        EcontactContactMobileEditOn:"inline",
        EContactEmailEditOn:"inline",
//      
// 
        staffImageEditOff:"none",
        FamilyNameEditOff:"none",
        GivenNameEditOff:"none",
        DateOfBirthEditOff:"none",
        GenderEditOff: "none",
        TeacherAddressEditOff:"none",
        BloodGroupEditOff:"none",
        ReligionEditOff:"none",
        eMailEditOff:"none",
        specialityEditOff:"none",

        // staffIDIconEditOff:oneStaffdata ? oneStaffdata.oneStaff.staffID : "",
        phoneNumberEditOff:"none",
        shortBioEditOff: "none",
        // imageholder:state.filename
        GradeEditOff:"none",
        positionEditOff:"none",
        matricleEditOff:"none",
        formerPostEditOff:"none",
        locationOfFomerPostEditOff:"none",
        decisionNoEditOff:"none",
        decisionDateEditOff:"none",
        diplomaEditOff:"none",
        // speciality:"",
        dateOfAssumptionEditOff:"none",
        // professional address
        TitleEditOff:"none",

        // Emergecy Contact
        EcontactNameEditOff:"none",
        EcontactOccupationEditOff:"none",
        EcontactAddressEditOff:"none",
        EcontactContactMobileEditOff:"none",
        EContactEmailEditOff:"none",
        // imageholder:state.filename

        
}

let n = 0
let StaffDetails =  ()=>{
    // n = n+1
    let [stateDownloadIcon,setStateDownloadIcon] = useState(null)
    let [displayState , setDisplayState] = useState(initialDisplay)
    let [displayEditIconState , setDisplayEditIconState] = useState(initialEditIcons)

    let [state , setstate] = useState(initialStateImageValues)

    let {data:titleGetData, error:sectionGetError} =  useSWR("/api/generalapi?title=true")
    let {data:genderGetData, error:genderGetError} =  useSWR("/api/generalapi?gender=true")
    let {data:staffGradeGetData, error:staffGradeGetError} = useSWR("/api/generalapi?staffGrade=true")
    let {data:positionGetData, error:positionGetError} = useSWR("/api/generalapi?position=true")
    let {data:subjectGetData, error:subjectGetError} =  useSWR("/api/subjectapi")

    let titleData = (titleGetData ? titleGetData.length != 0 && titleGetData :undefined) || [{id:"",title:""}]
    let genderdata = (genderGetData ? genderGetData.length != 0 && genderGetData :undefined) || [{id:"",gender:""}]
    let staffGradeData = (staffGradeGetData ? staffGradeGetData.length != 0 && staffGradeGetData :undefined) || [{id:"",grade:""}]
    let positionData = (positionGetData ? positionGetData.length != 0 && positionGetData :undefined) || [{id:"",position:""}]
    let specialityData = (subjectGetData ? subjectGetData.length != 0 && subjectGetData :undefined) || [{id:"",subject:"",sectionId:""}]
    
    // let initialValues=initialValue(genderdata,bloodgroupdata,religiondata,sectiondata)
    

    let router = useRouter()
    let {query} = router
    // let [state , setstate] = useState(initialState)
    // // let router = useRouter()
    // oneStaff = JSON.parse(oneStaff)
    // // console.log("router::",router)
    // console.log("students:::",oneStaff)
    let {staffID:staffID} = router.query
    // const {data:oneStaffdata, error:onStudentError} = useSWR("/api/studentapi?AdmissionID=GO10&student=GO11")
    const {data:oneStaffdata, error:oneStaffError} = useSWR(`/api/staffapi?staffID=${staffID}`)
   
     // student=GO11 NOT USEFUL JUST TESTING the end point
    let initialValues={
        FamilyName:oneStaffdata ? oneStaffdata.oneStaff.lastname:"",
        GivenName:oneStaffdata ? oneStaffdata.oneStaff.firstname:"",
        DateOfBirth:oneStaffdata ? new Date(oneStaffdata.oneStaff.dateofbirth).toISOString().slice(0,10):new Date().toISOString().slice(0,10),
        // DateOfBirth : new Date(),
        Gender: oneStaffdata ? oneStaffdata.oneStaff.Gender:genderdata[0],
        TeacherAddress:oneStaffdata ? oneStaffdata.oneStaff.TeacherAddress:"",
        // BloodGroup:oneStaffdata ? oneStaffdata.oneStaff.bloodgroup:bloodgroupdata[0],
        BloodGroup:bloodgroupdata[0],
        // Religion:oneStaffdata ? oneStaffdata.oneStaff.religion: religiondata[0],
        Religion:religiondata[0],
        eMail:oneStaffdata ? oneStaffdata.oneStaff.email:"",
        speciality:oneStaffdata ? oneStaffdata.oneStaff.Subjects:specialityData[0],

        staffID:oneStaffdata ? oneStaffdata.oneStaff.staffID : "",
        phoneNumber:oneStaffdata ? oneStaffdata.oneStaff.phoneNumber:"",
        shortBio: oneStaffdata ? oneStaffdata.oneStaff.shortbiography:"",
        // imageholder:state.filename
        Grade:oneStaffdata ? oneStaffdata.oneStaff.staffgrade:staffGradeData[0],
        position:oneStaffdata ? oneStaffdata.oneStaff.staffPosition : positionData[0],
        matricle:oneStaffdata ? oneStaffdata.oneStaff.matricle:"",
        formerPost:oneStaffdata ? oneStaffdata.oneStaff.formerPost:"",
        locationOfFomerPost:oneStaffdata ? oneStaffdata.oneStaff.locationOfFomerPost:"",
        decisionNo:oneStaffdata ? oneStaffdata.oneStaff.decisionNo:"",
        decisionDate:oneStaffdata ? new Date(oneStaffdata.oneStaff.decisionDate).toISOString().slice(0,10):new Date().toISOString().slice(0,10),
        // decisionDate:"",
        diploma:oneStaffdata ? oneStaffdata.oneStaff.diploma:"",
        // speciality:"",
        dateOfAssumption:oneStaffdata ? new Date(oneStaffdata.oneStaff.dateOfAssumption).toISOString().slice(0,10):new Date().toISOString().slice(0,10),
        // professional address
        Title:oneStaffdata ? oneStaffdata.oneStaff.Title:titleData[0],

        // Emergecy Contact
        EcontactName:oneStaffdata ? oneStaffdata.oneStaff.emergencyContactName:"",
        EcontactOccupation:oneStaffdata ? oneStaffdata.oneStaff.EcontactOccupation:"",
        EcontactAddress:oneStaffdata ? oneStaffdata.oneStaff.emergencyContactAddress:"",
        EcontactContactMobile:oneStaffdata ? oneStaffdata.oneStaff.emergencyContactPhone:"",
        EContactEmail:oneStaffdata ? oneStaffdata.oneStaff.emergencyContactEmail:"",
        }
    // const {data:oneStaffdata, error:onStudentError} = useSWR("public/uploads/Student/images/GO10_photo.jpeg")
    // console.log("check",oneStaffdata)
    console.log("onestudent",oneStaffdata)
    useEffect(()=>{
        setStateDownloadIcon(true)
      },[])
    
        let imageState = ImageConverter(oneStaffdata)
       
    
    
    return (
        
        <Layout>
            
            <div>
                
                <div className="mt-4 mb-4 ml-3">
                    <h3 className="whitesnow mr-3 p-1 ">Student Details</h3>
                    <BrowserSiteOutput marginRight="mr-3"/>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={ValidationSchemaTeacher}
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
                                                            help={oneStaffdata ? oneStaffdata.oneStaff.familyname : null}
                                                        />} fileName="studentID.pdf">
                                                        {({ blob, url, loading, error }) => (loading ? '' : <CloudDownloadIcon />)}
                                                    </PDFDownloadLink>: null}
                                                </li> */}
                                                <li className="p-2">{stateDownloadIcon ? <a href="#"  download target="_blank" rel="noopener noreferrer"> <PrintIcon /> </a>:null}</li>
                                            </ul>
                                            
                                        </div>
                                        <CardHeader
                                        
                                            className="p-4 largeSize"
                                            avatar = {
                                                <Avatar className="bg-info">
                                                    {` ${oneStaffdata ?  oneStaffdata.oneStaff.firstname.substring(0,1).toUpperCase() : null}`}
                                                </Avatar>
                                            }
                                            
                                            title = {`${oneStaffdata ? "ABOUT ".concat(" ",oneStaffdata.oneStaff.Title.title, " ",oneStaffdata.oneStaff.lastname," ",oneStaffdata.oneStaff.firstname).toUpperCase() : null}`}
                                            subheader={`${new Date().toLocaleDateString()}`}
                                        />
                                        
                                    
                                        <Grid container  spacing={0} >

                                                <Grid item xs={12}  md={4}  className="text-center" >
                                                
                                                <div style={{display:displayState.staffImageEditOn}} className="centralize" 
                                                    
                                                    onMouseOver={
                                                        ()=>setDisplayEditIconState((prev)=>({
                                                                ...prev,
                                                                staffImageIconEditOff:"inline"
                                                                
                                                            }))
                                                        }
                                                    onMouseOut={
                                                        ()=>setDisplayEditIconState((prev)=>({
                                                            ...prev,
                                                            staffImageIconEditOff:"none"
                                                            
                                                        }))
                                                    }    
                                                        > 
                                                    <div style={{display:displayEditIconState.staffImageIconEditOff}} >

                                                        <Button  onClick={()=>{
                                                                setDisplayState((prev)=>({
                                                                    ...prev,
                                                                    staffImageEditOff:"inline",
                                                                    staffImageEditOn:"none"
                                                                }))
                                                            }}><EditIcon />
                                                        </Button>

                                                        <Button>
                                                            <DeleteForeverIcon />
                                                        </Button>
                                                    </div>
                                                    <img  src={imageState} className="studentImage"/>
                                                </div>
                                                <div style={{display:displayState.staffImageEditOff}}>
                                                    <div>  
                                                        <label htmlFor="image" className="bg-info">
                                                            
                                                                <AddIcon fontSize="large" color="primary"/>
                                                            
                                                        </label>
                                                        <Button onClick={()=>{
                                                                setDisplayState((prev)=>({
                                                                    ...prev,
                                                                    staffImageEditOff:"none",
                                                                    staffImageEditOn:"inline"
                                                                }))
                                                            }}><CloseIcon />
                                                        </Button>
                                                        <Button onClick={async ()=>{
                                                                let staffImageEdit = await fetch("/api/staffapi",{
                                                                    body: JSON.stringify(
                                                                        {
                                                                            staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                            imageEditValue:state.imagedataBack
                                                                        }),
                                                                    method:"PUT"
                                                                })
                                                                setDisplayState((prev)=>({
                                                                    ...prev,
                                                                    staffImageEditOff:"none",
                                                                    staffImageEditOn:"inline"
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
                                                        <div style={{display:state.imagesizeError,color:"red"}} className="text-center">Image size less than 1MB</div>
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
                                                                                filename:file.name,
                                                                                imagesizeError:"none"
                                                                            }))
                                                                            
                                                                        });
                                                                        reader.readAsDataURL(file)

                                                                        formData.append("file",file)
                                                                    
                                                            }
                                                        }}
                                                        />
                                                        
                                                    
                                                      
                                                    </div>     
                                                </Grid>
                                                
                                        
                                            <Grid item container  xs={12} md={8} spacing={0}>
                                                
                                                <TableContainer >
                                                    <Table size="small" stickyHeader={true} padding="default" >
                                                        <TableHead>
                                                        </TableHead>
                                                        <TableBody>
                                                            <TableRow hover role="checkbox" tabIndex={-1} >
                                                                <TableCell colSpan="2"className="bg-info" >
                                                                    <div className="bolder">Staff Personal Information</div>
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
                                                                                    {oneStaffdata ? oneStaffdata.oneStaff.shortbiography : null}
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
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
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
                                                            
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Title
                                                                </TableCell>
                                                                <TableCell  >
                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    TitleIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                TitleIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.TitleEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.Title.title : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.TitleIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                TitleEditOff: "inline",
                                                                                                TitleEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.TitleEditOff}}>
                                                                            <Field
                                                            
                                                                                    component={Autocomplete}
                                                                                    // {...getFieldProps("Gender")}
                                                                                    value={values.Title}
                                                                                    defaultValue={values.Title}
                                                                                    onBlur={handleBlur}
                                                                                    onChange={(e,selectedOption )=>
                                                                                        {setFieldValue("Title", selectedOption)
                                                                                        //  setFieldError("Gender",errors.Gender)
                                                                                            }
                                                                                    }
                                                                                    
                                                                                    // inputValue={values.Gender.title}
                                                                                    options={titleData}
                                                                                    name="Title"
                                                                                    id="Title"
                                                                                    getOptionSelected = {(option,value)=> option.title == value.title}
                                                                                    getOptionLabel={option => option.title}
                                                                                    renderInput={params => (
                                                                                        <>
                                                                                        
                                                                                        <Field 
                                                                                        component={TextField}
                                                                                        {...params}
                                                                                        
                                                                                        name="Title"
                                                                                        error={errors.hasOwnProperty("Title") && touched.hasOwnProperty("Title") ? true : false }
                                                                                        label={errors.hasOwnProperty("Title") && touched.hasOwnProperty("Title") ? errors.Title : "Title" }
                                                                                        variant="filled"    
                                                                                        
                                                                                    />
                                                                                        </>
                                                                                    
                                                                                    )}

                                                                                    renderOption={(option, { inputValue }) => {
                                                                                    const matches = match(option.title, inputValue);
                                                                                    const parts = parse(option.title, matches);
                                                                            
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
                                                                                        TitleEditOff:"none",
                                                                                        TitleEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                Title:values.Title
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        TitleEditOff:"none",
                                                                                        TitleEditOn:"inline"
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
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.lastname : null}</span>
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
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
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
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.firstname : null}</span>
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
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
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
                                                                        
                                                                            <span style={{display:displayState.DateOfBirthEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStaffdata ? new Date(oneStaffdata.oneStaff.dateofbirth).toLocaleDateString() : null}</span>
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
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
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
                                                                    <div className="bolder">{oneStaffdata ? new Date().getFullYear() - new Date(oneStaffdata.oneStaff.dateofbirth).getFullYear() : null}</div>
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
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.bloodgroup : null}</span>
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
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
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
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.Gender.gender : null}</span>
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
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
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
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.email : null}</span>
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
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
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
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.religion : null}</span>
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
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
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
                                                                    Teacher Address
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    TeacherAddressIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                TeacherAddressIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.TeacherAddressEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.teacherAddress : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.TeacherAddressIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                TeacherAddressEditOff: "inline",
                                                                                                TeacherAddressEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                            <span style={{display:displayState.TeacherAddressEditOff}}>
                                                                                <Field
                                                                                        error={errors.hasOwnProperty("TeacherAddress") && touched.hasOwnProperty("TeacherAddress") ? true : false }
                                                                                        {...getFieldProps("TeacherAddress")}
                                                                                        label={errors.hasOwnProperty("TeacherAddress") && touched.hasOwnProperty("TeacherAddress") ? errors.TeacherAddress : "Teacher Address" }
                                                                                        value={values.TeacherAddress}
                                                                                        name="TeacherAddress"
                                                                                        id="TeacherAddress"
                                                                                        component={TextField}
                                                                                        className="w-100"
                                                                                        variant="filled"
                                                                                        
                                                                                        
                                                                                    />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        TeacherAddressEditOff:"none",
                                                                                        TeacherAddressEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                TeacherAddress:values.TeacherAddress
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        TeacherAddressEditOff:"none",
                                                                                        TeacherAddressEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>


                                                            <TableRow hover role="checkbox" tabIndex={-1} >
                                                                <TableCell colSpan="2"className="bg-info" >
                                                                    <div className="bolder">Staff Professional Information</div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell  >
                                                                    Staff ID
                                                                </TableCell>
                                                                <TableCell  >
                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.staffID : null}</span>
                                                                
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
                                                                                        phoneNumberIconEditOff:"inline"
                                                                                        
                                                                                    }))
                                                                                }
                                                                            onMouseOut={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    phoneNumberIconEditOff:"none"
                                                                                    
                                                                                }))
                                                                        } >
                                                                            
                                                                                <span style={{display:displayState.phoneNumberEditOn}}>
                                                                                    <span >
                                                                                        <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.phoneNumber : null}</span>
                                                                                    </span>
                                                                                    <span style={{display:displayEditIconState.phoneNumberIconEditOff}}>

                                                                                        <Button  onClick={()=>{
                                                                                                setDisplayState((prev)=>({
                                                                                                    ...prev,
                                                                                                    
                                                                                                    phoneNumberEditOff: "inline",
                                                                                                    phoneNumberEditOn:"none"
                                                                                                }))
                                                                                            }}><EditIcon />
                                                                                        </Button>

                                                                                        <Button>
                                                                                            <DeleteForeverIcon />
                                                                                        </Button>
                                                                                    </span>
                                                                            
                                                                                    
                                                                                </span>
                                                                            <span style={{display:displayState.phoneNumberEditOff}}>
                                                                                <Field
                                                                                        error={errors.hasOwnProperty("phoneNumber") && touched.hasOwnProperty("phoneNumber") ? true : false }
                                                                                        {...getFieldProps("phoneNumber")}
                                                                                        label={errors.hasOwnProperty("phoneNumber") && touched.hasOwnProperty("phoneNumber") ? errors.phoneNumber : "phoneNumber" }
                                                                                        value={values.phoneNumber}
                                                                                        name="phoneNumber"
                                                                                        id="phoneNumber"
                                                                                        component={TextField}
                                                                                        className="w-100"
                                                                                        variant="filled"
                                                                                        type="tel"
                                                                                        
                                                                                        
                                                                                        />
                                                                                <Button onClick={()=>{
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            phoneNumberEditOff:"none",
                                                                                            phoneNumberEditOn:"inline"
                                                                                        }))
                                                                                    }}><CloseIcon />
                                                                                </Button>
                                                                                <Button onClick={async ()=>{
                                                                                        let studentbiography = await fetch("/api/staffapi",{
                                                                                            body: JSON.stringify(
                                                                                                {
                                                                                                    staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                    phoneNumber:values.phoneNumber
                                                                                                }),
                                                                                            method:"PUT"
                                                                                        })
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            phoneNumberEditOff:"none",
                                                                                            phoneNumberEditOn:"inline"
                                                                                        }))
                                                                                    }}><DoneIcon />
                                                                                </Button>
                                                                            </span>
                                                                        </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            

                                                            <TableRow hover>
                                                                <TableCell  >
                                                                speciality
                                                                </TableCell>
                                                                <TableCell  >
                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    specialityIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                specialityIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.specialityEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.Subjects.subject : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.specialityIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                specialityEditOff: "inline",
                                                                                                specialityEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.specialityEditOff}}>
                                                                            <Field
                                                            
                                                                                    component={Autocomplete}
                                                                                    // {...getFieldProps("Gender")}
                                                                                    value={values.speciality}
                                                                                    defaultValue={values.speciality}
                                                                                    onBlur={handleBlur}
                                                                                    onChange={(e,selectedOption )=>
                                                                                        {setFieldValue("speciality", selectedOption)
                                                                                        //  setFieldError("Gender",errors.Gender)
                                                                                            }
                                                                                    }
                                                                                    
                                                                                    // inputValue={values.Gender.title}
                                                                                    options={specialityData}
                                                                                    name="speciality"
                                                                                    id="speciality"
                                                                                    getOptionSelected = {(option,value)=> option.subject == value.subject}
                                                                                    getOptionLabel={option => option.subject}
                                                                                    renderInput={params => (
                                                                                        <>
                                                                                        
                                                                                        <Field 
                                                                                        component={TextField}
                                                                                        {...params}
                                                                                        
                                                                                        name="speciality"
                                                                                        error={errors.hasOwnProperty("speciality") && touched.hasOwnProperty("speciality") ? true : false }
                                                                                        label={errors.hasOwnProperty("speciality") && touched.hasOwnProperty("speciality") ? errors.speciality : "speciality" }
                                                                                        variant="filled"    
                                                                                        
                                                                                    />
                                                                                        </>
                                                                                    
                                                                                    )}

                                                                                    renderOption={(option, { inputValue }) => {
                                                                                    const matches = match(option.subject, inputValue);
                                                                                    const parts = parse(option.subject, matches);
                                                                            
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
                                                                                        specialityEditOff:"none",
                                                                                        specialityEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                Subjects:values.speciality
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        specialityEditOff:"none",
                                                                                        specialityEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            
                                                            
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                Grade
                                                                </TableCell>
                                                                <TableCell  >
                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    GradeIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                GradeIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.GradeEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.staffgrade.grade : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.GradeIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                GradeEditOff: "inline",
                                                                                                GradeEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.GradeEditOff}}>
                                                                            <Field
                                                            
                                                                                    component={Autocomplete}
                                                                                    // {...getFieldProps("Gender")}
                                                                                    value={values.Grade}
                                                                                    defaultValue={values.Grade}
                                                                                    onBlur={handleBlur}
                                                                                    onChange={(e,selectedOption )=>
                                                                                        {setFieldValue("Grade", selectedOption)
                                                                                        //  setFieldError("Gender",errors.Gender)
                                                                                            }
                                                                                    }
                                                                                    
                                                                                    // inputValue={values.Gender.title}
                                                                                    options={staffGradeData}
                                                                                    name="Grade"
                                                                                    id="Grade"
                                                                                    getOptionSelected = {(option,value)=> option.grade == value.grade}
                                                                                    getOptionLabel={option => option.grade}
                                                                                    renderInput={params => (
                                                                                        <>
                                                                                        
                                                                                        <Field 
                                                                                        component={TextField}
                                                                                        {...params}
                                                                                        
                                                                                        name="Grade"
                                                                                        error={errors.hasOwnProperty("Grade") && touched.hasOwnProperty("Grade") ? true : false }
                                                                                        label={errors.hasOwnProperty("Grade") && touched.hasOwnProperty("Grade") ? errors.Grade : "Grade" }
                                                                                        variant="filled"    
                                                                                        
                                                                                    />
                                                                                        </>
                                                                                    
                                                                                    )}

                                                                                    renderOption={(option, { inputValue }) => {
                                                                                    const matches = match(option.grade, inputValue);
                                                                                    const parts = parse(option.grade, matches);
                                                                            
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
                                                                                        GradeEditOff:"none",
                                                                                        GradeEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                Grade:values.Grade
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        GradeEditOff:"none",
                                                                                        GradeEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Position
                                                                </TableCell>
                                                                <TableCell  >
                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    positionIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                positionIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.positionEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.staffPosition.position : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.positionIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                positionEditOff: "inline",
                                                                                                positionEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.positionEditOff}}>
                                                                            <Field
                                                            
                                                                                    component={Autocomplete}
                                                                                    // {...getFieldProps("Gender")}
                                                                                    value={values.position}
                                                                                    defaultValue={values.position}
                                                                                    onBlur={handleBlur}
                                                                                    onChange={(e,selectedOption )=>
                                                                                        {setFieldValue("position", selectedOption)
                                                                                        //  setFieldError("Gender",errors.Gender)
                                                                                            }
                                                                                    }
                                                                                    
                                                                                    // inputValue={values.Gender.title}
                                                                                    options={positionData}
                                                                                    name="position"
                                                                                    id="position"
                                                                                    getOptionSelected = {(option,value)=> option.position == value.position}
                                                                                    getOptionLabel={option => option.position}
                                                                                    renderInput={params => (
                                                                                        <>
                                                                                        
                                                                                        <Field 
                                                                                        component={TextField}
                                                                                        {...params}
                                                                                        
                                                                                        name="position"
                                                                                        error={errors.hasOwnProperty("position") && touched.hasOwnProperty("position") ? true : false }
                                                                                        label={errors.hasOwnProperty("position") && touched.hasOwnProperty("position") ? errors.position : "position" }
                                                                                        variant="filled"    
                                                                                        
                                                                                    />
                                                                                        </>
                                                                                    
                                                                                    )}

                                                                                    renderOption={(option, { inputValue }) => {
                                                                                    const matches = match(option.position, inputValue);
                                                                                    const parts = parse(option.position, matches);
                                                                            
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
                                                                                        positionEditOff:"none",
                                                                                        positionEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                position:values.position
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        positionEditOff:"none",
                                                                                        positionEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Matricle
                                                                </TableCell>
                                                                <TableCell  >
                                                                    <div 
                                                                            onMouseOver={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                        ...prev,
                                                                                        matricleIconEditOff:"inline"
                                                                                        
                                                                                    }))
                                                                                }
                                                                            onMouseOut={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    matricleIconEditOff:"none"
                                                                                    
                                                                                }))
                                                                        } >
                                                                            
                                                                                <span style={{display:displayState.matricleEditOn}}>
                                                                                    <span >
                                                                                        <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.matricle : null}</span>
                                                                                    </span>
                                                                                    <span style={{display:displayEditIconState.matricleIconEditOff}}>

                                                                                        <Button  onClick={()=>{
                                                                                                setDisplayState((prev)=>({
                                                                                                    ...prev,
                                                                                                    
                                                                                                    matricleEditOff: "inline",
                                                                                                    matricleEditOn:"none"
                                                                                                }))
                                                                                            }}><EditIcon />
                                                                                        </Button>

                                                                                        <Button>
                                                                                            <DeleteForeverIcon />
                                                                                        </Button>
                                                                                    </span>
                                                                            
                                                                                    
                                                                                </span>
                                                                            <span style={{display:displayState.matricleEditOff}}>
                                                                                <Field
                                                                                        error={errors.hasOwnProperty("matricle") && touched.hasOwnProperty("matricle") ? true : false }
                                                                                        {...getFieldProps("matricle")}
                                                                                        label={errors.hasOwnProperty("matricle") && touched.hasOwnProperty("matricle") ? errors.matricle : "matricle" }
                                                                                        value={values.matricle}
                                                                                        name="matricle"
                                                                                        id="matricle"
                                                                                        component={TextField}
                                                                                        className="w-100"
                                                                                        variant="filled"
                                                                                        type="tel"
                                                                                        
                                                                                        
                                                                                        />
                                                                                <Button onClick={()=>{
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            matricleEditOff:"none",
                                                                                            matricleEditOn:"inline"
                                                                                        }))
                                                                                    }}><CloseIcon />
                                                                                </Button>
                                                                                <Button onClick={async ()=>{
                                                                                        let studentbiography = await fetch("/api/staffapi",{
                                                                                            body: JSON.stringify(
                                                                                                {
                                                                                                    staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                    matricle:values.matricle
                                                                                                }),
                                                                                            method:"PUT"
                                                                                        })
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            matricleEditOff:"none",
                                                                                            matricleEditOn:"inline"
                                                                                        }))
                                                                                    }}><DoneIcon />
                                                                                </Button>
                                                                            </span>
                                                                        </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            
                                                            <TableRow>
                                                            <TableCell  >
                                                                    Former Post
                                                                </TableCell>
                                                            <TableCell  >
                                                                    <div 
                                                                            onMouseOver={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                        ...prev,
                                                                                        formerPostIconEditOff:"inline"
                                                                                        
                                                                                    }))
                                                                                }
                                                                            onMouseOut={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    formerPostIconEditOff:"none"
                                                                                    
                                                                                }))
                                                                        } >
                                                                            
                                                                                <span style={{display:displayState.formerPostEditOn}}>
                                                                                    <span >
                                                                                        <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.formerPost : null}</span>
                                                                                    </span>
                                                                                    <span style={{display:displayEditIconState.formerPostIconEditOff}}>

                                                                                        <Button  onClick={()=>{
                                                                                                setDisplayState((prev)=>({
                                                                                                    ...prev,
                                                                                                    
                                                                                                    formerPostEditOff: "inline",
                                                                                                    formerPostEditOn:"none"
                                                                                                }))
                                                                                            }}><EditIcon />
                                                                                        </Button>

                                                                                        <Button>
                                                                                            <DeleteForeverIcon />
                                                                                        </Button>
                                                                                    </span>
                                                                            
                                                                                    
                                                                                </span>
                                                                            <span style={{display:displayState.formerPostEditOff}}>
                                                                                <Field
                                                                                        error={errors.hasOwnProperty("formerPost") && touched.hasOwnProperty("formerPost") ? true : false }
                                                                                        {...getFieldProps("formerPost")}
                                                                                        label={errors.hasOwnProperty("formerPost") && touched.hasOwnProperty("formerPost") ? errors.formerPost : "formerPost" }
                                                                                        value={values.formerPost}
                                                                                        name="formerPost"
                                                                                        id="formerPost"
                                                                                        component={TextField}
                                                                                        className="w-100"
                                                                                        variant="filled"
                                                                                        type="tel"
                                                                                        
                                                                                        
                                                                                        />
                                                                                <Button onClick={()=>{
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            formerPostEditOff:"none",
                                                                                            formerPostEditOn:"inline"
                                                                                        }))
                                                                                    }}><CloseIcon />
                                                                                </Button>
                                                                                <Button onClick={async ()=>{
                                                                                        let studentbiography = await fetch("/api/staffapi",{
                                                                                            body: JSON.stringify(
                                                                                                {
                                                                                                    staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                    formerPost:values.formerPost
                                                                                                }),
                                                                                            method:"PUT"
                                                                                        })
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            formerPostEditOff:"none",
                                                                                            formerPostEditOn:"inline"
                                                                                        }))
                                                                                    }}><DoneIcon />
                                                                                </Button>
                                                                            </span>
                                                                        </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            
                                                            <TableRow>
                                                            <TableCell  >
                                                                    Location of Former Post
                                                                </TableCell>
                                                            <TableCell  >
                                                                    <div 
                                                                            onMouseOver={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                        ...prev,
                                                                                        locationOfFomerPostIconEditOff:"inline"
                                                                                        
                                                                                    }))
                                                                                }
                                                                            onMouseOut={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    locationOfFomerPostIconEditOff:"none"
                                                                                    
                                                                                }))
                                                                        } >
                                                                            
                                                                                <span style={{display:displayState.locationOfFomerPostEditOn}}>
                                                                                    <span >
                                                                                        <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.locationOfFomerPost : null}</span>
                                                                                    </span>
                                                                                    <span style={{display:displayEditIconState.locationOfFomerPostIconEditOff}}>

                                                                                        <Button  onClick={()=>{
                                                                                                setDisplayState((prev)=>({
                                                                                                    ...prev,
                                                                                                    
                                                                                                    locationOfFomerPostEditOff: "inline",
                                                                                                    locationOfFomerPostEditOn:"none"
                                                                                                }))
                                                                                            }}><EditIcon />
                                                                                        </Button>

                                                                                        <Button>
                                                                                            <DeleteForeverIcon />
                                                                                        </Button>
                                                                                    </span>
                                                                            
                                                                                    
                                                                                </span>
                                                                            <span style={{display:displayState.locationOfFomerPostEditOff}}>
                                                                                <Field
                                                                                        error={errors.hasOwnProperty("locationOfFomerPost") && touched.hasOwnProperty("locationOfFomerPost") ? true : false }
                                                                                        {...getFieldProps("locationOfFomerPost")}
                                                                                        label={errors.hasOwnProperty("locationOfFomerPost") && touched.hasOwnProperty("locationOfFomerPost") ? errors.locationOfFomerPost : "location Of Fomer Post" }
                                                                                        value={values.locationOfFomerPost}
                                                                                        name="locationOfFomerPost"
                                                                                        id="locationOfFomerPost"
                                                                                        component={TextField}
                                                                                        className="w-100"
                                                                                        variant="filled"
                                                                                        type="tel"
                                                                                        
                                                                                        
                                                                                        />
                                                                                <Button onClick={()=>{
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            locationOfFomerPostEditOff:"none",
                                                                                            locationOfFomerPostEditOn:"inline"
                                                                                        }))
                                                                                    }}><CloseIcon />
                                                                                </Button>
                                                                                <Button onClick={async ()=>{
                                                                                        let studentbiography = await fetch("/api/staffapi",{
                                                                                            body: JSON.stringify(
                                                                                                {
                                                                                                    staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                    locationOfFomerPost:values.locationOfFomerPost
                                                                                                }),
                                                                                            method:"PUT"
                                                                                        })
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            locationOfFomerPostEditOff:"none",
                                                                                            locationOfFomerPostEditOn:"inline"
                                                                                        }))
                                                                                    }}><DoneIcon />
                                                                                </Button>
                                                                            </span>
                                                                        </div>
                                                                </TableCell>
                                                            </TableRow>

                                                            <TableRow>
                                                            <TableCell  >
                                                                    Decision/Decree Number
                                                                </TableCell>
                                                            <TableCell  >
                                                                    <div 
                                                                            onMouseOver={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                        ...prev,
                                                                                        decisionNoIconEditOff:"inline"
                                                                                        
                                                                                    }))
                                                                                }
                                                                            onMouseOut={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    decisionNoIconEditOff:"none"
                                                                                    
                                                                                }))
                                                                        } >
                                                                            
                                                                                <span style={{display:displayState.decisionNoIconEditOff}}>
                                                                                    <span >
                                                                                        <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.decisionNo : null}</span>
                                                                                    </span>
                                                                                    <span style={{display:displayEditIconState.decisionNoIconEditOff}}>

                                                                                        <Button  onClick={()=>{
                                                                                                setDisplayState((prev)=>({
                                                                                                    ...prev,
                                                                                                    
                                                                                                    decisionNoEditOff: "inline",
                                                                                                    decisionNoEditOn:"none"
                                                                                                }))
                                                                                            }}><EditIcon />
                                                                                        </Button>

                                                                                        <Button>
                                                                                            <DeleteForeverIcon />
                                                                                        </Button>
                                                                                    </span>
                                                                            
                                                                                    
                                                                                </span>
                                                                            <span style={{display:displayState.decisionNoEditOff}}>
                                                                                <Field
                                                                                        error={errors.hasOwnProperty("decisionNo") && touched.hasOwnProperty("decisionNo") ? true : false }
                                                                                        {...getFieldProps("decisionNo")}
                                                                                        label={errors.hasOwnProperty("decisionNo") && touched.hasOwnProperty("decisionNo") ? errors.decisionNo : "decisionNo" }
                                                                                        value={values.decisionNo}
                                                                                        name="decisionNo"
                                                                                        id="decisionNo"
                                                                                        component={TextField}
                                                                                        className="w-100"
                                                                                        variant="filled"
                                                                                        type="tel"
                                                                                        
                                                                                        
                                                                                        />
                                                                                <Button onClick={()=>{
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            decisionNoEditOff:"none",
                                                                                            decisionNoEditOn:"inline"
                                                                                        }))
                                                                                    }}><CloseIcon />
                                                                                </Button>
                                                                                <Button onClick={async ()=>{
                                                                                        let studentbiography = await fetch("/api/staffapi",{
                                                                                            body: JSON.stringify(
                                                                                                {
                                                                                                    staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                    decisionNo:values.decisionNo
                                                                                                }),
                                                                                            method:"PUT"
                                                                                        })
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            decisionNoEditOff:"none",
                                                                                            decisionNoEditOn:"inline"
                                                                                        }))
                                                                                    }}><DoneIcon />
                                                                                </Button>
                                                                            </span>
                                                                        </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    Decision Date
                                                                </TableCell>
                                                                <TableCell  >
                                                                    <div 
                                                                            onMouseOver={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                        ...prev,
                                                                                        decisionDateIconEditOff:"inline"
                                                                                        
                                                                                    }))
                                                                                }
                                                                            onMouseOut={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    decisionDateIconEditOff:"none"
                                                                                    
                                                                                }))
                                                                        } >
                                                                            
                                                                                <span style={{display:displayState.decisionDateEditOn}}>
                                                                                    <span >
                                                                                        <span className="bolder">{oneStaffdata ? new Date(oneStaffdata.oneStaff.decisionDate).toLocaleDateString() : null}</span>
                                                                                    </span>
                                                                                    <span style={{display:displayEditIconState.decisionDateIconEditOff}}>

                                                                                        <Button  onClick={()=>{
                                                                                                setDisplayState((prev)=>({
                                                                                                    ...prev,
                                                                                                    
                                                                                                    decisionDateEditOff: "inline",
                                                                                                    decisionDateEditOn:"none"
                                                                                                }))
                                                                                            }}><EditIcon />
                                                                                        </Button>

                                                                                        <Button>
                                                                                            <DeleteForeverIcon />
                                                                                        </Button>
                                                                                    </span>
                                                                            
                                                                                    
                                                                                </span>
                                                                            <span style={{display:displayState.decisionDateEditOff}}>
                                                                                <Field
                                                                                        error={errors.hasOwnProperty("decisionDate") && touched.hasOwnProperty("decisionDate") ? true : false }
                                                                                        {...getFieldProps("decisionDate")}
                                                                                        label={errors.hasOwnProperty("decisionDate") && touched.hasOwnProperty("decisionDate") ? errors.decisionDate : "decisionDate" }
                                                                                        value={values.decisionDate}
                                                                                        name="decisionDate"
                                                                                        id="decisionDate"
                                                                                        component={TextField}
                                                                                        className="w-100"
                                                                                        variant="filled"
                                                                                        type="date"
                                                                                        
                                                                                        
                                                                                        />
                                                                                <Button onClick={()=>{
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            decisionDateEditOff:"none",
                                                                                            decisionDateEditOn:"inline"
                                                                                        }))
                                                                                    }}><CloseIcon />
                                                                                </Button>
                                                                                <Button onClick={async ()=>{
                                                                                        let studentbiography = await fetch("/api/staffapi",{
                                                                                            body: JSON.stringify(
                                                                                                {
                                                                                                    staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                    decisionDate:values.decisionDate
                                                                                                }),
                                                                                            method:"PUT"
                                                                                        })
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            decisionDateEditOff:"none",
                                                                                            decisionDateEditOn:"inline"
                                                                                        }))
                                                                                    }}><DoneIcon />
                                                                                </Button>
                                                                            </span>
                                                                        </div>
                                                                </TableCell>
                                                            </TableRow>

                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    diploma
                                                                </TableCell>
                                                                <TableCell  >
                                                                    <div 
                                                                            onMouseOver={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                        ...prev,
                                                                                        diplomaIconEditOff:"inline"
                                                                                        
                                                                                    }))
                                                                                }
                                                                            onMouseOut={
                                                                                ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    diplomaIconEditOff:"none"
                                                                                    
                                                                                }))
                                                                        } >
                                                                            
                                                                                <span style={{display:displayState.diplomaEditOn}}>
                                                                                    <span >
                                                                                        <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.diploma : null}</span>
                                                                                    </span>
                                                                                    <span style={{display:displayEditIconState.diplomaIconEditOff}}>

                                                                                        <Button  onClick={()=>{
                                                                                                setDisplayState((prev)=>({
                                                                                                    ...prev,
                                                                                                    
                                                                                                    diplomaEditOff: "inline",
                                                                                                    diplomaEditOn:"none"
                                                                                                }))
                                                                                            }}><EditIcon />
                                                                                        </Button>

                                                                                        <Button>
                                                                                            <DeleteForeverIcon />
                                                                                        </Button>
                                                                                    </span>
                                                                            
                                                                                    
                                                                                </span>
                                                                            <span style={{display:displayState.diplomaEditOff}}>
                                                                                <Field
                                                                                        error={errors.hasOwnProperty("diploma") && touched.hasOwnProperty("diploma") ? true : false }
                                                                                        {...getFieldProps("diploma")}
                                                                                        label={errors.hasOwnProperty("diploma") && touched.hasOwnProperty("diploma") ? errors.decisionDate : "diploma" }
                                                                                        value={values.decisionDate}
                                                                                        name="diploma"
                                                                                        id="diploma"
                                                                                        component={TextField}
                                                                                        className="w-100"
                                                                                        variant="filled"
                                                                                        type="tel"
                                                                                        
                                                                                        
                                                                                        />
                                                                                <Button onClick={()=>{
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            diplomaEditOff:"none",
                                                                                            diplomaEditOn:"inline"
                                                                                        }))
                                                                                    }}><CloseIcon />
                                                                                </Button>
                                                                                <Button onClick={async ()=>{
                                                                                        let studentbiography = await fetch("/api/staffapi",{
                                                                                            body: JSON.stringify(
                                                                                                {
                                                                                                    staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                    diploma:values.diploma
                                                                                                }),
                                                                                            method:"PUT"
                                                                                        })
                                                                                        setDisplayState((prev)=>({
                                                                                            ...prev,
                                                                                            diplomaEditOff:"none",
                                                                                            diplomaEditOn:"inline"
                                                                                        }))
                                                                                    }}><DoneIcon />
                                                                                </Button>
                                                                            </span>
                                                                        </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            
                                                            <TableRow hover>
                                                                <TableCell >
                                                                    date Of Assumption
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    dateOfAssumptionIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                dateOfAssumptionIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.dateOfAssumptionEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStaffdata ? new Date(oneStaffdata.oneStaff.dateOfAssumption).toLocaleDateString() : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.dateOfAssumptionIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                dateOfAssumptionEditOff: "inline",
                                                                                                dateOfAssumptionEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.dateOfAssumptionEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("dateOfAssumption") && touched.hasOwnProperty("dateOfAssumption") ? true : false }
                                                                                {...getFieldProps("dateOfAssumption")}
                                                                                label={errors.hasOwnProperty("dateOfAssumption") && touched.hasOwnProperty("dateOfAssumption") ? errors.dateOfAssumption : "date Of Assumption" }
                                                                                value={values.dateOfAssumption}
                                                                                name="dateOfAssumption"
                                                                                id="dateOfAssumption"
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
                                                                                        dateOfAssumptionEditOff:"none",
                                                                                        dateOfAssumptionEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                dateOfAssumption:values.dateOfAssumption
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        dateOfAssumptionEditOff:"none",
                                                                                        dateOfAssumptionEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>   
                                                                </TableCell>
                                                            </TableRow>
                                                            
                                                            <TableRow hover role="checkbox" tabIndex={-1} >
                                                                <TableCell colSpan="2"className="bg-info" >
                                                                    <div className="bolder">Emergency Contact Information</div>
                                                                </TableCell>
                                                            </TableRow>

                                                            

                                                            
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    E-contact Name
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    EcontactNameIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                EcontactNameIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.EcontactNameEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.emergencyContactName : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.EcontactNameIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                EcontactNameEditOff: "inline",
                                                                                                EcontactNameEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.EcontactNameEditOff}}>
                                                                            <Field
                                                                                    error={errors.hasOwnProperty("EcontactName") && touched.hasOwnProperty("EcontactName") ? true : false }
                                                                                    {...getFieldProps("EcontactName")}
                                                                                    label={errors.hasOwnProperty("EcontactName") && touched.hasOwnProperty("EcontactName") ? errors.EcontactName : "E-contact Name" }
                                                                                    value={values.EcontactName}
                                                                                    name="EcontactName"
                                                                                    id="EcontactName"
                                                                                    component={TextField}
                                                                                    className="w-100"
                                                                                    variant="filled"
                                                                                    
                                                                                    />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        EcontactNameEditOff:"none",
                                                                                        EcontactNameEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                EcontactName:values.EcontactName
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        EcontactNameEditOff:"none",
                                                                                        EcontactNameEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    E-contactOccupation
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    EcontactOccupationIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                EcontactOccupationIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.EcontactOccupationEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.EcontactOccupation : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.EcontactOccupationIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                EcontactOccupationEditOff: "inline",
                                                                                                EcontactOccupationEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.EcontactOccupationEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("EcontactOccupation") && touched.hasOwnProperty("EcontactOccupation") ? true : false }
                                                                                {...getFieldProps("EcontactOccupation")}
                                                                                label={errors.hasOwnProperty("EcontactOccupation") && touched.hasOwnProperty("EcontactOccupation") ? errors.EcontactOccupation : "EcontactOccupation" }
                                                                                value={values.EcontactOccupation}
                                                                                name="EcontactOccupation"
                                                                                id="EcontactOccupation"
                                                                                component={TextField}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        EcontactOccupationEditOff:"none",
                                                                                        EcontactOccupationEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                EcontactOccupation:values.EcontactOccupation
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        EcontactOccupationEditOff:"none",
                                                                                        EcontactOccupationEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    E-contact Address
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    EcontactAddressIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                EcontactAddressIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.EcontactAddressEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.emergencyContactAddress : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.EcontactAddressIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                EcontactAddressEditOff: "inline",
                                                                                                EcontactAddressEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.EcontactAddressEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("EcontactAddress") && touched.hasOwnProperty("EcontactAddress") ? true : false }
                                                                                {...getFieldProps("EcontactAddress")}
                                                                                label={errors.hasOwnProperty("EcontactAddress") && touched.hasOwnProperty("EcontactAddress") ? errors.EcontactAddress : "EcontactAddress" }
                                                                                value={values.EcontactAddress}
                                                                                name="EcontactAddress"
                                                                                id="EcontactAddress"
                                                                                component={TextField}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        EcontactAddressEditOff:"none",
                                                                                        EcontactAddressEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                EcontactAddress:values.EcontactAddress
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        EcontactAddressEditOff:"none",
                                                                                        EcontactAddressEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    E-Mobile Contact
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    EcontactContactMobileIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                EcontactContactMobileIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.EcontactContactMobileEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.emergencyContactPhone : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.EcontactContactMobileIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                EcontactContactMobileEditOff: "inline",
                                                                                                EcontactContactMobileEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.EcontactContactMobileEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("EcontactContactMobile") && touched.hasOwnProperty("EcontactContactMobile") ? true : false }
                                                                                {...getFieldProps("EcontactContactMobile")}
                                                                                label={errors.hasOwnProperty("EcontactContactMobile") && touched.hasOwnProperty("EcontactContactMobile") ? errors.EcontactContactMobile : "E-Mobile Contact" }
                                                                                value={values.EcontactContactMobile}
                                                                                name="EcontactContactMobile"
                                                                                id="EcontactContactMobile"
                                                                                component={TextField}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        EcontactContactMobileEditOff:"none",
                                                                                        EcontactContactMobileEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                EcontactContactMobile:values.EcontactContactMobile
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        EcontactContactMobileEditOff:"none",
                                                                                        EcontactContactMobileEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow hover>
                                                                <TableCell  >
                                                                    E-Contact Email
                                                                </TableCell>
                                                                <TableCell  >

                                                                <div 
                                                                        onMouseOver={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                    ...prev,
                                                                                    EContactEmailIconEditOff:"inline"
                                                                                    
                                                                                }))
                                                                            }
                                                                        onMouseOut={
                                                                            ()=>setDisplayEditIconState((prev)=>({
                                                                                ...prev,
                                                                                EContactEmailIconEditOff:"none"
                                                                                
                                                                            }))
                                                                    } >
                                                                        
                                                                            <span style={{display:displayState.EContactEmailEditOn}}>
                                                                                <span >
                                                                                    <span className="bolder">{oneStaffdata ? oneStaffdata.oneStaff.emergencyContactEmail : null}</span>
                                                                                </span>
                                                                                <span style={{display:displayEditIconState.EContactEmailIconEditOff}}>

                                                                                    <Button  onClick={()=>{
                                                                                            setDisplayState((prev)=>({
                                                                                                ...prev,
                                                                                                
                                                                                                EContactEmailEditOff: "inline",
                                                                                                EContactEmailEditOn:"none"
                                                                                            }))
                                                                                        }}><EditIcon />
                                                                                    </Button>

                                                                                    <Button>
                                                                                        <DeleteForeverIcon />
                                                                                    </Button>
                                                                                </span>
                                                                        
                                                                                
                                                                            </span>
                                                                        <span style={{display:displayState.EContactEmailEditOff}}>
                                                                            <Field
                                                                                error={errors.hasOwnProperty("EContactEmail") && touched.hasOwnProperty("EContactEmail") ? true : false }
                                                                                {...getFieldProps("EContactEmail")}
                                                                                label={errors.hasOwnProperty("EContactEmail") && touched.hasOwnProperty("EContactEmail") ? errors.EContactEmail : "E-Contact Email" }
                                                                                value={values.EContactEmail}
                                                                                name="EContactEmail"
                                                                                id="EContactEmail"
                                                                                component={TextField}
                                                                                className="w-100"
                                                                                variant="filled"
                                                                                
                                                                                />
                                                                            <Button onClick={()=>{
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        EContactEmailEditOff:"none",
                                                                                        EContactEmailEditOn:"inline"
                                                                                    }))
                                                                                }}><CloseIcon />
                                                                            </Button>
                                                                            <Button onClick={async ()=>{
                                                                                    let studentbiography = await fetch("/api/staffapi",{
                                                                                        body: JSON.stringify(
                                                                                            {
                                                                                                staffID: staffID, // THIS VALUE WILL BE entered with cookies
                                                                                                EContactEmail:values.EContactEmail
                                                                                            }),
                                                                                        method:"PUT"
                                                                                    })
                                                                                    setDisplayState((prev)=>({
                                                                                        ...prev,
                                                                                        EContactEmailEditOff:"none",
                                                                                        EContactEmailEditOn:"inline"
                                                                                    }))
                                                                                }}><DoneIcon />
                                                                            </Button>
                                                                        </span>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
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
        paths:[{params:{staffDetails:"staffDetails"}}],
        fallback:false
    }
}
// export const getStaticProps = async ({params,preview, previewData}) =>{
export const getStaticProps = async ({params}) =>{
    // const student = new StudentDatabase()
    // const oneStaff = JSON.stringify( await student.findOneStudent("GO10"))
    return{
        props:{
            // oneStaff
        }
    }
}
export default StaffDetails