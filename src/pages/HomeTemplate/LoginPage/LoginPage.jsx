import React from 'react';
import { useState } from 'react';
import { apiLogin } from '../../../service/apiLogin';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
const LoginPage = (props) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        taiKhoan: '',
        matKhau: '',
        fullFilled: "",
        spiner: false,
        accessToken: '',
    })
    useEffect(() => {
    }, [login])
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
                    if (res.data.content.accessToken &&  res.data.content.maLoaiNguoiDung === 'KhachHang') {
                        props.addAccessToken(res.data.content.accessToken)
                        props.addUserInfomation(res.data.content)
                        window.alert('Đăng nhập thành công!')
                        navigate('/user')
                    } else {
                        alert('Không tồn tại tài khoản này!')
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
            <form onClick={(event) => {
                event.preventDefault()
            }}
                className='container'
            >
                <div className='row justify-content-center '>
                    <div className="col-md-4 mt-5 border rounded py-5 mb-5 shadow">
                        {/* <div style={{height:'300px'}}> */}

                        <img  src="https://logodix.com/logo/1713924.png" alt="..." className='img-thumbnail rounded-circle'/>
                        {/* </div> */}
                        <h1 className='mb-4 text-center'>Đăng nhập</h1>
                        <input onChange={handleOnchange} name='taiKhoan' className='form-control mt-2' type='text' placeholder='Tài khoản' />
                        <input onChange={handleOnchange} name='matKhau' className='form-control mt-2' type='password' placeholder='Mật khẩu' />
                        <div className='text-danger'>{login.fullFilled}</div>
                        <button
                            onClick={() => {
                                handelLogin()
                            }}
                            className='btn btn-block btn-primary mt-4'>Đăng nhập</button>
                           <div className='text-center mt-2'><span>Bạn không có tài khoản ? </span><Link to='/sign-in'>Đăng ký</Link></div>
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
        addUserInfomation : (userInfo) => {
            const action = {
                type: 'ADD_USER_INFORMATION',
                payload: userInfo
            }
            dispatch(action)
        }
      
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(LoginPage);