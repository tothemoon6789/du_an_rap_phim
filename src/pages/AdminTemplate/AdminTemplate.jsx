import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, Outlet, Link, useFetcher } from 'react-router-dom';
import LoginAdminPage from './LoginAdminPage/LoginAdminPage';

const AdminTemplate = (props) => {
    const { adminInfo, logOut } = props
    const [showNavBar, setShowNavBar] = useState('admin-left-navbar')
    const [btnClose, setBtnClose] = useState('inline-block')
    const [btnCloseOnTop, setBtnCloseOnTop] = useState(true)


    const [width, setWidth] = useState(0)
    const handleOnResize = (e) => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleOnResize);
        return () => {
            window.removeEventListener('resize', handleOnResize)
        }
    }, [])
    useEffect(() => {
        if (width > 768) {
            setShowNavBar('admin-left-navbar')
            setBtnClose('none')
            setBtnCloseOnTop(false)
        } else {
            setBtnClose('inline-block')
            setBtnCloseOnTop(true)
        }
    }, [width])






    useEffect(() => {
        if (window.innerWidth > 768) {
            setShowNavBar('admin-left-navbar')
            setBtnClose('none')
            setBtnCloseOnTop(false)
        } else {
            setBtnClose('inline-block')
            setBtnCloseOnTop(true)
        }
    }, [])

    return adminInfo.accessToken === '' ?
        <LoginAdminPage />
        :
        (<>

            <div className="wrap-admin" style={{ background: '#121212', color: 'white', minHeight: '100vh' }}>
                <div className={showNavBar} style={
                    {
                        height: "100vh",
                        position: 'fixed',
                        border: '1px solid rgba(255,255,255,0.2)',
                    }
                }>
                    <div className='text-center p-3'>
                        <button
                            style={{ display: btnClose }}
                            onClick={() => {
                                setShowNavBar('admin-left-navbar-hide')
                            }}
                            className='btn btn-danger btn-close'>x</button>
                        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="..." width={100} height={100} className='rounded-circle mt-2' />
                        <h3 className='text-white'>Admin</h3>
                        <Link to='/user'><button className='btn btn-outline-primary'>NGƯỜI DÙNG</button></Link>
                        <Link to='/'><button className='btn btn-primary ml-2'>TRANG CHỦ</button></Link>
                    </div>
                    <ul className='list-group'>
                        <li className='list-item p-2'>
                            <NavLink end className={({ isActive }) => isActive ? 'bg-primary text-light nav-link text-white' : 'nav-link text-white'} to=''><i className="fa-solid fa-film"></i>   Quản lý phim</NavLink>
                        </li>
                        <li className='list-item p-2'>
                            <NavLink className={({ isActive }) => isActive ? 'bg-primary text-light nav-link text-white' : 'nav-link text-white'} to='manage-user'><i className="fa-solid fa-user"></i>   Quản trị người dùng</NavLink>
                        </li>
                        <li className='list-item p-2'>
                            <NavLink className={({ isActive }) => isActive ? 'bg-primary text-light nav-link text-white' : 'nav-link text-white'} to='addnew'><i className="fa-solid fa-plus"></i>   Thêm mới phim</NavLink>
                        </li>
                        <li className='list-item p-2'>
                            <NavLink className={({ isActive }) => isActive ? 'bg-primary text-light nav-link text-white' : 'nav-link text-white'} to='show-time'> <i className="fa-solid fa-eye"></i>   Tạo lịch chiếu</NavLink>
                        </li>
                        <li className='list-item p-2'>
                            <NavLink className={({ isActive }) => isActive ? 'bg-primary text-light nav-link text-white' : 'nav-link text-white'} to='add-new-user'><i className="fa-solid fa-address-book"></i>   Thêm người dùng</NavLink>
                        </li>


                    </ul>
                    <div className='d-flex justify-content-end p-3'><button
                    onClick={() => {
                        logOut()
                    }}
                    className='btn'><i className="fa-solid fa-right-from-bracket" style={{ fontSize: '30px' }}></i></button></div>
                </div>
                <div className='admin-right-content'>
                    <div className='fixed-top d-flex justify-content-between align-items-center'
                        style={{
                            padding: '10px',
                            height: '50px',
                            borderLeft: 'none',
                            border: '1px solid rgba(255,255,255,0.2)',
                            background: '#121212'
                        }}

                    >

                        <button
                            style={{ display: btnCloseOnTop ? 'inline-block' : 'none' }}
                            onClick={() => {
                                setShowNavBar('admin-left-navbar-show')

                            }}
                            className='btn btn-primary'
                        >MENU</button>

                    </div>

                    <Outlet />
                </div>
            </div>
        </>
        );
}
const mapStateToProp = (state) => {
    return {
        adminInfo: state.adminReducer,
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        logOut : () => {
            const action = {
                type: 'LOG_OUT'
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(AdminTemplate);