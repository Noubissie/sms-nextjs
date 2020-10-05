
let StaffEmergencyContact = (
    {
        values,
        getFieldProps,
        errors,
        touched,
        Grid,
        TextField,
        FastField,
        Card,
        InputAdornment,

        AccountCircle,
        HomeIcon,
        ContactPhoneIcon,
        WorkIcon
        
    }
)=>{
    return (
        <Card  className="whitesnow mt-2 p-2 pr-0 mb-4 ml-3 mr-3">
            <h5 className="text-info">Emergency Contact</h5>
            <Grid container item xs={12} spacing={2}>
                    <Grid item xs={12}  sm={6}  >
                        <FastField
                            error={errors.hasOwnProperty("EcontactName") && touched.hasOwnProperty("EcontactName") ? true : false }
                            {...getFieldProps("EcontactName")}
                            label={errors.hasOwnProperty("EcontactName") && touched.hasOwnProperty("EcontactName") ? errors.EcontactName : "EcontactName" }
                            value={values.EcontactName}
                            name="EcontactName"
                            id="EcontactName"
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
                    </Grid>
            
            
                    <Grid item xs={12}  sm={6}  >
                        <FastField
                            error={errors.hasOwnProperty("EcontactOccupation") && touched.hasOwnProperty("EcontactOccupation") ? true : false }
                            {...getFieldProps("EcontactOccupation")}
                            label={errors.hasOwnProperty("EcontactOccupation") && touched.hasOwnProperty("EcontactOccupation") ? errors.EcontactOccupation : "EcontactOccupation" }
                            value={values.EcontactOccupation}
                            name="EcontactOccupation"
                            id="EcontactOccupation"
                            component={TextField}
                            className="w-100"
                            variant="filled"
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start" >
                                        <WorkIcon/>
                                    </InputAdornment> 
                                )
                            }}
                            />
                    </Grid>
            
            
                    <Grid item xs={12}  sm={6}  >
                        <FastField
                            error={errors.hasOwnProperty("EcontactAddress") && touched.hasOwnProperty("EcontactAddress") ? true : false }
                            {...getFieldProps("EcontactAddress")}
                            label={errors.hasOwnProperty("EcontactAddress") && touched.hasOwnProperty("EcontactAddress") ? errors.EcontactAddress : "EcontactAddress" }
                            value={values.EcontactAddress}
                            name="EcontactAddress"
                            id="EcontactAddress"
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
                    </Grid>
                    <Grid item xs={12}  sm={6}  >
                        <FastField
                            error={errors.hasOwnProperty("EcontactContactMobile") && touched.hasOwnProperty("EcontactContactMobile") ? true : false }
                            {...getFieldProps("EcontactContactMobile")}
                            label={errors.hasOwnProperty("EcontactContactMobile") && touched.hasOwnProperty("EcontactContactMobile") ? errors.EcontactContactMobile : "EcontactContactMobile" }
                            value={values.EcontactContactMobile}
                            name="EcontactContactMobile"
                            id="EcontactContactMobile"
                            component={TextField}
                            className="w-100"
                            variant="filled"
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start" >
                                        <ContactPhoneIcon/>
                                    </InputAdornment>
                                )
                            }}
                            />
                    </Grid>
                    <Grid item xs={12}  sm={6}  >
                        <FastField
                            error={errors.hasOwnProperty("EContactEmail") && touched.hasOwnProperty("EContactEmail") ? true : false }
                            {...getFieldProps("EContactEmail")}
                            label={errors.hasOwnProperty("EContactEmail") && touched.hasOwnProperty("EContactEmail") ? errors.EContactEmail : "E Contact Email" }
                            value={values.EContactEmail}
                            name="EContactEmail"
                            id="EContactEmail"
                            component={TextField}
                            className="w-100"
                            variant="filled"
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start" >
                                        <ContactPhoneIcon/>
                                    </InputAdornment>
                                )
                            }}
                            />
                    </Grid>
        </Grid>
    </Card>
    )
}
export default StaffEmergencyContact