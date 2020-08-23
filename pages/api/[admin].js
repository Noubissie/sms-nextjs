import prisma from "../../components/prismaClient/prismaclient"
// import {useRouter} from "next/router"
import moment from "moment"
import {Age} from "../../components/age/age"



let A = async (req,res)=>{    
    console.log("body", JSON.parse(req.body))
    let data = JSON.parse(req.body)

    // console.log("header:", req.headers.cookies)
    // res.writeHead(200,{
    //             "Set-Cookie" :'token=200; expires=0;SameSite=true;HttpOnly=true; Priority=high'
    //         })   

    console.log("age:",Age(data.dateOfBirth))

    let students = await prisma.studentProfile.create({
            data:{
                id: Number(data.AdmissionID),
                firstname:data.firstname,
                lastname: data.lastname,
                dateofbirth : new Date(data.dateOfBirth)  ,
                age: Number(Age(data.dateOfBirth)), 
                Gender:{
                    connect:{
                        id:Number(data.Gender),
                        // gender:"Male"
                    }
                },
                email:data.email,
            }
        }
    )
        let findStudent = await prisma.studentProfile.findOne({
            where:{
                id : Number(data.AdmissionID)
            },
            include:{
                Gender:true
            }
        })
    res.status(200)
    res.json(findStudent)
    
}
export default A