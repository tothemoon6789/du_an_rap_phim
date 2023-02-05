import React from 'react';
import { useNavigate } from 'react-router-dom';

const Access = () => {
    const navigate = useNavigate()
    return (
        <div className="container">
            <p className='text-success bg-light p-2 rounded'>Trạng thái: Đang đăng nhập</p>
            <button
                className='btn btn-primary'
                onClick={() => {
                    navigate('/home');
                }}>Trang chủ</button>
        </div>
    );
};

export default Access;