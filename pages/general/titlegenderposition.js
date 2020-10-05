import {useRef,useState} from "react"
import dynamic from "next/dynamic"
import Gender from "../../components/generalInput/gender"
import UsersTitle from  "../../components/generalInput/titles"
import StaffsPosition from "../../components/generalInput/position"
import StaffGrade from "../../components/generalInput/grade"

import Layout from "../../components/layout"
const BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})

const initialComponentState = {
    gendervalid: false,
    genderdirty:false,
    titlevalid: false,
    titledirty:false,
    positionvalid: false,
    positiondirty:false
}

let generalInput = ()=>{
    let genderRef = useRef()
    let titleRef = useRef()
    let positionRef = useRef()

    let [componentState,setcomponentsState] = useState(initialComponentState)
    return (
        <React.Fragment>
            <Layout>
                <div className="mt-4 mb-4 ml-3">
                    <h3 className="whitesnow mr-3 p-1 ">General Inputs</h3>
                    <BrowserSiteOutput marginRight="mr-3"/>
                </div>
                    {/* <button type="submit" onClick={onclick}>hi</button> */}
                    {/* <button onClick={onclick1}>hi2</button> */}
                    <Gender ref={genderRef} />
                    <UsersTitle ref={titleRef} />
                    <StaffsPosition ref={positionRef} />
                    <StaffGrade />
            </Layout>
        </React.Fragment>
    )
}
  
export async function getStaticProps(){
    return{
        props: {

        }
    }
}
export default generalInput