import Link from "next/link"
import  Breadcrumb from "react-bootstrap/Breadcrumb"
import {GrRefresh} from "react-icons/gr"
import {useRouter} from "next/router"
let BrowserSiteOutput = ({marginRight})=>{
        let router = useRouter()
        console.log("router::",router.asPath,"/n location::",location.pathname)
    return (
        <>
            {location.pathname != router.asPath ? <div style={{textAlign:"center"}} className=" ">Loading</div> :null}
            <Breadcrumb className={marginRight}>
                <Link as="/home" href="/">
                    <a>Home </a>
                </Link> 
                <Breadcrumb.Item active>{location.pathname}</Breadcrumb.Item>
            </Breadcrumb>
        </>
        
    )
}

export {BrowserSiteOutput}