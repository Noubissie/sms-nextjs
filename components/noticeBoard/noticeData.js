import moment from "moment"

let NoticeData = [
    {
        label:"info",
        date:moment().format("L"),
        notice:"notice to be pass down",
        noticeOwner: "user that post the notice",
        period: moment().subtract(10,"days").fromNow(true)   // "present_time - post_time"
    },
    {
        label:"warning",
        date:moment().format("L"),
        notice:"notice to be pass down",
        noticeOwner: "user that post the notice",
        period: moment().subtract(10,"days").fromNow(true)   // "present_time - post_time"
    },
    {
        label:"primary",
        date:moment().format("L"),
        notice:"notice to be pass down",
        noticeOwner: "user that post the notice",
        period: moment().subtract(10,"days").fromNow(true)   // "present_time - post_time"
    },
    {
        label:"secondary",
        date:moment().format("L"),
        notice:"notice to be pass down",
        noticeOwner: "user that post the notice",
        period: moment().subtract(10,"days").fromNow(true)   // "present_time - post_time"
    },
    {
        label:"danger",
        date:moment().format("L"),
        notice:"notice to be pass down",
        noticeOwner: "user that post the notice",
        period: moment().subtract(10,"days").fromNow(true)   // "present_time - post_time"
    }
]
export default NoticeData