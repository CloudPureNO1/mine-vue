import axios from 'axios';
import qs from 'qs'
import GlobValue from './global_variable'

/**url 地址 */
axios.defaults.baseURL = GlobValue._$_BASE_HTTP_URL+"/";

 

var instanceFormData = axios.create({
  headers: {'content-type':'multipart/form-data'}//form-data格式，传递文件等
});

//http request 拦截器
axios.interceptors.request.use((config) => {
 
  return config;
},(error) =>{
  return Promise.reject(error);
});

/**
 * 封装get方法
 * @param fnName 方法名  //正在的url=axios.defaults.baseURL+fnName
 * @param data
 * @returns {Promise}
 */
export function $get(fnName,params={}){
  return new Promise((resolve,reject) => {
    axios.get(fnName,{
      params:params
    })
    .then(response => {
      resolve(response);
    })
    .catch(err => {
      reject(err)
    })
  })
}

  /**
 * 封装post请求
 * @param fName
 * @param data
 * @returns {Promise}
 */

export function $post(fName,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(fName,data)
    .then(response => {
      resolve(response);
    },err => {
      reject(err)
    })
  })
}
const header = {headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}};
export function $postForm(fName,data){
    return new Promise((resolve,reject)=>{
        axios.post(fName,qs.stringif(data),header)
        .then(response=>{
            resolve(response);
        },err=>{
            reject(err);
        }) 
    });
}

  /**
 * 封装post请求 FormData方式
 * @param fName
 * @param data
 * @returns {Promise}
 */

export function $postformData(fName,data = {}){
  return new Promise((resolve,reject) => {
    instanceFormData.post(fName,data)
    .then(response => {
      resolve(response);
    },err => {
      reject(err)
    })
  })
}