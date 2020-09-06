import React,{useEffect}  from "react"
import dynamic from "next/dynamic"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import  Row  from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import {Formik, Field, Form, FieldArray, ErrorMessage} from  "formik"
import Layout from "../../components/layout"
import * as Yup from "yup"
import toast from "../../components/decoration/toast"
import SectionDatabase from "../../database/sectiondatabase"
import {errorFieldMessage} from "../../components/error/errorFieldMessage"
import useSWR from "swr"
import {useRouter} from "next/router"
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

let AddSubjects = ({sectionAll})=>{
    const router = useRouter()
    
    
    
    
    let {data , error} = useSWR("/api/sectionapi")
    let sectionOptions = data || sectionAll
    console.log("sectionAll::",sectionAll)
     let initialValues = {
        
        subject:[{
            id:"",
            subjectName:"",
            sectionTaught:"",
        }],
     }
    
    let validationSchema = Yup.object({
        subject: Yup.array().nullable().of(
            Yup.object({
                id: Yup.number().nullable().required("enter section ID").min(3,"least three digits"),
                subjectName: Yup.string().nullable().required("enter section").min(3,"least 3 letters"),
                sectionTaught: Yup.string().nullable().required("enter Language")
            })
        )
    })
    let onSubmit = async (values, onSubmitProps) =>{
        onSubmitProps.setSubmitting(true)
        
        toast.success("BasicConfiguration",{position: toast.POSITION.TOP_CENTER,autoClose:2000})
        {console.log("valuess::",values)}
        let res = await fetch("/api/subjectapi",
        {
            method:"POST",
            body: JSON.stringify(values),
            headers:{
                cookies:"name"
            }
        })
        onSubmitProps.resetForm(true)
        console.log("res::",res)
        if(res.status==400){
            router.push("/section/sections")
        }
        // trigger("/api/a")
    }
    let onReset = ()=>{
        // 
    }

    return (
        <React.Fragment>
            <Layout>
                    <div className="mt-3 mb-4 ml-3">
                        <h3 >Subjects</h3>
                        <BrowserSiteOutput marginRight="mr-3"/>
                    </div>
                <Container fluid="true" className="p-3 ">
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
                            <Card className="opacityControl border rounded">
                                
                                <div className="mt-3 mb-4 ml-3">
                                    <h3 classNamae="bg-light opacityControl rounded">
                                        Add New Subject
                                    </h3>
                                </div>
                            
                                <Card.Body>
                                <FieldArray name="subject">
                                    
                                    {   
                                        (fieldprops,index)=>{
                                            let {push,remove,form} = fieldprops
                                            const {values} = form
                                            const {subject} = values 
                                          return(
                                            <div key={index}>
                                            {
                                                subject.map((value,index)=>{
                                                    
                                                    return(
                                                        <div key={index}>
                                                            <Row>
                                                                <Col lg="2">
                                                                    <div className="mb-4">
                                                                        {index == 0 && <label  className="" >Subject ID</label>}
                                                                        
                                                                        <Field
                                                                            as="input"
                                                                            {...getFieldProps(subject[index].id)}
                                                                            type="number"
                                                                            step="1"
                                                                            value={value.id}
                                                                            placeholder="Subject ID"
                                                                            name={`subject[${index}].id`}
                                                                            className="w-100 p-3  rounded"
                                                                        />
                                                                        {/* { Object.keys(errors.section? errors.section:{}).length >= 1 && Object.keys(touched.section ? touched.section:{}).length >= 1 ? <div className="text-danger border rounded border-warning">{errors.section[index]?errors.section[index].id:null}</div> : null} */}
                                                                        <ErrorMessage name={`subject[${index}].id`}  component={errorFieldMessage}/>
                                                                    </div>
                                                                   
                                                                    
                                                                </Col >
                                                                <Col lg="4">
                                                                    <div className="mb-4">
                                                                        {index == 0 && <label  className="" >Subject Name</label>}
                                                                        
                                                                        <Field
                                                                            as="input"
                                                                            {...getFieldProps(subject[index].subjectName)}
                                                                            value={value.subjectName}
                                                                            placeholder="Subject Name"
                                                                            name={`subject[${index}].subjectName`}
                                                                            className="w-100 p-3  rounded"
                                                                        />
                                                                        {/* { Object.keys(errors.section? errors.section:{}).length >= 1 && Object.keys(touched.section ? touched.section:{}).length >= 1 ? <div className="text-danger border rounded border-warning">{errors.section[index]?errors.section[index].subjectName:null}</div> : null} */}
                                                                        <ErrorMessage name={`subject[${index}].subjectName`}  component={errorFieldMessage}/>
                                                                    </div>
                                                                   
                                                                    
                                                                </Col >
                                                                <Col lg="4">
                                                                    <div className="mb-2">
                                                                        {index == 0 && <label  className="" >Section Taught</label>}
                                                                        
                                                                        <Field 
                                                                            as="select"
                                                                            // defaultValue="select Section"
                                                                            {...getFieldProps(subject[index].sectionTaught)}
                                                                            name={`subject[${index}].sectionTaught`}
                                                                            value={value.sectionTaught}
                                                                            className="bg-secondary p-3 pb-4  rounded w-100"
                                                                            // multiple
                                                                            >
                                                                            {/* bug can'r get the default value to be seleted initially when disabled */}
                                                                                {/* <option selected disabled={true} value="select Section" label="select Section" />  */}
                                                                                <option selected defaultValue disabled  label="select Section" /> 
                                                                                
                                                                                {
                                                                                    sectionOptions.map((value1,index)=>{
                                                                                        return (
                                                                                            <option key={value1.id_} value={value1.id_} label={value1.section}/>
                                                                                        )
                                                                                    })
                                                                                }
                                                                        </Field>
                                                                        {/* { Object.keys(errors.section? errors.section:{}).length >= 1 && Object.keys(touched.section ? touched.section:{}).length >= 1  ? <div className="text-danger border rounded border-warning">{errors.section[index]? errors.section[index].sectionTaught:null}</div> : null} */}
                                                                        <ErrorMessage name={`subject[${index}].sectionTaught`}  component={errorFieldMessage}/>
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
                                                                                subjectName:"",
                                                                                sectionTaught:"",
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
    let sections = new SectionDatabase()
    let sectionAll = await sections.getSection()
    return{
        props:{
            sectionAll
        }
    }
}
export default AddSubjects