import * as Yup from "yup"

let initialValue=(genderdata,bloodgroupdata,religiondata,sectiondata)=>({
    FamilyName:"",
    GivenName:"",
    DateOfBirth:"",
    Gender: genderdata[0],
    StudentAddress:"",
    BloodGroup:bloodgroupdata[0],
    Religion:religiondata[0],
    eMail:"",
    
    section:sectiondata[0],
    AdmissionID:"",
    Phone:"",
    shortBio:"",
    // imageholder:state.filename

    FatherName:"",
    FatherOccupation:"",
    FatherAddress:"",
    FatherContact:"",
    // Mother info
    MotherName:"",
    MotherOccupation:"",
    MotherAddress:"",
    MotherContact:"",
    })

let ValidationSchema = Yup.object({
    FamilyName: Yup.string().nullable().uppercase().trim().required("Enter Last Name"),
    GivenName: Yup.string().nullable().uppercase().trim().required("Enter First Name"),
    DateOfBirth: Yup.date().nullable().required("enter Date of Birth"),
    Gender: Yup.object().nullable().required("are you an Alien"),
    StudentAddress: Yup.string().nullable().required("Enter Your Student Address"),
    BloodGroup:Yup.object().nullable(),
    Religion: Yup.object().nullable().required("Enter you religion"),
    eMail: Yup.string().nullable().email().required("Enter your email"),
    section: Yup.object().nullable().required("choose section"),
    AdmissionID: Yup.string().nullable().required("User id"),
    Phone: Yup.string().nullable().required("Enter phone number").max(15),
    shortBio: Yup.string().nullable().required("short biography"),
    // imageholder: Yup.string().nullable().notRequired("user photo"),
    FatherName:Yup.string().nullable().notRequired("needed"),
    FatherOccupation:Yup.string().nullable().notRequired("needed"),
    FatherAddress:Yup.string().nullable().notRequired("needed"),
    FatherContact:Yup.string().nullable().notRequired("needed"),
    // Mother info
    MotherName:Yup.string().nullable().notRequired("needed"),
    MotherOccupation:Yup.string().nullable().notRequired("needed"),
    MotherAddress:Yup.string().nullable().notRequired("needed"),
    MotherContact:Yup.string().nullable().notRequired("needed")

})

export {ValidationSchema, initialValue}