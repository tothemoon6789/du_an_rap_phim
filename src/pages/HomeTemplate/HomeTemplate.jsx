import React, { Component } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
// import axios from 'axios';
import { parseJSON } from 'jquery';
import ButtonNavlink from '../../components/Button/ButtonNavlink';
import ButtonOutlineNavlink from '../../components/Button/ButtonOutlineNavlink';
import { connect } from 'react-redux';
import { LOG_OUT } from '../../store/reducer/user/const';
class HomeTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "darkTheme",
        }
    }

    render() {
        const { theme } = this.state
        const { accessToken } = this.props
        return (
            <>
                <div className={`${theme}`}>
                    {/* //TODO: navbar */}
                    <div className='container'>
                        <Link to='/admin'>ADMIN</Link>
                        <nav className="navbar navbar-expand-md">
                            <NavLink className="navbar-brand " to=""><i className="fa-solid fa-film" style={{ fontSize: "50px" }}></i><h1 className='ml-2 d-inline-block'>CINEMA</h1></NavLink>
                            <button
                                style={{ background: 'rgba(255,255,255,0.2)' }}
                                className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa-solid fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item active ml-3">
                                        <NavLink to="" className={({ isActive }) => isActive ? 'bg-primary text-white nav-link' : 'nav-link'} >Trang chủ</NavLink>
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
                                {accessToken === '' ?
                                    <div>

                                        <ButtonOutlineNavlink theme={theme} navlinkTo='/sign-in' buttonName='Đăng ký' />
                                        <ButtonNavlink theme={theme} navlinkTo='/login' buttonName='Đăng nhập' />
                                    </div>

                                    :
                                    <div>

                                        <NavLink to='/user'> <img className='rounded-circle img-fluid ml-2' src="./images/img_avatar.png" width='50px' height='50px' alt="..." /></NavLink>
                                        <button onClick={() => {
                                            this.props.logOut()
                                            window.alert('Đăng xuất thành công!')
                                        }} className='btn btn-danger ml-2' >Đăng xuất</button>
                                    </div>
                                }
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
                theme: movie.theme,
            })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.theme !== this.state.theme) {
            const myTheme = { theme: this.state.theme }
            const myJson = JSON.stringify(myTheme)
            localStorage.setItem("movie", myJson)
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
        accessToken: state.userReducer.accessToken,
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        logOut: () => {
            const action = {
                type: LOG_OUT,

            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(HomeTemplate);