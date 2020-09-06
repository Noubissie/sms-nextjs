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
import options from "../../components/languages/languages"
import SubjectDatabase from "../../database/subjectdatabase"
import SectionDatabase from "../../database/sectiondatabase"

let BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})

let Subject = ({totalsubjects, totalSection})=>{
    console.log("totalsubjects::",totalsubjects)

    let {data:sectorData, error:sectorError} = useSWR('/api/sectionapi')
    let {data:data, error:subjectError} = useSWR('/api/subjectapi')
    
    data = data || totalsubjects
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
                                                            <td>Subject</td>
                                                            <td>Section</td>
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
                                                                            <td>{value.subject}</td>
                                                                            <td>{value.Section.section}</td>
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
                                                                                                                    [`subject${value.id}`]:{
                                                                                                                        id : value.id,
                                                                                                                        subject:value.subject,
                                                                                                                        sectionID:value.Section.id_
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
                                                                                                    let responce = await fetch("/api/subjectapi",{
                                                                                                        method:"DELETE",
                                                                                                        body:JSON.stringify({
                                                                                                            subject:{
                                                                                                                id:value.id,
                                                                                                                subject:value.subject,
                                                                                                                sectionID:value.Section.id_
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
                                                                                    {...getFieldProps(`subject${value.id}.id`)}
                                                                                    name={`subject${value.id}.id`}
                                                                                    readOnly = {true}
                                                                                    value={value.id}
                                                                                    type="number"
                                                                                    min="1"
                                                                                    step="1"
                                                                                />
                                                                            </td>
                                                                            <td>
                                                                                <FastField 
                                                                                {...getFieldProps(`subject${value.id}.subject`)}
                                                                                name={`subject${value.id}.subject`}
                                                                                value={values[`subject${value.id}`]? values[`subject${value.id}`].subject :""}
                                                                                type="input"
                                                                                
                                                                                /> 
                                                                            </td>
                                                                            <td>
                                                                                <FastField 
                                                                                    as="select"
                                                                                
                                                                                    {...getFieldProps(`subject${value.id}.sectionID`)}
                                                                                    name={`subject${value.id}.sectionID`}
                                                                                    value={values[`subject${value.id}`] ? values[`subject${value.id}`].sectionID:""}
                                                                                    className="bg-secondary p-1 rounded w-100"
                                                                                    >
                                                                                        {
                                                                                            (totalSection || sectorData).map((value1,index)=>{
                                                                                                return (
                                                                                                    <option key={index} value={value1.id_} label={value1.section}/>
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
                                                                                            delete initialState[`subject${value.id}`]
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
                                                                                                    let responce = await fetch("/api/subjectapi",{
                                                                                                        method:"PUT",
                                                                                                        body:JSON.stringify(values[`subject${value.id}`])
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
    let sections = new SectionDatabase()
    let totalSection = await sections.getSection()
    let totalsubjects = await subjects.getSubject()
    return{
        props:{
            totalsubjects,
            totalSection,
        }
    }
}
export default Subject