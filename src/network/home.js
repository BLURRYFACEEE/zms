import {request} from "./request";

export function getSwiperData(){
  return request({
    url:'/home/multidata'
  })
}

export function getPageDate(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}