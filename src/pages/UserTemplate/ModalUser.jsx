import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { apiUpdateUser, apiUserAccount, apiUserInfo } from '../../service/apiUser';


const ModalUser = (props) => {
    const { userInfo, refModal,addUserInfomation } = props

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
        theme: 'darkTheme',

        
        


    })
    useEffect(() => {
        apiUserAccount(userInfo.taiKhoan)
            .then((res) => {
                const info = res.data.content;

                setState({
                    ...state,
                    singIn: {
                        ...state.singIn,
                        taiKhoan: info.taiKhoan,
                        matKhau: info.matKhau,
                        nhapLaiMatKhau: info.matKhau,
                        email: info.email,
                        soDt: info.soDT,
                        maNhom: "GP05",
                        hoTen: info.hoTen,
                    },
                    fullFilled: '',
                    taiKhoanValid: true,
                    matKhauValid: true,
                    nhapLaiMatKhauValid: true,
                    emailValid: true,
                    soDtValid: true,
                    hoTenValid: true,
                    spiner: false,
                })

            })
            .catch((error) => {
            })

    }, [])
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
        let mess = value.trim() === '' ? "* Kh??ng ???????c ????? tr???ng!" : ''
        let { taiKhoanValid, matKhauValid, emailValid, soDtValid, hoTenValid, nhapLaiMatKhauValid } = state
        let { matKhau, nhapLaiMatKhau } = state.singIn
        switch (name) {
            case 'taiKhoan':
                taiKhoanValid = mess === '' ? true : false
                const regexUsername = /^[a-zA-Z0-9]{6,}$/
                if (value && !regexUsername.test(value)) {
                    mess = '* Vui l??ng nh???p 6 k?? t??? tr??? l??n, kh??ng bao g???m k?? t??? ?????c bi???t!'
                }
                break;
            case 'matKhau':
                matKhauValid = mess === '' ? true : false
                const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
                if (value && !regex.test(value)) {
                    mess = '* Vui l??ng nh???p 6 k?? t??? tr??? l??n, bao g???m ??t nh???t 1 in hoa, 1 in th?????ng'
                }
                break;
            case 'nhapLaiMatKhau':
                nhapLaiMatKhauValid = mess === '' ? true : false
                if (value && matKhau && matKhau !== nhapLaiMatKhau) {
                    mess = '* M???t kh???u kh??ng tr??ng!'
                }
                break;
            case 'email':
                emailValid = mess === '' ? true : false
                const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (value && !regexEmail.test(value)) {
                    mess = '* Email kh??ng h???p l???!'
                }
                break;
            case 'soDt':
                soDtValid = mess === '' ? true : false
                const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
                if (value && !regexPhone.test(value)) {
                    mess = '* S??? ??i???n tho???i kh??ng h???p l???!'
                }
                break;
            case 'hoTen':
                hoTenValid = mess === '' ? true : false
                const regexName = /^[a-zA-Z_????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\s]+$/
                if (value && !regexName.test(value)) {
                    mess = '* T??n kh??ng h???p l???!'
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
                maLoaiNguoiDung,
            }
            apiUpdateUser(data)
                .then((res) => {
                    
                    refModal.current.click()
                    addUserInfomation(res.data.content)
                    setState({
                        ...state,
                        spiner: false,
                    })
                    window.alert('C???p nh???t th??nh c??ng!')
                    apiUserInfo(props.accessToken)
                    .then((res) => {
                        props.addUserInfomation(res.data.content)
                    })
                    .catch((error) => {
                    })

                })
                .catch((error) => {
                    setState({
                        ...state,
                        spiner: true,
                    })
                  
                })

        } else {
            setState({
                ...state,
                fullFilled: '* Vui l??ng nh???p li???u',
            })
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handelOnSubmit}>
                {/* <div className="row form-group justify-content-center">
                    <div className="col-md-4 py-4 my-2 border rounded shadow"> */}
                        <input name='taiKhoan' disabled value={state.singIn.taiKhoan} onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="T??i kho???n" type="text" />
                        <div className='text-danger'>{state.error.taiKhoan}</div>
                        <input disabled={state.spiner} name='matKhau' value={state.singIn.matKhau} onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="M???t kh???u" type="password" />
                        <div className='text-danger'>{state.error.matKhau}</div>
                        <input disabled={state.spiner} name='nhapLaiMatKhau' value={state.singIn.nhapLaiMatKhau} onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="Nh???p l???i m???t kh???u" type="password" />
                        <div className='text-danger'>{state.error.nhapLaiMatKhau}</div>
                        <input disabled={state.spiner} name='email' value={state.singIn.email} onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="Email" type="email" />
                        <div className='text-danger'>{state.error.email}</div>
                        <input disabled={state.spiner} name='soDt' value={state.singIn.soDt} onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="S??? ??i???n tho???i" type="number" />
                        <div className='text-danger'>{state.error.soDt}</div>
                        <input disabled={state.spiner} name='hoTen' value={state.singIn.hoTen} onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="H??? t??n" type="text" />
                        <div className='text-danger'>{state.error.hoTen}</div>
                        <div className="text-danger">{state.fullFilled}</div>
                        <div className='d-flex justify-content-end mt-5'>

                            {/* <NavLink to="/login" className="btn border">????ng nh???p</NavLink> */}
                            <button type='submit' className="btn btn-primary ml-2">L??u


                            </button>
                            {/* <input type='submit' className="btn btn-primary ml-2" value="????ng k??" /> */}
                        </div>
                        {state.spiner ?
                            <div className="d-flex justify-content-center">
                                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>


                            </div> : ''
                        }
                    {/* </div>

                </div> */}
            </form>
        </div>
    );
}

const mapStateToProp = (state) => {
    return {
        accessToken: state.userReducer.accessToken,
        userInfo: state.userReducer.userInfo,
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        addUserInfomation: (userInfo) => {
            const action = {
                type: 'ADD_USER_INFORMATION',
                payload: userInfo
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(ModalUser);