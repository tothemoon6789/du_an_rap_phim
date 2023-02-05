import React from 'react';
import { useState } from 'react';
import { apiLogin } from '../../../service/apiHome';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
const LoginAdminPage = (props) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        taiKhoan: '',
        matKhau: '',
        fullFilled: '',
        spiner: false,
        accessToken: '',
    })
    const handleOnchange = (e) => {
        const { name, value } = e.target
        setLogin({
            ...login,
            [name]: value,
        })
    }
    const handelLogin = () => {
        const { taiKhoan, matKhau } = login
        const data = {
            taiKhoan,
            matKhau,
        }
        setLogin({
            ...login,
            fullFilled: '',
        })
        if (taiKhoan && matKhau) {
            setLogin({
                ...login,
                spiner: true,
                fullFilled: '',
            })
            apiLogin(data)
                .then((res) => {
                    setLogin({
                        ...login,
                        spiner: false,
                    })
                    if (res.data.content.accessToken && res.data.content.maLoaiNguoiDung === 'QuanTri') {
                        props.adminLogin(res.data.content)
                        window.alert('Đăng nhập thành công!')
                        navigate('/admin')
                    } else {
                        window.alert('Không tồn tại tài khoản admin này!')

                    }
                })
                .catch((error) => {
                    setLogin({
                        ...login,
                        spiner: false,
                        fullFilled: '* Tên đăng nhập và mật khẩu không đúng!',
                    })
                })
        } else {
            setLogin({
                ...login,
                fullFilled: '* Vui lòng điền đầy đủ thông tin!',
            })
        }
    }
    return (
        props.accessToken ?
            <>
                <div className="container">
                    <p className='text-success bg-light p-2 rounded'>Trạng thái: Đang đăng nhập</p>
                    <button
                        className='btn btn-primary'
                        onClick={() => {
                            navigate('/home');
                        }}>Trang chủ</button>
                </div>
            </>
            :
            <form
           
            onClick={(event) => {
                event.preventDefault()
            }}
                className='container'
            >
                <div className='row justify-content-center '>
                    <div className="col-sm-8 col-md-6 col-lg-5 mt-5 border rounded py-5 mb-5 shadow text-center">
                        <i className="fa-solid fa-film" style={{ fontSize: '100px', }} />
                        <h2>Đăng nhập</h2>
                        <span className='mb-4'>(Admin)</span>
                        <div className="form-group text-left">
                            <label className='ml-2' htmlFor="taiKhoan">Tài khoản</label>
                            <input onChange={handleOnchange} name='taiKhoan' className='form-control' type='text' placeholder='Nhập tài khoản' />
                        </div>
                        <div className="form-group text-left">
                            <label className='ml-2' htmlFor="matKhau">Mật khẩu</label>
                            <input onChange={handleOnchange} name='matKhau' className='form-control' type='password' placeholder='Nhập mật khẩu' />
                        </div>
                        <div className='text-danger'>{login.fullFilled}</div>
                        <button
                            onClick={() => {
                                handelLogin()
                            }}
                            className='btn btn-block btn-primary mt-4'>Đăng nhập</button>
                        {login.spiner ?
                            <div className="d-flex justify-content-center">
                                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                            </div> : ''
                        }
                    </div>
                </div>
            </form>
    );
};
const mapStateToProp = (state) => {
    return {
        accessToken: state.adminReducer.accessToken,
        adminInfo: state.adminReducer.adminInfo,
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        adminLogin: (info) => {
            const action = {
                type: 'ADMIN_LOGIN',
                payload: info,
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(LoginAdminPage);