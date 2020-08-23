import StudentDatabase from "../../database/studentDatabase"
import StaffDatabase from "../../database/staffDatabase"
import ParentDatabase from "../../database/parentsDatabase"

let a = async (req,res)=>{
    
    
    
    let student = new StudentDatabase()
    let staff = new StaffDatabase()
    let parent = new ParentDatabase()
    let femaleNumber = await student.CountFemale()
    let malesNumber = await student.CountMale()
    let countTotalStudents = await student.CountTotal()
    // console.log("name",femalesNumber)
    let femalestaffNumber = await staff.CountFemale()
    let malessttaffNumber = await staff.CountMale()
    let countstaffTotal = await staff.CountTotal()


    let countparentTotal = await parent.CountTotal()
  
    res.json({
        // data:{
            femaleNumber,
            malesNumber,
            countTotalStudents,
            femalestaffNumber,
            malessttaffNumber,
            countstaffTotal,
            countparentTotal,
        // }
    })
}
export default  a