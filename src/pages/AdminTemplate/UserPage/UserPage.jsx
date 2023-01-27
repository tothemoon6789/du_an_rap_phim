// import axios from 'axios';
import React, { Component } from 'react';
import { apiUser, apiUserOnPage } from '../../../service/apiUser';
import UserList from './UserList';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: null,
            error: null,
            currentPage: 1,
        }
    }

    render() {
        const { currentPage } = this.state
        return (
            <div className='p-5'>
                <h1>Thêm người dùng</h1>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder='Nhập tên người dùng' />
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tài khoản</th>
                            <th>Mật khẩu</th>
                            <th>Họ tên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUserList()}
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item"><a
                            onClick={(event) => {
                                event.preventDefault()
                                if (currentPage !== 1) {
                                    this.setState({
                                        ...this.state,
                                        currentPage: currentPage - 1,
                                    })
                                }

                            }}
                            className="page-link" href=''>Previous</a></li>
                        <li className="page-item"><a
                            onClick={(event) => {
                                event.preventDefault()
                                this.setState({
                                    ...this.state,
                                    currentPage: 1,
                                })
    
                            }}
                            className="page-link" href="">1</a></li>
                        <li className="page-item"><a 
                        onClick={(event) => {
                            event.preventDefault()
                            this.setState({
                                ...this.state,
                                currentPage: 2,
                            })

                        }}
                        className="page-link" href="">2</a></li>
                        <li className="page-item"><a
                        onClick={(event) => {
                            event.preventDefault()
                            this.setState({
                                ...this.state,
                                currentPage: 3,
                            })

                        }}
                        className="page-link" href="">3</a></li>
                        <li className="page-item"><a
                        onClick={(event) => {
                            event.preventDefault()
                            this.setState({
                                ...this.state,
                                currentPage: this.state.currentPage + 1,
                            })

                        }}
                        className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>

        );
    }
    get
        componentDidMount() {
        const { currentPage } = this.state
        this.setState({
            ...this.state,
            loading: true,
            data: null,
            error: null,
        })
        // apiUserOnPage


        //     .then((res) => {
        //         // console.log(res); 
        //         this.setState({
        //             ...this.state,
        //             loading: false,
        //             data: res.data.content.items,
        //             error: null,
        //         })
        //     })

        //     .catch((error) => {
        //         this.setState({
        //             ...this.state,
        //             loading: true,
        //             data: null,
        //             error: error,
        //         })
        //     })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentPage!==this.state.currentPage) {
            this.setState({
                ...this.state,
                loading: true,
            })
            // apiUser

            //     .then((res) => {
            //         // console.log(res); 
            //         this.setState({
            //             ...this.state,
            //             loading: false,
            //             data: res.data.content.items,
            //             error: null,
            //         })
            //     })
            //     .catch((error) => {
            //         this.setState({
            //             ...this.state,
            //             loading: true,
            //             data: null,
            //             error: error,
            //         })
            //     })
        }
    }
    renderUserList = () => {

        const { data, currentPage } = this.state
        if (data) {


            return data.map((user) => {
                return <UserList key={user.taiKhoan} user={user} />
            })
        }
    }
}

export default UserPage;