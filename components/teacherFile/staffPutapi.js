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


let StaffPut=  async (data, staffID) =>{


        // if(data.staffgrade){
        //     let staffUpdate = await prisma.staffProfile.update({
        //         where:{
        //             staffID: staffID
        //         },
        //         data:{
        //             staffgrade:{
        //                 connect:{
        //                     id: Number(data.staffgrade.id)
        //                 }
        //             }
        //     }
        //     })
        // }
        if(data.staffgrade){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    staffgrade:{
                        connect:{
                            id: Number(data.Grade.id)
                        }
                    }
            }
            })
        }
        if(data.Subjects){
            console.log("data for the first change::", data)
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    Subjects:{
                        connect:{
                            id: Number(data.Subjects.id)
                        }
                    }
            }
            })
        }
        if(data.gender){
            
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    Gender:{
                        connect:{
                            id: Number(data.gender.id)
                        }
                    }
            }
            })
        }

        if(data.position){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    staffPosition:{
                        connect:{
                            id: Number(data.position.id)
                        }
                    }
            }
            })
        }
        if(data.shortbiography){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    shortbiography:data.shortbiography
            }
            })
        }
        if(data.shortbiography){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    shortbiography:data.shortbiography
            }
            })
        }
        if(data.familyname){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    lastname:data.familyname
            }
            })
        }
        if(data.givenname){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    firstname:data.givenname
            }
            })
        }
        if(data.dateofbirth){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    dateofbirth:new Date(data.dateofbirth)
            }
            })
        }
        if(data.bloodgroup){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    bloodgroup:data.bloodgroup.group
            }
            })
        }
        if(data.email){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    email:data.email
            }
            })
        }
        if(data.religion){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    religion:data.religion.doctrine
            }
            })
        }
        if(data.TeacherAddress){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    teacherAddress:data.TeacherAddress
            }
            })
        }
        if(data.TeacherAddress){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    teacherAddress:data.TeacherAddress
            }
            })
        }
        if(data.phoneNumber){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    phoneNumber:data.phoneNumber
            }
            })
        }
        if(data.phoneNumber){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    phoneNumber:data.phoneNumber
            }
            })
        }
        if(data.matricle){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    matricle:data.matricle
            }
            })
        }
        if(data.formerPost){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    formerPost:data.formerPost
            }
            })
        }
        if(data.locationOfFomerPost){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    locationOfFomerPost:data.locationOfFomerPost
            }
            })
        }
        if(data.decisionNo){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    decisionNo:data.decisionNo
            }
            })
        }
        if(data.decisionDate){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    decisionDate:new Date(data.decisionDate)
            }
            })
        }
        if(data.diploma){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    diploma:data.diploma
            }
            })
        }
        if(data.dateOfAssumption){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    dateOfAssumption:new Date(data.dateOfAssumption)
            }
            })
        }
        if(data.EcontactName){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    emergencyContactName:data.EcontactName
            }
            })
        }
        if(data.EcontactOccupation){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    EcontactOccupation:data.EcontactOccupation
            }
            })
        }
        if(data.EcontactAddress){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    emergencyContactAddress:data.EcontactAddress
            }
            })
        }
        if(data.EcontactContactMobile){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    emergencyContactPhone:data.EcontactContactMobile
            }
            })
        }
        if(data.EContactEmail){
            let staffUpdate = await prisma.staffProfile.update({
                where:{
                    staffID: staffID
                },
                data:{
                    emergencyContactEmail:data.EContactEmail
            }
            })
        }
        
        // if(data.position){
        //     let staffUpdate = await prisma.staffProfile.update({
        //         where:{
        //             staffID: staffID
        //         },
        //         data:{
        //             staffPosition:{
        //                 connect:{
        //                     id: Number(data.position.id)
        //                 }
        //             }
        //     }
        //     })
        // }

}
export default StaffPut