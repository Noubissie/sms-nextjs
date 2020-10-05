import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField"
import {Field,Formik,Form,ErrorMessage, FastField} from "formik"
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


import Autocomplete from "@material-ui/lab/Autocomplete"
// import {errorFieldMessage} from "../../components/error/errorFieldMessage"
import Button  from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import GenderDatabase from "../../database/GeneralDatabase"
// import SectionDatabase from "../../database/sectiondatabase"
import useSWR from "swr"

import {ValidationSchema, initialValue} from "../../components/studentfile/studentFormschema"


// let genderdata = [{id:1,gender:"Male"},{id:2,gender:"Female"},{id:3,gender:"unknow"}]
let religiondata =[{id:1,doctrine:"Christain"},{id:2,doctrine:"Muslim"},{id:3,doctrine:"Pegan"},{id:4,doctrine:"Traditionalist"}]
let bloodgroupdata =[{id:1,group:"A+"},{id:2,group:"A-"},{id:3,group:"B+"},{id:4,group:"B-"},{id:5,group:"AB"},{id:6,group:"0+"},{id:7,group:"O-"}]
// let sectiondata =[{section:"English"},{section:"FRENCH"},{section:"CHINESSE"},{section:"GERMAN"}]
const BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})

let initialStateValues = {
    
    imagesizeError:"none",
    imagedataBack:null,
    filename:""
}
let  AdmissionForm = ({genderFindAll}) => {

    

    let [state , setstate] = useState(initialStateValues)
    // let {data:sectionGetData, error:sectionGetError} =  useSWR("/api/sectionapi")
    let {data:genderGetData, error:genderGetError} =  useSWR("/api/generalapi?gender=true")
    // let sectiondata = (sectionGetData ? sectionGetData.length != 0 && sectionGetData :undefined) || (sectionFindAll.length == 0 ? [{id_:"",section:"", languages:""}]: sectionFindAll)
    let genderdata = (genderGetData ? genderGetData.length != 0 && genderGetData :undefined) || (genderFindAll.length == 0 ? [{id:"",gender:""}]: genderFindAll)
    
    
    // const classes = useStyles();

    let initialValues=initialValue(genderdata,bloodgroupdata,religiondata)

let onsubmit = async (values,submittingProps)=>{
    let data = await fetch("/api/studentapi",{
        method:"POST",
        body:JSON.stringify({
            values,
            imagedataBack: state.imagedataBack
        })
     })
     console.log("data::",data.status)
     if(data.status==409){
         alert(`${values.FamilyName} ${values.GivenName} with student id ${values.AdmissionID} exist already`)
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
                validationSchema={ValidationSchema}
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
                            handleChange,
                            isValid,
                            dirty,
                            touched
                        })=>{
                            return(
                        
                            <Form>
                            <Card  className="whitesnow p-2 pr-0 mb-4 ml-3 mr-3">
                            <h5 className="text-info">Student Information</h5>
                                <div className="">
                                    <Grid container spacing={2}>
                                        <Grid container item xs={12} spacing={2} className="bg-secondary m-2 mr-4" >
                                            <Grid item xs={12}  sm={6}  className="text-center">
                                                    <label htmlFor="image" className="w-100">
                                                        <AddCircleOutlineIcon fontSize="large" />
                                                    </label>
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
                                                                // Not supported in Firefox for Android or Opera for Android.
                                                                const type = file.type ? file.type : 'NOT SUPPORTED';
                                                                // Unknown cross-browser support.
                                                                const size = file.size ? file.size : 'NOT SUPPORTED';
                                                                
                                                                    // function readImage(file) {
                                                                        // Check if the file is an image.
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
                                                                        // reader.onload
                                                                        // reader.onloadend
                                                                        // reader.onloadstart
                                                                        // reader.onabort
                                                                        // reader.onerror
                                                                        // reader.onprogress
                                                                        
                                                                        reader.addEventListener('load', (event) => {
                                                                            
                                                                            setstate((prev)=>({
                                                                                ...prev,
                                                                                imagedataBack:event.target.result,
                                                                                filename:file.name
                                                                            }))
                                                                            console.log("filename::",state.filename)
                                                                            
                                                                        });
                                                                        reader.readAsDataURL(file)
                                                                        
                                                                        // formData[file.name] = file
                                                                        formData.append("file",file)
                                                                        console.log("formData::", formData)
                                                                        // fetch("/api/a",{
                                                                        //     method:"POST",
                                                                        //     headers:{'Content-Type':file.type},
                                                                        //     body:formData
                                                                        // })
                                                                    // }
                                                                    // readImage(file)
                                                                    
                                                            }
                                                            // setFieldValue("image",fileList[0].name)
                                                            
                                                            
                                                            // handleChange(event)
                                                        }}
                                                        />
                                                        
                                                        
                                                </Grid>
                                                <Grid item xs={12}  sm={6} className="bg-info text-center" >
                                                    {/* <FastField */}
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

                                                    
                                                </Grid>
                                                
                                        </Grid>
                                        <Grid container item xs={12} spacing={2} >
                                            <React.Fragment>
                                                <Grid item xs={12} sm={6} >
                                                    {console.log("error::",errors)}
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
                                                        
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start" >
                                                                    <AccountCircle/>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        />
                                                        {/* <ErrorMessage name="FamilyName" component={errorFieldMessage}/> */}
                                                </Grid>
                                                <Grid item xs={12} sm={6}  >
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
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start">
                                                                    <AccountCircle/>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12}  sm={6}  >
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
                                                </Grid>
                                                <Grid item xs={12} sm={6} className="w-100" >
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
                                                        
                                                </Grid>
                                                {console.log("values::",values)}
                                            </React.Fragment>
                                        </Grid>

                                        {/* ROW 2 --- STARTS HERE --- */}
                                        <Grid container item xs={12} spacing={2}>
                                            <React.Fragment>
                                                <Grid item xs={12} sm={6} >
                                                    <Field
                                                        error={errors.hasOwnProperty("StudentAddress") && touched.hasOwnProperty("StudentAddress") ? true : false }
                                                        {...getFieldProps("StudentAddress")}
                                                        label={errors.hasOwnProperty("StudentAddress") && touched.hasOwnProperty("StudentAddress") ? errors.StudentAddress : "StudentAddress" }
                                                        value={values.StudentAddress}
                                                        name="StudentAddress"
                                                        id="StudentAddress"
                                                        component={TextField}
                                                        className="w-100"
                                                        variant="filled"
                                                        
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start" >
                                                                    <HomeIcon/>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        />
                                                        {/* <ErrorMessage name="FamilyName" component={errorFieldMessage}/> */}
                                                </Grid>
                                                <Grid item xs={12} sm={6}  >
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
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}  >
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
                                                </Grid>
                                                <Grid item xs={12}  sm={6}  >
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
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start" >
                                                                    <AlternateEmail/>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        
                                                        />
                                                </Grid>
                                            
                                            </React.Fragment>
                                        <React.Fragment>
                                        {/* <Grid item xs={12} sm={6} >
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
                                                    </Grid> */}
                                        <Grid item xs={12} sm={6}  >
                                                    
                                                    <Field
                                                        error={errors.hasOwnProperty("AdmissionID") && touched.hasOwnProperty("AdmissionID") ? true : false }
                                                        {...getFieldProps("AdmissionID")}
                                                        label={errors.hasOwnProperty("AdmissionID") && touched.hasOwnProperty("AdmissionID") ? errors.AdmissionID : "AdmissionID" }
                                                        value={values.AdmissionID}
                                                        name="AdmissionID"
                                                        id="AdmissionID"
                                                        component={TextField}
                                                        className="w-100"
                                                        variant="filled"
                                                        
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start" >
                                                                    <FingerprintIcon/>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        
                                                        />
                                                        {/* <ErrorMessage name="FamilyName" component={errorFieldMessage}/> */}
                                                </Grid>
                                                
                                                <Grid item xs={12} sm={6}  >
                                                    
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
                                                        
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start" >
                                                                    <ContactPhoneIcon/>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        />
                                                        {/* <ErrorMessage name="FamilyName" component={errorFieldMessage}/> */}
                                                </Grid>
                                                <Grid item xs={12}  sm={6}  >
                                                    <Field
                                                        error={errors.hasOwnProperty("shortBio") && touched.hasOwnProperty("shortBio") ? true : false }
                                                        {...getFieldProps("shortBio")}
                                                        label={errors.hasOwnProperty("shortBio") && touched.hasOwnProperty("shortBio") ? errors.shortBio : "shortBio" }
                                                        value={values.shortBio}
                                                        name="shortBio"
                                                        id="shortBio"
                                                        component={TextField}
                                                        className="w-100"
                                                        variant="filled"
                                                        type="textArea"
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start">
                                                                    <LocalLibraryIcon/> 
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        />
                                                </Grid>
                                                
                                                
                                                {console.log("values::",values.image)}
                                                
                                            </React.Fragment>
                                        </Grid>
                                        


                                    </Grid>
                                </div>
                            </Card> 


                            {/* Father Information */}
                            <Card  className="whitesnow p-2 pr-0 mb-4 ml-3 mr-3">
                                <h5 className="text-info">Father Information</h5>
                                <Grid container item xs={12} spacing={2}>
                                        <Grid item xs={12}  sm={6}  >
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
                                                InputProps={{
                                                    startAdornment:(
                                                        <InputAdornment position="start" >
                                                            <AccountCircle/>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                />
                                        </Grid>
                               
                                
                                        <Grid item xs={12}  sm={6}  >
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
                                                InputProps={{
                                                    startAdornment:(
                                                        <InputAdornment position="start" >
                                                            <WorkIcon/>
                                                        </InputAdornment> 
                                                    )
                                                }}
                                                />
                                        </Grid>
                                
                                
                                        <Grid item xs={12}  sm={6}  >
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
                                                InputProps={{
                                                    startAdornment:(
                                                        <InputAdornment position="start" >
                                                            <HomeIcon/>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                />
                                        </Grid>
                                        <Grid item xs={12}  sm={6}  >
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
                                                InputProps={{
                                                    startAdornment:(
                                                        <InputAdornment position="start" >
                                                            <ContactPhoneIcon/>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                />
                                        </Grid>
                                </Grid>
                            </Card>

                            {/*  Mother Information */}
                            <Card  className="whitesnow p-2 pr-0 mb-4 ml-3 mr-3">
                                <h5 className="text-info">Mother Information</h5>
                                <Grid container item xs={12} spacing={2}>
                                        <Grid item xs={12}  sm={6}  >
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
                                                InputProps={{
                                                    startAdornment:(
                                                        <InputAdornment position="start" >
                                                            <AccountCircle/>
                                                        </InputAdornment> 
                                                    )
                                                }}
                                                />
                                        </Grid>
                               
                                
                                        <Grid item xs={12}  sm={6}  >
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
                                                InputProps={{
                                                    startAdornment:(
                                                        <InputAdornment position="start" >
                                                            <WorkIcon/>
                                                        </InputAdornment> 
                                                    )
                                                }}
                                                />
                                        </Grid>
                                
                                
                                        <Grid item xs={12}  sm={6}  >
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
                                                InputProps={{
                                                    startAdornment:(
                                                        <InputAdornment position="start" >
                                                            <HomeIcon/>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                />
                                        </Grid>
                                        <Grid item xs={12}  sm={6}  >
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
                                                InputProps={{
                                                    startAdornment:(
                                                        <InputAdornment position="start" >
                                                            <ContactPhoneIcon/>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                />
                                        </Grid>
                                </Grid>
                            </Card>
                            <Card className="nobackground mb-4 ml-3 mr-3">
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} spacing={2}>
                                            <Grid sm={12} item className="text-center">
                                                {isValid && dirty && state.imagedataBack ? <Button  type="submit" className="bg-danger p-2 pl-4 pr-4 m-2">submit</Button>:<Button disabled  type="submit" className="bg-secondary p-2 p-2 pl-4 pr-4 m-2">submit</Button>}
                                                <Button type="reset" className="bg-warning p-2 pl-4 pr-4 m-2">reset</Button>
                                            </Grid> 
                                        </Grid>
                                </Grid>
                            </Card>
        
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
    // let section = new SectionDatabase()
    let genderFindAll = await Gender.getGender()
    // let sectionFindAll = await section.getSection()
    return{
        props:{
            genderFindAll,
            // sectionFindAll
        }
    }
}

export default AdmissionForm
