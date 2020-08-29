import React , {useState,useEffect} from "react"
import dynamic from "next/dynamic"
import Table from "react-bootstrap/Table"
import Dropdown from "react-bootstrap/Dropdown"
import Button from "react-bootstrap/Button"
// import Pagination from "react-bootstrap/Pagination"
import useSWR from "swr"
import Layout from "../../components/layout"
import toast from "../../components/decoration/toast"
import {BsThreeDots,BsXOctagonFill,BsPen} from "react-icons/bs"
import {Formik,Form, FastField,} from "formik"
import options from "../../components/languages/languages"

import SectionDatabase from "../../database/sectiondatabase"
let BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})

let Section = ({totalsections})=>{
    console.log("totalsections::",totalsections)

    let {data, error} = useSWR('/api/sectionapi')
    
    console.log("Sectiondata::",data)
    data = data || totalsections
    console.log("Sectiondata2::",data[1])
    let stater = (data)=>{
        let state = {}
        if(data){
            for(let d of data){
                state[`displayon${d.id_}`]="table-row"
                state[`displayoff${d.id_}`]="none"
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
                <div className="mt-3 mb-4 ml-3 mr-3">
                    <h3 >Section</h3>
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
                                                    <thead>
                                                        <tr>
                                                            <td>ID</td>
                                                            <td>Section</td>
                                                            <td>Section Language</td>
                                                            <td>#</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            data ? data.map((value,index)=>{
                                                                return (
                                                                    <React.Fragment key={value.id_}>

                                                                    
                                                                        <tr style={{display:initialdisplay[`displayon${value.id_}`]}}>
                                                                            <td >{value.id_}</td>
                                                                            <td>{value.section}</td>
                                                                            <td>{value.languages}</td>
                                                                            <td>
                                                                                <Dropdown className="p-0 m-0" drop="left">
                                                                                    <Dropdown.Toggle variant="none"  id="dropdown-basic">
                                                                                        <BsThreeDots />
                                                                                    </Dropdown.Toggle>

                                                                                    <Dropdown.Menu>
                                                                                        <Dropdown.Item href="#/action-1">
                                                                                            <Button type="button" className="w-100 bg-warning" onClick = {()=>{
                                                                                                
                                                                                                            setInitialdisplay((previousState)=>({
                                                                                                                ...previousState,
                                                                                                                
                                                                                                                [`displayon${value.id_}`]:"none",
                                                                                                                [`displayoff${value.id_}`]:"table-row"
                                                                                                            
                                                                                                        }))
                                                                                                            setInitialState((previousState)=>({
                                                                                                                    ...previousState,
                                                                                                                    [`section${value.id_}`]:{
                                                                                                                        id_ : value.id_,
                                                                                                                        section:value.section,
                                                                                                                        languages:value.languages
                                                                                                                    },
                                                                                                                
                                                                                                            }))
                                                                                            }} 
                                                                                      ><BsPen color="blue" className="m-2"/>
                                                                                                Edit
                                                                                            </Button>
                                                                                        </Dropdown.Item>
                                                                                        <Dropdown.Item >
                                                                                            <Button type="button"  className="w-100 bg-danger" onClick={async ()=>{
                                                                                                    let responce = await fetch("/api/sectionapi",{
                                                                                                        method:"DELETE",
                                                                                                        body:JSON.stringify({
                                                                                                            section:{
                                                                                                                id_:value.id_,
                                                                                                                languages:value.languages,
                                                                                                                section:value.section
                                                                                                            }
                                                                                                        })
                                                                                                    })
                                                                                                    toast.success(`${JSON.stringify(responce)} was deleted`,{position: toast.POSITION.TOP_CENTER,autoClose:2000})
                                                                                                }}><BsXOctagonFill color="grey" className="m-2"/>
                                                                                                    Delete
                                                                                            </Button>
                                                                                        </Dropdown.Item>
                                                                                        
                                                                                    </Dropdown.Menu>
                                                                                </Dropdown>
                                                                            </td>
                                                                            
                                                                        </tr>
                                                                        <tr style={{display:initialdisplay[`displayoff${value.id_}`]}}>
                                                                            <td>
                                                                            <FastField 
                                                                                {...getFieldProps(`section${value.id_}.id_`)}
                                                                                name={`section${value.id_}.id_`}
                                                                                readOnly = {true}
                                                                                value={value.id_}
                                                                                type="number"
                                                                                min="1"
                                                                                step="1"
                                                                                />
                                                                            </td>
                                                                            <td><FastField 
                                                                                {...getFieldProps(`section${value.id_}.section`)}
                                                                                name={`section${value.id_}.section`}
                                                                               
     
                                                                                value={values[`section${value.id_}`]? values[`section${value.id_}`].section :""}
                                                                                type="input"
                                                                                
                                                                                /></td>
                                                                            <td>
                                                                                <FastField 
                                                                                    as="select"
                                                                                
                                                                                    {...getFieldProps(`section${value.id_}.languages`)}
                                                                                    name={`section${value.id_}.languages`}
                                                                                    value={values[`section${value.id_}`] ? values[`section${value.id_}`].languages:""}
                                                                                    className="bg-secondary p-1 rounded w-100"
                                                                                    >
                                                                                        {
                                                                                            options.map((value1,index)=>{
                                                                                                return (
                                                                                                    <option key={index} value={value1.value} label={value1.label}/>
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
                                                                                        <Dropdown.Item href="#/action-1">
                                                                                            <Button type="button" className="w-100 bg-warning" onClick = {async ()=>{
                                                                                                
                                                                                                setInitialdisplay((previousState)=>({
                                                                                                    ...previousState,
                                                                                                    
                                                                                                    [`displayon${value.id_}`]:"table-row",
                                                                                                    [`displayoff${value.id_}`]:"none"
                                                                                                
                                                                                            }))
                                                                                            delete initialState[`section${value.id_}`]
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
                                                                                                    let responce = await fetch("/api/sectionapi",{
                                                                                                        method:"PUT",
                                                                                                        body:JSON.stringify(values[`section${value.id_}`])
                                                                                                    })
                                                                                                    setInitialdisplay((previousState)=>({
                                                                                                        ...previousState,
                                                                                                        
                                                                                                        [`displayon${value.id_}`]:"table-row",
                                                                                                        [`displayoff${value.id_}`]:"none"
                                                                                                    
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
                        {/* <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item href="#">{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item >{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination> */}
                </div>
            </Layout>
        </React.Fragment>
    )
}
export async function getStaticProps(){
    let section = new SectionDatabase()
    let totalsections = await section.getSection()
    return{
        props:{
            totalsections,
        }
    }
}
export default Section