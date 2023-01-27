import React, { Component } from 'react';

class UserList extends Component {
    render() {
        const {user} = this.props
        return (
            
                <tr>
                        <td>1</td>
                        <td>{user.taiKhoan}</td>
                        <td>{user.matKhau}</td>
                        <td>{user.hoTen}</td>
                        <td>{user.email}</td>
                        <td>{user.soDt}</td>
                        <td>
                            <button type="button" className="btn btn-primary">Sửa</button>
                            <button type="button" className="btn btn-outline-primary">Xoá</button>
                        </td>
                    </tr>
            
        );
    }
}

export default UserList;