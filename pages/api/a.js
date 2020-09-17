import StudentDatabase from "../../database/studentDatabase"
import StaffDatabase from "../../database/staffDatabase"
import ParentDatabase from "../../database/parentsDatabase"
import fs from 'fs';
import process from "process"
import path from "path"
let a = async (req,res)=>{
    
    
    let data = req.body
    
    /*Download the base64 image in the server and returns the filename and path of image.*/
    function saveImage(baseImage) {
        /*path of the folder where your project is saved. (In my case i got it from config file, root path of project).*/
        const uploadPath = process.cwd();
        //path of folder where you want to save the image.
        const localPath = path.join(uploadPath,"uploads/images/")
        //Find extension of file
        const ext = baseImage.substring(baseImage.indexOf("/")+1, baseImage.indexOf(";base64"));
        const fileType = baseImage.substring("data:".length,baseImage.indexOf("/"));
        //Forming regex to extract base64 data of file.
        const regex = new RegExp(`^data:${fileType}\/${ext};base64,`, 'gi');
        //Extract base64 data.
        const base64Data = baseImage.replace(regex, "");
        const rand = Math.ceil(Math.random()*1000);
        //Random photo name with timeStamp so it will not overide previous images.
        const filename = `Photo_${Date.now()}_${rand}.${ext}`;
        console.log("filename::",localPath)
        //Check that if directory is present or not.
        if(!fs.existsSync(`${uploadPath}/uploads/`)) {
            fs.mkdirSync(`${uploadPath}/uploads/`);
        }
        if (!fs.existsSync(localPath)) {
            fs.mkdirSync(localPath);
        }
        fs.writeFileSync(localPath+filename, base64Data, 'base64');
        return {filename, localPath};
    }
    saveImage(data)
    res.json({"a":"ok"})
    // let student = new StudentDatabase()
    // let staff = new StaffDatabase()
    // let parent = new ParentDatabase()
    // let femaleNumber = await student.CountFemale()
    // let malesNumber = await student.CountMale()
    // let countTotalStudents = await student.CountTotal()
    // // console.log("name",femalesNumber)
    // let femalestaffNumber = await staff.CountFemale()
    // let malessttaffNumber = await staff.CountMale()
    // let countstaffTotal = await staff.CountTotal()


    // let countparentTotal = await parent.CountTotal()
  
    // res.json({
    //     // data:{
    //         femaleNumber,
    //         malesNumber,
    //         countTotalStudents,
    //         femalestaffNumber,
    //         malessttaffNumber,
    //         countstaffTotal,
    //         countparentTotal,
    //     // }
    // })
    
}
export default  a

