import moment from "moment"

let Age = (dateOfBirth)=>{
    let now = moment()
    let bod = moment(dateOfBirth,'YYYY')
    let age = now.diff(bod,'years')
    return Number(age)
}

export {Age}