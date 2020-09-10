import axios from 'axios';

export function request(config){
  // return new Promise((resolve,reject)=> {
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:8000/api/z8',
      timeout: 10000
    })
  instance.interceptors.request.use(aaa=>{
    // console.log(aaa);
    return aaa
  },err=>{
    console.log(err);
  })
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err);
  })
  return instance(config)
  //   instance(config).then(res => {
  //     resolve(res)
  //   }).catch(err=>{
  //     reject(err)
  //   })
  // })

  //发送真正的网络请求
  // instance(config).then(res=>{
  //   // console.log(res);
  //   console.log(success);
  // })
  //    .catch(err=>{
  //   // console.log(err);
  //     console.log(failure);
  //   })

  // instance(config,baseConfig).then(res=>{
  //   // console.log(res);
  //   console.log(success);
  // })
  //   .catch(err=>{
  //     // console.log(err);
  //     console.log(failure);
  //   })
}

