import React, { Component } from 'react';

class AddNewUserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: '',
            hoTen: '',
            maLoaiNguoiDung: 'KhachHang',
        }
    }
    render() {
        
        return (
            <>
                <div className="container">
                    <h1 className='mt-3'> Thêm người dùng</h1>
                    <div className='row'>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Tài khoản</label>
                                <input
                                onChange={this.handleOnchange}
                                name='taiKhoan' className='form-control' type='text' placeholder='Tài khoản' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Mật khẩu</label>
                                <input
                                onChange={this.handleOnchange}
                                name='matKhau' type="password" className="form-control" placeholder='Mật khẩu' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Họ tên</label>
                                <input
                                onChange={this.handleOnchange}
                                name='hoTen' type="text" className="form-control" placeholder="Họ tên" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input
                                onChange={this.handleOnchange}
                                name='email' type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Số điện thoại</label>
                                <input
                                onChange={this.handleOnchange}
                                name='soDt' type="tel" className="form-control" placeholder="Số điện thoại" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Loại người dùng</label>
                                <select
                                onChange={this.handleOnchange}
                                name='maLoaiNguoiDung' className='form-control'>
                                    <option value="KhachHang">Khách hàng</option>
                                    <option value="QuanTri">Quản trị</option>
                                </select>
                            </div>
                            <button className="btn btn-primary">Thêm</button>
                        </div>

                    </div>
                </div>
            </>
        );
    }
    handleOnchange = (event) => {
        const {name,value} = event.target
        this.setState({
            ...this.state,
        [name]:value,
        }, () => console.log(this.state))
    }
}

export default AddNewUserPage;