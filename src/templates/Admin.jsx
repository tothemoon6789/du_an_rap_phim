import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class Admin extends Component {
    render() {
        return (
            <>
                <div className='d-flex'>
                    <div className='w-25 bg-danger mh-100' style={{height:"100vh"}}>
                        <ul>
                            <li>
                                <NavLink to=''>ADMINHOME</NavLink>
                            </li>
                            <li>
                                <NavLink to='user'>User</NavLink>
                            </li>
                            <li>
                                <NavLink to='film'>Film</NavLink>
                            </li>
                            <li>
                                <NavLink to='addnew'>Add New</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='w-75'>
                        <Outlet/>
                    </div>
                </div>
            </>
        );
    }
}

export default Admin;