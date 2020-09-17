import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField"
import {Field,Formik,Form,ErrorMessage} from "formik"
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
import Autocomplete from "@material-ui/lab/Autocomplete"
import {errorFieldMessage} from "../../components/error/errorFieldMessage"
import { Avatar } from '@material-ui/core';

let options = [{id:1,gender:"Male"},{id:2,gender:"Female"},{id:3,gender:"unknow"}]
let religiondata =[{doctrine:"Christain"},{doctrine:"Muslim"},{doctrine:"Pegan"},{doctrine:"Traditionalist"}]
let bloodgroupdata =[{group:"A+"},{group:"A-"},{group:"B+"},{group:"B-"},{group:"AB"},{group:"0+"},{group:"O-"}]
let sectiondata =[{section:"English"},{section:"FRENCH"},{section:"CHINESSE"},{section:"GERMAN"}]
const BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    width:"100%",
    color: theme.palette.text.secondary,
  },
}));
let initialStateValues = {
    
    imagesizeError:"none",
    imagedataBack:null,
}
let  AdmissionForm = () => {
    let [state , setstate] = useState(initialStateValues)
    const classes = useStyles();
    let initialValues={
        FamilyName:"",
        GivenName:"",
        DateOfBirth:"",
        // Gender:{id:"",gender:""},
        Gender: options[0],
        roll:"",
        BloodGroup:bloodgroupdata[0],
        Religion:religiondata[0],
        eMail:"",
        
        section:sectiondata[0],
        AdmissionID:"",
        Phone:"",
        shortBio:"",
        // image:{}
        image:""
        }
    let ValidationSchema = Yup.object({
        FamilyName: Yup.string().nullable().uppercase().trim().required("Enter Last Name"),
        GivenName: Yup.string().nullable().uppercase().trim().required("Enter First Name"),
        DateOfBirth: Yup.date().nullable().required("enter Date of Birth"),
        Gender: Yup.object().nullable().required("are you an Alien"),
        roll: Yup.string().nullable().required("Enter the role"),
        BloodGroup:Yup.object().nullable(),
        Religion: Yup.object().nullable().required("Enter you religion"),
        eMail: Yup.string().nullable().email().required("Enter your email"),
        section: Yup.object().nullable().required("choose section"),
        AdmissionID: Yup.string().nullable().required("User id"),
        Phone: Yup.string().nullable().required("Enter phone number"),
        shortBio: Yup.string().nullable().required("short biography"),
        image: Yup.string().nullable().required("user photo")

    })

let onsubmit = ()=>{
    console.log("hello submitted")
}

  
  

  return(
    <Layout>

    
      {/* <div className="overflow-visualHeight w-100"> */}
    <div>
      <div className="mt-4 mb-4 ml-3">
          <h3 className="whitesnow mr-3 p-1 ">Student</h3>
          <BrowserSiteOutput marginRight="mr-3"/>
      </div>
          <Card  className="whitesnow p-2 pr-0 mb-4 ml-3 mr-3">
            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                onSubmit = {onsubmit}
                enableReinitialize
                >
                    {
                        ({values,
                            getFieldProps,
                            setFieldValue,
                            setFieldError,
                            errors,
                            validateOnBlur,handleSubmit,handleBlur,handleChange,isValid,dirty,touched})=>{
                            return(
                            <div className="">
                                <Grid container spacing={2}>
                                    <Grid container item xs={12} spacing={2} className="bg-secondary m-2 mr-4" >
                                        <Grid item xs={12}  sm={6}  >
                                                <Field
                                                    error={errors.hasOwnProperty("image") && touched.hasOwnProperty("image") ? true : false }
                                                    // {...getFieldProps("image")}
                                                    label={errors.hasOwnProperty("image") && touched.hasOwnProperty("image") ? errors.DateOfBirth : "image" }
                                                    // value={values.image}
                                                    name="image"
                                                    id="image"
                                                    component={Input}
                                                    className="w-100"
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
                                                                            
                                                                        }))
                                                                        console.log("result::",reader.result)
                                                                        // fetch("/api/a",{
                                                                        //     method:"POST",
                                                                        //     headers:{'Content-Type':file.type},
                                                                        //     body:reader.result
                                                                        // })
                                                                    // img.src = event.target.result;
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
                                                        // setFieldValue("image",fileList[0])
                                                        
                                                        
                                                        // handleChange(event)
                                                    }}
                                                    />
                                                    
                                            </Grid>
                                            <Grid item xs={12}  sm={6} className="bg-info text-center" >
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
                                                    defaultValue={values.Gender}
                                                    onBlur={handleBlur}
                                                    onChange={(e,selectedOption )=>
                                                        {setFieldValue("Gender", selectedOption)
                                                        //  setFieldError("Gender",errors.Gender)
                                                            }
                                                    }
                                                    
                                                    // inputValue={values.Gender.title}
                                                    options={options}
                                                    name="Gender"
                                                    id="Gender"
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
                                                    error={errors.hasOwnProperty("roll") && touched.hasOwnProperty("roll") ? true : false }
                                                    {...getFieldProps("roll")}
                                                    label={errors.hasOwnProperty("roll") && touched.hasOwnProperty("roll") ? errors.roll : "Roll" }
                                                    value={values.roll}
                                                    name="roll"
                                                    id="roll"
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
                                                    
                                                    />
                                            </Grid>
                                           
                                        </React.Fragment>
                                    <React.Fragment>
                                    <Grid item xs={12} sm={6} >
                                        <Field
                                                        
                                            component={Autocomplete}
                                            // {...getFieldProps("Gender")}
                                            value={values.section}
                                            defaultValue={values.section}
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
                                                </Grid>
                                    <Grid item xs={12} sm={6}  >
                                                
                                                <Field
                                                    error={errors.hasOwnProperty("AdmissionID") && touched.hasOwnProperty("AdmissionID") ? true : false }
                                                    {...getFieldProps("AdmissionID")}
                                                    label={errors.hasOwnProperty("AdmissionID") && touched.hasOwnProperty("AdmissionID") ? errors.roll : "AdmissionID" }
                                                    value={values.AdmissionID}
                                                    name="AdmissionID"
                                                    id="AdmissionID"
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
                                                    error={errors.hasOwnProperty("Phone") && touched.hasOwnProperty("Phone") ? true : false }
                                                    {...getFieldProps("Phone")}
                                                    label={errors.hasOwnProperty("Phone") && touched.hasOwnProperty("Phone") ? errors.roll : "Phone" }
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
                                                                <AccountCircle/>
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
                                                    
                                                    />
                                            </Grid>
                                            
                                            
                                            {console.log("values::",values.image)}
                                            
                                        </React.Fragment>
                                    </Grid>
                                    


                                </Grid>
                            </div>
                            )
                        }
                    }
                    
                </Formik>
          </Card>
        </div>
      {/* </div> */}
    </Layout>
        
  );
}

export default AdmissionForm
