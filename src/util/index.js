//事件格式化
export function format(date,type='time'){
 let handleDate =  new Date(date)
//年
 let year =  handleDate.getFullYear()
 //月 
 let month =  (handleDate.getMonth()+1)<10?`0${handleDate.getMonth()+1}`:(handleDate.getMonth()+1)
 //日
 let day  = handleDate.getDate()<10?`0${handleDate.getDate()}`:handleDate.getDate()
 
 //时
 let hour =  handleDate.getHours()<10?`0${handleDate.getHours()}`:handleDate.getHours()


 //分

 let minus =  handleDate.getMinutes()<10?`0${handleDate.getMinutes()}`:handleDate.getMinutes()

 //秒

 let secound  =  handleDate.getSeconds() < 10 ?`0${handleDate.getSeconds()}`:handleDate.getSeconds()

  let time =''
  switch(type){
      case 'year':
          time = year;
          break;
          case 'month':
              time = `${year}-${month}`
              break;
              case 'day':
              time =  `${yeaer}-${month}-${day}`
              break;
              case 'time':
              time =  `${year}-${month}-${day}  ${hour}:${minus}:${secound}`
              break;

  }

  return time


}