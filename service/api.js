import request from 'superagent';
import qs from 'querystring';
import cuid from 'cuid';
import Keys from '../config';

// 获取通用 Access Token
export async function getAccessToken() {
  const param = qs.stringify({
    grant_type: 'client_credentials',
    client_id: Keys.ak,
    client_secret: Keys.sk,
  });
  return new Promise((resolve, reject) => {
    request
      .get(`https://aip.baidubce.com/oauth/2.0/token?${param}`)
      .then((res) => {
        // res.body, res.headers, res.status
        resolve(res.body.access_token);
      })
      .catch((err) => {
        // err.message, err.response
        reject(err.message);
      });
  });
}

// 获取通用语音识别 Token
export async function getAudioToken() {
  const param = qs.stringify({
    grant_type: 'client_credentials',
    client_id: '8eVGWDxznSkQzFLxcCUUtZfT', // 您的 Api Key
    client_secret: 'RTzFnczTtzF0Q97HftVw3bCo0ZMRNZIK', // 您的 Secret Key
  });
  return new Promise((resolve, reject) => {
    request
      .get(`https://openapi.baidu.com/oauth/2.0/token?${param}`)
      .then((res) => {
        // res.body, res.headers, res.status
        resolve(res.body.access_token);
      })
      .catch((err) => {
        // err.message, err.response
        reject(err.message);
      });
  });
}

// 通用文字识别
// 通用识别：general_basic
// 精准识别：accurate_basic
// 生僻字识别：general_enhanced
export async function generateRecognition(param, type) {
  const token = await getAccessToken();
  return new Promise((resolve, reject) => {
    request
      .post(`https://aip.baidubce.com/rest/2.0/ocr/v1/${type}?access_token=${token}`)
      .send({ image: param })
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .then((res) => {
        // console.log(res.body);
        resolve(res.body);
      })
      .catch((err) => {
        reject(err.message);
        // 通用识别异常，自动调用生僻字接口
        // enhancedRecognition(param);
      });
  });
}

// 高精度文字识别
// export async function accurateRecognition(param) {
//   const token = await getAccessToken();
//   return new Promise((resolve, reject) => {
//     request
//       .post(`https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic?access_token=${token}`)
//       .send({ image: param })
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .then((res) => {
//         // console.log(res.body);
//         resolve(res.body);
//       })
//       .catch((err) => {
//         reject(err.message);
//       });
//   });
// }

// 生僻字识别
// export async function enhancedRecognition(param) {
//   let token = await getAccessToken();
//   return new Promise((resolve, reject) => {
//     request
//       .post(`https://aip.baidubce.com/rest/2.0/ocr/v1/general_enhanced?access_token=${token}`)
//       .send({ image: param })
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .then((res) => {
//         // console.log(res.body);
//         resolve(res.body);
//       })
//       .catch((err) => {
//         reject(err.message);
//       });
//   });
// }

// 语音合成
export async function getAudio(text) {
  const token = await getAudioToken('audio');
  const param = qs.stringify({
    tex: encodeURIComponent(text),
    tok: token,
    cuid: cuid(),
    ctp: 1,
    lan: 'zh',
    spd: 3,
    per: 4,
  });
  // console.log(param,'param');
  return new Promise((resolve, reject) => {
    request
      .get(`http://tsn.baidu.com/text2audio?${param}`)
      .then((res) => {
        // res.body, res.headers, res.status
        // console.log(res);
        resolve(res.request.url);
      })
      .catch((err) => {
        // err.message, err.response
        reject(err.message);
      });
  });
}
