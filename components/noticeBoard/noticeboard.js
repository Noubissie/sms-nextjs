import React from "react"
import {Card,ListGroup,Button} from "react-bootstrap"
import moment from "moment"
import NoticeData from "./noticeData"


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
                        NoticeData.map((noticeInfo,index)=>{
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