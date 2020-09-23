import {useState} from "react"

const initialState = {
    stuImage: null,
    imagedataField:null
}

let ImageConverter = (base62ImageData)=>{
    let [state, setState] = useState(initialState)
    if(base62ImageData)
        {
            if (base62ImageData.studentImage != state.imagedataField){
                const b64toBlob = (b64Data, contentType='', sliceSize=512) => 
                    {
                        const byteCharacters = atob(b64Data);
                        const byteArrays = [];

                        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                            const slice = byteCharacters.slice(offset, offset + sliceSize);

                            const byteNumbers = new Array(slice.length);
                            for (let i = 0; i < slice.length; i++) {
                            byteNumbers[i] = slice.charCodeAt(i);
                            }

                            const byteArray = new Uint8Array(byteNumbers);
                            byteArrays.push(byteArray);
                        }
                            
                        const blob = new Blob(byteArrays, {type: contentType});
                        return blob;
                        }

                const contentType = 'image/png';

                const b64Data = base62ImageData.studentImage //oneStudentdata.studentImage

                const blob = b64toBlob(b64Data, contentType);
                const blobUrl = URL.createObjectURL(blob);
                console.log("tlakfl;dasklfsakfjlds")
                setState((prev)=>({
                        stuImage: blobUrl,
                        imagedataField:base62ImageData.studentImage
                    }))
                    
                }
        }
        return state.stuImage
}
export {ImageConverter}
