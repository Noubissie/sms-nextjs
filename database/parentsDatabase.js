import prisma from "../components/prismaClient/prismaclient"

class ParentDatabase{
    constructor(){
        this.prisma = prisma
    }
    CountMale = async () =>{
        let maleNumber =  await this.prisma.parentProfile.count({
            where:{
                Gender:{
                    gender:"Male"
                }
            }
        })
        return maleNumber
    }
    CountFemale = async () =>{
        let femalenNumber = await this.prisma.parentProfile.count({
            where:{
                Gender:{
                    gender:"Fenale"
                }
            }
        })
        return femalenNumber
    }
    CountTotal = async () =>{
        let totalNumber = await this.prisma.parentProfile.count()
        return totalNumber
    }
}
function change(){
    return 0
}
export default ParentDatabase
