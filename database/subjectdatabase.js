import prisma from "../components/prismaClient/prismaclient"

class SubjectDatabase{
    constructor(){
        this.prisma = prisma
    }
    getSubject = async () => {
        return await prisma.subjects.findMany({
            include:{
                Section:true
            }
        })
    }
}

export default SubjectDatabase