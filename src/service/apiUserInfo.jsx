import axios from "axios";

export const apiUserInfo =(token)=> axios({
    url: 'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
    method: 'POST',
    headers : {
        TokenCybersoft:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c',
        Authorization: 'Bearer ' + token
    },
})