import prisma from "../components/prismaClient/prismaclient"
class GenderDatabase {
    constructor(){
        this.prisma = prisma
    }
    getGender = async ()=>{
        let genderobject =  await this.prisma.gender.findMany()
        return genderobject
        
    }
}

export default GenderDatabase
