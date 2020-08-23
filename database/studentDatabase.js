import prisma from "../components/prismaClient/prismaclient"

class StudentDatabase{
    constructor(){
        this.prisma = prisma
    }
    CountMale = async () =>{
        let maleNumber =  await this.prisma.studentProfile.count({
            where:{
                Gender:{
                    gender:"Male"
                }
            }
        })
        return maleNumber
    }
    CountFemale = async () =>{
        let femalenNumber = await this.prisma.studentProfile.count({
            where:{
                Gender:{
                    gender:"Fenale"
                }
            }
        })
        return femalenNumber
    }
    CountTotal = async () =>{
        let totalNumber = await this.prisma.studentProfile.count()
        return totalNumber
    }
}

export default StudentDatabase