export const convertDateTime = (data ,fromType ="YYYY-MM-DD", toType="DD-MM-YYYY")=>{
    let year = (new Date()).getFullYear();
    let month = (new Date()).getMonth();
    let date = (new Date()).getDate();
    if(fromType === "YYYY-MM-DD") {
        year = data[0]+data[1]+data[2]+data[3];
        month = data[5]+data[6];
        date = data[8]+data[9]
    }

    return date + '-' + month + '-' + year;
}

export const formatDate = (date, format) => {
    const map = {
        MM: date.getMonth() + 1,
        DD: date.getDate(),
        //YY: date.getFullYear().toString().slice(-2),
        YYYY: date.getFullYear()
    }

    return format.replace(/MM|DD|YYYY/gi, matched => map[matched])
}