import React , {useState,useEffect} from "react"
import dynamic from "next/dynamic"
import Table from "react-bootstrap/Table"
import Dropdown from "react-bootstrap/Dropdown"
import Button from "react-bootstrap/Button"
import useSWR from "swr"
import Layout from "../../components/layout"
import toast from "../../components/decoration/toast"
import {BsThreeDots,BsXOctagonFill,BsPen} from "react-icons/bs"
import {Formik,Form, FastField,} from "formik"
import SubjectDatabase from "../../database/subjectdatabase"
import ClassesDatabase from "../../database/classesDatabase"
import SubjectClassDatabase from "../../database/subjectClassDatabase"
let BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})

let SubjectClassTable = ({Allsubjects, AllClasses,AllSubjectClass})=>{
    console.log("Allsubjects::",Allsubjects)

    let {data:classData, error:classError} = useSWR('/api/classesapi')
    let {data:dataSubject, error:subjectError} = useSWR('/api/subjectapi')
    let {data:data, error:subjectClassError} = useSWR('/api/subjectClassapi')
    
    data = data || AllSubjectClass
    let stater = (data)=>{
        let state = {}
        if(data){
            for(let d of data){
                state[`displayon${d.id}`]="table-row"
                state[`displayoff${d.id}`]="none"
            }
            console.log("state::",state)
            return state
        }
        return null
    }
    let [initialState, setInitialState] = useState(null)
    let [initialdisplay, setInitialdisplay] = useState(stater(data))
    
    console.log("newstate::",initialState)
    useEffect(()=>{
        setInitialdisplay((previousState)=>({
            
            ...stater(data),
            ...previousState,
        }))
    },[data])
       
    let initialFormValue=[]
    let onsubmitForm = (values,submittingProps)=>{
        console.log("values::",values)
        
    }
    return (
        <React.Fragment>
            
            <Layout>
            
                <div className="mt-1 mb-4 ml-3 mr-3 opacityControl">
                    <h3 className="bg-light rounded">Subjects</h3>
                    <BrowserSiteOutput />
                        <Formik
                            initialValues={initialState || initialFormValue}
                            onSubmit={onsubmitForm}
                            enableReinitialize
                            >
                                {
                                    ({handleBlur,handleChange,handleSubmit,values,getFieldProps})=>{
                                        console.log("values::",values)
                                        return(
                                            <Form onSubmit={handleSubmit}>
                                                <Table responsive className="table table-striped table-bordered table-hover  bg-light opacityControl">
                                                    <thead className="bg-info">
                                                        <tr>
                                                            <td>ID</td>
                                                            <td>class</td>
                                                            <td>subject</td>
                                                            <td>Modifier</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            data ? data.map((value,index)=>{
                                                                return (
                                                                    <React.Fragment key={value.id}>

                                                                    
                                                                        <tr style={{display:initialdisplay[`displayon${value.id}`]}}>
                                                                            <td >{value.id}</td>
                                                                            <td>{value.Classes.class}</td>
                                                                            <td>{value.Subjects.subject}</td>
                                                                            <td>
                                                                                <Dropdown className="p-0 m-0" drop="left">
                                                                                    <Dropdown.Toggle variant="none"  id="dropdown-basic">
                                                                                        <BsThreeDots />
                                                                                    </Dropdown.Toggle>

                                                                                    <Dropdown.Menu>
                                                                                        <Dropdown.Item >
                                                                                            <Button type="button" className="w-100 bg-warning" onClick = {()=>{
                                                                                                
                                                                                                            setInitialdisplay((previousState)=>({
                                                                                                                ...previousState,
                                                                                                                
                                                                                                                [`displayon${value.id}`]:"none",
                                                                                                                [`displayoff${value.id}`]:"table-row"
                                                                                                            
                                                                                                        }))
                                                                                                            setInitialState((previousState)=>({
                                                                                                                    ...previousState,
                                                                                                                    [`subjectClass${value.id}`]:{
                                                                                                                        id : value.id,
                                                                                                                        subjectId:value.Subjects.id,
                                                                                                                        classId:value.Classes.id
                                                                                                                    },
                                                                                                                
                                                                                                            }))
                                                                                            }} 
                                                                                      >
                                                                                        <BsPen color="blue" className="m-2"/>
                                                                                                Edit
                                                                                            </Button>
                                                                                        </Dropdown.Item>
                                                                                        <Dropdown.Item >
                                                                                            <Button type="button"  className="w-100 bg-danger" onClick={async ()=>{
                                                                                                    let responce = await fetch("/api/subjectClassapi",{
                                                                                                        method:"DELETE",
                                                                                                        body:JSON.stringify({
                                                                                                            subjectClass:{
                                                                                                                id:value.id,
                                                                                                                subjectId:value.Subjects.id,
                                                                                                                classId:value.Classes.id
                                                                                                            }
                                                                                                        })
                                                                                                    })
                                                                                                    await toast.success(`${JSON.stringify(responce)} was deleted`,{position: toast.POSITION.TOP_CENTER,autoClose:2000})
                                                                                                }}><BsXOctagonFill color="grey" className="m-2"/>
                                                                                                    Delete
                                                                                            </Button>
                                                                                        </Dropdown.Item>
                                                                                        
                                                                                    </Dropdown.Menu>
                                                                                </Dropdown>
                                                                            </td>
                                                                            
                                                                        </tr>
                                                                        <tr style={{display:initialdisplay[`displayoff${value.id}`]}}>
                                                                            <td>
                                                                                <FastField 
                                                                                    {...getFieldProps(`subjectClass${value.id}.id`)}
                                                                                    name={`subjectClass${value.id}.id`}
                                                                                    readOnly = {true}
                                                                                    value={value.id}
                                                                                    type="number"
                                                                                    min="1"
                                                                                    step="1"
                                                                                />
                                                                            </td>
                                                                            <td>
                                                                                 
                                                                                <FastField 
                                                                                    as="select"
                                                                                
                                                                                    {...getFieldProps(`subjectClass${value.id}.subjectId`)}
                                                                                    name={`subjectClass${value.id}.subjectId`}
                                                                                    value={values[`subjectClass${value.id}`] ? values[`subjectClass${value.id}`].subjectId:""}
                                                                                    className="bg-secondary p-1 rounded w-100"
                                                                                    >
                                                                                        {
                                                                                            (dataSubject|| Allsubjects ).map((value1,index)=>{
                                                                                                return (
                                                                                                    <option key={index} value={value1.id} label={value1.subject}/>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                </FastField>
                                                                            </td>
                                                                            <td>
                                                                                <FastField 
                                                                                    as="select"
                                                                                
                                                                                    {...getFieldProps(`subjectClass${value.id}.classId`)}
                                                                                    name={`subjectClass${value.id}.classId`}
                                                                                    value={values[`subjectClass${value.id}`] ? values[`subjectClass${value.id}`].classId:""}
                                                                                    className="bg-secondary p-1 rounded w-100"
                                                                                    >
                                                                                        {
                                                                                            (classData|| AllClasses ).map((value1,index)=>{
                                                                                                return (
                                                                                                    <option key={index} value={value1.id} label={value1.class}/>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                </FastField>
                                                                            </td>
                                                                            <td>
                                                                                <Dropdown className="p-0 m-0" drop="left">
                                                                                    <Dropdown.Toggle variant="none"  id="dropdown-basic">
                                                                                        <BsThreeDots />
                                                                                    </Dropdown.Toggle>

                                                                                    <Dropdown.Menu>
                                                                                        <Dropdown.Item >
                                                                                            <Button type="button" className="w-100 bg-warning" onClick = {async ()=>{
                                                                                                
                                                                                                setInitialdisplay((previousState)=>({
                                                                                                    ...previousState,
                                                                                                    
                                                                                                    [`displayon${value.id}`]:"table-row",
                                                                                                    [`displayoff${value.id}`]:"none"
                                                                                                
                                                                                            }))
                                                                                            delete initialState[`subjectClass${value.id}`]
                                                                                                setInitialState((previousState)=>({
                                                                                                        ...initialState
                                                                                                }))
                                                                                                }
                                                                                            }
                                                                                            ><BsPen color="blue" className="m-2"/>
                                                                                                cancel
                                                                                            </Button>
                                                                                        </Dropdown.Item>
                                                                                        <Dropdown.Item >
                                                                                            <Button type="button"  className="w-100 bg-success" onClick={async ()=>{
                                                                                                    let responce = await fetch("/api/subjectClassapi",{
                                                                                                        method:"PUT",
                                                                                                        body:JSON.stringify(values[`subjectClass${value.id}`])
                                                                                                    })
                                                                                                    setInitialdisplay((previousState)=>({
                                                                                                        ...previousState,
                                                                                                        
                                                                                                        [`displayon${value.id}`]:"table-row",
                                                                                                        [`displayoff${value.id}`]:"none"
                                                                                                    
                                                                                                }))

                                                                                                    toast.success(`${JSON.stringify(responce)} was deleted`,{position: toast.POSITION.TOP_CENTER,autoClose:2000})
                                                                                                    
                                                                                                }}><BsXOctagonFill color="grey" className="m-2"/>
                                                                                                    update
                                                                                            </Button>
                                                                                        </Dropdown.Item>
                                                                                        
                                                                                    </Dropdown.Menu>
                                                                                </Dropdown>
                                                                            </td>
                                                                        </tr>
                                                                    </React.Fragment>
                                                                    
                                                                )
                                                            }):null
                                                        }
                                                        
                                                    </tbody>
                                                </Table>
                                            </Form>
                                  )
                                }
                            }
                        </Formik>
                </div>
            </Layout>
        </React.Fragment>
    )
}
export async function getStaticProps(){
    let subjects = new SubjectDatabase()
    let classes = new ClassesDatabase()
    let subjectClass = new SubjectClassDatabase()

    let AllClasses = await classes.getClasses()
    let Allsubjects = await subjects.getSubject()
    let AllSubjectClass = await subjectClass.getSubjectClasses()
    return{
        props:{
            Allsubjects,
            AllClasses,
            AllSubjectClass
        }
    }
}
export default SubjectClassTable