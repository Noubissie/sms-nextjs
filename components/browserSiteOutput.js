import Link from "next/link"
import  Breadcrumb from "react-bootstrap/Breadcrumb"
import {GrRefresh} from "react-icons/gr"
let BrowserSiteOutput = ({marginRight})=>{
    
    return (
        <Breadcrumb className={marginRight}>
            <Link as="/home" href="/">
                <a>Home </a>
            </Link> 
            <Breadcrumb.Item active>{location.pathname}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export {BrowserSiteOutput}