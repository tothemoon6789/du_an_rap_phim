import React, { Component } from 'react';
import Row from './Row';
import { NavLink } from 'react-router-dom';

class SingIngPage extends Component {
    render() {
        return (
            <div className='container'>
                <form onSubmit={(event) => event.preventDefault()}>
                    <div className="row form-group justify-content-center">
                        <div className="col-md-4 py-4 my-2 border rounded shadow">
                            <h1 className='mb-3'>Đăng ký</h1>
                            <input className='form-control mt-2' placeholder="Tài khoản" type="text" />
                            <input className='form-control mt-2' placeholder="Mật khẩu" type="password" />
                            <input className='form-control mt-2' placeholder="Nhập lại mật khẩu" type="password" />
                            <input className='form-control mt-2' placeholder="Họ tên" type="text" />
                            <input className='form-control mt-2' placeholder="Email" type="email" />
                            <input className='form-control mt-2' placeholder="Số điện thoại" type="number" />
                            <div className='d-flex justify-content-end mt-5'>

                                <NavLink to="/login" className="btn border">Đăng nhập</NavLink>
                                <input disabled type='submit' className="btn btn-primary ml-2" value="Đăng ký" />
                            </div>


                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SingIngPage;