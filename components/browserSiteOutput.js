import Link from "next/link"
import  Breadcrumb from "react-bootstrap/Breadcrumb"

let BrowserSiteOutput = ()=>{
    
    return (
        <Breadcrumb className="mr-3 ">
            <Link as="/home" href="/">
                <a>Home </a>
            </Link> 
            <Breadcrumb.Item active>{location.pathname}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
export {BrowserSiteOutput}