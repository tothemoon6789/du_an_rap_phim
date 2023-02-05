import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { apiSingIn } from '../../../service/apiAdmin';

const AddNewUserPage = () => {
    const navigate = useNavigate()
    const [singIn, setSingIn] = useState({
        taiKhoan: '',
        matKhau: "",
        nhapLaiMatKhau: '',
        email: "",
        soDt: "",
        maNhom: "GP05",
        hoTen: "",
        maLoaiNguoiDung: 'KhachHang'
    })
    const [error, setError] = useState({
        taiKhoan: '',
        matKhau: '',
        nhapLaiMatKhau: '',
        email: "",
        soDt: "",
        hoTen: ""
    })
    const [valid, setValid] = useState({
        taiKhoanValid: false,
        matKhauValid: false,
        nhapLaiMatKhauValid: false,
        emailValid: false,
        soDtValid: false,
        hoTenValid: false,
    })
    const [onPage, setOnPage] = useState({
        fullFilled: '',
        spiner: false,
        theme: 'darkTheme'
    })


    const handleOnChange = (event) => {
        const { name, value } = event.target
        setSingIn({
            ...singIn,
            [name]: value,

        })
    }
    const handleOnError = (event) => { //! onBlur
        const { name, value } = event.target
        let mess = value.trim() === '' ? "* Không được để trống!" : ''
        let { taiKhoanValid, matKhauValid, emailValid, soDtValid, hoTenValid, nhapLaiMatKhauValid } = valid
        let { matKhau, nhapLaiMatKhau } = singIn
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
        setError({
            ...error,
            [name]: mess
        })
        setValid({
            ...valid,
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
        const { taiKhoanValid, matKhauValid, emailValid, soDtValid, hoTenValid, nhapLaiMatKhauValid } = valid
        
        if (taiKhoanValid && matKhauValid && emailValid && soDtValid && hoTenValid && nhapLaiMatKhauValid) {
            setOnPage({
                ...onPage,
                fullFilled: '',
                spiner: true,
            })
            const { taiKhoan, matKhau, email, soDt, maNhom, hoTen, maLoaiNguoiDung } = singIn

            const data = {
                taiKhoan,
                matKhau,
                email,
                soDt,
                maNhom,
                hoTen,
                maLoaiNguoiDung,
            }
          
            apiSingIn(data)
                .then((res) => {
                    setOnPage({
                        ...onPage,
                        spiner: false,
                    })
                    navigate('/admin/manage-user', {replace:true});
                    alert('Đăng ký thành công!')
                })
                .catch((error) => {
                    setOnPage({
                        ...onPage,
                        spiner: true,
                    })
                })

        } else {
            setOnPage({
                ...onPage,
                fullFilled: '* Vui lòng nhập liệu',
            })
        }
    }


    return (
        <div className='container p-3' style={{marginTop:'50px'}}>
            <form onSubmit={handelOnSubmit}>
                <div className="row form-group justify-content-center">
                    <div className="col-md-4 py-4 my-2 border rounded shadow">
                        <h1 className='mb-3'>Đăng ký</h1>
                        <input name='taiKhoan' onChange={handleOnChange} onBlur={handleOnError} className='form-control bg-dark text-white mt-2' placeholder="Tài khoản" type="text" />
                        <div className='text-danger'>{error.taiKhoan}</div>
                        <input name='matKhau' onChange={handleOnChange} onBlur={handleOnError} className='form-control bg-dark text-white mt-2' placeholder="Mật khẩu" type="password" />
                        <div className='text-danger'>{error.matKhau}</div>
                        <input name='nhapLaiMatKhau' onChange={handleOnChange} onBlur={handleOnError} className='form-control bg-dark text-white mt-2' placeholder="Nhập lại mật khẩu" type="password" />
                        <div className='text-danger'>{error.nhapLaiMatKhau}</div>
                        <input name='email' onChange={handleOnChange} onBlur={handleOnError} className='form-control bg-dark text-white mt-2' placeholder="Email" type="email" />
                        <div className='text-danger'>{error.email}</div>
                        <input name='soDt' onChange={handleOnChange} onBlur={handleOnError} className='form-control bg-dark text-white mt-2' placeholder="Số điện thoại" type="number" />
                        <div className='text-danger'>{error.soDt}</div>
                        <input name='hoTen' onChange={handleOnChange} onBlur={handleOnError} className='form-control bg-dark text-white mt-2' placeholder="Họ tên" type="text" />
                        <div className='text-danger'>{error.hoTen}</div>
                        <select
                            onChange={(e) => {
                                setSingIn({
                                    ...singIn,
                                    maLoaiNguoiDung: e.target.value,
                                })
                            }}
                            className="form-control bg-dark text-white mt-2">
                            <option value="KhachHang">Khách hàng</option>
                            <option value='QuanTri'>Quản trị</option>
                        </select>

                        <div className="text-danger">{onPage.fullFilled}</div>
                        <div className='d-flex justify-content-end mt-5'>

                            <button type='submit' className="btn btn-primary ml-2">Đăng ký
                            </button>
                           
                        </div>
                        {onPage.spiner ?
                            <div className="d-flex justify-content-center">
                                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>


                            </div> : ''
                        }
                    </div>

                </div>
            </form>
        </div>
    );


}

export default AddNewUserPage;