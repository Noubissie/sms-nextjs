
let StaffPersonalInformation = ({
    values,
    getFieldProps,
    setFieldValue,
    errors,
    handleBlur,
    touched,
    Grid,
    Field,
    match,
    parse,
    TextField,
    FastField,
    
    Autocomplete,
    Card,
    InputAdornment,
    AlternateEmail,
    AddCircleOutlineIcon,
    AccountCircle,
    HomeIcon,

    Input,
    state,
    setstate,
    genderdata,
    religiondata,
    bloodgroupdata,
    
})=>{
    return(
        <Card  className="whitesnow mt-2 p-2 pr-0 mb-4 ml-3 mr-3">
            <h5 className="text-info">Personal Information</h5>
            <Grid container item xs={12} spacing={2} className="bg-secondary m-2 mr-4" >
                <Grid item xs={12}  sm={6}  className="text-center">
                        <label htmlFor="image" className="w-100">
                            <AddCircleOutlineIcon fontSize="large" />
                        </label>
                        <Field
                            id="image"
                            component={Input}
                            className="w-100 d-none"
                            variant="filled"
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            // multiple
                            onChange={(event)=>{
                                // handleChange
                                let fileList = event.target.files

                                const formData = new FormData()
                                
                                for(const file of fileList){
                                    const name = file.name ? file.name : 'NOT SUPPORTED';
                                    // Not supported in Firefox for Android or Opera for Android.
                                    const type = file.type ? file.type : 'NOT SUPPORTED';
                                    // Unknown cross-browser support.
                                    const size = file.size ? file.size : 'NOT SUPPORTED';
                                            if (file.type && file.type.indexOf('image') === -1) {
                                                console.log('File is not an image.', file.type, file,file.type.indexOf('image'));
                                                return;
                                            }
                                            if(file.size > 1000000){
                                                setstate((prev)=>({
                                                    ...prev,
                                                    filename:null,
                                                    imagedataBack:null,
                                                    imagesizeError:"inline"
                                                }))
                                                return
                                            }
                                            const reader = new FileReader();
                                            // reader.onload
                                            // reader.onloadend
                                            // reader.onloadstart
                                            // reader.onabort
                                            // reader.onerror
                                            // reader.onprogress
                                            
                                            reader.addEventListener('load', (event) => {
                                                
                                                setstate((prev)=>({
                                                    ...prev,
                                                    imagedataBack:event.target.result,
                                                    filename:file.name,
                                                    imagesizeError:"none"
                                                }))
                                                console.log("filename::",state.filename)
                                                
                                            });
                                            reader.readAsDataURL(file)
                                            formData.append("file",file)
                                            console.log("formData::", formData)
                                        
                                }
                            }}
                            />
                            
                            
                    </Grid>
                    <Grid item xs={12}  sm={6} className="bg-info text-center" >
                        {/* <FastField */}
                        <TextField 
                                // component={TextField}
                                // error={errors.hasOwnProperty("imageholder") && touched.hasOwnProperty("imageholder") ? true : false }
                                
                                // label={errors.hasOwnProperty("imageholder") && touched.hasOwnProperty("imageholder") ? errors.imageholder : "image" }
                                disabled
                                name="imageholder"
                                id="imageholder"
                                className="w-100 bg-light text-danger"
                                // {...getFieldProps("imageholder")}
                                value={state.filename} />
                        <h4 style={{display:state.imagesizeError,color:"red"}} >Image size less than 1MB</h4>
                        <Field
                            width="200cm"
                            height="200cm"
                            className="border border-info rounded-circle m-0 p-0 bg-secondary"
                            // onerror="this.onerror=null;this.src='./default.jpg';"
                            // component={(params)=><img {...params} src={state}/>}
                            component={params=>{
                            if(state.imagedataBack){
                                return <img {...params} src={state.imagedataBack}/>
                            }
                            else{
                                return <img  {...params} src="/default.jpg"/>
                            }
                            }
                        }
                            />

                        
                    </Grid>
                    
            </Grid>
            <Grid container item xs={12} spacing={2} >
                <React.Fragment>
                    <Grid item xs={12} sm={6} >
                        {console.log("error::",errors)}
                        <FastField
                            error={errors.hasOwnProperty("FamilyName") && touched.hasOwnProperty("FamilyName") ? true : false }
                            {...getFieldProps("FamilyName")}
                            label={errors.hasOwnProperty("FamilyName") && touched.hasOwnProperty("FamilyName") ? errors.FamilyName : "Family Name" }
                            value={values.FamilyName}
                            name="FamilyName"
                            id="FamilyName"
                            component={TextField}
                            className="w-100"
                            variant="filled"
                            
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start" >
                                        <AccountCircle/>
                                    </InputAdornment>
                                )
                            }}
                            />
                            {/* <ErrorMessage name="FamilyName" component={errorFieldMessage}/> */}
                    </Grid>
                    <Grid item xs={12} sm={6}  >
                        <FastField
                            error={errors.hasOwnProperty("GivenName") && touched.hasOwnProperty("GivenName") ? true : false }
                            {...getFieldProps("GivenName")}
                            label={errors.hasOwnProperty("GivenName") && touched.hasOwnProperty("GivenName") ? errors.GivenName : "Given Name" }
                            value={values.GivenName}
                            name="GivenName"
                            id="GivenName"
                            component={TextField}
                            className="w-100"
                            variant="filled"
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <AccountCircle/>
                                    </InputAdornment>
                                )
                            }}
                            />
                    </Grid>
                    <Grid item xs={12}  sm={6}  >
                        <FastField
                            error={errors.hasOwnProperty("DateOfBirth") && touched.hasOwnProperty("DateOfBirth") ? true : false }
                            {...getFieldProps("DateOfBirth")}
                            label={errors.hasOwnProperty("DateOfBirth") && touched.hasOwnProperty("DateOfBirth") ? errors.DateOfBirth : "Date Of Birth" }
                            value={values.DateOfBirth}
                            name="DateOfBirth"
                            id="DateOfBirth"
                            component={TextField}
                            className="w-100"
                            variant="filled"
                            type="date"
                            InputLabelProps={{
                                shrink:true
                            }}
                            
                            />
                    </Grid>
                    <Grid item xs={12} sm={6} className="w-100" >
                        {console.log("valueGender::",values.Gender)}
                    <Field
                            
                            component={Autocomplete}
                            // {...getFieldProps("Gender")}
                            value={values.Gender}
                            onBlur={handleBlur}
                            onChange={(e,selectedOption )=>
                                {setFieldValue("Gender", selectedOption)
                                //  setFieldError("Gender",errors.Gender)
                                    }
                            }
                            
                            // inputValue={values.Gender.title}
                            options={genderdata}
                            name="Gender"
                            id="Gender"
                            
                            getOptionSelected = {(option,value)=> option.gender == value.gender}
                            getOptionLabel={option => option.gender}
                            renderInput={params => (
                                <>
                                
                                <Field 
                                component={TextField}
                                {...params}
                                
                                name="Gender"
                                error={errors.hasOwnProperty("Gender") && touched.hasOwnProperty("Gender") ? true : false }
                                label={errors.hasOwnProperty("Gender") && touched.hasOwnProperty("Gender") ? errors.Gender : "Gender" }
                                variant="filled"    
                                
                            />
                                </>
                            
                            )}

                            renderOption={(option, { inputValue }) => {
                            const matches = match(option.gender, inputValue);
                            const parts = parse(option.gender, matches);
                    
                            return (
                                <div>
                                {parts.map((part, index) => (
                                    <span key={index} >
                                    {part.text}
                                    </span>
                                ))}
                                </div>
                            );
                            }}
                        />
                            
                    </Grid>
                    
                    <Grid item xs={12} sm={6} >
                        <FastField
                            error={errors.hasOwnProperty("TeacherAddress") && touched.hasOwnProperty("TeacherAddress") ? true : false }
                            {...getFieldProps("TeacherAddress")}
                            label={errors.hasOwnProperty("TeacherAddress") && touched.hasOwnProperty("TeacherAddress") ? errors.TeacherAddress : "TeacherAddress" }
                            value={values.TeacherAddress}
                            name="TeacherAddress"
                            id="TeacherAddress"
                            component={TextField}
                            className="w-100"
                            variant="filled"
                            
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start" >
                                        <HomeIcon/>
                                    </InputAdornment>
                                )
                            }}
                            />
                            {/* <ErrorMessage name="FamilyName" component={errorFieldMessage}/> */}
                    </Grid>
                    <Grid item xs={12} sm={6}  >
                        <Field
                                
                                component={Autocomplete}
                                // {...getFieldProps("Gender")}
                                value={values.Religion}
                                defaultValue={values.Religion}
                                onBlur={handleBlur}
                                onChange={(e,selectedOption )=>
                                    {setFieldValue("Religion", selectedOption)
                                    //  setFieldError("Gender",errors.Gender)
                                        }
                                }
                                
                                // inputValue={values.Gender.title}
                                options={religiondata}
                                name="Religion"
                                id="Religion"
                                getOptionSelected = {(option,value)=> option.doctrine == value.doctrine}
                                getOptionLabel={option => option.doctrine}
                                renderInput={params => (
                                    <>
                                    
                                    <Field 
                                    component={TextField}
                                    {...params}
                                    
                                    name="Religion"
                                    error={errors.hasOwnProperty("Religion") && touched.hasOwnProperty("Religion") ? true : false }
                                    label={errors.hasOwnProperty("Religion") && touched.hasOwnProperty("Religion") ? errors.Religion : "Religion" }
                                    variant="filled"    
                                    
                                />
                                    </>
                                
                                )}

                                renderOption={(option, { inputValue }) => {
                                const matches = match(option.doctrine, inputValue);
                                const parts = parse(option.doctrine, matches);
                        
                                return (
                                    <div>
                                    {parts.map((part, index) => (
                                        <span key={index} >
                                        {part.text}
                                        </span>
                                    ))}
                                    </div>
                                );
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}  >
                            <Field
                                    
                                    component={Autocomplete}
                                    // {...getFieldProps("Gender")}
                                    value={values.BloodGroup}
                                    defaultValue={values.BloodGroup}
                                    onBlur={handleBlur}
                                    onChange={(e,selectedOption )=>
                                        {setFieldValue("BloodGroup", selectedOption)
                                        //  setFieldError("Gender",errors.Gender)
                                            }
                                    }
                                    
                                    // inputValue={values.Gender.title}
                                    
                                    options={bloodgroupdata}
                                    name="BloodGroup"
                                    id="BloodGroup"
                                    getOptionSelected={(option,value)=>option.group == value.group}
                                    getOptionLabel={option => option.group}
                                    renderInput={params => (
                                        <>
                                        
                                        <Field 
                                        component={TextField}
                                        {...params}
                                        
                                        name="BloodGroup"
                                        error={errors.hasOwnProperty("BloodGroup") && touched.hasOwnProperty("BloodGroup") ? true : false }
                                        label={errors.hasOwnProperty("BloodGroup") && touched.hasOwnProperty("BloodGroup") ? errors.BloodGroup : "BloodGroup" }
                                        variant="filled"    
                                        
                                    />
                                        </>
                                    
                                    )}

                                    renderOption={(option, { inputValue }) => {
                                    const matches = match(option.group, inputValue);
                                    const parts = parse(option.group, matches);
                            
                                    return (
                                        <div>
                                        {parts.map((part, index) => (
                                            <span key={index} >
                                            {part.text}
                                            </span>
                                        ))}
                                        </div>
                                    );
                                    }}
                                />
                    </Grid>
                    <Grid item xs={12}  sm={6}  >
                        <FastField
                            error={errors.hasOwnProperty("eMail") && touched.hasOwnProperty("eMail") ? true : false }
                            {...getFieldProps("eMail")}
                            label={errors.hasOwnProperty("eMail") && touched.hasOwnProperty("eMail") ? errors.eMail : "email" }
                            value={values.eMail}
                            name="eMail"
                            id="eMail"
                            component={TextField}
                            className="w-100"
                            variant="filled"
                            type="email"
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start" >
                                        <AlternateEmail />
                                    </InputAdornment>
                                )
                            }}
                            
                            />
                    </Grid>
                    
                </React.Fragment>
            </Grid>
        </Card>
            
    )
}
export default StaffPersonalInformation