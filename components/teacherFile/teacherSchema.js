import * as Yup from "yup"

let initialValueTeacher=(genderdata,bloodgroupdata,religiondata,speciality,titleData,positionData,staffGradeData)=>({
    FamilyName:"",
    GivenName:"",
    DateOfBirth:"",
    Gender: genderdata[0],
    TeacherAddress:"",
    BloodGroup:bloodgroupdata[0],
    Religion:religiondata[0],
    eMail:"",
    shortBio:"",


    speciality:speciality[0],
    staffID:"",
    phoneNumber:"",
    Grade:staffGradeData[0],
    position:positionData[0],
    matricle:"",
    formerPost:"",
    locationOfFomerPost:"",
    decisionNo:"",
    decisionDate:"",
    diploma:"",
    // speciality:"",
    dateOfAssumption:"",
    // professional address
    Title:titleData[0],

    // Emergecy Contact
    EcontactName:"",
    EcontactOccupation:"",
    EcontactAddress:"",
    EcontactContactMobile:"",
    EContactEmail:"",
    
    })

let ValidationSchemaTeacher = Yup.object({
    FamilyName: Yup.string().nullable().uppercase().trim().required("Enter Last Name"),
    GivenName: Yup.string().nullable().uppercase().trim().required("Enter First Name"),
    DateOfBirth: Yup.date().nullable().required("enter Date of Birth"),
    Gender: Yup.object().nullable().required("are you an Alien"),
    TeacherAddress: Yup.string().nullable().required("Enter Your Student Address"),
    BloodGroup:Yup.object().nullable(),
    Religion: Yup.object().nullable().required("Enter you religion"),
    eMail: Yup.string().nullable().email().required("Enter your email"),
    speciality: Yup.object().nullable().required("choose speciality"),
    staffID: Yup.string().nullable().required("User id"),
    phoneNumber: Yup.string().nullable().required("Enter phone number").max(15),
    shortBio: Yup.string().nullable().required("short biography"),
    position:Yup.string().nullable().required("Principal,vp etc"),
    // imageholder: Yup.string().nullable().notRequired("user photo"),
    Grade:Yup.string().nullable().required("Grade"),
    matricle:Yup.string().nullable().required("Matricle"),
    formerPost:Yup.string().nullable().required("Former Post"),
    locationOfFomerPost:Yup.string().nullable().required("Location of Former Post"),
    decisionNo:Yup.string().nullable().required("decision Number"),
    decisionDate:Yup.date().nullable().required("enter decision Date"),
    diploma:Yup.string().nullable().required("User DIPLOMA"),
    //Professional info
    Title: Yup.string().nullable().required("Title, Mr, Mrs,Chief.."),

    // Emergency Contact
    EcontactName:Yup.string().nullable().notRequired("needed"),
    EcontactOccupation:Yup.string().nullable().notRequired("needed"),
    EcontactAddress:Yup.string().nullable().notRequired("needed"),
    EcontactContactMobile:Yup.string().nullable().notRequired("needed"),

    EContactEmail: Yup.string().nullable().email().notRequired("needed")
    

})

export {ValidationSchemaTeacher, initialValueTeacher}