import prisma from "../components/prismaClient/prismaclient"

class ClassesDatabase{
    constructor(){
        this.prisma = prisma
    }
    getClasses = async () => {
        return await prisma.classes.findMany({
            include:{
                Section:true
            }
        })
    }
}

export default ClassesDatabase