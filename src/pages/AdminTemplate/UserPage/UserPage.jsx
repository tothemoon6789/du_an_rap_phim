import axios from 'axios';
import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import UserList from './UserList';
import UserEdit from './UserEdit';

const UserPage = () => {
    const [state, setState] = useState({
        loading: false,
        data: null,
        error: null,
        currentPage: 1,
        dataSearch: [],
        searhKey: '',
        random: 0,
    })
    const [user, setUser] = useState({})
    useEffect(() => {
        const { currentPage } = state
        setState({
            ...state,
            loading: true,
            data: null,
            error: null,
        })
        axios({
            url: `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP05&soTrang=${currentPage}&soPhanTuTrenTrang=20`,
            method: 'GET',
            headers: {
                TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c',
            },
            timeout: 40000,
        })
            .then((res) => {
                setState({
                    ...state,
                    loading: false,
                    data: res.data.content.items,
                    dataSearch: res.data.content.items,
                    error: null,
                })
            })

            .catch((error) => {
                setState({
                    ...state,
                    loading: true,
                    data: null,
                    error: error,
                })
            })
    }, [])
    useEffect(() => {
            setState({
                ...state,
                loading: true,
            })
            axios({
                url: `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP05&soTrang=${state.currentPage}&soPhanTuTrenTrang=20`,
                method: 'GET',
                headers: {
                    TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c',
                },
                timeout: 40000,
            })

                .then((res) => {
                    setState({
                        ...state,
                        loading: false,
                        data: res.data.content.items,
                        dataSearch: res.data.content.items,
                        error: null,
                    })
                })
                .catch((error) => {
                    setState({
                        ...state,
                        loading: true,
                        data: null,
                        error: error,
                    })
                })
        
    },[state.currentPage, state.random])
    const handleEditModal = (user) => {
        setUser({
            ...user,
        })
    }
    
    const renderUserList = () => {
        const { dataSearch } = state
        if (dataSearch) {
            return dataSearch.map((user, index) => {
                return <UserList key={user.taiKhoan} user={user} handleDelete = {handleClearUser} index = {index} handleEditModal ={handleEditModal}/>
            })
        }
    }
   
    const handleClearUser = (taiKhoan) => {
        if (state.data) {
            const filterData = state.data.filter((user) => {
                return user.taiKhoan !== taiKhoan
            })
            setState({
                ...state,
                data: filterData,
                dataSearch: filterData,
            })
        }
    }
    const handelOnChange = (event) => {
        if (state.data) {

            const cloneData = [...state.data]
            const searchKey = event.target.value;
            const resultSearch = cloneData.filter((user) => {
                return user.hoTen.toLowerCase().search(searchKey.toLowerCase()) !== -1
            })
            setState({
                ...state,
                dataSearch: resultSearch,
            })
        }
    }
    const handleResetState = () => {
        setState({
            ...state,
            random: new Date().getMilliseconds(),
        })
    }
   
    const { currentPage } = state
    return (
        <div className='p-3' style={{marginTop:'50px'}}>
            <h1>Quản trị người dùng</h1>
            <div className="form-group">
                <input
                    onChange={
                        handelOnChange

                    }
                    type="text" className="form-control bg-dark text-white" placeholder='Nhập tên người dùng' />
            </div>
            <table className="table text-white">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Tài khoản</th>
                        <th>Mật khẩu</th>
                        <th>Phân loại</th>
                       
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUserList()}
                </tbody>
            </table>

            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a
                        onClick={(event) => {
                            event.preventDefault()
                            if (currentPage !== 1) {
                                setState({
                                    ...state,
                                    currentPage: currentPage - 1,
                                })
                            }

                        }}
                        className="page-link" href=''>Previous</a></li>
                    <li className="page-item"><a
                        onClick={(event) => {
                            event.preventDefault()
                            setState({
                                ...state,
                                currentPage: 1,
                            })

                        }}
                        className="page-link" href="">1</a></li>
                    <li className="page-item"><a
                        onClick={(event) => {
                            event.preventDefault()
                            setState({
                                ...state,
                                currentPage: 2,
                            })

                        }}
                        className="page-link" href="">2</a></li>
                    <li className="page-item"><a
                        onClick={(event) => {
                            event.preventDefault()
                            setState({
                                ...state,
                                currentPage: 3,
                            })

                        }}
                        className="page-link" href="">3</a></li>
                    <li className="page-item"><a
                        onClick={(event) => {
                            event.preventDefault()
                            setState({
                                ...state,
                                currentPage: state.currentPage + 1,
                            })

                        }}
                        className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            <UserEdit users = {user} handleResetState={handleResetState}/>
        </div>
        

    );




}


export default UserPage;