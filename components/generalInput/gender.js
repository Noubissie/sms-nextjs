import React,{useState,useEffect}  from "react"
import dynamic from "next/dynamic"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import  Row  from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import {Formik, Field, Form, FieldArray, ErrorMessage} from  "formik"
import * as Yup from "yup"
import toast from "../../components/decoration/toast"

import {errorFieldMessage} from "../error/errorFieldMessage"
// let Select = dynamic(
//     ()=>import("react-select"),
//         {ssr:false})
// let SelectField = dynamic(
//     ()=>import("../../components/myselect/select"),
//         {ssr:false})
let BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})


let Gender = React.forwardRef( (props,ref)=>{
    
    useEffect(()=>{
       
    })
    
    
     let initialValues = {
        
        gender:[{
            genderName:""
        }],
     }
    
    let validationSchema = Yup.object({
        gender: Yup.array().nullable().of(
            Yup.object({
                genderName: Yup.string().nullable().required("enter gender"),
                
            })
        )
    })
    let onSubmit = async (values, onSubmitProps) =>{
        console.log("hello this is submitting ")
        
        onSubmitProps.setSubmitting(true)
        
        toast.success("BasicConfiguration",{position: toast.POSITION.TOP_CENTER,autoClose:2000})
        
        let res = await fetch("/api/generalapi?gender=true",
        {
            method:"POST",
            body: JSON.stringify(values),
            headers:{
                cookies:"name"
            }
        })
        if(res.status == 200){
            onSubmitProps.resetForm(true)
        }
        else{

        }
        return 0
        // trigger("/api/a")
    }
    let onReset = ()=>{
        // 
    }

    return (
        <React.Fragment>
            
                <Container fluid="true" className="p-3 opacityControl">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        onReset={onReset}
                        >
                        {({
                                
                                isValid,
                                dirty,
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
                                        Add New Gender
                                    </h3>
                                </div>
                            
                                <Card.Body>
                                <FieldArray name="gender">
                                    
                                    {   
                                        (fieldprops,index)=>{
                                            let {push,remove,form} = fieldprops
                                            const {values} = form
                                            const {gender} = values 
                                          return(
                                            <div key={index}>
                                            {
                                                gender.map((value,index)=>{
                                                    return(
                                                        <div key={index}>
                                                            <Row>
                                                                
                                                                <Col lg="10">
                                                                    <div className="mb-4">
                                                                        {index == 0 && <label  className="" >Gender Name</label>}
                                                                        <Field
                                                                            as="input"
                                                                            {...getFieldProps(gender[index].genderName)}
                                                                            value={value.genderName}
                                                                            placeholder="gender Name"
                                                                            name={`gender[${index}].genderName`}
                                                                            className="w-100 p-3  rounded"
                                                                        />
                                                                        <ErrorMessage name={`gender[${index}].genderName`}  component={errorFieldMessage}/>
                                                                    </div>
                                                                </Col >
                                                                
                                                                            
                                                                
                                                                <Col xs="3" lg="1" className="mb-2">
                                                                    {index == 0 && <label  className="d-none d-lg-block" >del</label>}
                                                                    {index >= 1 ? <button className="bg-danger p-3  rounded w-100" type="button" onClick={()=>remove(index)}>X</button> :<pre  ></pre>}
                                                                </Col>
                                                                <Col xs="3" lg="1" className="mb-2 ">
                                                                    {index == 0 && <label  className="d-none d-lg-block" >add</label>}
                                                                    <button className="bg-info p-3  rounded w-100" type="button" onClick={
                                                                        ()=>push({
                                                                                genderName:"",
                                                                            })} disabled={!(dirty && isValid || isSubmitting) 
                                                                            }>+</button>
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
                                    
                                    {!(dirty && isValid || isSubmitting) ? <Button as="button" disabled={!(dirty && isValid || isSubmitting)} type="submit" className="pl-5 pr-5 m-2 bg-secondary" >submit</Button>:<Button as="button" ref={ref}   type="submit" className="pl-5 pr-5 m-2 bg-danger" > submit </Button>}
                                    
                                    <Button as="button"  type="reset" className="pl-5 pr-5 m-2 bg-warning" >reset</Button>
                                </div>  
                               
                            </Card>       
                            </Form>
                            
                        
                            )
}                   
                    </Formik>
                    
                </Container>
                
            
        </React.Fragment>
    )
}
)

export default Gender