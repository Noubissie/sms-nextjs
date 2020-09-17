import prisma from "../components/prismaClient/prismaclient"

class StaffDatabase{
    constructor(){
        this.prisma = prisma
    }
    CountMale = async () =>{
        let maleNumber =  await this.prisma.staffProfile.count({
            where:{
                Gender:{
                    gender:"Male"
                }
            }
        })
        return maleNumber
    }
    CountFemale = async () =>{
        let femalenNumber = await this.prisma.staffProfile.count({
            where:{
                Gender:{
                    gender:"Female"
                }
            }
        })
        return femalenNumber
    }
    CountTotal = async () =>{
        let totalNumber = await this.prisma.staffProfile.count()
        return totalNumber
    }
}

export default StaffDatabase

// import prisma from "../components/prismaClient/prismaclient"

// class StaffDatabase{
//     constructor(){
//         this.prisma = prisma
//     }
//     CountMale = async () =>{
//         let maleNumber =  await this.prisma.staffprofile.count({
//             where:{
//                 gender:{
//                     gender:"Male"
//                 }
//             }
//         })
//         return maleNumber
//     }
//     CountFemale = async () =>{
        
//         let femalenNumber = await this.prisma.staffprofile.count({
//             where:{
//                 gender:{
//                     gender:"Female"
//                 }
//             }
//         })
//         return femalenNumber
//     }
//     CountTotal = async () =>{
//         let totalNumber = await this.prisma.staffprofile.count()
//         return totalNumber
//     }
// }

// export default StaffDatabase