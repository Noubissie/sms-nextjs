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
                    gender:"Female"
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

export default ParentDatabase


// import prisma from "../components/prismaClient/prismaclient"

// class ParentDatabase{
//     constructor(){
//         this.prisma = prisma
//     }
//     CountMale = async () =>{
//         let maleNumber =  await this.prisma.parentprofile.count({
//             where:{
//                 gender:{
//                     gender:"Male"
//                 }
//             }
//         })
//         return maleNumber
//     }
//     CountFemale = async () =>{
//         let femalenNumber = await this.prisma.parentprofile.count({
//             where:{
//                 gender:{
//                     gender:"Female"
//                 }
//             }
//         })
//         return femalenNumber
//     }
//     CountTotal = async () =>{
//         let totalNumber = await this.prisma.parentprofile.count()
//         return totalNumber
//     }
// }

// export default ParentDatabase
