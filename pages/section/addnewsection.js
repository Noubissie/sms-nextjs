import React  from "react"
import dynamic from "next/dynamic"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import  Row  from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import {Formik, Field, Form, FieldArray} from  "formik"
import Layout from "../../components/layout"
import * as Yup from "yup"
import toast from "../../components/decoration/toast"

import options from "../../components/languages/languages"

let Select = dynamic(
    ()=>import("react-select"),
        {ssr:false})
// let SelectField = dynamic(
//     ()=>import("../../components/myselect/select"),
//         {ssr:false})
let BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})

const customStyles = {}

let Section = ()=>{
    
    
     let initialValues = {
        
        section:[{
            id:"",
            sectionName:"",
            sectionLanguage:"",
        }],
     }
    
    let validationSchema = Yup.object({
        section: Yup.array().nullable().of(
            Yup.object({
                id: Yup.number().nullable().required("enter section ID"),
                sectionName: Yup.string().nullable().required("enter section").min(3,"Greater than 3 letters"),
                sectionLanguage: Yup.string().nullable().required("enter Language")
            })
        )
    })
    let onSubmit = async (values, onSubmitProps) =>{
        onSubmitProps.setSubmitting(true)
        
        toast.success("BasicConfiguration",{position: toast.POSITION.TOP_CENTER,autoClose:2000})
        
        let res = await fetch("/api/sectionapi",
        {
            method:"POST",
            body: JSON.stringify(values),
            headers:{
                cookies:"name"
            }
        })
        onSubmitProps.resetForm(true)
        // trigger("/api/a")
    }
    let onReset = ()=>{
        // 
    }

    return (
        <React.Fragment>
            <Layout>
                    <div className="mt-3 mb-4 ml-3">
                        <h3 >Section</h3>
                        <BrowserSiteOutput marginRight="mr-3"/>
                    </div>
                <Container fluid="true" className="p-3">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        onReset={onReset}
                        >
                        {({
                                values,
                                errors,
                                touched,
                                isValid,
                                dirty,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                setFieldValue,
                                getFieldProps
                                /* and other goodies */
                            })=>(
                            <Form onSubmit={handleSubmit}>
                            <Card>
                        
                                <div className="mt-3 mb-4 ml-3">
                                    <h3>
                                        Add New Section
                                    </h3>
                                </div>
                            
                                <Card.Body>
                                <FieldArray name="section">
                                    
                                    {   
                                        (fieldprops,index)=>{
                                            let {push,remove,form} = fieldprops
                                            const {values} = form
                                            const {section} = values 
                                          return(
                                            <div key={index}>
                                            {
                                                section.map((value,index)=>{
                                                    return(
                                                        <div key={index}>
                                                            <Row>
                                                                <Col lg="2">
                                                                    <div className="mb-4">
                                                                        {index == 0 && <label  className="" >Section ID</label>}
                                                                        
                                                                        <Field
                                                                            as="input"
                                                                            {...getFieldProps(section[index].id)}
                                                                            type="number"
                                                                            step="1"
                                                                            value={value.id}
                                                                            placeholder="Section ID"
                                                                            name={`section[${index}].id`}
                                                                            min="1"
                                                                            className="w-100 p-3  rounded"
                                                                        />
                                                                        { Object.keys(errors.section? errors.section:{}).length >= 1 && Object.keys(touched.section ? touched.section:{}).length >= 1 ? <div className="text-danger border rounded border-warning">{errors.section[index]?errors.section[index].id:null}</div> : null}
                                                                    </div>
                                                                   
                                                                    
                                                                </Col >
                                                                <Col lg="4">
                                                                    <div className="mb-4">
                                                                        {index == 0 && <label  className="" >Section Name</label>}
                                                                        
                                                                        <Field
                                                                            as="input"
                                                                            {...getFieldProps(section[index].sectionName)}
                                                                            value={value.sectionName}
                                                                            placeholder="Section Name"
                                                                            name={`section[${index}].sectionName`}
                                                                            className="w-100 p-3  rounded"
                                                                        />
                                                                        { Object.keys(errors.section? errors.section:{}).length >= 1 && Object.keys(touched.section ? touched.section:{}).length >= 1 ? <div className="text-danger border rounded border-warning">{errors.section[index]?errors.section[index].sectionName:null}</div> : null}
                                                                    </div>
                                                                   
                                                                    
                                                                </Col >
                                                                <Col lg="4">
                                                                    <div className="MB-4">
                                                                        {index == 0 && <label  className="" >Section Language</label>}
                                                                        
                                                                        <Field 
                                                                            as="select"
                                                                            
                                                                            {...getFieldProps(section[index].sectionLanguage)}
                                                                            name={`section[${index}].sectionLanguage`}
                                                                            value={value.sectionLanguage}
                                                                            className="bg-secondary p-3 pb-4  rounded w-100"
                                                                            // multiple
                                                                            >
                                                                                {
                                                                                    options.map((value1,index)=>{
                                                                                        return (
                                                                                            <option key={index} value={value1.value} label={value1.label}/>
                                                                                        )
                                                                                    })
                                                                                }
                                                                        </Field>
                                                                        { Object.keys(errors.section? errors.section:{}).length >= 1 && Object.keys(touched.section ? touched.section:{}).length >= 1  ? <div className="text-danger border rounded border-warning">{errors.section[index]? errors.section[index].sectionLanguage:null}</div> : null}
                                                                    </div>
                                                                    
                                                                    
                                                                </Col>
                                                                            
                                                                {/* 
                                                                <Col lg="6">
                                                                    <label htmlFor="section" className="">Language</label>
                                                                    <Select
                                                                        styles={customStyles}
                                                                            onChange={selectedOption =>
                                                                                setFieldValue("fieldName", selectedOption)
                                                                            }
                                                                            onBlur={handleBlur}
                                                                            // {...getFieldProps("fieldName")}
                                                                            id="section"
                                                                            isMulti
                                                                            options={options}
                                                                            className="bg-secondary p-3"
                                                                            />
                                                                        {
                                                                            errors.fieldName && touched.fieldName ? <div className="text-danger ">errors {errors.fieldName}</div>: null
                                                                        }
                                                                    
                                                                </Col> 
                                                                */}
                                                                <Col xs="1" lg="1" className="mb-2">
                                                                    {index == 0 && <label  className="" >delete</label>}
                                                                    {index >= 1 ? <button className="bg-danger p-3  rounded " type="button" onClick={()=>remove(index)}>X</button> :<pre  ></pre>}
                                                                </Col>
                                                                <Col xs="1" lg="1" className="mb-2 ">
                                                                    {index == 0 && <label  className="" >add</label>}
                                                                    <button className="bg-info p-3  rounded " type="button" onClick={()=>push('')} disabled={!(dirty && isValid || isSubmitting) }>+</button>
                                                                </Col>
                                                            </Row>
                                                            
                                                        </div>
                                                    )
                                                })
                                            }
                                            
                                            </div>
                                          )  
                                        }
                                    }
                                </FieldArray>
                                </Card.Body> 
                                
                                <div>
                                    
                                    {!(dirty && isValid || isSubmitting) ? <Button as="button" disabled={!(dirty && isValid || isSubmitting)} type="submit" className="pl-5 pr-5 m-2 bg-info" >submit</Button>:<Button as="button"  type="submit" className="pl-5 pr-5 m-2 bg-danger" >submit</Button>}
                                    
                                    <Button as="button" type="reset" className="pl-5 pr-5 m-2 bg-warning" >reset</Button>
                                </div>  
                               
                            </Card>       
                            </Form>
                            
                        
                            )
}                   
                    </Formik>
                    
                </Container>
                
            </Layout>
        </React.Fragment>
    )
}


export function getStaticProps(){
    return{
        props:{

        }
    }
}
export default Section