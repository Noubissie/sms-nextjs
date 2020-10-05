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
import Gender from "../../components/generalInput/gender"
import StaffPut from "../../components/teacherFile/staffPutapi"

const acceptedMediaFiles = ["jpg", "jpeg", "png"]

let studentAPI = async (req,res)=>{
    // res.status(405).end()
    if(req.method == "POST"){
        let {values, imagedataBack} = JSON.parse(req.body)

        let studentFinder = await prisma.staffProfile.findOne({
            where:{
                staffID: values.staffID
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
            let {filename, localPath, studentImageName} = saveImage(imagedataBack,"Staff", values.staffID)
            let saveStaff = await prisma.staffProfile.create({
                data:{        
                    firstname:values.GivenName,
                    lastname:values.FamilyName,
                    Title:{
                        connect:{
                            id:Number(values.Title.id)
                        }
                    },
                    staffgrade:{
                        connect:{
                            id:Number(values.Grade.id)
                        }
                    },
                    matricle:values.matricle,
                    staffID :values.staffID,
                    shortbiography:values.shortBio,
                    formerPost:values.formerPost,
                    locationOfFomerPost: values.locationOfFomerPost,
                    decisionNo:values.decisionNo,
                    decisionDate:new Date(values.decisionDate),
                    diploma:values.diploma,
                    Subjects:{
                        connect:{
                            id:Number(values.speciality.id)
                        }
                    },
                    dateofbirth:new Date(values.DateOfBirth),
                    Gender:{
                        connect:{
                            id:Number(values.Gender.id)
                        }
                    },
                    staffPosition:{
                        connect:{
                            id:Number(values.position.id)
                        }
                    },
                    email:values.eMail,
                    phoneNumber:values.phoneNumber,
                    imagepath:studentImageName,

                    teacherAddress:values.TeacherAddress,
                    religion:values.Religion.doctrine,
                    bloodgroup:values.BloodGroup.group,

                    emergencyContactName:values.EcontactName,
                    EcontactOccupation:values.EcontactOccupation,
                    emergencyContactEmail: values.EContactEmail,
                    emergencyContactPhone:values.EcontactContactMobile,
                    emergencyContactAddress:values.EcontactAddress,
                }

            })
            res.json(200)
        }
        
    }
    
    if(req.method == "GET"){
        let {query} = req 
        let staffID = query.staffID
        if(staffID){
            const oneStaff = await prisma.staffProfile.findOne({
                where:{
                    staffID: staffID
                },
                include:{
                    Subjects:true,
                    Gender:true,
                    staffgrade:true,
                    Title:true,
                    staffPosition:true
                }
            })
            // console.log(oneStudent) +oneStudent.studentPicture 
            if(oneStaff){
                const imagePath = path.join(process.cwd(),oneStaff.imagepath)
                if(fs.existsSync(imagePath)){
                    let studentImage = fs.readFileSync(imagePath, 'base64')
                    return res.json({oneStaff,studentImage})
                }
            }
            else if(!oneStaff){
                res.json(null)
            }
        }
        else if(query.AllstaffInSChool){
            let AllStaff = await prisma.staffProfile.findMany({
                include:{
                    Subjects:true,
                    Gender:true,
                    staffgrade:true,
                    Title:true,
                    staffPosition:true,
                }
            })
            return res.json(AllStaff)
        }
        
        res.status(404).end()
        // console.log("pathh::",path.join(process.cwd(),"public/uploads/Student/images/GO10_photo.jpeg"))
        
        // console.log("error::")
        
        
        
    }

    // big secutrity problem at the put update for items CHEXK THAT LATER
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
                saveImage(imagedata,"Staff", data.staffID)
                
                return res.status(200).end()
            }
        }
        else if(!imagedata){
            let data  = JSON.parse(req.body)
            let {staffID} = data
            // delete data.staffID
            
            if(data.Title){
                let staffUpdate = await prisma.staffProfile.update({
                    where:{
                        staffID: staffID
                    },
                    data:{
                        Title:{
                            connect:{
                                id: Number(data.Title.id)
                            }
                        }
                }
                })
            }
            
            StaffPut(data, staffID)

            res.status(200).end()
            // let {filename, localPath, studentImageName} = saveImage(imagedataBack,"Student", values.AdmissionID)

        }
        res.status(200).end()
    }
    
}
export default studentAPI

