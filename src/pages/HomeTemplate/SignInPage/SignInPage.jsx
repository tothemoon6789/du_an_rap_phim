import React, { Component } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Spiner from '../../../components/Loading/Spiner';
import { apiSingIn } from '../../../service/apiAdmin';

const SingIngPage = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        singIn: {
            taiKhoan: '',
            matKhau: "",
            nhapLaiMatKhau: '',
            email: "",
            soDt: "",
            maNhom: "GP05",
            hoTen: "",
            maLoaiNguoiDung: 'KhachHang',
        },
        error: {
            taiKhoan: '',
            matKhau: '',
            nhapLaiMatKhau: '',
            email: "",
            soDt: "",
            hoTen: ""
        },
        taiKhoanValid: false,
        matKhauValid: false,
        nhapLaiMatKhauValid: false,
        emailValid: false,
        soDtValid: false,
        hoTenValid: false,

        fullFilled: '',
        spiner: false,
        theme: 'darkTheme'

    })
    const handleOnChange = (event) => {
        const { name, value } = event.target
        setState({
            ...state,
            singIn: {
                ...state.singIn,
                [name]: value,
            }

        })

    }
    const handleOnError = (event) => { //! onBlur
        const { name, value } = event.target
        let mess = value.trim() === '' ? "* Không được để trống!" : ''
        let { taiKhoanValid, matKhauValid, emailValid, soDtValid, hoTenValid, nhapLaiMatKhauValid } = state
        let { matKhau, nhapLaiMatKhau } = state.singIn
        switch (name) {
            case 'taiKhoan':
                taiKhoanValid = mess === '' ? true : false
                const regexUsername = /^[a-zA-Z0-9]{6,}$/
                if (value && !regexUsername.test(value)) {
                    mess = '* Vui lòng nhập 6 ký tự trở lên, không bao gồm ký tự đặc biệt!'
                }
                break;
            case 'matKhau':
                matKhauValid = mess === '' ? true : false
                const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
                if (value && !regex.test(value)) {
                    mess = '* Vui lòng nhập 6 ký tự trở lên, bao gồm ít nhất 1 in hoa, 1 in thường'
                }
                break;
            case 'nhapLaiMatKhau':
                nhapLaiMatKhauValid = mess === '' ? true : false
                if (value && matKhau && matKhau !== nhapLaiMatKhau) {
                    mess = '* Mật khẩu không trùng!'
                }
                break;
            case 'email':
                emailValid = mess === '' ? true : false
                const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (value && !regexEmail.test(value)) {
                    mess = '* Email không hợp lệ!'
                }
                break;
            case 'soDt':
                soDtValid = mess === '' ? true : false
                const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
                if (value && !regexPhone.test(value)) {
                    mess = '* Số điện thoại không hợp lệ!'
                }
                break;
            case 'hoTen':
                hoTenValid = mess === '' ? true : false
                const regexName = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/
                if (value && !regexName.test(value)) {
                    mess = '* Tên không hợp lệ!'
                }
                break;
            default:

                break;
        }
        setState({
            ...state,
            error: {
                ...state.error,
                [name]: mess
            },
            taiKhoanValid,
            matKhauValid,
            nhapLaiMatKhauValid,
            emailValid,
            soDtValid,
            hoTenValid,
        })
    }
    const handelOnSubmit = (event) => {


        event.preventDefault()
        setState({
            ...state,
            spiner: true,
        })
        const { taiKhoanValid, matKhauValid, emailValid, soDtValid, hoTenValid, nhapLaiMatKhauValid } = state
        if (taiKhoanValid && matKhauValid && emailValid && soDtValid && hoTenValid && nhapLaiMatKhauValid) {
            setState({
                ...state,
                fullFilled: '',
                spiner: true,
            })
            const { taiKhoan, matKhau, email, soDt, maNhom, hoTen, maLoaiNguoiDung } = state.singIn

            const data = {
                taiKhoan,
                matKhau,
                email,
                soDt,
                maNhom,
                hoTen,
                maLoaiNguoiDung
            }
            // console.log(data);
            // return
            apiSingIn(data)
                .then((res) => {
                    console.log(res);
                    setState({
                        ...state,
                        spiner: false,
                    })
                    navigate('/login')
                    window.alert('Đăng ký thành công !')

                })
                .catch((error) => {
                    console.log(error);
                    setState({
                        ...state,
                        spiner: true,
                    })
                    window.alert('Đăng ký thất bại!')
                })

        } else {
            setState({
                ...state,
                fullFilled: '* Vui lòng nhập liệu',
            })
        }
    }


    return (
        <div className='container'>
            <form onSubmit={handelOnSubmit}>
                <div className="row form-group justify-content-center">
                    <div className="col-md-4 py-4 my-2 border rounded shadow">
                        <h1 className='mb-3'>Đăng ký</h1>
                        <input name='taiKhoan' onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="Tài khoản" type="text" />
                        <div className='text-danger'>{state.error.taiKhoan}</div>
                        <input name='matKhau' onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="Mật khẩu" type="password" />
                        <div className='text-danger'>{state.error.matKhau}</div>
                        <input name='nhapLaiMatKhau' onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="Nhập lại mật khẩu" type="password" />
                        <div className='text-danger'>{state.error.nhapLaiMatKhau}</div>
                        <input name='email' onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="Email" type="email" />
                        <div className='text-danger'>{state.error.email}</div>
                        <input name='soDt' onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="Số điện thoại" type="number" />
                        <div className='text-danger'>{state.error.soDt}</div>
                        <input name='hoTen' onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="Họ tên" type="text" />
                        <div className='text-danger'>{state.error.hoTen}</div>
                        <div className="text-danger">{state.fullFilled}</div>
                        <div className='d-flex justify-content-end mt-5'>

                            <NavLink to="/login" className="btn btn-outline-primary">Đăng nhập</NavLink>
                            <button type='submit' className="btn btn-primary ml-2">Đăng ký


                            </button>
                            {/* <input type='submit' className="btn btn-primary ml-2" value="Đăng ký" /> */}
                        </div>
                        {state.spiner ?
                            <Spiner />
                            : ''
                        }
                    </div>

                </div>
            </form>
        </div>
    );

}

export default SingIngPage;