import prisma from "../components/prismaClient/prismaclient"

class SectionDatabase{
    constructor(){
        this.prisma = prisma
    }
  
    getSection = async () =>{
        let totalsection = await this.prisma.section.findMany()
        return totalsection
    }
}

export default SectionDatabase