import React from "react"
import {Card,ListGroup,Button} from "react-bootstrap"
import moment from "moment"

let notice_data = [
    {
        label:"info",
        date:moment("01-22-1999").format("DD-MM-YYYY"),
        notice:"notice to be pass down",
        noticeOwner: "user that post the notice",
        period: moment().subtract(10,"days").fromNow(true)   // "present_time - post_time"
    },
    {
        label:"warning",
        date:moment("01-22-1999").format("DD-MM-YYYY"),
        notice:"notice to be pass down",
        noticeOwner: "user that post the notice",
        period: moment().subtract(10,"days").fromNow(true)   // "present_time - post_time"
    },
    {
        label:"primary",
        date:moment("01-22-1999").format("DD-MM-YYYY"),
        notice:"notice to be pass down",
        noticeOwner: "user that post the notice",
        period: moment().subtract(10,"days").fromNow(true)   // "present_time - post_time"
    },
    {
        label:"secondary",
        date:moment("01-22-1999").format("DD-MM-YYYY"),
        notice:"notice to be pass down",
        noticeOwner: "user that post the notice",
        period: moment().subtract(10,"days").fromNow(true)   // "present_time - post_time"
    },
    {
        label:"danger",
        date:moment("01-22-1999").format("DD-MM-YYYY"),
        notice:"notice to be pass down",
        noticeOwner: "user that post the notice",
        period: moment().subtract(10,"days").fromNow(true)   // "present_time - post_time"
    }
]

let NoticeBoard = ()=>{

    return (
        <React.Fragment>
            <Card className="heightcontrol">
                <Card.Header>
                    <Card.Title>Notice Board</Card.Title>
                </Card.Header>
                <Card.Body className="overflows">
                    
                    <ListGroup className="list-group-flush">
                    {
                        notice_data.map((noticeInfo,index)=>{
                            return(
                                <ListGroup.Item key={index}>
                                    <Button as="div" className={`bg-${noticeInfo.label}`}>{noticeInfo.date}</Button>
                                    <h5 className="text-dark">{noticeInfo.notice}</h5>
                                    <div ><h5 className={`bg-${noticeInfo.label} text-light`}>{noticeInfo.noticeOwner}/{noticeInfo.period}</h5></div>
                                </ListGroup.Item>
                            )
                        })
                    } 
                    </ListGroup>
                </Card.Body>

            </Card>
        </React.Fragment>
    )
}
export default NoticeBoard