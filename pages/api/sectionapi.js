import prisma from "../../components/prismaClient/prismaclient"

let Sectionapi = async (req,res)=>{
    if(req.method == "POST"){
        console.log("body", JSON.parse(req.body).section)

        let sections = JSON.parse(req.body).section
        let groupdata = sections.map((data)=>{
            return (
                prisma.section.create({
                data:{
                    id_: data.id,
                    section:data.sectionName,
                    languages:data.sectionLanguage
                    }
            }).catch((e)=>{
                return undefined
            })
            )
        })
        await Promise.all(groupdata)
        res.json({created:"ok"})
    }
    
    if(req.method == "GET"){
        let sec = await prisma.section.findMany()
        // console.log("section:",sec)
        res.json(sec)
    }
    if(req.method == "DELETE"){
        let deleteOne = await prisma.section.delete({
            where:{
                id_:JSON.parse(req.body).section.id_
            }
        })
        console.log("deleteOne::",deleteOne)
        res.json(deleteOne)
        
    }
    if(req.method == "PUT"){
        let sectionBody = JSON.parse(req.body)
        console.log("update::",sectionBody)
        let update = await prisma.section.update({
            where:{
                id_:sectionBody.id_,  
            },
            data:{
                id_:sectionBody.id_,
                section: sectionBody.section,
                languages:sectionBody.languages
            }
        })
        res.status(200).json({ok:"ok"})
    }
    
}
export default Sectionapi