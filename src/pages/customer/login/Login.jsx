import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <form onClick={(event) => {
                event.preventDefault()
            }}
            className='container'
            >
                <div className='row justify-content-center'>
                    <div className="col-md-4 mt-5">
                        <h1>Đăng nhập</h1>
                        <input className = 'form-control mt-2' type='text' placeholder='Tài khoản'/>
                        <input className = 'form-control mt-2' type='password' placeholder='Mật khẩu'/>
                        <button className='btn btn-block btn-primary mt-2'>Đăng nhập</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Login;