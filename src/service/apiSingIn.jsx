import axios from "axios";

export const apiSingIn = (data) =>  axios({
    url:'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
    method: 'POST',
    headers : {
        TokenCybersoft:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c',
    },
    data: data
})
// {
        
    // taiKhoan: 'lp123',
    // matKhau: "444",
    // email: "lp123@gmail.com",
    // soDt: "0909123123",
    // maNhom: "GP05",
    // hoTen: "Pham Ngoc Linh"
  
// }
// {
//     "data": {
//         "statusCode": 200,
//         "message": "Xử lý thành công!",
//         "content": {
//             "taiKhoan": "hoacomay",
//             "matKhau": "hoacomay888",
//             "email": "hoacomay@gmail.com",
//             "soDt": "0988777222",
//             "maNhom": "GP00",
//             "hoTen": "Hoa Cỏ Mây"
//         },
//         "dateTime": "2023-01-29T10:32:27.7882547+07:00",
//         "messageConstants": null
//     },
//     "status": 200,
//     "statusText": "OK",
//     "headers": {
//         "content-type": "application/json; charset=utf-8"
//     },
//     "config": {
//         "transitional": {
//             "silentJSONParsing": true,
//             "forcedJSONParsing": true,
//             "clarifyTimeoutError": false
//         },
//         "adapter": [
//             "xhr",
//             "http"
//         ],
//         "transformRequest": [
//             null
//         ],
//         "transformResponse": [
//             null
//         ],
//         "timeout": 0,
//         "xsrfCookieName": "XSRF-TOKEN",
//         "xsrfHeaderName": "X-XSRF-TOKEN",
//         "maxContentLength": -1,
//         "maxBodyLength": -1,
//         "env": {},
//         "headers": {
//             "Accept": "application/json, text/plain, */*",
//             "Content-Type": "application/json",
//             "TokenCybersoft": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c"
//         },
//         "url": "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
//         "method": "post",
//         "data": "{\"taiKhoan\":\"hoacomay\",\"matKhau\":\"hoacomay888\",\"email\":\"hoacomay@gmail.com\",\"soDt\":\"0988777222\",\"maNhom\":\"GP05\",\"hoTen\":\"Hoa Cỏ Mây\"}"
//     },
//     "request": {}
// }