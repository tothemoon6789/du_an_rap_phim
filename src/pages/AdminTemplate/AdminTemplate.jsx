import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Outlet, Link } from 'react-router-dom';
import LoginAdminPage from './LoginAdminPage/LoginAdminPage';

const AdminTemplate = (props) => {
    const { adminInfo } = props
    // console.log(adminInfo);
    return adminInfo.accessToken === '' ?
        <LoginAdminPage />
        :
        (<>
        <button className='btn-open-navbar'>Open</button>
            <div className='d-flex '>
                
                <div className='admin-left-navbar' style={{ height: "100vh", position: 'fixed' }}>
                    <div className='text-center'>
                        <button className='btn btn-primary btn-close'>Close</button>
                        <img src="./images/img_avatar.png" alt="..." width={100} height={100} className='rounded-circle mt-2' />
                        <h3 className='text-white'>Dashboard</h3>
                        <Link to='/'>HOME</Link>
                        <Link to='/user'>User</Link>
                    </div>
                    <ul className='list-group'>
                        <li className='list-item p-2'>
                            <NavLink className={({ isActive }) => isActive ? 'bg-light text-dark nav-link' : 'nav-link'} to='' >Trang chủ</NavLink>
                        </li>
                        <li className='list-item p-2'>
                            <NavLink className={({ isActive }) => isActive ? 'bg-light text-dark nav-link' : 'nav-link'} to='manage-user'>Quản trị người dùng</NavLink>
                        </li>
                        <li className='list-item p-2'>
                            <NavLink className={({ isActive }) => isActive ? 'bg-light text-dark nav-link' : 'nav-link'} to='film'>Quản lý phim</NavLink>
                        </li>
                        <li className='list-item p-2'>
                            <NavLink className={({ isActive }) => isActive ? 'bg-light text-dark nav-link' : 'nav-link'} to='addnew'>Thêm mới phim</NavLink>
                        </li>
                        <li className='list-item p-2'>
                            <NavLink className={({ isActive }) => isActive ? 'bg-light text-dark nav-link' : 'nav-link'} to='show-time'>Tạo lịch chiếu</NavLink>
                        </li>
                        <li className='list-item p-2'>
                            <NavLink className={({ isActive }) => isActive ? 'bg-light text-dark nav-link' : 'nav-link'} to='add-new-user'>Thêm người dùng</NavLink>
                        </li>

                    </ul>
                </div>
                <div className='admin-right-content'>
                    <Outlet />
                </div>
            </div>
            <script>
                {

                    window.document.querySelector('.btn-open-navbar').addEventListener('click', () => {
                        window.document.querySelector('.admin-left-navbar').className = 'HELLO WOLRD'
                    })
                }
            </script>
        </>
        );
}
const mapStateToProp = (state) => {
    return {
        adminInfo: state.adminReducer,
    }
}
export default connect(mapStateToProp, null)(AdminTemplate);