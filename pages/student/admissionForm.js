// // import Card from "@material-ui/core/Card"
// // import Col from "@material-ui/core/Col"
// // import Row from "@material-ui/core/Row"
// // import Container from "@material-ui/core/Container"
// // // import Form from "react-bootstrap/Form"
// // import FormControl from "@material-ui/core/FormControl"
// // import InputGroup from "@material-ui/core/InputGroup"
// // import {Formik, Form, Field, FastField, ErrorMessage } from "formik"
// // import Layout from "../../components/layout"

// // import {mutate, trigger} from "swr"
// // // import makeAnimated from 'react-select/animated'
// // import dynamic from "next/dynamic"  //limit size error, if the size exceeds the limited size it fails without throwing an error,hence denial of service attack. Medium vulnerability
// // import { Button } from "react-bootstrap"
// // // import Select from 'react-select'
// // // let Select = dynamic(()=>import('react-select'),{ssr:false})

// // // import { BrowserSiteOutput } from "../components/browserSiteOutput"

// // const BrowserSiteOutput = dynamic(
// //     ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
// //         {ssr:false})

// //     let initialValues = {
// //             firstname:"",
// //             lastname:"",
// //             Gender:"",
// //             dateOfBirth:"",
// //             BloodGroup:"",
// //             Roll:"",
// //             Religion:"",
// //             email:"",
// //             Class:"",
// //             Section:"",
// //             AdmissionID:"",
// //             Phone:"",
// //             shortBiography:"",
// //             studentPicture:"",
// //         }
        
// // let AdmissionForm = ()=>{
    
        
// //         let onSubmit = async (values) =>{
// //             console.log("value:",values)
// //             let res = await fetch("/api/b",
// //             {
// //                 method:"POST",
// //                 body: JSON.stringify(values),
// //                 headers:{
// //                     cookies:"name"
// //                 }
// //             })
// //             trigger("/api/a")
// //         }
// //         let validate = (error)=>{
            
// //             console.log("error::",error)
// //         }
    
// //     // console.log("values:",values)
  

// //     return (
// //         <React.Fragment>
            
// //                <Layout>
// //                     <Formik
// //                         initialValues={initialValues}
// //                         validate={validate}
// //                         onSubmit={onSubmit}
                        
// //                     >
// //                         {
// //                             ({
// //                                 values,
// //                                 errors,
// //                                 touched,
// //                                 handleChange,
// //                                 handleBlur,
// //                                 handleSubmit,
// //                                 isSubmitting,
// //                                 /* and other goodies */
// //                             }) => (
// //                         <Form onSubmit={handleSubmit}>
                            
// //                                 <div className="mt-4 mb-4 ml-3">
// //                                     <h3 classNamae="bg-light opacityControl rounded">Student</h3>
// //                                     <BrowserSiteOutput marginRight="mr-3"/>
// //                                 </div>
// //                                 <Container fluid="true" className="p-3">
// //                                     <Card >
// //                                         <div className="mt-3 mb-4 ml-3">
// //                                             <h3 >Add New Student</h3>
// //                                         </div>
// //                                         <Card.Body>
// //                                             <Row>
                                                
// //                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
// //                                                     <label htmlFor="firstname" className=" w-100 text-secondary">First Name/Given Name*</label>
// //                                                     <Field 
// //                                                         as="input"
// //                                                         onChange = {handleChange} 
// //                                                         value = {values.firstname}                                            as="input" 
// //                                                         id="firstname"
// //                                                         name="firstname" 
// //                                                         // placeholder="First Name"
// //                                                         className="p-3  w-100 rounded border-info grey"
// //                                                         />
                                                    
// //                                                 </Col>
// //                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
// //                                                     <label htmlFor="lastname" className=" w-100 text-secondary">Last Name*</label>
// //                                                     <Field 
// //                                                         onChange = {handleChange}
// //                                                         value={values.lastname}
// //                                                         as="input" 
// //                                                         id="lastname"
// //                                                         name="lastname" 
// //                                                         placeholder="Last Name"
// //                                                         className="p-3  w-100 rounded border-info grey"
// //                                                         />
                                                    
// //                                                 </Col>
// //                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
// //                                                     <label htmlFor="dateOfBirth" className=" w-100 text-secondary">Date of birth*</label>
// //                                                     <Field 
// //                                                         onChange = {handleChange}
// //                                                         value = {values.dateOfBirth}
// //                                                         as="input"
// //                                                         type="date"
// //                                                         id="dateOfBirth"
// //                                                         name="dateOfBirth" 
// //                                                         placeholder="Date of birth"
// //                                                         className="p-3 m-0 w-100 rounded border-info grey"
// //                                                         />
                                                    
// //                                                 </Col>
// //                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
// //                                                     <label htmlFor="gender" className=" w-100 text-secondary">Gender*</label>
// //                                                     <Field 
// //                                                         as="select"
// //                                                         onChange = {handleChange}
// //                                                         value = {values.Gender} 
                                                        
// //                                                         name="Gender"
// //                                                         style={{background:"none"}}
// //                                                         className="p-3 m-0 w-100  border-info grey"
// //                                                         >
// //                                                             <option defaultValue hidden  label="choose gender"/>
// //                                                             <option value="1" label="Male"/>
// //                                                             <option value="2" label="Female"/>
// //                                                             <option value="3" label="unknown"/>
// //                                                     </Field>
// //                                                 </Col>
// //                                             </Row>
// //                                             <Row>
                                                
// //                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
// //                                                     <label htmlFor="Roll" className=" w-100 text-secondary">Roll*</label>
// //                                                     <Field 
// //                                                         onChange = {handleChange}
// //                                                         value = {values.Roll}
// //                                                         as="input" 
// //                                                         id="Roll"
// //                                                         name="Roll" 
// //                                                         placeholder="Roll"
// //                                                         className="p-3  w-100 rounded border-info grey"
// //                                                         />  
                                                    
// //                                                 </Col>
// //                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
// //                                                     <label htmlFor="BloodGroup" className=" w-100 text-secondary">Blood Group*</label>
// //                                                     <Field
// //                                                         as="select"
// //                                                         onChange = {handleChange}
// //                                                         value = {values.BloodGroup}
// //                                                         name="BloodGroup"
// //                                                         className="p-3 w-100 rounded border border-info grey"
                                                        
// //                                                     >
// //                                                         <option>A</option>
// //                                                         <option>AB</option>
// //                                                         <option>B</option>
// //                                                         <option>O-</option>
// //                                                         <option>O+</option>
// //                                                     </Field>
                                                    
// //                                                 </Col>
// //                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
// //                                                     <label htmlFor="Religion" className=" w-100 text-secondary">Religion*</label>
// //                                                     <Field    
// //                                                         as= "select"
// //                                                         onChange = {handleChange}
// //                                                         value = {values.Religion}
// //                                                         id="Religion"
// //                                                         name="Religion"
                                                        
// //                                                         // styles={customStyles}
// //                                                         className="basic-multi-select p-4 w-100 rounded border border-info grey"
                                                        
// //                                                         >
// //                                                             <option>Christian</option>
// //                                                             <option>Muslim</option>
// //                                                             <option>Traditional</option>

// //                                                         </Field>
                                                    
// //                                                 </Col>
// //                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
// //                                                     <label htmlFor="email" className=" w-100 text-secondary">E-mail*</label>
// //                                                     <Field 
// //                                                         onChange = {handleChange}
// //                                                         value = {values.email}
// //                                                         as="input" 
// //                                                         type="email"
// //                                                         id="email"
// //                                                         name="email" 
// //                                                         placeholder="E-mail"
// //                                                         className="p-3  w-100 rounded border-info grey"
// //                                                         /> 
                                                    
// //                                                 </Col>
// //                                             </Row>

// //                                             <Row>
                                                
// //                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
// //                                                     <label htmlFor="Class" className=" w-100 text-secondary">Class*</label>
// //                                                     <Field 
// //                                                         onChange = {handleChange}
// //                                                         value = {values.Class}
// //                                                         as="input" 
// //                                                         id="Class"
// //                                                         name="Class" 
// //                                                         placeholder="Class"
// //                                                         className="p-3  w-100 rounded border-info grey"
// //                                                         />
                                                    
// //                                                 </Col>
// //                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
// //                                                     <label htmlFor="Section" className=" w-100 text-secondary">Section*</label>
// //                                                     <Field 
// //                                                         onChange = {handleChange}
// //                                                         value = {values.Section}
// //                                                         as="input" 
// //                                                         id="Section"
// //                                                         name="Section" 
// //                                                         placeholder="Section"
// //                                                         className="p-3  w-100 rounded border-info grey"
// //                                                         />
                                                    
// //                                                 </Col>
// //                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
// //                                                     <label htmlFor="AdmissionID" className=" w-100 text-secondary">Admission ID*</label>
// //                                                     <Field 
// //                                                         onChange = {handleChange}
// //                                                         value = {values.AdmissionID}
// //                                                         as="input"
// //                                                         id="AdmissionID"
// //                                                         name="AdmissionID" 
// //                                                         placeholder="Admission ID"
// //                                                         className="p-3 m-0 w-100 rounded border-info grey"
// //                                                         />
                                                    
// //                                                 </Col>
// //                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
// //                                                     <label htmlFor="Phone" className=" w-100 text-secondary">Phone*</label>
// //                                                     <InputGroup className=" m-0 p-0 w-100">
// //                                                         <InputGroup.Prepend>
// //                                                             <InputGroup.Text className="rounded border-info grey ">+237</InputGroup.Text>
// //                                                         </InputGroup.Prepend>
                                                        
// //                                                             <FormControl 
// //                                                                 onChange = {handleChange}
// //                                                                 value = {values.Phone}
// //                                                                 as="input"
// //                                                                 id="Phone"
// //                                                                 name="Phone" 
// //                                                                 placeholder="Phone"
// //                                                                 className="p-4  m-0  rounded border-info grey"
// //                                                             />
                                                        
// //                                                     </InputGroup>
                                                    
                                                    
// //                                                 </Col>
// //                                             </Row>
// //                                             <Row>
// //                                                     <Col sm="12" md="6"  className="pt-2 pb-2 mb-2 w-100 rounded border-info">
// //                                                         <label htmlFor="shortBiography" className=" w-100 text-secondary">Short Bio*</label>
// //                                                         <textarea
// //                                                             onChange = {handleChange}
// //                                                             value = {values.shortBiography}
// //                                                             id="shortBiography"
// //                                                             name="shortBiography" 
// //                                                             className="p-2 m-0 w-100 rounded border-info heightcontrol height50 grey"
// //                                                         />
                                                    
                                                        
// //                                                     </Col>
// //                                                     <Col sm="12" md="6"  className="pt-2 pb-2 mb-2 w-100 rounded border-info">
// //                                                         <label htmlFor="studentPicture" className=" w-100 text-secondary">Upload Student Photo (150px X 150px)*</label>
// //                                                             <input 
// //                                                             onChange = {handleChange}
// //                                                             value = {values.studentPicture}
// //                                                             type="file" 
// //                                                             name="studentPicture" 
// //                                                             id="studentPicture" />
// //                                                     </Col>
// //                                             </Row>
// //                                         </Card.Body>
// //                                         <div>
// //                                             <Button as="button" type="submit" className="pl-5 pr-5 m-4 bg-info" >submit</Button>
// //                                             <Button as="button" type="reset" className="pl-5 pr-5 m-4 bg-warning" >reset</Button>
// //                                         </div>
                                        
// //                                     </Card>
                                    
// //                                 </Container>
                                
// //                             </Form>
// //                         )}
// //                     </Formik>
// //                </Layout>
// //             {/* </Formik> */}
// //         </React.Fragment>
// //     )
// // }

// // export function getStaticProps(){
    
// //     return {
// //         props:{

// //         }
// //     }
// // }
// // export default AdmissionForm
// import Container from "@material-ui/core/Container"
// import TextField from "@material-ui/core/TextField"

// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// import Autocomplete from "@material-ui/lab/Autocomplete"
// import {Formik, Form, Field, FastField, ErrorMessage } from "formik"
// let student = ()=>{
//     const classes = useStyles()
//     return (
//         <div>
//             {/* <Container minWidth="lg"> */}
//                 <Formik>
//                     <Form className={classes.root} noValidate autoComplete="off">
//                         <Grid container item xs={12} spacing={3}> >
//                             <Grid item xm="4" className={classes.paper}>
//                             <Field
//                                 name="1"
//                                 component={TextField}
//                                 label="Standard"
//                                 />
//                             </Grid>

//                             <Grid item xm="4" className={classes.paper}> 
//                             <Field
//                                 name="1"
//                                 component={TextField}
//                                 label="Standard"
//                                 />
//                             </Grid>
//                             <Grid item xm="4" className={classes.paper}>
//                             <Field
//                                 name="1"
//                                 component={TextField}
//                                 label="Standard"
//                                 />
//                             </Grid>
//                             </Grid>

//                             <Grid container sm="12" >
//                             <Grid xm="4">
//                             <Field
//                                 name="1"
//                                 component={TextField}
//                                 label="Standard"
//                                 />
//                             </Grid>
//                             <Grid xm="4">
//                             <Field
//                                 name="1"
//                                 component={TextField}
//                                 label="Standard"
//                                 />
//                             </Grid>

//                         </Grid>

//                         <TextField id="standard-basic" label="Standard" />
//                         <TextField id="filled-basic" label="Filled" variant="filled" />
//                         <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//                         <Autocomplete
//                         multiple
//                         id="tags-standard"
//                         options={top100Films}
//                         getOptionLabel={(option) => option.title}
//                         defaultValue={[top100Films[13]]}
//                         renderInput={(params) => (
//                         <TextField
//                             {...params}
//                             variant="standard"
//                             label="Multiple values"
//                             placeholder="Favorites"
//                         />
//                             )}
//                         />
//                     </Form>
                    
//                 </Formik>
//             {/* </Container> */}
            
//         </div>
//     )
// }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField"
import {Field,Formik,Form} from "formik"
import Card from '@material-ui/core/Card';
import Layout from "../../components/layout"
import dynamic from "next/dynamic"
import Input from '@material-ui/core/Input';

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

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12} md={6} >
            <Field
                error={true}
                name="1"
                component={TextField}
                label="Standard"
                className="w-100"
                variant="filled"
                />
        </Grid>
        <Grid item xs={12} md={6}  >
            <Field
                name="2"
                component={TextField}
                label="Standard"
                className="w-100"
                variant="filled"
                />
        </Grid>
        <Grid item xs={12} md={6} alignContent="stretch" >
            <Field
                name="3"
                component={TextField}
                label="Standard"
                className="w-100"
                variant="filled"
                />
        </Grid>
        <Grid item xs={12} md={6} className="w-100" >
            <Field
                name="3"
                component={TextField}
                label="Standard"
                className="w-100"
                id="standard-adornment-amount"
                variant="filled"
                // value={values.amount}
                // onChange={handleChange('amount')}
                />
                {/* <Input
              id="standard-adornment-amount"
              value={values.amount}
              onChange={handleChange('amount')}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            /> */}
        </Grid>
      </React.Fragment>
    );
  }

  return(
    <Layout>

    
      {/* <div className="overflow-visualHeight w-100"> */}
    <div>
      <div className="mt-4 mb-4 ml-3">
          <h3 className="whitesnow mr-3 p-1 ">Student</h3>
          <BrowserSiteOutput marginRight="mr-3"/>
      </div>
          <Card  className="whitesnow p-2 mb-4 ml-3 mr-3 ">
            <Formik>
                    {
                        ({values,getFieldProps,onSubmitHandle})=>{
                            return(
                            <div className={classes.root}>
                                <Grid container spacing={1}>
                                    <Grid container item xs={12} spacing={1} >
                                    <FormRow />
                                    </Grid>
                                    <Grid container item xs={12} spacing={1}>
                                    <FormRow />
                                    </Grid>
                                    <Grid container item xs={12} spacing={1}>
                                    <FormRow />
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