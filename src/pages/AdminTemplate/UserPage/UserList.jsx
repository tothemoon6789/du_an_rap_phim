import React, { Component } from 'react';
import { apiDeleteUser, apiEditUser } from '../../../service/apiAdmin';
import { apiLogin } from '../../../service/apiHome';
import UserEdit from './UserEdit';

class UserList extends Component {
    render() {
        const { user, handleDelete, index, handleEditModal } = this.props
        return (
            <>
                <tr>
                    <td>{index + 1}</td>
                    <td>{user.hoTen}</td>
                    <td>{user.taiKhoan}</td>
                    <td>{user.matKhau}</td>

                    <td>{user.maLoaiNguoiDung}</td>
                    <td>{user.email}</td>
                    <td>{user.soDt} </td>
                    <td style={{width:'200px'}}>
                        <button
                            onClick={
                                () => {
                                    handleEditModal(user)
                                    

                                }
                            }
                            type="button" className="btn btn-primary " data-toggle="modal" data-target="#modelId">Sửa</button>
                        <button
                            onClick={() => {
                                this.handelOnclickDelete(user)
                                handleDelete(user.taiKhoan)
                            }}
                            type="button" className="btn btn-outline-primary">
                            Xoá
                        </button>
                    </td>
                </tr>
                {/* <UserEdit users = {user} /> */}

            </>

        );
    }
    handelOnclickDelete = (user) => {
        apiDeleteUser(user)
            .then((res) => {
                window.alert(`Xoá thành công tài khoản ${user.taiKhoan}!`)
            })
            .catch((error) => {
            })
    }
}

export default UserList;