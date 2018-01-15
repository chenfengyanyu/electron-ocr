import request from 'request';
import qs from 'querystring';
import {debug} from 'util';

// 获取Access Token
export function getAccessToken() {
  const param = qs.stringify({
    'grant_type': 'client_credentials', 'client_id': 'BGGSqXpPIziVHB2FoTiLCjzv', // 您的 Api Key
    'client_secret': 'ojvkATDVr4RVMC7yW2GPuQ7CzNyw19sZ' // 您的 Secret Key
  });

  request(`https://aip.baidubce.com/oauth/2.0/token?${param}`, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the
    // response status code if a response was received
    console.log('body:', body);
    if (response && response.statusCode === 200) {
      let temp = JSON
        .parse(body)
        .access_token;
      console.log(temp);
      return temp;
    }
  })
}

// 通用文字识别
export function generateRecognition(param) {
  const access_token = qs.stringify({
    access_token: '24.578c17b9b8096446027e4b89d1007c4f.2592000.1518582040.282335-10688386',
  });
  request
    .post({
      url: `https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?${access_token}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: { image: param }
    }, function (err, httpResponse, body) {
      console.log('body:', body);
      console.log('err:', err);
    })
}