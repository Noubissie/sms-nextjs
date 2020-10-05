

let StaffProffessionalInformation = (
    {
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
        Input,
        InputAdornment,
        FingerprintIcon,
        ContactPhoneIcon,
        LocalLibraryIcon,
        CardMembershipIcon,
        titleData,
        specialityData,
        positionData,
        staffGradeData,
        
    }
)=>{
    return(
        <Card  className="whitesnow mt-2 p-2 pr-0 mb-4 ml-3 mr-3">
            <h5 className="text-info">Professional Information</h5>
                                <Grid container item xs={12} spacing={2}>
                                <React.Fragment>
                                        <Grid item xs={12} sm={6} >
                                            <Field
                                                            
                                                component={Autocomplete}
                                                // {...getFieldProps("Gender")}
                                                value={values.speciality}
                                                onBlur={handleBlur}
                                                onChange={(e,selectedOption )=>
                                                    {setFieldValue("speciality", selectedOption)
                                                    //  setFieldError("Gender",errors.Gender)
                                                        }
                                                }
                                                
                                                // inputValue={values.Gender.title}
                                                options={specialityData}
                                                name="speciality"
                                                id="speciality"
                                                getOptionSelected={(option, value) => option.subject == value.subject}
                                                getOptionLabel={option => option.subject}
                                                renderInput={params => (
                                                    <>
                                                    
                                                    <Field 
                                                        component={TextField}
                                                        {...params}
                                                        name="speciality"
                                                        error={errors.hasOwnProperty("speciality") && touched.hasOwnProperty("speciality") ? true : false }
                                                        label={errors.hasOwnProperty("speciality") && touched.hasOwnProperty("speciality") ? errors.speciality : "speciality" }
                                                        variant="filled"    
                                                        
                                                    />
                                                    </>
                                                
                                                )}

                                                            renderOption={(option, { inputValue }) => {
                                                            const matches = match(option.subject, inputValue);
                                                            const parts = parse(option.subject, matches);
                                                    
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
                                                        <Field
                                                                        
                                                            component={Autocomplete}
                                                            // {...getFieldProps("Gender")}
                                                            value={values.position}
                                                            onBlur={handleBlur}
                                                            onChange={(e,selectedOption )=>
                                                                {setFieldValue("position", selectedOption)
                                                                //  setFieldError("Gender",errors.Gender)
                                                                    }
                                                            }
                                                            
                                                            // inputValue={values.Gender.title}
                                                            options={positionData}
                                                            name="position"
                                                            id="position"
                                                            getOptionSelected={(option, value) => option.position === value.position}
                                                            getOptionLabel={option => option.position}
                                                            renderInput={params => (
                                                                <>
                                                                
                                                                <Field 
                                                                    component={TextField}
                                                                    {...params}
                                                                    name="position"
                                                                    error={errors.hasOwnProperty("position") && touched.hasOwnProperty("position") ? true : false }
                                                                    label={errors.hasOwnProperty("position") && touched.hasOwnProperty("position") ? errors.position : "position" }
                                                                    variant="filled"    
                                                                    
                                                                />
                                                                </>
                                                            
                                                            )}

                                                                        renderOption={(option, { inputValue }) => {
                                                                        const matches = match(option.position, inputValue);
                                                                        const parts = parse(option.position, matches);
                                                                
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
                                                    
                                                    <FastField
                                                        error={errors.hasOwnProperty("staffID") && touched.hasOwnProperty("staffID") ? true : false }
                                                        {...getFieldProps("staffID")}
                                                        label={errors.hasOwnProperty("staffID") && touched.hasOwnProperty("staffID") ? errors.staffID : "staffID" }
                                                        value={values.staffID}
                                                        name="staffID"
                                                        id="staffID"
                                                        component={TextField}
                                                        className="w-100"
                                                        variant="filled"
                                                        
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start" >
                                                                    <FingerprintIcon/>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        
                                                        />
                                                        {/* <ErrorMessage name="FamilyName" component={errorFieldMessage}/> */}
                                                </Grid>
                                                
                                                <Grid item xs={12} sm={6}  >
                                                    
                                                    <FastField
                                                        error={errors.hasOwnProperty("phoneNumber") && touched.hasOwnProperty("phoneNumber") ? true : false }
                                                        {...getFieldProps("phoneNumber")}
                                                        label={errors.hasOwnProperty("phoneNumber") && touched.hasOwnProperty("phoneNumber") ? errors.phoneNumber : "phoneNumber" }
                                                        value={values.phoneNumber}
                                                        name="phoneNumber"
                                                        id="phoneNumber"
                                                        component={TextField}
                                                        className="w-100"
                                                        variant="filled"
                                                        type="tel"
                                                        
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start" >
                                                                    <ContactPhoneIcon/>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        />
                                                        {/* <ErrorMessage name="FamilyName" component={errorFieldMessage}/> */}
                                                </Grid>
                                                <Grid item xs={12}  sm={6}  >
                                                    <FastField
                                                        error={errors.hasOwnProperty("shortBio") && touched.hasOwnProperty("shortBio") ? true : false }
                                                        {...getFieldProps("shortBio")}
                                                        label={errors.hasOwnProperty("shortBio") && touched.hasOwnProperty("shortBio") ? errors.shortBio : "shortBio" }
                                                        value={values.shortBio}
                                                        name="shortBio"
                                                        id="shortBio"
                                                        component={TextField}
                                                        className="w-100"
                                                        variant="filled"
                                                        type="textArea"
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start">
                                                                    <LocalLibraryIcon/> 
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        />
                                                </Grid>

                                                <Grid item xs={12} sm={6} className="w-100" >
                                                    <Field
                                                         
                                                        component={Autocomplete}
                                                        // {...getFieldProps("Gender")}
                                                        value={values.Grade}
                                                        onBlur={handleBlur}
                                                        onChange={(e,selectedOption )=>
                                                            {setFieldValue("Grade", selectedOption)
                                                            //  setFieldError("Gender",errors.Gender)
                                                                }
                                                        }
                                                        
                                                        // inputValue={values.Gender.title}
                                                        options={staffGradeData}
                                                        name="Grade"
                                                        id="Grade"
                                                        
                                                        getOptionSelected = {(option,value)=> option.grade == value.grade}
                                                        getOptionLabel={option => option.grade}
                                                        renderInput={params => (
                                                            <>
                                                            
                                                            <Field 
                                                            component={TextField}
                                                            {...params}
                                                            
                                                            name="Grade"
                                                            error={errors.hasOwnProperty("Grade") && touched.hasOwnProperty("Grade") ? true : false }
                                                            label={errors.hasOwnProperty("Grade") && touched.hasOwnProperty("Grade") ? errors.Grade : "Grade" }
                                                            variant="filled"    
                                                            
                                                        />
                                                            </>
                                                        
                                                        )}

                                                        renderOption={(option, { inputValue }) => {
                                                        const matches = match(option.grade, inputValue);
                                                        const parts = parse(option.grade, matches);
                                                
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
                                                        error={errors.hasOwnProperty("matricle") && touched.hasOwnProperty("matricle") ? true : false }
                                                        {...getFieldProps("matricle")}
                                                        label={errors.hasOwnProperty("matricle") && touched.hasOwnProperty("matricle") ? errors.matricle : "matricle" }
                                                        value={values.matricle}
                                                        name="matricle"
                                                        id="matricle"
                                                        component={TextField}
                                                        className="w-100"
                                                        variant="filled"
                                                        type="textArea"
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start">
                                                                    <LocalLibraryIcon/> 
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12}  sm={6}  >
                                                    <FastField
                                                        error={errors.hasOwnProperty("formerPost") && touched.hasOwnProperty("formerPost") ? true : false }
                                                        {...getFieldProps("formerPost")}
                                                        label={errors.hasOwnProperty("formerPost") && touched.hasOwnProperty("formerPost") ? errors.formerPost : "formerPost" }
                                                        value={values.formerPost}
                                                        name="formerPost"
                                                        id="formerPost"
                                                        component={TextField}
                                                        className="w-100"
                                                        variant="filled"
                                                        type="textArea"
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start">
                                                                    <LocalLibraryIcon/> 
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12}  sm={6}  >
                                                    <FastField
                                                        error={errors.hasOwnProperty("locationOfFomerPost") && touched.hasOwnProperty("locationOfFomerPost") ? true : false }
                                                        {...getFieldProps("locationOfFomerPost")}
                                                        label={errors.hasOwnProperty("locationOfFomerPost") && touched.hasOwnProperty("locationOfFomerPost") ? errors.locationOfFomerPost : "location Of Fomer Post" }
                                                        value={values.locationOfFomerPost}
                                                        name="locationOfFomerPost"
                                                        id="locationOfFomerPost"
                                                        component={TextField}
                                                        className="w-100"
                                                        variant="filled"
                                                        type="textArea"
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start">
                                                                    <LocalLibraryIcon/> 
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12}  sm={6}  >
                                                    <FastField
                                                        error={errors.hasOwnProperty("decisionNo") && touched.hasOwnProperty("decisionNo") ? true : false }
                                                        {...getFieldProps("decisionNo")}
                                                        label={errors.hasOwnProperty("decisionNo") && touched.hasOwnProperty("decisionNo") ? errors.decisionNo : "decisionNo" }
                                                        value={values.decisionNo}
                                                        name="decisionNo"
                                                        id="decisionNo"
                                                        component={TextField}
                                                        className="w-100"
                                                        variant="filled"
                                                        type="textArea"
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start">
                                                                    <LocalLibraryIcon/> 
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        />

                                                </Grid>
                                                <Grid item xs={12}  sm={6}  >
                                                    <FastField
                                                        error={errors.hasOwnProperty("decisionDate") && touched.hasOwnProperty("decisionDate") ? true : false }
                                                        {...getFieldProps("decisionDate")}
                                                        label={errors.hasOwnProperty("decisionDate") && touched.hasOwnProperty("decisionDate") ? errors.decisionDate : "decisionDate" }
                                                        value={values.decisionDate}
                                                        name="decisionDate"
                                                        id="decisionDate"
                                                        component={TextField}
                                                        className="w-100"
                                                        variant="filled"
                                                        type="date"
                                                        InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start">
                                                                    <LocalLibraryIcon/> 
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12} sm={6} className="w-100" >
                                                    <Field
                                                        
                                                        component={Autocomplete}
                                                        // {...getFieldProps("Gender")}
                                                        value={values.Title}
                                                        onBlur={handleBlur}
                                                        onChange={(e,selectedOption )=>
                                                            {setFieldValue("Title", selectedOption)
                                                            //  setFieldError("Gender",errors.Gender)
                                                                }
                                                        }
                                                        
                                                        // inputValue={values.Gender.title}
                                                        options={titleData}
                                                        name="Title"
                                                        id="Title"
                                                        getOptionSelected={(option, value) => option.title === value.title}
                                                        getOptionLabel={option => option.title}
                                                        renderInput={params => (
                                                            <>
                                                    
                                                            <Field 
                                                                component={TextField}
                                                                {...params}
                                                                    
                                                                    name="Title"
                                                                    error={errors.hasOwnProperty("Title") && touched.hasOwnProperty("Title") ? true : false }
                                                                    label={errors.hasOwnProperty("Title") && touched.hasOwnProperty("Title") ? errors.Title : "Title" }
                                                                    variant="filled"    
                                                                    
                                                                    />
                                                            </>
                                                        
                                                        )}

                                                        renderOption={(option, { inputValue }) => {
                                                        const matches = match(option.title, inputValue);
                                                        const parts = parse(option.title, matches);
                                                
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
                                                        error={errors.hasOwnProperty("diploma") && touched.hasOwnProperty("diploma") ? true : false }
                                                        {...getFieldProps("diploma")}
                                                        label={errors.hasOwnProperty("diploma") && touched.hasOwnProperty("diploma") ? errors.diploma : "diploma" }
                                                        value={values.diploma}
                                                        name="diploma"
                                                        id="diploma"
                                                        component={TextField}
                                                        className="w-100"
                                                        variant="filled"                                                  InputProps={{
                                                            startAdornment:(
                                                                <InputAdornment position="start">
                                                                    <CardMembershipIcon/> 
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
export default StaffProffessionalInformation