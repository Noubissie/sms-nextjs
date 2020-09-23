import process from "process"
import path from "path"
import fs from "fs"

/*Download the base64 image in the server and returns the filename and path of image.*/
let saveImage = (baseImage,individualRank,filenamePrefix)=>{
        /*path of the folder where your project is saved. (In my case i got it from config file, root path of project).*/
        const uploadPath = process.cwd();
        //path of folder where you want to save the image.
         
        const localPath = path.join(uploadPath,`public/uploads/${individualRank}/images/`)
        //Find extension of file
        const ext = baseImage.substring(baseImage.indexOf("/")+1, baseImage.indexOf(";base64"));
        const fileType = baseImage.substring("data:".length,baseImage.indexOf("/"));
        //Forming regex to extract base64 data of file.
        const regex = new RegExp(`^data:${fileType}\/${ext};base64,`, 'gi');
        //Extract base64 data.
        const base64Data = baseImage.replace(regex, "");
        const rand = Math.ceil(Math.random()*1000);
        //Random photo name with timeStamp so it will not overide previous images.
        // const filename = `Photo_${Date.now()}_${rand}.${ext}`;
        const filename = `${filenamePrefix}_photo.${ext}`
        console.log("filename::",localPath)
        //Check that if directory is present or not.
        if(!fs.existsSync(`${uploadPath}/uploads/`)) {
            fs.mkdirSync(`${uploadPath}/uploads/`);
        }
        if(!fs.existsSync(`${uploadPath}/uploads/${individualRank}/`)) {
            fs.mkdirSync(`${uploadPath}/uploads/${individualRank}/`);
        }
        if (!fs.existsSync(localPath)) {
            fs.mkdirSync(localPath);
        }
        fs.writeFileSync(localPath+filename, base64Data, 'base64');
        const studentImageName = `uploads/${individualRank}/images/${filename}`
        return {filename, localPath, studentImageName};
    }
export default saveImage