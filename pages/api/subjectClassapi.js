import prisma from "../../components/prismaClient/prismaclient"

let SubjectToClassapi = async (req,res)=>{
    if(req.method == "POST"){
        console.log("body", JSON.parse(req.body).subjectToClass)

        let subjectClass = JSON.parse(req.body).subjectToClass
        console.log("subjects::",subjectClass)
        let groupdata = subjectClass.map((data)=>{
           
            return (
                prisma.classSubject.create({
                    
                    data:{
                        id: Number(data.id),
                        Subjects:{
                            connect:{
                                id:Number(data.subject)}
                            },
                        Classes:{
                            connect:{
                                id: Number(data.classs)
                            }
                        }
                        }
            }).catch((e)=>{
                return undefined
            })
            )
        })
        await Promise.all(groupdata)
        

        res.status(200).json({ok:"ok"})
       
    }
    
    if(req.method == "GET"){
        let sec = await prisma.classSubject.findMany({
            include:{
                Subjects:true,
                Classes:true
            }
        })
        // console.log("section:",sec)
        res.json(sec)
    }

    if(req.method == "DELETE"){
        let deleteOne = await prisma.classSubject.delete({
            where:{
                id:JSON.parse(req.body).subjectClass.id
            }
        })
        console.log("deleteOne::",deleteOne)
        res.json(deleteOne)
        
    }
    
    if(req.method == "PUT"){
        let subjectBody = JSON.parse(req.body)
        console.log("update::",subjectBody)
        
        let update = await prisma.classSubject.update({
            where:{
                id:Number(subjectBody.id),  
            },
            data:{
                id:subjectBody.id,
                Classes:{
                    connect:{
                        id:Number(subjectBody.classId)
                    }
                },
                Subjects:{
                    connect:{
                        id: Number(subjectBody.subjectId)
                    }
                }
            }
        })

        res.status(404).json({ok:"ok"})
    }
    
}
export default SubjectToClassapi