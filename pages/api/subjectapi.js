import prisma from "../../components/prismaClient/prismaclient"

let Subjectapi = async (req,res)=>{
    if(req.method == "POST"){
        console.log("body", JSON.parse(req.body).subject)

        let subjects = JSON.parse(req.body).subject
        console.log("subjects::",subjects)
        let groupdata = subjects.map((data)=>{
           
            return (
                prisma.subjects.create({
                    
                    data:{
                        id: Number(data.id),
                        subject:data.subjectName,
                        Section:{
                            connect:{
                                id_: Number(data.sectionTaught)
                            }
                        }
                        }
            }).catch((e)=>{
                return undefined
            })
            )
        })
        await Promise.all(groupdata)
        // resheader12

        res.status(200).json({ok:"ok"})
       
    }
    
    if(req.method == "GET"){
        let sec = await prisma.subjects.findMany({
            include:{
                Section:true
            }
        })
        // console.log("section:",sec)
        res.json(sec)
    }

    if(req.method == "DELETE"){
        let deleteOne = await prisma.subjects.delete({
            where:{
                id:JSON.parse(req.body).subject.id
            }
        })
        console.log("deleteOne::",deleteOne)
        res.json(deleteOne)
        
    }
    
    if(req.method == "PUT"){
        let subjectBody = JSON.parse(req.body)
        console.log("update::",subjectBody)
        
        let update = await prisma.subjects.update({
            where:{
                id:subjectBody.id,  
            },
            data:{
                id:subjectBody.id,
                subject: subjectBody.subject,
                Section:{
                    connect:{
                        id_: Number(subjectBody.sectionID)
                    }
                }
            }
        })

        res.status(404).json({ok:"ok"})
    }
    
}
export default Subjectapi