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
import ClassesDatabase from "../../database/classesdatabase"
import SectionDatabase from "../../database/sectiondatabase"

let BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})

let ClassA = ({totalClass, totalSection})=>{

    
    console.log("totalsubjects::",totalClass)

    let {data:sectorData, error:sectorError} = useSWR('/api/sectionapi')
    let {data:data, error:subjectError} = useSWR('/api/classesapi')
    
    data = data || totalClass
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
                <div className="mt-3 mb-4 ml-3 mr-3">
                    <h3 >Classes</h3>
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
                                                            <td>Class</td>
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
                                                                            <td>{value.class}</td>
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
                                                                                                                    [`classes${value.id}`]:{
                                                                                                                        id : value.id,
                                                                                                                        clas:value.class,
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
                                                                                                    let responce = await fetch("/api/classesapi",{
                                                                                                        method:"DELETE",
                                                                                                        body:JSON.stringify({
                                                                                                            classes:{
                                                                                                                id:value.id,
                                                                                                                clas:value.class,
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
                                                                                    {...getFieldProps(`classes${value.id}.id`)}
                                                                                    name={`classes${value.id}.id`}
                                                                                    readOnly = {true}
                                                                                    value={value.id}
                                                                                    type="number"
                                                                                    min="1"
                                                                                    step="1"
                                                                                />
                                                                            </td>
                                                                            <td>
                                                                                <FastField 
                                                                                {...getFieldProps(`classes${value.id}.clas`)}
                                                                                name={`classes${value.id}.clas`}
                                                                                value={values[`classes${value.id}`]? values[`classes${value.id}`].clas :""}
                                                                                type="input"
                                                                                
                                                                                /> 
                                                                            </td>
                                                                            <td>
                                                                                <FastField 
                                                                                    as="select"
                                                                                
                                                                                    {...getFieldProps(`classes${value.id}.sectionID`)}
                                                                                    name={`classes${value.id}.sectionID`}
                                                                                    value={values[`classes${value.id}`] ? values[`classes${value.id}`].sectionID:""}
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
                                                                                            delete initialState[`classes${value.id}`]
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
                                                                                                    let responce = await fetch("/api/classesapi",{
                                                                                                        method:"PUT",
                                                                                                        body:JSON.stringify(values[`classes${value.id}`])
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
    let classObject = new ClassesDatabase()
    let sections = new SectionDatabase()
    let totalSection = await sections.getSection()
    let totalClass = await classObject.getClasses()
    return{
        props:{
            totalClass,
            totalSection,
        }
    }
}
export default ClassA

// import React , {useState,useEffect} from "react"
// import dynamic from "next/dynamic"
// import Table from "react-bootstrap/Table"
// import Dropdown from "react-bootstrap/Dropdown"
// import Button from "react-bootstrap/Button"
// import useSWR from "swr"
// import Layout from "../../components/layout"
// import toast from "../../components/decoration/toast"
// import {BsThreeDots,BsXOctagonFill,BsPen} from "react-icons/bs"
// import {Formik,Form, FastField,} from "formik"
// import options from "../../components/languages/languages"
// import ClassesDatabase from "../../database/classesdatabase"
// import SectionDatabase from "../../database/sectiondatabase"
// import { route } from "next/dist/next-server/server/router"

// let BrowserSiteOutput = dynamic(
//     ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
//         {ssr:false})

//     let optionsGeneral = {
//         for:"classes",
//         route:'/api/classesapi',
//         heading:{
//             0:"ID",
//             1:"Class",
//             2:"Section"
//         },
//         containerObject:"",
//         stateoption_forDatabase:{
//             0 : "id",
//             1:"class",
//             2:"Section.id_"
//         }


//     }
// let ClassA = ({totalsubjects, totalSection})=>{
//     console.log("totalsubjects::",totalsubjects)
    
//     let {data:sectorData, error:sectorError} = useSWR('/api/sectionapi')
//     let {data:data, error:subjectError} = useSWR(optionsGeneral.route)
    
    

//     data = data || totalsubjects
//     let stater = (data)=>{
//         let state = {}
//         if(data){
//             for(let d of data){
//                 state[`displayon${d.id}`]="table-row"
//                 state[`displayoff${d.id}`]="none"
//             }
//             console.log("state::",state)
//             return state
//         }
//         return null
//     }
//     let [initialState, setInitialState] = useState(null)
//     let [initialdisplay, setInitialdisplay] = useState(stater(data))
    
//     console.log("newstate::",initialState)
//     useEffect(()=>{
//         setInitialdisplay((previousState)=>({
//             ...stater(data),
//             ...previousState,
//         }))
//     },[data])
       
//     let initialFormValue=[]
//     let onsubmitForm = (values,submittingProps)=>{
//         console.log("values::",values)
//     }
    
//     return (
//         <React.Fragment>
//             <Layout>
//                 <div className="mt-3 mb-4 ml-3 mr-3">
//                     <h3 >School</h3>
//                     <BrowserSiteOutput />
//                         <Formik
//                             initialValues={initialState || initialFormValue}
//                             onSubmit={onsubmitForm}
//                             enableReinitialize
//                             >
//                                 {
//                                     ({handleBlur,handleChange,handleSubmit,values,getFieldProps})=>{
//                                         console.log("values::",values)
//                                         return(
//                                             <Form onSubmit={handleSubmit}>
//                                                 <Table responsive className="table table-striped table-bordered table-hover  bg-light opacityControl">
//                                                     <thead>
//                                                         <tr>
//                                                             <td>{optionsGeneral.heading[0]}</td>
//                                                             <td>{optionsGeneral.heading[1]}</td>
//                                                             <td>{optionsGeneral.heading[2]}</td>
//                                                             <td>Modifier</td>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         {
//                                                             data ? data.map((value,index)=>{
//                                                                 return (
//                                                                     <React.Fragment key={value.id}>

                                                                    
//                                                                         <tr style={{display:initialdisplay[`displayon${value.id}`]}}>
//                                                                             <td >{value.id}</td>
//                                                                             <td>{value.subject}</td>
//                                                                             <td>{value.Section.section}</td>
//                                                                             <td>
//                                                                                 <Dropdown className="p-0 m-0" drop="left">
//                                                                                     <Dropdown.Toggle variant="none"  id="dropdown-basic">
//                                                                                         <BsThreeDots />
//                                                                                     </Dropdown.Toggle>

//                                                                                     <Dropdown.Menu>
//                                                                                         <Dropdown.Item >
//                                                                                             <Button type="button" className="w-100 bg-warning" onClick = {()=>{
                                                                                                
//                                                                                                             setInitialdisplay((previousState)=>({
//                                                                                                                 ...previousState,
                                                                                                                
//                                                                                                                 [`displayon${value.id}`]:"none",
//                                                                                                                 [`displayoff${value.id}`]:"table-row"
                                                                                                            
//                                                                                                         }))
                                                                                                        
//                                                                                                             setInitialState((previousState)=>({
//                                                                                                                     ...previousState,
//                                                                                                                     [`${optionsGeneral.for}`+eval(`value${optionsGeneral.stateoption_forDatabase[0]}`)]:{
//                                                                                                                         [optionsGeneral.stateoption_forDatabase[0]] : eval(`value.${optionsGeneral.stateoption_forDatabase[0]}`),
//                                                                                                                         [optionsGeneral.stateoption_forDatabase[1]]:eval(`value.${optionsGeneral.stateoption_forDatabase[1]}`),
//                                                                                                                         [optionsGeneral.stateoption_forDatabase[2]]:eval(`value.${optionsGeneral.stateoption_forDatabase[2]}`),
//                                                                                                                     },
                                                                                                                
//                                                                                                             }))
//                                                                                             }} 
//                                                                                       >
//                                                                                         <BsPen color="blue" className="m-2"/>
//                                                                                                 Edit
//                                                                                             </Button>
//                                                                                         </Dropdown.Item>
//                                                                                         <Dropdown.Item >
                                                                                        
//                                                                                             <Button type="button"  className="w-100 bg-danger" onClick={async ()=>{
//                                                                                                     let responce = await fetch(optionsGeneral.route,{
//                                                                                                         method:"DELETE",
//                                                                                                         body:JSON.stringify({
//                                                                                                             [optionsGeneral.for]:{
//                                                                                                                 [optionsGeneral.stateoption_forDatabase[0]]:value.id,
//                                                                                                                 [optionsGeneral.stateoption_forDatabase[1]]:value.class,
//                                                                                                                 [optionsGeneral.stateoption_forDatabase[2]]:value.Section.id_
//                                                                                                             }
//                                                                                                         })
//                                                                                                     })
//                                                                                                     await toast.success(`${JSON.stringify(responce)} was deleted`,{position: toast.POSITION.TOP_CENTER,autoClose:2000})
//                                                                                                 }}><BsXOctagonFill color="grey" className="m-2"/>
//                                                                                                     Delete
//                                                                                             </Button>
//                                                                                         </Dropdown.Item>
                                                                                        
//                                                                                     </Dropdown.Menu>
//                                                                                 </Dropdown>
//                                                                             </td>
                                                                            
//                                                                         </tr>
//                                                                         <tr style={{display:initialdisplay[`displayoff${value.id}`]}}>
//                                                                             <td>
                                                                            
//                                                                                 <FastField 
//                                                                                     {...getFieldProps(`${optionsGeneral.for}`+ eval(`value.${optionsGeneral.stateoption_forDatabase[0]}`) +`.${optionsGeneral.stateoption_forDatabase[0]}`)}
//                                                                                     name={`${optionsGeneral.for}`+ eval(`value.${optionsGeneral.stateoption_forDatabase[0]}`) +`.${optionsGeneral.stateoption_forDatabase[0]}`}
//                                                                                     readOnly = {true}
//                                                                                     value={eval(`value.${optionsGeneral.stateoption_forDatabase[0]}`)}
//                                                                                     type="number"
//                                                                                     min="1"
//                                                                                     step="1"
//                                                                                 />
//                                                                             </td>
//                                                                             <td>
//                                                                                 <FastField 
//                                                                                 {...getFieldProps(`${optionsGeneral.for}`+ eval(`value.${optionsGeneral.stateoption_forDatabase[1]}`) +`.${optionsGeneral.stateoption_forDatabase[1]}`)}
//                                                                                 name={`${optionsGeneral.for}`+ eval(`value.${optionsGeneral.stateoption_forDatabase[0]}`) +`.${optionsGeneral.stateoption_forDatabase[1]}`}
//                                                                                 value={values[`${optionsGeneral.for}`+eval(`value.${optionsGeneral.stateoption_forDatabase[0]}`)]? values[`${optionsGeneral.for}`+eval(`value.${optionsGeneral.stateoption_forDatabase[0]}`)][optionsGeneral.stateoption_forDatabase[1]] :""}
//                                                                                 type="input"
                                                                                
//                                                                                 /> 
//                                                                             </td>
//                                                                             <td>
//                                                                                 <FastField 
//                                                                                     as="select"
                                                                                
//                                                                                     {...getFieldProps(`${optionsGeneral.for}`+ eval(`value.${optionsGeneral.stateoption_forDatabase[2]}`) +`.${optionsGeneral.stateoption_forDatabase[2]}`)}
//                                                                                     name={`${optionsGeneral.for}`+ eval(`value.${optionsGeneral.stateoption_forDatabase[0]}`) +`.${optionsGeneral.stateoption_forDatabase[2]}`}
//                                                                                     value={values[`${optionsGeneral.for}`+eval(`value.${optionsGeneral.stateoption_forDatabase[0]}`)] ? values[`${optionsGeneral.for}`+eval(`value.${optionsGeneral.stateoption_forDatabase[0]}`)][optionsGeneral.stateoption_forDatabase[2]]:""}
//                                                                                     className="bg-secondary p-1 rounded w-100"
//                                                                                     >
//                                                                                         {
//                                                                                             (totalSection || sectorData).map((value1,index)=>{
//                                                                                                 return (
//                                                                                                     <option key={index} value={value1.id_} label={value1.section}/>
//                                                                                                 )
//                                                                                             })
//                                                                                         }
//                                                                                 </FastField>
//                                                                             </td>
//                                                                             <td>
//                                                                                 <Dropdown className="p-0 m-0" drop="left">
//                                                                                     <Dropdown.Toggle variant="none"  id="dropdown-basic">
//                                                                                         <BsThreeDots />
//                                                                                     </Dropdown.Toggle>

//                                                                                     <Dropdown.Menu>
//                                                                                         <Dropdown.Item >
//                                                                                             <Button type="button" className="w-100 bg-warning" onClick = {async ()=>{
                                                                                                
//                                                                                                 setInitialdisplay((previousState)=>({
//                                                                                                     ...previousState,
                                                                                                    
//                                                                                                     [`displayon${value.id}`]:"table-row",
//                                                                                                     [`displayoff${value.id}`]:"none"
                                                                                                
//                                                                                             }))
//                                                                                             delete initialState[`subject${value.id}`]
//                                                                                                 setInitialState((previousState)=>({
//                                                                                                         ...initialState
//                                                                                                 }))
//                                                                                                 }
//                                                                                             }
//                                                                                             ><BsPen color="blue" className="m-2"/>
//                                                                                                 cancel
//                                                                                             </Button>
//                                                                                         </Dropdown.Item>
//                                                                                         <Dropdown.Item >
//                                                                                             <Button type="button"  className="w-100 bg-success" onClick={async ()=>{
                                                                                                
//                                                                                                     let responce = await fetch(optionsGeneral.route,{
//                                                                                                         method:"PUT",
//                                                                                                         body:JSON.stringify(values[`${optionsGeneral.for}${value.id}`])
//                                                                                                     })
//                                                                                                     setInitialdisplay((previousState)=>({
//                                                                                                         ...previousState,
                                                                                                        
//                                                                                                         [`displayon${value.id}`]:"table-row",
//                                                                                                         [`displayoff${value.id}`]:"none"
                                                                                                    
//                                                                                                 }))

//                                                                                                     toast.success(`${JSON.stringify(responce)} was deleted`,{position: toast.POSITION.TOP_CENTER,autoClose:2000})
                                                                                                    
//                                                                                                 }}><BsXOctagonFill color="grey" className="m-2"/>
//                                                                                                     update
//                                                                                             </Button>
//                                                                                         </Dropdown.Item>
                                                                                        
//                                                                                     </Dropdown.Menu>
//                                                                                 </Dropdown>
//                                                                             </td>
//                                                                         </tr>
//                                                                     </React.Fragment>
                                                                    
//                                                                 )
//                                                             }):null
//                                                         }
                                                        
//                                                     </tbody>
//                                                 </Table>
//                                             </Form>
//                                   )
//                                 }
//                             }
//                         </Formik>
//                 </div>
//             </Layout>
//         </React.Fragment>
//     )
// }
// export async function getStaticProps(){
//     let subjects = new ClassesDatabase()
//     let sections = new SectionDatabase()
//     let totalSection = await sections.getSection()
//     let totalsubjects = await subjects.getClasses()
//     return{
//         props:{
//             totalsubjects,
//             totalSection,
//         }
//     }
// }
// export default ClassA