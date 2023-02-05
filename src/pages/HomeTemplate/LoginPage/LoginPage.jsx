import React from 'react';
import { useState } from 'react';
import { apiLogin } from '../../../service/apiHome';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Spiner from '../../../components/Loading/Spiner';
import Access from './Access';
const LoginPage = (props) => {
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
                    console.log(res);
                    setLogin({
                        ...login,
                        spiner: false,
                    })
                    if (res.data.content.accessToken && res.data.content.maLoaiNguoiDung === 'KhachHang') {
                        props.addAccessToken(res.data.content.accessToken)
                        props.addUserInfomation(res.data.content)
                        window.alert('Đăng nhập thành công!')
                        navigate('/user')
                    } else {
                        alert('Không tồn tại tài khoản này!')
                    }

                })
                .catch((error) => {
                    console.log(error);
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
            <Access />
            :
            <form onClick={(event) => {
                event.preventDefault()
            }}
                className='container'
            >
                <div className='row justify-content-center '>
                    <div className="col-md-4 mt-5 border rounded py-5 mb-5 shadow">
                        <i className="fa-solid fa-film" style={{ fontSize: '60px', }} />
                        <h1>MOVIE THEATER</h1>
                        <div className='d-flex justify-content-between'>
                            <div className='ml-5'>
                                <h4 className='mb-4 text-center d-inline'>Đăng nhập</h4><br />
                                <span className='ml-3'>Chào mừng bạn quay lại.</span>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className="form-group">
                                <label htmlFor="taiKhoan">Tài khoản</label>
                                <input onChange={handleOnchange} name='taiKhoan' className='form-control' type='text' placeholder='Nhập tài khoản' />
                            </div>
                            <div className="form-">
                                <label htmlFor="taiKhoan">Mật khẩu</label>
                                <input onChange={handleOnchange} name='matKhau' className='form-control' type='password' placeholder='Nhập mật khẩu' />
                            </div>
                            <div className='text-danger ml-3'>{login.fullFilled}</div>
                        </div>
                        <button
                            onClick={() => {
                                handelLogin()
                            }}
                            className='btn btn-block btn-primary mt-5'>Đăng nhập</button>
                        <div className='text-center mt-2 font-italic'><span>Bạn không có tài khoản ? </span><Link to='/sign-in'>Đăng ký</Link></div>
                        {login.spiner ?
                            <Spiner />
                            : ''
                        }
                    </div>
                </div>
            </form>
    );
};
const mapStateToProp = (state) => {
    return {
        accessToken: state.userReducer.accessToken,
        userInfo: state.userReducer.userInfo
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        addAccessToken: (token) => {
            const action = {
                type: 'ADD_USER_ACCESS_TOKEN',
                payload: token,
            }
            dispatch(action)
        },
        addUserInfomation: (userInfo) => {
            const action = {
                type: 'ADD_USER_INFORMATION',
                payload: userInfo
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(LoginPage);