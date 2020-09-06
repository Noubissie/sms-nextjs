import prisma from "../../components/prismaClient/prismaclient"

let Subjectapi = async (req,res)=>{
    if(req.method == "POST"){
        console.log("body", JSON.parse(req.body).classs)

        let classs = JSON.parse(req.body).classes
        console.log("subjects::",classs)
        let groupdata = classs.map((data)=>{
           
            return (
                prisma.classes.create({
                    
                    data:{
                        id: Number(data.id),
                        class:data.clas,
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
        let sec = await prisma.classes.findMany({
            include:{
                Section:true
            }
        })
        // console.log("section:",sec)
        res.json(sec)
    }

    if(req.method == "DELETE"){
        let deleteOne = await prisma.classes.delete({
            where:{
                id:JSON.parse(req.body).classes.id
            }
        })
        console.log("deleteOne::",deleteOne)
        res.json(deleteOne)
        
    }
    
    if(req.method == "PUT"){
        let classBody = JSON.parse(req.body)
        console.log("update::",classBody)
        
        let update = await prisma.classes.update({
            where:{
                id:classBody.id,  
            },
            data:{
                id:classBody.id,
                class: classBody.clas,
                Section:{
                    connect:{
                        id_: Number(classBody.sectionID)
                    }
                }
            }
        })

        res.status(404).json({ok:"ok"})
    }
    
}
export default Subjectapi