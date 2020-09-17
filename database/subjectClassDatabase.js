import prisma from "../components/prismaClient/prismaclient"

class SubjectClassDatabase{
    constructor(){
        this.prisma = prisma
    }
    getSubjectClasses = async () => {
        return await prisma.classSubject.findMany({
            include:{
                Subjects:true,
                Classes:true
            }
        })
    }
}

export default SubjectClassDatabase

// import prisma from "../components/prismaClient/prismaclient"

// class SubjectClassDatabase{
//     constructor(){
//         this.prisma = prisma
//     }
//     getSubjectClasses = async () => {
       
//         return await prisma.classsubject.findMany({
//             include:{
//                 Subjects:true,
//                 Classes:true
//             }
//         })
//     }
// }

// export default SubjectClassDatabase