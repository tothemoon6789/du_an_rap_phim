import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class CustomerTemplate extends Component {
    render() {
        console.log(window.location.pathname.toString());
        return (
            <>

                {/* //TODO: navbar */}
                <div
                    style={
                    { backgroundImage: "linear-gradient(black,transparent)"}
                  
                
                        
                    }
                    className=" container-fluid"
                >
                    <div className='container'>
                        <nav className="navbar navbar-expand-md navbar-light ">
                            <a className="navbar-brand text-white" href="#"><i className="fa-solid fa-film"></i>   BBM MOVIE THEATHER</a>
                            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item active ml-3">
                                        <NavLink to="" className="text-white">Home</NavLink>
                                    </li>
                                    <li className="nav-item ml-3">
                                        <NavLink to="/detail" className="text-white">Detail</NavLink>
                                    </li>
                                    <li className="nav-item ml-3">
                                        <NavLink to="/booking" className="text-white">Booking</NavLink>
                                    </li>

                                </ul>
                                <button className='btn btn-default text-white border-white'>Đăng ký</button>
                                <button className='btn btn-default bg-light ml-2'>Đăng nhập</button>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* //TODO: end navbar */}
                <Outlet />
                {/* //TODO: footer */}
                <div className="container-fluid bg-dark text-white py-4">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-4">
                                <h4>GÓC ĐIỆN ẢNH</h4>
                                <ul>
                                    <li><a href="#">THỂ LOẠI PHIM</a></li>
                                    <li><a href="#">BÌNH LUẬN PHIM</a></li>
                                    <li><a href="#">BLOG ĐIỆN ẢNH</a></li>
                                    <li><a href="#">PHIM HAY THÁNG</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4>HỖ TRỢ</h4>
                                <ul>
                                    <li><a href="#">GÓP Ý</a></li>
                                    <li><a href="#">SALE &amp; SERVICES</a></li>
                                    <li><a href="#">RẠP</a></li>
                                    <li><a href="#">GIÁ VÉ TUYỂN DỤNG</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4>KẾT NỐI</h4>
                                <i className="fab fa-facebook-square" />
                                <i className="fab fa-youtube" />
                                <i className="fab fa-instagram-square" />
                                <h4>Dowload APP</h4>
                                <i className="fab fa-app-store-ios" />
                                <i className="fa-brands fa-android" />
                            </div>
                        </div>
                        <hr className='bg-white' />
                        <div>
                            <i className="fa-solid fa-film" />
                            <h4>CÔNG TY TNHH MTV BBM MOVIE THEATER</h4>
                            <address>
                                ĐỊA CHỈ: 442 Nguyễn Thị Minh Khai, P.3, Hồ Chí Minh
                            </address>
                        </div>
                    </div>
                </div>

                {/* //TODO: end footer */}


            </>
        );
    }
}

export default CustomerTemplate;