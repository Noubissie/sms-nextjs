import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
// import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import InputGroup from "react-bootstrap/InputGroup"
import {Formik, Form, Field, FastField, ErrorMessage } from "formik"
import Layout from "../../components/layout"

import {mutate, trigger} from "swr"
// import makeAnimated from 'react-select/animated'
import dynamic from "next/dynamic"
import { Button } from "react-bootstrap"
// import Select from 'react-select'
// let Select = dynamic(()=>import('react-select'),{ssr:false})

// import { BrowserSiteOutput } from "../components/browserSiteOutput"

const BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})

    let initialValues = {
            firstname:"",
            lastname:"",
            Gender:"",
            dateOfBirth:"",
            BloodGroup:"",
            Roll:"",
            Religion:"",
            email:"",
            Class:"",
            Section:"",
            AdmissionID:"",
            Phone:"",
            shortBiography:"",
            studentPicture:"",
        }
        
let AdmissionForm = ()=>{
    
        
        let onSubmit = async (values) =>{
            console.log("value:",values)
            let res = await fetch("/api/b",
            {
                method:"POST",
                body: JSON.stringify(values),
                headers:{
                    cookies:"name"
                }
            })
            trigger("/api/a")
        }
        let validate = (error)=>{
            
            console.log("error::",error)
        }
    
    // console.log("values:",values)
  

    return (
        <React.Fragment>
            
               <Layout>
                    <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={onSubmit}
                        
                    >
                        {
                            ({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                        <Form onSubmit={handleSubmit}>
                            
                                <div className="mt-4 mb-4 ml-3">
                                    <h3 >Student</h3>
                                    <BrowserSiteOutput marginRight="mr-3"/>
                                </div>
                                <Container fluid="true" className="p-3">
                                    <Card >
                                        <div className="mt-3 mb-4 ml-3">
                                            <h3 >Add New Student</h3>
                                        </div>
                                        <Card.Body>
                                            <Row>
                                                
                                                <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
                                                    <label htmlFor="firstname" className=" w-100 text-secondary">First Name/Given Name*</label>
                                                    <Field 
                                                        as="input"
                                                        onChange = {handleChange} 
                                                        value = {values.firstname}                                            as="input" 
                                                        id="firstname"
                                                        name="firstname" 
                                                        // placeholder="First Name"
                                                        className="p-3  w-100 rounded border-info grey"
                                                        />
                                                    
                                                </Col>
                                                <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
                                                    <label htmlFor="lastname" className=" w-100 text-secondary">Last Name*</label>
                                                    <Field 
                                                        onChange = {handleChange}
                                                        value={values.lastname}
                                                        as="input" 
                                                        id="lastname"
                                                        name="lastname" 
                                                        placeholder="Last Name"
                                                        className="p-3  w-100 rounded border-info grey"
                                                        />
                                                    
                                                </Col>
                                                <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
                                                    <label htmlFor="dateOfBirth" className=" w-100 text-secondary">Date of birth*</label>
                                                    <Field 
                                                        onChange = {handleChange}
                                                        value = {values.dateOfBirth}
                                                        as="input"
                                                        type="date"
                                                        id="dateOfBirth"
                                                        name="dateOfBirth" 
                                                        placeholder="Date of birth"
                                                        className="p-3 m-0 w-100 rounded border-info grey"
                                                        />
                                                    
                                                </Col>
                                                <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
                                                    <label htmlFor="gender" className=" w-100 text-secondary">Gender*</label>
                                                    <Field 
                                                        as="select"
                                                        onChange = {handleChange}
                                                        value = {values.Gender} 
                                                        
                                                        name="Gender"
                                                        style={{background:"none"}}
                                                        className="p-3 m-0 w-100  border-info grey"
                                                        >
                                                            <option defaultValue hidden  label="choose gender"/>
                                                            <option value="1" label="Male"/>
                                                            <option value="2" label="Female"/>
                                                            <option value="3" label="unknown"/>
                                                    </Field>
                                                </Col>
                                            </Row>
                                            <Row>
                                                
                                                <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
                                                    <label htmlFor="Roll" className=" w-100 text-secondary">Roll*</label>
                                                    <Field 
                                                        onChange = {handleChange}
                                                        value = {values.Roll}
                                                        as="input" 
                                                        id="Roll"
                                                        name="Roll" 
                                                        placeholder="Roll"
                                                        className="p-3  w-100 rounded border-info grey"
                                                        />  
                                                    
                                                </Col>
                                                <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
                                                    <label htmlFor="BloodGroup" className=" w-100 text-secondary">Blood Group*</label>
                                                    <Field
                                                        as="select"
                                                        onChange = {handleChange}
                                                        value = {values.BloodGroup}
                                                        name="BloodGroup"
                                                        className="p-3 w-100 rounded border border-info grey"
                                                        
                                                    >
                                                        <option>A</option>
                                                        <option>AB</option>
                                                        <option>B</option>
                                                        <option>O-</option>
                                                        <option>O+</option>
                                                    </Field>
                                                    
                                                </Col>
                                                <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
                                                    <label htmlFor="Religion" className=" w-100 text-secondary">Religion*</label>
                                                    <Field    
                                                        as= "select"
                                                        onChange = {handleChange}
                                                        value = {values.Religion}
                                                        id="Religion"
                                                        name="Religion"
                                                        
                                                        // styles={customStyles}
                                                        className="basic-multi-select p-4 w-100 rounded border border-info grey"
                                                        
                                                        >
                                                            <option>Christian</option>
                                                            <option>Muslim</option>
                                                            <option>Traditional</option>

                                                        </Field>
                                                    
                                                </Col>
                                                <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
                                                    <label htmlFor="email" className=" w-100 text-secondary">E-mail*</label>
                                                    <Field 
                                                        onChange = {handleChange}
                                                        value = {values.email}
                                                        as="input" 
                                                        type="email"
                                                        id="email"
                                                        name="email" 
                                                        placeholder="E-mail"
                                                        className="p-3  w-100 rounded border-info grey"
                                                        /> 
                                                    
                                                </Col>
                                            </Row>

                                            <Row>
                                                
                                                <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
                                                    <label htmlFor="Class" className=" w-100 text-secondary">Class*</label>
                                                    <Field 
                                                        onChange = {handleChange}
                                                        value = {values.Class}
                                                        as="input" 
                                                        id="Class"
                                                        name="Class" 
                                                        placeholder="Class"
                                                        className="p-3  w-100 rounded border-info grey"
                                                        />
                                                    
                                                </Col>
                                                <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
                                                    <label htmlFor="Section" className=" w-100 text-secondary">Section*</label>
                                                    <Field 
                                                        onChange = {handleChange}
                                                        value = {values.Section}
                                                        as="input" 
                                                        id="Section"
                                                        name="Section" 
                                                        placeholder="Section"
                                                        className="p-3  w-100 rounded border-info grey"
                                                        />
                                                    
                                                </Col>
                                                <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
                                                    <label htmlFor="AdmissionID" className=" w-100 text-secondary">Admission ID*</label>
                                                    <Field 
                                                        onChange = {handleChange}
                                                        value = {values.AdmissionID}
                                                        as="input"
                                                        id="AdmissionID"
                                                        name="AdmissionID" 
                                                        placeholder="Admission ID"
                                                        className="p-3 m-0 w-100 rounded border-info grey"
                                                        />
                                                    
                                                </Col>
                                                <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
                                                    <label htmlFor="Phone" className=" w-100 text-secondary">Phone*</label>
                                                    <InputGroup className=" m-0 p-0 w-100">
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text className="rounded border-info grey ">+237</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        
                                                            <FormControl 
                                                                onChange = {handleChange}
                                                                value = {values.Phone}
                                                                as="input"
                                                                id="Phone"
                                                                name="Phone" 
                                                                placeholder="Phone"
                                                                className="p-4  m-0  rounded border-info grey"
                                                            />
                                                        
                                                    </InputGroup>
                                                    
                                                    
                                                </Col>
                                            </Row>
                                            <Row>
                                                    <Col sm="12" md="6"  className="pt-2 pb-2 mb-2 w-100 rounded border-info">
                                                        <label htmlFor="shortBiography" className=" w-100 text-secondary">Short Bio*</label>
                                                        <textarea
                                                            onChange = {handleChange}
                                                            value = {values.shortBiography}
                                                            id="shortBiography"
                                                            name="shortBiography" 
                                                            className="p-2 m-0 w-100 rounded border-info heightcontrol height50 grey"
                                                        />
                                                    
                                                        
                                                    </Col>
                                                    <Col sm="12" md="6"  className="pt-2 pb-2 mb-2 w-100 rounded border-info">
                                                        <label htmlFor="studentPicture" className=" w-100 text-secondary">Upload Student Photo (150px X 150px)*</label>
                                                            <input 
                                                            onChange = {handleChange}
                                                            value = {values.studentPicture}
                                                            type="file" 
                                                            name="studentPicture" 
                                                            id="studentPicture" />
                                                    </Col>
                                            </Row>
                                        </Card.Body>
                                        <div>
                                            <Button as="button" type="submit" className="pl-5 pr-5 m-4 bg-info" >submit</Button>
                                            <Button as="button" type="reset" className="pl-5 pr-5 m-4 bg-warning" >reset</Button>
                                        </div>
                                        
                                    </Card>
                                    
                                </Container>
                                
                            </Form>
                        )}
                    </Formik>
               </Layout>
            {/* </Formik> */}
        </React.Fragment>
    )
}

export function getStaticProps(){
    
    return {
        props:{

        }
    }
}
export default AdmissionForm