import prisma from "../../components/prismaClient/prismaclient"

let generalInputApi = async (req,res)=>{
    if(req.query.gender){
        if(req.method == "GET"){
            let GenderAll = await prisma.gender.findMany()
            res.json(GenderAll)
        }
        if(req.method == "POST"){

            let gender = JSON.parse(req.body).gender
            let groupdata = gender.map((data)=>{
                return (
                    prisma.gender.create({
                    data:{
                        gender:data.genderName,
                        }
                }).catch((e)=>{
                    return undefined
                })
                )
        })
        await Promise.all(groupdata)
        res.status(200).end()
        }
    }

     
    if(req.query.title){
        if(req.method == "GET"){
            let GenderAll = await prisma.title.findMany()
            res.json(GenderAll)
        }
        if(req.method == "POST"){

            let staffTitle = JSON.parse(req.body).title
            let groupdata = staffTitle.map((data)=>{
                return (
                    prisma.title.create({
                    data:{
                        title:data.title,
                        }
                }).catch((e)=>{
                    return undefined
                })
                )
        })
        await Promise.all(groupdata)
            res.status(200).end()
        }
    }

    if(req.query.position){  
        if(req.method == "GET"){
            let positionAll = await prisma.staffPosition.findMany()
            res.json(positionAll)
        }
        if(req.method == "POST"){
           
            let staffPosition = JSON.parse(req.body).position
            console.log("positionData::", staffPosition)
            let groupdata = staffPosition.map((data)=>{
                return (
                    prisma.staffPosition.create({
                    data:{
                        position:data.positionName,
                        }
                }).catch((e)=>{
                    return undefined
                })
                )
        })
        await Promise.all(groupdata)
            res.status(200).end()
        }
    }
    

    if(req.query.staffGrade){  
        if(req.method == "GET"){
            let StaffGradeAll = await prisma.staffgrade.findMany()
            res.json(StaffGradeAll)
        }
        if(req.method == "POST"){
           
            let staffGrade = JSON.parse(req.body).staffGrade
            console.log("positionData::", staffGrade)
            let groupdata = staffGrade.map((data)=>{
                return (
                    prisma.staffgrade.create({
                    data:{
                        grade:data.grade,
                        }
                }).catch((e)=>{
                    return undefined
                })
                )
        })
            await Promise.all(groupdata)
            res.status(200).end()
        }
    }
    else{
        res.status(200).end()
    }
    
}
export default generalInputApi