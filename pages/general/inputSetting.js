import dynamic from "next/dynamic"
import Gender from "../../components/generalInput/gender"
import Layout from "../../components/layout"

const BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})

let generalInput = ()=>{

    return (
        <React.Fragment>
            <Layout>
                <div className="mt-4 mb-4 ml-3">
                    <h3 className="whitesnow mr-3 p-1 ">Student</h3>
                    <BrowserSiteOutput marginRight="mr-3"/>
                </div>
                <div>
                    <Gender />
                </div>
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