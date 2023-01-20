import React, { Component } from 'react';
import Row from './Row';
import { NavLink } from 'react-router-dom';

class SignIn extends Component {
    render() {
        return (
            <div className='container'>
                <form onSubmit={(event) => event.preventDefault()}>
                    <div className="row form-group justify-content-center">
                        <div className="col-md-4">
                            <h1>Đăng ký</h1>
                            <input className='form-control mt-2' placeholder="Tài khoản" type="text" />
                            <input className='form-control mt-2' placeholder="Mật khẩu" type="password" />
                            <input className='form-control mt-2' placeholder="Nhập lại mật khẩu" type="password" />
                            <input className='form-control mt-2' placeholder="Họ tên" type="text" />
                            <input className='form-control mt-2' placeholder="Email" type="email" />
                            <input className='form-control mt-2' placeholder="Số điện thoại" type="text" />
                            <div className='d-flex justify-content-end mt-2'>

                                <input type='submit' className="btn btn-primary" value="Đăng ký" />
                                <NavLink to="/login" className="btn btn-danger">NAVLINK</NavLink>
                            </div>


                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;