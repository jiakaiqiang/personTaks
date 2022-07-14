//格式化时间
function format(time,type){
    //定义时分秒
   if(time==''||time==undefined) return false
    const date = new Date(time)
    //获取年
    let year = date.getFullYear()
    //月
    let mouth = String((date.getMonth()+1)).padStart(2,'0')
    // 日
    let day = String(date.getDay()).padStart(2,'0')
    //时
    let hours = String(date.getHours()).padStart(2,'0')

    //分

    let  minutes = String(date.getMinutes()).padStart(2,'0')
    //秒
    let seconds = String(date.getSeconds()).padStart(2,'0')
    let formatTime=''
    switch(type){
        case 'time':
            formatTime = `${year}-${mouth}-${day} ${hours}:${minutes}:${seconds}`
       break;
        case 'day':
            formatTime = `${year}-${mouth}-${day}`
            break;
        case 'mouth':
            formatTime = `${year}-${mouth}`
            break;
        case year:
            formatTime = `${year}`
            break;
        default:
            formatTime = `${year}-${mouth}-${day} ${hours}:${minutes}:${seconds}`
    }

return formatTime
}
export {
    format
}
