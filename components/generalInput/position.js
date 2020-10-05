import React  from "react"
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
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DoneIcon from '@material-ui/icons/Done';
import InputAdornment from "@material-ui/core/InputAdornment"
// let Select = dynamic(
//     ()=>import("react-select"),
//         {ssr:false})
// let SelectField = dynamic(
//     ()=>import("../../components/myselect/select"),
//         {ssr:false})
let BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})


let StaffsPosition = React.forwardRef((props,ref)=>{
    
    
     let initialValues = {
        
        position:[{
            positionName:""
        }],
     }
    
    let validationSchema = Yup.object({
        position: Yup.array().nullable().of(
            Yup.object({
                positionName: Yup.string().nullable().required("principal, VP,SG"),
                
            })
        )
    })
    let onSubmit = async (values, onSubmitProps) =>{
        onSubmitProps.setSubmitting(true)
        
        
        
        let res = await fetch("/api/generalapi?position=true",
        {
            method:"POST",
            body: JSON.stringify(values),
            headers:{
                cookies:"name"
            }
        })
        toast.success("BasicConfiguration",{position: toast.POSITION.TOP_CENTER,autoClose:2000})
        onSubmitProps.resetForm(true)
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
                                errors,
                                isSubmitting,
                                setFieldValue,
                                getFieldProps,
                                touched
                                /* and other goodies */
                            })=>(
                            <Form onSubmit={handleSubmit}>
                            <Card>
                        
                                <div className="mt-3 mb-4 ml-3">
                                    <h3>
                                        Add New position
                                    </h3>
                                </div>
                            
                                <Card.Body>
                                <FieldArray name="position">
                                    
                                    {   
                                        (fieldprops,index)=>{
                                            let {push,remove,form} = fieldprops
                                            const {values} = form
                                            const {position} = values 
                                          return(
                                            <div key={index}>
                                            {
                                                position.map((value,index)=>{
                                                    return(
                                                        <div key={index}>
                                                            <Row>
                                                                
                                                                <Col xs="12">
                                                                    <div className="mb-4">
                                                                        {console.log("errors::",errors)}
                                                                        {index == 0 && <label  className="" ></label>}
                                                                        <Field
                                                                        
                                                                            error={(((errors || {}).position || {})[index] ||{}).positionName  ? true : false }
                                                                            label={errors.hasOwnProperty(`${position[index].positionName}`) && touched.hasOwnProperty(`${position[index].positionName}`) ? errors.position[index].positionName : "position Name" }
                                                                            {...getFieldProps(position[index].positionName)}
                                                                            value={value.positionName}
                                                                            component={TextField}
                                                                            name={`position[${index}].positionName`}
                                                                            id={`position[${index}].positionName`}
                                                                            
                                                                            className="w-100 "
                                                                            InputProps={{
                                                                                endAdornment:(
                                                                                    <InputAdornment position="start" >
                                                                                        {index >= 1 ? <button  style={{border:"none"}} className="nobackground" onClick={()=>remove(index)}>x</button> :<pre  ></pre>}
                                                                                        <button style={{border:"none"}} className="nobackground" onClick={
                                                                                            ()=>push({
                                                                                                    positionName:"",
                                                                                                })} disabled={!(dirty && isValid || isSubmitting) 
                                                                                                }>&#10003;</button>
                                                                                    </InputAdornment>
                                                                                )
                                                                            }}
                                                                        />
                                                                        {/* <ErrorMessage name={`position[${index}].positionName`}  component={errorFieldMessage}/> */}
                                                                    </div>
                                                                </Col >
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
                
            
        </React.Fragment>
    )
}
)
export default StaffsPosition