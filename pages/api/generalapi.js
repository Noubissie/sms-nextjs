import prisma from "../../components/prismaClient/prismaclient"

let gender = async (req,res)=>{

    if(req.method == "GET"){
        let GenderAll = await prisma.gender.findMany()
        res.json(GenderAll)
    }
}
export default gender