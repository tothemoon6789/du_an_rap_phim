import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <form onClick={(event) => {
                event.preventDefault()
            }}
            className='container'
            >
                <div className='row justify-content-center '>
                    <div className="col-md-4 mt-5 border rounded py-5 mb-5 shadow">
                        <h1 className='mb-4'>Đăng nhập</h1>
                        <input className = 'form-control mt-2' type='text' placeholder='Tài khoản'/>
                        <input className = 'form-control mt-2' type='password' placeholder='Mật khẩu'/>
                        <button disabled className='btn btn-block btn-primary mt-4'>Đăng nhập</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default LoginPage;