import React  from "react"
import dynamic from "next/dynamic"  //limit size error, if the size exceeds the limited size it fails without throwing an error,hence denial of service attack. Medium vulnerability
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import  Row  from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import {Formik, Field, Form, FieldArray, ErrorMessage} from  "formik"
import Layout from "../../components/layout"
import * as Yup from "yup"
import toast from "../../components/decoration/toast"
import useSWR from "swr"
import SubjectDatabase from "../../database/subjectdatabase"
import ClassesDatabase from "../../database/classDatabase"
import {errorFieldMessage} from "../../components/error/errorFieldMessage"
// let Select = dynamic(
//     ()=>import("react-select"),
//         {ssr:false})
// let SelectField = dynamic(
//     ()=>import("../../components/myselect/select"),
//         {ssr:false})
let BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})

const customStyles = {}

let SubjectClass = ({AllSubject,AllClasss})=>{
    let {data:subjectData,error:subjectError} = useSWR("/api/subjectapi")
    let {data:classsData,error:classsError} = useSWR("/api/classesapi")
    
    let subjectOptions = subjectData || AllSubject
    let classOptions = classsData || AllClasss

     let initialValues = {
        
        subjectToClass:[{
            id:"",
            subject:"",
            classs:"",
            subjectCoefficient:"",
        }],
     }
    
    let validationSchema = Yup.object({
        subjectToClass: Yup.array().nullable().of(
            Yup.object({
                id: Yup.number().nullable().required("enter  ID"),
                subject: Yup.string().nullable().required("enter subject"),
                classs: Yup.string().nullable().required("enter class"),
                subjectCoefficient: Yup.number().nullable().required("Enter Coefficient").max(10,"most be < 1")
            })
        )
    })
    let onSubmit = async (values, onSubmitProps) =>{
        onSubmitProps.setSubmitting(true)
        
        
        
        let res = await fetch("/api/subjectClassapi",
        {
            method:"POST",
            body: JSON.stringify(values),
            headers:{
                cookies:"name"
            }
        })
       await toast.success("BasicConfiguration",{position: toast.POSITION.TOP_CENTER,autoClose:1000})
        onSubmitProps.resetForm(true)
        // trigger("/api/a")
    }
    let onReset = ()=>{
        // 
    }

    return (
        <React.Fragment>
            <Layout>
                    
                    <div className="mt-1 mb-4 ml-3 mr-3 opacityControl">
                        
                        <h3 className="bg-light rounded" >Subject</h3>
                        <BrowserSiteOutput marginRight=""/>
                    </div>
                <Container fluid="true" className="p-3 opacityControl">
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
                                        Assign Subject To Class
                                    </h3>
                                </div>
                            
                                <Card.Body>
                                <FieldArray name="subjectToClass">
                                    
                                    {   
                                        (fieldprops,index)=>{
                                            let {push,remove,form} = fieldprops
                                            const {values} = form
                                            const {subjectToClass} = values 
                                          return(
                                            <div key={index}>
                                            {
                                                subjectToClass.map((value,index)=>{
                                                    console.log("valuess::",value)
                                                    return(
                                                        <div key={index}>
                                                            <Row>
                                                                <Col lg="2">
                                                                    <div className="mb-4">
                                                                        {index == 0 && <label  className="" > ID</label>}
                                                                        
                                                                        <Field
                                                                            as="input"
                                                                            {...getFieldProps(subjectToClass[index].id)}
                                                                            type="number"
                                                                            step="1"
                                                                            value={value.id}
                                                                            placeholder="ID"
                                                                            name={`subjectToClass[${index}].id`}
                                                                            min="1"
                                                                            className="w-100 p-3  rounded"
                                                                        />
                                                                        {/* { Object.keys(errors.section? errors.section:{}).length >= 1 && Object.keys(touched.section ? touched.section:{}).length >= 1 ? <div className="text-danger border rounded border-warning">{errors.section[index]?errors.section[index].id:null}</div> : null} */}
                                                                        <ErrorMessage name={`subjectToClass[${index}].id`}  component={errorFieldMessage}/>
                                                                    </div>
                                                                   
                                                                    
                                                                </Col >
                                                                <Col lg="3">
                                                                    <div className="mb-4">
                                                                        {index == 0 && <label  className="" >Subject</label>}
                                                                        
                                                                        
                                                                        <Field 
                                                                            as="select"
                                                                            
                                                                            {...getFieldProps(subjectToClass[index].subject)}
                                                                            name={`subjectToClass[${index}].subject`}
                                                                            value={value.subject}
                                                                            className="bg-secondary p-3 pb-4  rounded w-100"
                                                                            // multiple
                                                                            >
                                                                                <option key={index} selected defaultValue disabled label="select subject"/>
                                                                                {
                                                                                    subjectOptions.map((value1,index)=>{
                                                                                        return (
                                                                                            <option key={index} value={value1.id} label={value1.subject}/>
                                                                                        )
                                                                                    })
                                                                                }
                                                                        </Field>
                                                                        {/* { Object.keys(errors.section? errors.section:{}).length >= 1 && Object.keys(touched.section ? touched.section:{}).length >= 1 ? <div className="text-danger border rounded border-warning">{errors.section[index]?errors.section[index].subject:null}</div> : null} */}
                                                                        <ErrorMessage name={`subjectToClass[${index}].subject`}  component={errorFieldMessage}/>
                                                                    </div>
                                                                   
                                                                    
                                                                </Col >
                                                                <Col lg="3">
                                                                    <div className="mb-2">
                                                                        {index == 0 && <label  className="" >Class</label>}
                                                                        
                                                                        <Field 
                                                                            as="select"
                                                                            
                                                                            {...getFieldProps(subjectToClass[index].classs)}
                                                                            name={`subjectToClass[${index}].classs`}
                                                                            value={value.classs}
                                                                            className="bg-secondary p-3 pb-4  rounded w-100"
                                                                            // multiple
                                                                            >
                                                                                <option key={index} selected defaultValue disabled label="select class"/>
                                                                                {
                                                                                    classOptions.map((value1,index)=>{
                                                                                        return (
                                                                                            <option key={index} value={value1.id} label={value1.class}/>
                                                                                        )
                                                                                    })
                                                                                }
                                                                        </Field>
                                                                        {/* { Object.keys(errors.section? errors.section:{}).length >= 1 && Object.keys(touched.section ? touched.section:{}).length >= 1  ? <div className="text-danger border rounded border-warning">{errors.section[index]? errors.section[index].classs:null}</div> : null} */}
                                                                        <ErrorMessage name={`subjectToClass[${index}].classs`}  component={errorFieldMessage}/>
                                                                    </div>
                                                                    
                                                                    
                                                                </Col>
                                                                <Col lg="2">
                                                                    <div className="mb-2">
                                                                        {index == 0 && <label  className="" >Coeff</label>}
                                                                        <Field
                                                                            as="input"
                                                                            {...getFieldProps(subjectToClass[index].subjectCoefficient)}
                                                                            name={`subjectToClass[${index}].subjectCoefficient`}
                                                                            type="number"
                                                                            step="1"
                                                                            value={value.subjectCoefficient}
                                                                            placeholder="Coefficient"
                                                                            min="1"
                                                                            className="w-100 p-3  rounded"
                                                                            />
                                                                        <ErrorMessage name={`subjectToClass[${index}].subjectCoefficient`}  component={errorFieldMessage}/>
                                                                    </div>
                                                                </Col>
                                                                <Col xs="3" lg="1" className="mb-2">
                                                                    {index == 0 && <label  className="d-none d-lg-block" >del</label>}
                                                                    {index >= 1 ? <button className="bg-danger p-3  rounded w-100" type="button" onClick={()=>remove(index)}>X</button> :<pre  ></pre>}
                                                                </Col>
                                                                <Col xs="3" lg="1" className="mb-2 ">
                                                                    {index == 0 && <label  className="d-none d-lg-block" >add</label>}
                                                                    <button className="bg-info p-3  rounded w-100" type="button" onClick={
                                                                        ()=>push({
                                                                                id:"",
                                                                                subject:"",
                                                                                classs:"",
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
                                    
                                    {!(dirty && isValid || isSubmitting) ? <Button as="button" disabled={!(dirty && isValid || isSubmitting)} type="submit" className="pl-5 pr-5 m-2 bg-secondary" >submit</Button>:<Button as="button"  type="submit" className="pl-5 pr-5 m-2 bg-danger" >submit</Button>}
                                    
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


export async function getStaticProps(){
    let subjectFinder = new SubjectDatabase()
    let classsFinder = new ClassesDatabase()

    let AllSubject = await subjectFinder.getSubject()
    let AllClasss = await classsFinder.getClasses()
    return{
        props:{
            AllSubject,
            AllClasss
        }
    }
}
export default SubjectClass