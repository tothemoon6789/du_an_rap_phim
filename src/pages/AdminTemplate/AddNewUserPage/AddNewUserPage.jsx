import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { apiLogin } from '../../../service/apiLogin';
import { apiSingIn } from '../../../service/apiSingIn';

class AddNewUserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singIn: {
                taiKhoan: '',
                matKhau: "",
                nhapLaiMatKhau: '',
                email: "",
                soDt: "",
                maNhom: "GP05",
                hoTen: "",
                maLoaiNguoiDung: 'KhachHang'
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

        }
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handelOnSubmit}>
                    <div className="row form-group justify-content-center">
                        <div className="col-md-4 py-4 my-2 border rounded shadow">
                            <h1 className='mb-3'>Đăng ký</h1>
                            <input name='taiKhoan' onChange={this.handleOnChange} onBlur={this.handleOnError} className='form-control mt-2' placeholder="Tài khoản" type="text" />
                            <div className='text-danger'>{this.state.error.taiKhoan}</div>
                            <input name='matKhau' onChange={this.handleOnChange} onBlur={this.handleOnError} className='form-control mt-2' placeholder="Mật khẩu" type="password" />
                            <div className='text-danger'>{this.state.error.matKhau}</div>
                            <input name='nhapLaiMatKhau' onChange={this.handleOnChange} onBlur={this.handleOnError} className='form-control mt-2' placeholder="Nhập lại mật khẩu" type="password" />
                            <div className='text-danger'>{this.state.error.nhapLaiMatKhau}</div>
                            <input name='email' onChange={this.handleOnChange} onBlur={this.handleOnError} className='form-control mt-2' placeholder="Email" type="email" />
                            <div className='text-danger'>{this.state.error.email}</div>
                            <input name='soDt' onChange={this.handleOnChange} onBlur={this.handleOnError} className='form-control mt-2' placeholder="Số điện thoại" type="number" />
                            <div className='text-danger'>{this.state.error.soDt}</div>
                            <input name='hoTen' onChange={this.handleOnChange} onBlur={this.handleOnError} className='form-control mt-2' placeholder="Họ tên" type="text" />
                            <div className='text-danger'>{this.state.error.hoTen}</div>
                            <select 
                            onChange={(e) => {
                                this.setState({
                                    ...this.state,
                                    singIn: {
                                        ...this.state.singIn,
                                        maLoaiNguoiDung: e.target.value,
                                    }
                                },() => console.log(this.state))
                            }}
                            className="form-control mt-2">
                                <option value="KhachHang">Khách hàng</option>
                                <option value='QuanTri'>Quản trị</option>
                            </select>

                            <div className="text-danger">{this.state.fullFilled}</div>
                            <div className='d-flex justify-content-end mt-5'>

                                <NavLink to="/login" className="btn border">Đăng nhập</NavLink>
                                <button type='submit' className="btn btn-primary ml-2">Đăng ký


                                </button>
                                {/* <input type='submit' className="btn btn-primary ml-2" value="Đăng ký" /> */}
                            </div>
                            {this.state.spiner ?
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
    handleOnChange = (event) => {
        const { name, value } = event.target
        this.setState({
            ...this.state,
            singIn: {
                ...this.state.singIn,

                [name]: value,
            }

        })

    }
    handleOnError = (event) => { //! onBlur
        const { name, value } = event.target
        let mess = value.trim() === '' ? "* Không được để trống!" : ''
        let { taiKhoanValid, matKhauValid, emailValid, soDtValid, hoTenValid, nhapLaiMatKhauValid } = this.state
        let { matKhau, nhapLaiMatKhau } = this.state.singIn
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
        this.setState({
            ...this.state,
            error: {
                ...this.state.error,
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
    handelOnSubmit = (event) => {
        event.preventDefault()
        const { taiKhoanValid, matKhauValid, emailValid, soDtValid, hoTenValid, nhapLaiMatKhauValid } = this.state
        if (taiKhoanValid && matKhauValid && emailValid && soDtValid && hoTenValid && nhapLaiMatKhauValid) {
            this.setState({
                ...this.state,
                fullFilled: '',
                spiner: true,
            })
                const { taiKhoan, matKhau, email, soDt, maNhom, hoTen,maLoaiNguoiDung  } = this.state.singIn

            const data = {
                taiKhoan,
                matKhau,
                email,
                soDt,
                maNhom,
                hoTen,
                maLoaiNguoiDung,
            }
            // console.log(data);
            apiSingIn(data)
                .then((res) => {
                    console.log(res);
                    this.setState({
                        ...this.state,
                        spiner: false,
                    })

                })
                .catch((error) => {
                    console.log(error);
                    this.setState({
                        ...this.state,
                        spiner: true,
                    })
                })

        } else {
            this.setState({
                ...this.state,
                fullFilled: '* Vui lòng nhập liệu',
            })
        }
    }


}

export default AddNewUserPage;