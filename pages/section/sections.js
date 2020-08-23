import React , {useEffect} from "react"
import dynamic from "next/dynamic"

import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import  Row  from "react-bootstrap/Row"

import Layout from "../../components/layout"
import Link from "next/link"

let BrowserSiteOutput = dynamic(
    ()=>import("../../components/browserSiteOutput").then((mod)=>mod.BrowserSiteOutput),
        {ssr:false})
let Section = ()=>{

    return (
        <React.Fragment>
            <Layout>
                <div className="mt-3 mb-4 ml-3">
                    <h3 >Section</h3>
                    <BrowserSiteOutput />
                </div>
            </Layout>
        </React.Fragment>
    )
}
export default Section