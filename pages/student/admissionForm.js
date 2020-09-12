// import Card from "@material-ui/core/Card"
// import Col from "@material-ui/core/Col"
// import Row from "@material-ui/core/Row"
// import Container from "@material-ui/core/Container"
// // import Form from "react-bootstrap/Form"
// import FormControl from "@material-ui/core/FormControl"
// import InputGroup from "@material-ui/core/InputGroup"
// import {Formik, Form, Field, FastField, ErrorMessage } from "formik"
// import Layout from "../../components/layout"

// import {mutate, trigger} from "swr"
// // import makeAnimated from 'react-select/animated'
// import dynamic from "next/dynamic"  //limit size error, if the size exceeds the limited size it fails without throwing an error,hence denial of service attack. Medium vulnerability
// import { Button } from "react-bootstrap"
// // import Select from 'react-select'
// // let Select = dynamic(()=>import('react-select'),{ssr:false})

// // import { BrowserSiteOutput } from "../components/browserSiteOutput"

// const BrowserSiteOutput = dynamic(
//     ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
//         {ssr:false})

//     let initialValues = {
//             firstname:"",
//             lastname:"",
//             Gender:"",
//             dateOfBirth:"",
//             BloodGroup:"",
//             Roll:"",
//             Religion:"",
//             email:"",
//             Class:"",
//             Section:"",
//             AdmissionID:"",
//             Phone:"",
//             shortBiography:"",
//             studentPicture:"",
//         }
        
// let AdmissionForm = ()=>{
    
        
//         let onSubmit = async (values) =>{
//             console.log("value:",values)
//             let res = await fetch("/api/b",
//             {
//                 method:"POST",
//                 body: JSON.stringify(values),
//                 headers:{
//                     cookies:"name"
//                 }
//             })
//             trigger("/api/a")
//         }
//         let validate = (error)=>{
            
//             console.log("error::",error)
//         }
    
//     // console.log("values:",values)
  

//     return (
//         <React.Fragment>
            
//                <Layout>
//                     <Formik
//                         initialValues={initialValues}
//                         validate={validate}
//                         onSubmit={onSubmit}
                        
//                     >
//                         {
//                             ({
//                                 values,
//                                 errors,
//                                 touched,
//                                 handleChange,
//                                 handleBlur,
//                                 handleSubmit,
//                                 isSubmitting,
//                                 /* and other goodies */
//                             }) => (
//                         <Form onSubmit={handleSubmit}>
                            
//                                 <div className="mt-4 mb-4 ml-3">
//                                     <h3 classNamae="bg-light opacityControl rounded">Student</h3>
//                                     <BrowserSiteOutput marginRight="mr-3"/>
//                                 </div>
//                                 <Container fluid="true" className="p-3">
//                                     <Card >
//                                         <div className="mt-3 mb-4 ml-3">
//                                             <h3 >Add New Student</h3>
//                                         </div>
//                                         <Card.Body>
//                                             <Row>
                                                
//                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
//                                                     <label htmlFor="firstname" className=" w-100 text-secondary">First Name/Given Name*</label>
//                                                     <Field 
//                                                         as="input"
//                                                         onChange = {handleChange} 
//                                                         value = {values.firstname}                                            as="input" 
//                                                         id="firstname"
//                                                         name="firstname" 
//                                                         // placeholder="First Name"
//                                                         className="p-3  w-100 rounded border-info grey"
//                                                         />
                                                    
//                                                 </Col>
//                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
//                                                     <label htmlFor="lastname" className=" w-100 text-secondary">Last Name*</label>
//                                                     <Field 
//                                                         onChange = {handleChange}
//                                                         value={values.lastname}
//                                                         as="input" 
//                                                         id="lastname"
//                                                         name="lastname" 
//                                                         placeholder="Last Name"
//                                                         className="p-3  w-100 rounded border-info grey"
//                                                         />
                                                    
//                                                 </Col>
//                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
//                                                     <label htmlFor="dateOfBirth" className=" w-100 text-secondary">Date of birth*</label>
//                                                     <Field 
//                                                         onChange = {handleChange}
//                                                         value = {values.dateOfBirth}
//                                                         as="input"
//                                                         type="date"
//                                                         id="dateOfBirth"
//                                                         name="dateOfBirth" 
//                                                         placeholder="Date of birth"
//                                                         className="p-3 m-0 w-100 rounded border-info grey"
//                                                         />
                                                    
//                                                 </Col>
//                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
//                                                     <label htmlFor="gender" className=" w-100 text-secondary">Gender*</label>
//                                                     <Field 
//                                                         as="select"
//                                                         onChange = {handleChange}
//                                                         value = {values.Gender} 
                                                        
//                                                         name="Gender"
//                                                         style={{background:"none"}}
//                                                         className="p-3 m-0 w-100  border-info grey"
//                                                         >
//                                                             <option defaultValue hidden  label="choose gender"/>
//                                                             <option value="1" label="Male"/>
//                                                             <option value="2" label="Female"/>
//                                                             <option value="3" label="unknown"/>
//                                                     </Field>
//                                                 </Col>
//                                             </Row>
//                                             <Row>
                                                
//                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
//                                                     <label htmlFor="Roll" className=" w-100 text-secondary">Roll*</label>
//                                                     <Field 
//                                                         onChange = {handleChange}
//                                                         value = {values.Roll}
//                                                         as="input" 
//                                                         id="Roll"
//                                                         name="Roll" 
//                                                         placeholder="Roll"
//                                                         className="p-3  w-100 rounded border-info grey"
//                                                         />  
                                                    
//                                                 </Col>
//                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
//                                                     <label htmlFor="BloodGroup" className=" w-100 text-secondary">Blood Group*</label>
//                                                     <Field
//                                                         as="select"
//                                                         onChange = {handleChange}
//                                                         value = {values.BloodGroup}
//                                                         name="BloodGroup"
//                                                         className="p-3 w-100 rounded border border-info grey"
                                                        
//                                                     >
//                                                         <option>A</option>
//                                                         <option>AB</option>
//                                                         <option>B</option>
//                                                         <option>O-</option>
//                                                         <option>O+</option>
//                                                     </Field>
                                                    
//                                                 </Col>
//                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
//                                                     <label htmlFor="Religion" className=" w-100 text-secondary">Religion*</label>
//                                                     <Field    
//                                                         as= "select"
//                                                         onChange = {handleChange}
//                                                         value = {values.Religion}
//                                                         id="Religion"
//                                                         name="Religion"
                                                        
//                                                         // styles={customStyles}
//                                                         className="basic-multi-select p-4 w-100 rounded border border-info grey"
                                                        
//                                                         >
//                                                             <option>Christian</option>
//                                                             <option>Muslim</option>
//                                                             <option>Traditional</option>

//                                                         </Field>
                                                    
//                                                 </Col>
//                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
//                                                     <label htmlFor="email" className=" w-100 text-secondary">E-mail*</label>
//                                                     <Field 
//                                                         onChange = {handleChange}
//                                                         value = {values.email}
//                                                         as="input" 
//                                                         type="email"
//                                                         id="email"
//                                                         name="email" 
//                                                         placeholder="E-mail"
//                                                         className="p-3  w-100 rounded border-info grey"
//                                                         /> 
                                                    
//                                                 </Col>
//                                             </Row>

//                                             <Row>
                                                
//                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
//                                                     <label htmlFor="Class" className=" w-100 text-secondary">Class*</label>
//                                                     <Field 
//                                                         onChange = {handleChange}
//                                                         value = {values.Class}
//                                                         as="input" 
//                                                         id="Class"
//                                                         name="Class" 
//                                                         placeholder="Class"
//                                                         className="p-3  w-100 rounded border-info grey"
//                                                         />
                                                    
//                                                 </Col>
//                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
//                                                     <label htmlFor="Section" className=" w-100 text-secondary">Section*</label>
//                                                     <Field 
//                                                         onChange = {handleChange}
//                                                         value = {values.Section}
//                                                         as="input" 
//                                                         id="Section"
//                                                         name="Section" 
//                                                         placeholder="Section"
//                                                         className="p-3  w-100 rounded border-info grey"
//                                                         />
                                                    
//                                                 </Col>
//                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
//                                                     <label htmlFor="AdmissionID" className=" w-100 text-secondary">Admission ID*</label>
//                                                     <Field 
//                                                         onChange = {handleChange}
//                                                         value = {values.AdmissionID}
//                                                         as="input"
//                                                         id="AdmissionID"
//                                                         name="AdmissionID" 
//                                                         placeholder="Admission ID"
//                                                         className="p-3 m-0 w-100 rounded border-info grey"
//                                                         />
                                                    
//                                                 </Col>
//                                                 <Col sm="12" md="6"  xl="3" className="pt-2 pb-2 mb-2 w-100 rounded border-info">
//                                                     <label htmlFor="Phone" className=" w-100 text-secondary">Phone*</label>
//                                                     <InputGroup className=" m-0 p-0 w-100">
//                                                         <InputGroup.Prepend>
//                                                             <InputGroup.Text className="rounded border-info grey ">+237</InputGroup.Text>
//                                                         </InputGroup.Prepend>
                                                        
//                                                             <FormControl 
//                                                                 onChange = {handleChange}
//                                                                 value = {values.Phone}
//                                                                 as="input"
//                                                                 id="Phone"
//                                                                 name="Phone" 
//                                                                 placeholder="Phone"
//                                                                 className="p-4  m-0  rounded border-info grey"
//                                                             />
                                                        
//                                                     </InputGroup>
                                                    
                                                    
//                                                 </Col>
//                                             </Row>
//                                             <Row>
//                                                     <Col sm="12" md="6"  className="pt-2 pb-2 mb-2 w-100 rounded border-info">
//                                                         <label htmlFor="shortBiography" className=" w-100 text-secondary">Short Bio*</label>
//                                                         <textarea
//                                                             onChange = {handleChange}
//                                                             value = {values.shortBiography}
//                                                             id="shortBiography"
//                                                             name="shortBiography" 
//                                                             className="p-2 m-0 w-100 rounded border-info heightcontrol height50 grey"
//                                                         />
                                                    
                                                        
//                                                     </Col>
//                                                     <Col sm="12" md="6"  className="pt-2 pb-2 mb-2 w-100 rounded border-info">
//                                                         <label htmlFor="studentPicture" className=" w-100 text-secondary">Upload Student Photo (150px X 150px)*</label>
//                                                             <input 
//                                                             onChange = {handleChange}
//                                                             value = {values.studentPicture}
//                                                             type="file" 
//                                                             name="studentPicture" 
//                                                             id="studentPicture" />
//                                                     </Col>
//                                             </Row>
//                                         </Card.Body>
//                                         <div>
//                                             <Button as="button" type="submit" className="pl-5 pr-5 m-4 bg-info" >submit</Button>
//                                             <Button as="button" type="reset" className="pl-5 pr-5 m-4 bg-warning" >reset</Button>
//                                         </div>
                                        
//                                     </Card>
                                    
//                                 </Container>
                                
//                             </Form>
//                         )}
//                     </Formik>
//                </Layout>
//             {/* </Formik> */}
//         </React.Fragment>
//     )
// }

// export function getStaticProps(){
    
//     return {
//         props:{

//         }
//     }
// }
// export default AdmissionForm

import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import {Formik, Form, Field, FastField, ErrorMessage } from "formik"
let student = ()=>{
    return (
        <div>
            <Formik>
                <Form className="{classes.root}" noValidate autoComplete="off">
                    <Field
                        name="1"
                        component={TextField}
                        label="Standard"
                        />
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <Autocomplete
                    multiple
                    id="tags-standard"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[top100Films[13]]}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Multiple values"
                        placeholder="Favorites"
                    />
                        )}
                    />
                </Form>
                
            </Formik>
            
        </div>
    )
}


const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];
export default student