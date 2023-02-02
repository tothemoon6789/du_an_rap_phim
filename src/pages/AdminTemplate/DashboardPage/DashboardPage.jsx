import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';

const DashboardPage = () => {
    const formData = new FormData();

    formData.append("maPhim", 9870);
    formData.append("tenPhim", "Con tho xinh xan");
    formData.append("biDanh", "con-tho-xinh-xan");
    formData.append("trailer", "https://youtu.be/Fva_W_AF0IM");
    formData.append("hinhAnh", "https://movienew.cybersoft.edu.vn/hinhanh/black-adam_gp01.jpg");
    formData.append("moTa", "Dwayne Johnson sẽ góp mặt trong tác phẩm hành động - phiêu lưu mới của New Line Cinema “Black Adam”. Đây là bộ phim đầu tiên trên màn ảnh rộng khai thác câu chuyện của siêu anh hùng DC này, dưới sự sáng tạo của đạo diễn Jaume Collet-Serra (“Jungle Cruise”). ");
    formData.append("maNhom", "GP05");
    formData.append("ngayKhoiChieu", "2023-01-29T15:05:27.55");
    formData.append("danhGia", 8);
    formData.append("hot", true);
    formData.append("dangChieu", true);
    formData.append("sapChieu", false);
    const clickButton = () => {
        axios({
            url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload',
            method:'POST',
            headers : {
                TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZGFuZ2t5OTkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJkYW5na3k5OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsImRhbmdreTk5QGdtYWlsLmNvbSIsIkdQMDUiXSwibmJmIjoxNjc1MjQ5MTkxLCJleHAiOjE2NzUyNTI3OTF9.Ko-XRz56ANWF6nIYkp7Y3kBQUXNYYdzA0Bt4DLunP_Q',
            },
            data : formData,
        }).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
       
    }, [])
    return (
        <div>
            HELLOW WOLRD
            <button
            // onClick={clickButton}
            >CALL API De up load phim</button>
        </div>
    );
};

export default DashboardPage;