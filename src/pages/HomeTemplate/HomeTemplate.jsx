import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { changeDarkThemeAction } from '../../store/reducer/config/action';
import { parseJSON } from 'jquery';
class CustomerTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: null,
            error: null,
            theme: "lightTheme",
        }
    }
   
    render() {
        const { theme } = this.state
        return (
            <>
                <div
                    className={`${theme}`}
                >
                    <div className='container'>
                        <nav className="navbar navbar-expand-md">
                            <NavLink className="navbar-brand " to=""><i className="fa-solid fa-film" style={{ fontSize: "50px" }}></i><h1 className='ml-2 d-inline-block'>CINIMA</h1></NavLink>
                            <button
                                style={{ background: 'rgba(255,255,255,0.2)' }}
                                className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa-solid fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item active ml-3">
                                        <NavLink to="" className={({ isActive }) => isActive ? 'bg-primary text-white nav-link' : 'nav-link'} >Home</NavLink>
                                    </li>
                                    <li className="nav-item ml-3">
                                        <NavLink to="/detail" className={({ isActive }) => isActive ? 'bg-primary text-white nav-link' : 'nav-link'} >Detail</NavLink>
                                    </li>
                                    <li className="nav-item ml-3">
                                        <NavLink to="/booking" className={({ isActive }) => isActive ? 'bg-primary text-white nav-link' : 'nav-link'} >Booking</NavLink>
                                    </li>
                                    <li className="nav-item ml-3">
                                        <NavLink to="/showing" className={({ isActive }) => isActive ? 'bg-primary text-white nav-link' : 'nav-link'} >Phim đang chiếu</NavLink>
                                    </li>
                                    <li className="nav-item ml-3">
                                        <NavLink to="/comming-soon" className={({ isActive }) => isActive ? 'bg-primary text-white nav-link' : 'nav-link'} >Phim sắp chiếu</NavLink>
                                    </li>
                                </ul>
                                <button
                                    onClick={this.handleDarkTheme}>
                                    <i className="fa-solid fa-sun" ></i>

                                </button>
                                <button className='btn btn-default'><NavLink to="/sign-in">Đăng ký</NavLink></button>

                                <button
                                    style={{
                                        background: 'rgba(255,255,255,0.2)',

                                    }}
                                    className='btn btn-default ml-2'>
                                    <NavLink
                                        style={
                                            { color: 'white' }
                                        }
                                        to="/login">Đăng nhập</NavLink>
                                </button>
                            </div>
                        </nav>
                    </div>

                    {/* //TODO: end navbar */}
                    <Outlet />
                    {/* //TODO: footer */}
                    <div className="container-fluid py-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <h4>GÓC ĐIỆN ẢNH</h4>
                                    <ul className='list-unstyled'>
                                        <li><a href="">THỂ LOẠI PHIM</a></li>
                                        <li><a href="">BÌNH LUẬN PHIM</a></li>
                                        <li><a href="">BLOG ĐIỆN ẢNH</a></li>
                                        <li><a href="">PHIM HAY THÁNG</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h4>HỖ TRỢ</h4>
                                    <ul className='list-unstyled'>
                                        <li><a href="">GÓP Ý</a></li>
                                        <li><a href="">SALE &amp; SERVICES</a></li>
                                        <li><a href="">RẠP</a></li>
                                        <li><a href="">GIÁ VÉ TUYỂN DỤNG</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h4>KẾT NỐI</h4>
                                    <button className='btn border'>
                                        <i className="fab fa-facebook-square" />

                                    </button>
                                    <button className='btn border ml-2'>
                                        <i className="fab fa-youtube" />

                                    </button>
                                    <button className='btn border ml-2'>
                                        <i className="fab fa-instagram-square" />

                                    </button>
                                    <h4 className='mt-3'>Dowload APP</h4>
                                    <button className='btn border'>
                                        <i className="fab fa-app-store-ios" />

                                    </button>
                                    <button className='btn border ml-2'>
                                        <i className="fa-brands fa-android" />

                                    </button>
                                </div>
                            </div>
                            <hr className='bg-white' />
                            <div>
                                <i className="fa-solid fa-film" style={{ fontSize: '100px' }} />
                                <h4>CÔNG TY TNHH MTV BBM MOVIE THEATER</h4>
                                <address>
                                    ĐỊA CHỈ: 442 Nguyễn Thị Minh Khai, P.3, Hồ Chí Minh <br />
                                    Tel: <a href="tel:028990999">028.990.999</a>

                                </address>
                            </div>
                        </div>
                    </div>
                    {/* //TODO: end footer */}
                </div>
            </>
        );
    }
    componentDidMount() {
         // todo cap nhat loading
         this.setState({
            ...this.state,
            loading: true,
        })
        // todo cap nhat darktheme lighttheme
        const dataLocalStore = localStorage.getItem('movie');
        const movie = parseJSON(dataLocalStore)
        if (movie) {
            this.setState({
                ...this.state,
                theme:movie.theme,
            })
        }
       
        axios({
            method: 'GET',
            url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            headers: {
                TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c'
            }
        })
            .then((res) => {
                this.setState({
                    ...this.state,
                    loading: false,
                    data: res,
                    error: null
                })
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    loading: false,
                    data: null,
                    error: error,
                })
            })
    }
    componentDidUpdate (prevProps,prevState){
        if(prevState.theme !== this.state.theme){
            const myTheme = {theme:this.state.theme}
            const myJson = JSON.stringify(myTheme)
            localStorage.setItem("movie",myJson)
        }
    }
    handleDarkTheme = () => {
        const { theme } = this.state
        if (theme === 'darkTheme') {
            this.setState({
                ...this.state,
                theme: "lightTheme"
            })
        } else {
            this.setState({
                ...this.state,
                theme: "darkTheme"
            })
        }
    }
}


const mapStateToProp = (state) => {
    return {
        store: state,
        darkTheme: state.configReducer.darkTheme,
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        changeDarkTheme: (boolean) => {

            dispatch(changeDarkThemeAction(boolean))
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(CustomerTemplate);