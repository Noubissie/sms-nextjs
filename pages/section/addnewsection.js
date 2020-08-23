import React , {useEffect} from "react"
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
    const options = [
        {value: 1, label: 'text'},
        {value: 2, label: 'home'},
        {value: 3, label: 'action'}
     ]
    
     let initialValues = {
        fieldName:"",
        sectionName:"",
        section:[""],
     }
    
    let validationSchema = Yup.object({
        sectionName: Yup.string().nullable().required("enter School section"),
        fieldName: Yup.array().nullable().required("Enter section name"),
    })
    let onSubmit = async (values, onSubmitProps) =>{
        // console.log("value:",values)
        // console.log("onsubmitProps", onSubmitProps)
        onSubmitProps.setSubmitting(true)
        // console.log("values",values)
        console.log("scrollY:",scrollY)
        if(values.fieldName){
            values.fieldName.map(value=>{
            console.log(value.value)
            }) 
        }
        else{
            console.log("no value input")
        } 
        toast.success("BasicConfiguration",{position: toast.POSITION.TOP_CENTER,autoClose:3000})
        onSubmitProps.resetForm(true)
        // let res = await fetch("/api/b",
        // {
        //     method:"POST",
        //     body: JSON.stringify(values),
        //     headers:{
        //         cookies:"name"
        //     }
        // })
        // trigger("/api/a")
    }
    let onReset = ()=>{
        console.log("reset")
    }

    return (
        <React.Fragment>
            <Layout>
                    <div className="mt-3 mb-4 ml-3">
                        <h3 >Section</h3>
                        <BrowserSiteOutput />
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
                                {/* {console.log("formik",formik)} */}
                        
                            <div className="mt-3 mb-4 ml-3">
                                <h3>
                                    Add New Section
                                </h3>
                            </div>
                            
                                <Card.Body>
                                    <Row>
                                       
                                        
                                    </Row>
                                    <Row>
                                        <Col lg="6">
                                            <label htmlFor="sectionName" className="" >Section Name</label>
                                           
                                            <Field
                                                as="input"
                                                {...getFieldProps("sectionName")}
                                                value={values.sectionName}
                                                name="sectionName"
                                                className="w-100 p-3 rounded"
                                            />

                                            
                                            {/* {console.log(touched)} */}
                                             {errors.sectionName && touched.sectionName? <div className="text-danger ">error:{errors.sectionName}</div> : null}
                                        </Col >
                                        <Col lg="6">
                                            <label htmlFor="sectionName" className="" >Section Name</label>
                                           
                                            <Field 
                                                as="select"
                                                {...getFieldProps}
                                                value="sectionLanguage"
                                                className="bg-secondary p-3 rounded w-100"
                                                // multiple
                                                >
                                                    {options.map((value,index)=>{
                                                        return (
                                                            <option key={index} value={value.value} label={value.label}/>
                                                        )
                                                    })}
                                            </Field>
                                        </Col>

                                        {/* <Col lg="6">
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
                                            
                                        </Col> */}
                                        
                                        
                                    </Row>
                                    
                                </Card.Body> 
                                <FieldArray name="section">
                                    {
                                        (fieldprops,index)=>{
                                            let {push,remove,form} = fieldprops
                                            const {values} = form
                                            const {section} = values 
                                          return(
                                            <div key={index}>
                                                {/* {console.log(fieldprops)} */}
                                            {
                                                section.map((value,index)=>{
                                                    return(
                                                        <div key={index}>
                                                            <Field name={`section[${index}]`} />
                                                            {index > 0 && <button type="button" onClick={()=>remove(index)}>-</button> }
                                                            
                                                            <button type="button" onClick={()=>push('')}>+</button>
                                                        </div>
                                                    )
                                                })
                                            }
                                            
                                            </div>
                                          )  
                                        }
                                    }
                                </FieldArray>
                                <div>
                                    {/* {console.log("issubmitting",isSubmitting)} */}
                                    {!(dirty && isValid || isSubmitting) ? <Button as="button" disabled={!(dirty && isValid || isSubmitting)} type="submit" className="pl-5 pr-5 m-4 bg-info" >submit</Button>:<Button as="button"  type="submit" className="pl-5 pr-5 m-4 bg-danger" >submit</Button>}
                                    
                                    <Button as="button" type="reset" className="pl-5 pr-5 m-4 bg-warning" >reset</Button>
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