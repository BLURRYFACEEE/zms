import {request} from "./request";

export function getBigCategory(){
  return request({
    url:'/category'
  })
}

export function getSmallCategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
