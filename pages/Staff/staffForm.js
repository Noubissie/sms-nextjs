import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField"
import {FastField,Formik,Form,ErrorMessage,Field} from "formik"
import * as Yup from "yup"
import Styles from "../../components/studentComponent/student.module.css"
import Card from '@material-ui/core/Card';
import Layout from "../../components/layout"
import dynamic from "next/dynamic"
import Input from '@material-ui/core/Input';
import InputAdornment from "@material-ui/core/InputAdornment"
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import AccountCircle from "@material-ui/icons/AccountCircle"
import WcIcon from '@material-ui/icons/Wc';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import HomeIcon from '@material-ui/icons/Home';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import WorkIcon from '@material-ui/icons/Work';
import CardMembershipIcon from '@material-ui/icons/CardMembership';


import StaffPersonalInformation from "../../components/teacherFile/personalInfo"
import StaffProffessionalInformation from "../../components/teacherFile/professionalInfo"
import StaffEmergencyContact from "../../components/teacherFile/EmergencyInfo"
import Autocomplete from "@material-ui/lab/Autocomplete"
// import {errorFieldMessage} from "../../components/error/errorFieldMessage"
import Button  from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import GenderDatabase from "../../database/GeneralDatabase"
import SectionDatabase from "../../database/sectiondatabase"
import useSWR from "swr"

import {ValidationSchemaTeacher, initialValueTeacher} from "../../components/teacherFile/teacherSchema"


import Stepper from '@material-ui/core/Stepper'
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"

// let genderdata = [{id:1,gender:"Male"},{id:2,gender:"Female"},{id:3,gender:"unknow"}]
let religiondata =[{id:1,doctrine:"Christain"},{id:2,doctrine:"Muslim"},{id:3,doctrine:"Pegan"},{id:4,doctrine:"Traditionalist"}]
let bloodgroupdata =[{id:1,group:"A+"},{id:2,group:"A-"},{id:3,group:"B+"},{id:4,group:"B-"},{id:5,group:"AB"},{id:6,group:"0+"},{id:7,group:"O-"}]
// let sectiondata =[{speciality:"English"},{speciality:"FRENCH"},{speciality:"CHINESSE"},{speciality:"GERMAN"}]
const BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     width:"100%",
//     color: theme.palette.text.secondary,
//   },
// }));
let initialStateValues = {
    imagesizeError:"none",
    imagedataBack:null,
    filename:""
}
let  AdmissionForm = ({genderFindAll,sectionFindAll}) => {

    

    let [state , setstate] = useState(initialStateValues)
    let {data:subjectGetData, error:sectionGetError} =  useSWR("/api/subjectapi")
    let {data:genderGetData, error:genderGetError} =  useSWR("/api/generalapi?gender=true")
    let {data:titleGetData, error:errorTitleData} = useSWR("/api/generalapi?title=true")
    let {data:positionGetData, error:errorpositionData} = useSWR("/api/generalapi?position=true")
    let {data:staffGradeGetData, error:errorstaffGradeData} = useSWR("/api/generalapi?staffGrade=true")

    let specialityData = (subjectGetData ? subjectGetData.length != 0 && subjectGetData :undefined) || [{id:"",subject:"",sectionId:""}]
    let genderdata = (genderGetData ? genderGetData.length != 0 && genderGetData :undefined) || (genderFindAll.length == 0 ? [{id:"",gender:""}]: genderFindAll)
    let titleData = (titleGetData ? titleGetData.length != 0 && titleGetData :undefined ) || [{id:"",title:""}] // (genderFindAll.length == 0 ? [{id:"",gender:""}]: genderFindAll)
    let positionData = (positionGetData ? positionGetData.length != 0 && positionGetData :undefined ) || [{id:"",position:""}]
    let staffGradeData = (staffGradeGetData ? staffGradeGetData.length != 0 && staffGradeGetData :undefined ) || [{id:"",grade:""}]
    
    // const classes = useStyles();

    let initialValues=initialValueTeacher(genderdata,bloodgroupdata,religiondata,specialityData,titleData,positionData,staffGradeData)

let onsubmit = async (values,submittingProps)=>{
    let data = await fetch("/api/staffapi",{
        method:"POST",
        body:JSON.stringify({
            values,
            imagedataBack: state.imagedataBack
        })
     })
     console.log("data::",data.status)
     if(data.status==409){
         alert(`${values.FamilyName} ${values.GivenName} with student id ${values.staffID} exist already`)
     }
     if(data.status==415){
        alert(`${window.navigator.userAgent} \n stop trying out attacks on my system`)
    }
    else if(data.status ==200){
        setstate((prev)=>({
            ...initialStateValues
        }))
        submittingProps.resetForm()
    }
     

}
    // let onreset = ()=>{
    //     setstate((prev)=>({
    //         ...initialStateValues
    //     }))
    // }
  
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }))
function getSteps() {
    return ['Personal Information', 'Professional Information', 'Emergency Contact'];
  }
  
  function getStepContent(stepIndex,
                        values,
                        getFieldProps,
                        setFieldValue,
                        errors,
                        handleBlur,
                        handleChange,
                        touched){                    
    switch (stepIndex) {
      case 0:
        return <StaffPersonalInformation 
        
        values={values}
        getFieldProps={getFieldProps}
        setFieldValue={setFieldValue}
        errors={errors}
        handleBlur={handleBlur}
        touched={touched}
        Grid ={Grid}
        Field={Field}
        match={match}
        parse={parse}
        TextField={TextField}
        FastField={FastField}
        Autocomplete={Autocomplete}
        Card={Card}
        Input={Input}
        InputAdornment={InputAdornment}
        AlternateEmail={AlternateEmail}
        AddCircleOutlineIcon={AddCircleOutlineIcon}
        AccountCircle={AccountCircle}
        HomeIcon={HomeIcon}
        state={state}
        setstate = {setstate}
        
        titleData={titleData}
        specialityData={specialityData}
        genderdata={genderdata}
        religiondata={religiondata}
        bloodgroupdata={bloodgroupdata}
        />
            
      case 1:
        return (
            <StaffProffessionalInformation
                values={values}
                getFieldProps={getFieldProps}
                setFieldValue={setFieldValue}
                errors={errors}
                handleBlur={handleBlur}
                touched={touched}
                Grid ={Grid}
                Field={Field}
                match={match}
                parse={parse}
                TextField={TextField}
                FastField={FastField}
                Autocomplete={Autocomplete}
                Card={Card}
                Input={Input}
                InputAdornment={InputAdornment}
                FingerprintIcon={FingerprintIcon}
                CardMembershipIcon={CardMembershipIcon}
                LocalLibraryIcon={LocalLibraryIcon}
                ContactPhoneIcon={ContactPhoneIcon}
                titleData={titleData}
                positionData={positionData}
                specialityData={specialityData}
                staffGradeData={staffGradeData}
            />
            )
      case 2:
        return (
            <StaffEmergencyContact
                values={values}
                getFieldProps={getFieldProps}
                errors={errors}
                touched={touched}
                Grid ={Grid}
                TextField={TextField}
                FastField={FastField}
                Card={Card}
                Input={Input}
                InputAdornment={InputAdornment}

                AccountCircle={AccountCircle}
                HomeIcon={HomeIcon}
                ContactPhoneIcon={ContactPhoneIcon}
                WorkIcon={WorkIcon}
            />

            )
      default:
        return 'Unknown stepIndex';
    }
  }
  

    const [activeStep, setActiveStep] = React.useState(0);

    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleResetsteps = () => {
      setActiveStep(0);
    };
  
    


  return(
    <Layout>

    
      {/* <div className="overflow-visualHeight w-100"> */}
    <div>
      <div className="mt-4 mb-4 ml-3">
          <h3 className="whitesnow mr-3 p-1 ">Student</h3>
          <BrowserSiteOutput marginRight="mr-3"/>
      </div>
          
            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchemaTeacher}
                
                onSubmit = {onsubmit}
                // onReset = {onreset}
                // enableReinitialize
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
                            handleReset,
                            handleChange,
                            isValid,
                            dirty,
                            touched
                        })=>{
                            return(
                            <Form>
                            <div >
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                {activeStep === steps.length ? (
                    <div>
                        <StaffPersonalInformation 
        
                                values={values}
                                getFieldProps={getFieldProps}
                                setFieldValue={setFieldValue}
                                errors={errors}
                                handleBlur={handleBlur}
                                touched={touched}
                                Grid ={Grid}
                                Field={Field}
                                match={match}
                                parse={parse}
                                TextField={TextField}
                                FastField={FastField}
                                Autocomplete={Autocomplete}
                                Card={Card}
                                Input={Input}
                                InputAdornment={InputAdornment}
                                AlternateEmail={AlternateEmail}
                                AddCircleOutlineIcon={AddCircleOutlineIcon}
                                AccountCircle={AccountCircle}
                                HomeIcon={HomeIcon}
                                state={state}
                                setstate = {setstate}

                                titleData={titleData}
                                specialityData={specialityData}
                                genderdata={genderdata}
                                religiondata={religiondata}
                                bloodgroupdata={bloodgroupdata}
                            />
                            <StaffProffessionalInformation
                                values={values}
                                getFieldProps={getFieldProps}
                                setFieldValue={setFieldValue}
                                errors={errors}
                                handleBlur={handleBlur}
                                touched={touched}
                                Grid ={Grid}
                                Field={Field}
                                match={match}
                                parse={parse}
                                TextField={TextField}
                                FastField={FastField}
                                Autocomplete={Autocomplete}
                                Card={Card}
                                Input={Input}
                                InputAdornment={InputAdornment}
                                FingerprintIcon={FingerprintIcon}
                                CardMembershipIcon={CardMembershipIcon}
                                LocalLibraryIcon={LocalLibraryIcon}
                                ContactPhoneIcon={ContactPhoneIcon}
                                titleData={titleData}
                                positionData={positionData}
                                specialityData={specialityData}
                                staffGradeData={staffGradeData}
                            />
                            <StaffEmergencyContact
                                values={values}
                                getFieldProps={getFieldProps}
                                errors={errors}
                                touched={touched}
                                Grid ={Grid}
                                TextField={TextField}
                                FastField={FastField}
                                Card={Card}
                                Input={Input}
                                InputAdornment={InputAdornment}

                                AccountCircle={AccountCircle}
                                HomeIcon={HomeIcon}
                                ContactPhoneIcon={ContactPhoneIcon}
                                WorkIcon={WorkIcon}
                            />
                                    
                    
                    
                        <Card className="nobackground mb-4 ml-3 mr-3">
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} spacing={2}>
                                            <Grid sm={12} item className="text-center">
                                                <Button onClick={handleResetsteps} className="bg-warning p-2 pl-4 pr-4 m-2">Restart</Button>
                                                {isValid && dirty && state.imagedataBack ? <Button  type="submit" className="bg-danger p-2 pl-4 pr-4 m-2">submit</Button>:<Button disabled  type="submit" className="bg-secondary p-2 p-2 pl-4 pr-4 m-2">submit</Button>}
                                                <Button type="reset" onClick={()=>{
                                                    handleResetsteps()
                                                    handleReset()
                                                }} className="bg-warning p-2 pl-4 pr-4 m-2">reset</Button>
                                            </Grid> 
                                        </Grid>
                                </Grid>
                        </Card>
                        
                    </div>
                ) : (
                    <div>
                        {getStepContent(
                            activeStep,
                            values,
                            getFieldProps,
                            setFieldValue,
                            // setFieldError,
                            errors,
                            // validateOnBlur,
                            // handleSubmit,
                            handleBlur,
                            handleChange,
                            touched)}
                    <div className="text-center">
                        <Button variant="contained" color="primary"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className="m-2"
                            // className={classes.backButton}
                            >
                        Back
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleNext} className="m-2">
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                        </div>
                    </div>
                )}
                </div>
            </div>
                            
                            </Form>
                            )
                        }
                    }
                   
                </Formik>
          
        </div>

      {/* </div> */}
    </Layout>
        
  );
}
export async function getStaticProps(){
    let Gender = new GenderDatabase()
    let speciality = new SectionDatabase()
    let genderFindAll = await Gender.getGender()
    let sectionFindAll = await speciality.getSection()
    return{
        props:{
            genderFindAll,
            sectionFindAll
        }
    }
}

export default AdmissionForm
