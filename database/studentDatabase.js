import prisma from "../components/prismaClient/prismaclient"

class StudentDatabase{
    constructor(){
        this.prisma = prisma
    }
    findOneStudent = async (studentID) =>{
        const student = this.prisma.studentProfile.findOne({
            where:{
                AdmissionID: studentID
            }
        })
        return student
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
                    gender:"Female"
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

// import prisma from "../components/prismaClient/prismaclient"

// class StudentDatabase{
//     constructor(){
//         this.prisma = prisma
//     }
//     CountMale = async () =>{
//         let maleNumber =  await this.prisma.studentprofile.count({
//             where:{
//                 gender:{
//                     gender:"Male"
//                 }
//             }
//         })
//         return maleNumber
//     }
//     CountFemale = async () =>{
//         // console.log(this.prisma.studentprofile)
//         let femalenNumber = await this.prisma.studentprofile.count({
//             where:{
//                 gender:{
//                     gender:"Female"
//                 }
//             }
//         })
//         return femalenNumber
//     }
//     CountTotal = async () =>{
//         let totalNumber = await this.prisma.studentprofile.count()
//         return totalNumber
//     }
// }

// export default StudentDatabase