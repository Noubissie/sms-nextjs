import prisma from "../../components/prismaClient/prismaclient"
import {Age} from "../../components/age/age"
import path from "path"
import StudentDatabase from "../../database/studentDatabase"
import StaffDatabase from "../../database/staffDatabase"
import ParentDatabase from "../../database/parentsDatabase"
import saveImage from "../../components/studentfile/saveprofilePicture"
import url from "url"
import fs from "fs"
import process from "process"


const acceptedMediaFiles = ["jpg", "jpeg", "png"]

let studentAPI = async (req,res)=>{
    // res.status(405).end()
    if(req.method == "POST"){
        let {values, imagedataBack} = JSON.parse(req.body)

        let studentFinder = await prisma.studentProfile.findOne({
            where:{
                AdmissionID: values.AdmissionID
            }
        })
        console.log("studentFinder::",studentFinder)
        
        const ext = imagedataBack.substring(imagedataBack.indexOf("/")+1, imagedataBack.indexOf(";base64"))
        console.log("student::",studentFinder)
        if(studentFinder){
            // res.status(409).json({a:"ok"})
            return res.status(409).end()
            // res.json()
        }
        if(!acceptedMediaFiles.includes(ext) ){
            // res.status(415).json({a:"ok"})
            return res.status(415).end()
        }
        else{
            let {filename, localPath, studentImageName} = saveImage(imagedataBack,"Student", values.AdmissionID)
            let saveStudent = await prisma.studentProfile.create({
                data:{        
                    familyname: values.FamilyName,
                    givenname:values.GivenName,
                    dateofbirth : new Date(values.DateOfBirth),
                    Gender  :{
                        connect:{
                            id: Number(values.Gender.id)
                        }
                    },
                    // age :Age(values.DateOfBirth),
                    religion :values.Religion.doctrine,
                    bloodgroup : values.BloodGroup.group,
                    email : values.eMail,
                    // Section:{
                    //     connect:{
                    //         id_: Number(values.section.id_)
                    //     }
                    // },
                    AdmissionID  : values.AdmissionID,
                    phonenumber  : values.Phone,
                    shortbiography: values.shortBio,
                    studentPicture: studentImageName,
                    StudentAddress:values.StudentAddress,

                    FatherName:values.FatherName,
                    FatherOccupation:values.FatherOccupation,
                    FatherAddress:values.FatherAddress,
                    FatherContact:values.FatherContact,
                    
                    MotherName:values.MotherName,
                    MotherOccupation:values.MotherOccupation,
                    MotherAddress:values.MotherAddress,
                    MotherContact:values.MotherContact,
                }

            })
            res.json(200)
        }
        
    }
    
    if(req.method == "GET"){
        let {query} = req 
        let AdmissionID = query.AdmissionID
        console.log("query::",query)

        if(AdmissionID){
            console.log("res::",req.query)
            const oneStudent = await prisma.studentProfile.findOne({
                where:{
                    AdmissionID: AdmissionID
                },
                include:{
                    Gender:true,
                    // Section:true
                }
            })
            // console.log(oneStudent) +oneStudent.studentPicture 
            if(oneStudent){
                const imagePath = path.join(process.cwd(),oneStudent.studentPicture)
                if(fs.existsSync(imagePath)){
                    let studentImage = fs.readFileSync(imagePath, 'base64')
                    return res.json({oneStudent,studentImage})
                }
            }
            else if(!oneStudent){
                res.json(null)
            }
        }
        else if(query.AllstudentInSChool){
            let AllStudent = await prisma.studentProfile.findMany({
                include:{
                    Gender:true,
                    // Section:true
                }
            })
            return res.json(AllStudent)
        }
        
        res.status(404).end()
        // console.log("pathh::",path.join(process.cwd(),"public/uploads/Student/images/GO10_photo.jpeg"))
        
        // console.log("error::")
        
        
        
    }


    if(req.method == "PUT"){
        let data  = JSON.parse(req.body)
        const imagedata = data.imageEditValue
        if(imagedata){
        
            const ext = imagedata.substring(imagedata.indexOf("/")+1, imagedata.indexOf(";base64"))

            // if(studentFinder){
            //     // res.status(409).json({a:"ok"})
            //     return res.status(409).end()
            //     // res.json()
            // }
            console.log("testpoint1::",ext)
            if(acceptedMediaFiles.includes(ext) ){
                console.log("testpoint2::",ext)
                saveImage(imagedata,"Student", data.studentID)
                
                return res.status(200).end()
            }
            else{
                // let {filename, localPath, studentImageName} = saveImage(imagedataBack,"Student", values.AdmissionID)

            }
        }

        // const updateStudentInfo = await prisma.studentProfile.update({
        //     where:{
        //         AdmissionID:data.studentID
        //     }

        // })

        res.status(200).end()
    }
    
}
export default studentAPI

