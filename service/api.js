import request from 'superagent';
import qs from 'querystring';
import {debug} from 'util';
import { resolve } from 'path';

// 获取Access Token
export async function getAccessToken() {
  const param = qs.stringify({
    'grant_type': 'client_credentials', 'client_id': 'BGGSqXpPIziVHB2FoTiLCjzv', // 您的 Api Key
    'client_secret': 'ojvkATDVr4RVMC7yW2GPuQ7CzNyw19sZ' // 您的 Secret Key
  });
  return new Promise((resolve, reject) => {
    request
    .get(`https://aip.baidubce.com/oauth/2.0/token?${param}`)
    .then(function(res) {
        // res.body, res.headers, res.status
        resolve(res.body.access_token);
    })
    .catch(function(err) {
        // err.message, err.response
        reject(err.message);
    });
  })
}

// 通用文字识别
export async function generateRecognition(param) {
  let token = await getAccessToken();
  return new Promise((resolve, reject) => {
    request
    .post(`https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token=${token}`)
    .send({ image: param })
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .then(res => {
      // console.log(res.body);
      resolve(res.body);
    })
    .catch(err => {
      reject(err.message);
    })
  })
}

//高精度文字识别 
export async function accurateRecognition(param) {
  let token = await getAccessToken();
  return new Promise((resolve, reject) => {
    request
    .post(`https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic?access_token=${token}`)
    .send({ image: param })
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .then(res => {
      // console.log(res.body);
      resolve(res.body);
    })
    .catch(err => {
      reject(err.message);
    })
  })
}

// 生僻字识别
export async function enhancedRecognition(param) {
  let token = await getAccessToken();
  return new Promise((resolve, reject) => {
    request
    .post(`https://aip.baidubce.com/rest/2.0/ocr/v1/general_enhanced?access_token=${token}`)
    .send({ image: param })
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .then(res => {
      // console.log(res.body);
      resolve(res.body);
    })
    .catch(err => {
      reject(err.message);
    })
  })
}