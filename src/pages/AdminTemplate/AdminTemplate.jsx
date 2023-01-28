import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class AdminTemplate extends Component {
    render() {
        // console.log('admin here');
        return (
            <>
                <div className='d-flex'>
                    <div className='w-25 bg-dark mh-100' style={{height:"100vh",position:'fixed'}}>
                        <div className='text-center'>

                        <img src="https://i.pravatar.cc" alt="..." width={100} height={100} className='rounded-circle mt-2'/>
                        <h3 className='text-white'>Dashboard</h3>
                        </div>
                        <ul className='list-group'>
                            <li className='list-item p-2'>
                                <NavLink  className={({isActive})=> isActive ? 'bg-light text-dark nav-link':'nav-link'} to='/' >Trang chủ</NavLink>
                            </li>
                            <li className='list-item p-2'>
                                <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link':'nav-link'} to='/manage-user'>Quản trị người dùng</NavLink>
                            </li>
                            <li className='list-item p-2'>
                                <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link':'nav-link'} to='/film'>Quản lý phim</NavLink>
                            </li>
                            <li className='list-item p-2'>
                                <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link':'nav-link'} to='/addnew'>Thêm mới phim</NavLink>
                            </li>
                            <li className='list-item p-2'>
                                <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link':'nav-link'} to='/show-time'>Tạo lịch chiếu</NavLink>
                            </li>
                            <li className='list-item p-2'>
                                <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link':'nav-link'} to='/add-new-user'>Thêm người dùng</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                    <div className='w-75' style={{marginLeft:'25%'}}>
                        <Outlet/>
                    </div>
                </div>
            </>
        );
    }
}

export default AdminTemplate;