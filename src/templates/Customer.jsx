import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class Customer extends Component {
    render() {
        return (
            <>
                <div
                    style={
                        { backgroundImage: "url(./images/bg_customer_home_avatar.jpg)" }

                    }
                    className='container-fluid bg-danger'>

                    <div className='container'>


                        <nav className="navbar navbar-expand-md navbar-light bg-dark shadow ">
                            <a className="navbar-brand text-white" href="#">BBM Movie Theater</a>
                            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item active ml-3">
                                        <NavLink to="">Home</NavLink>
                                    </li>
                                    <li className="nav-item ml-3">
                                        <NavLink to="/detail">Detail</NavLink>
                                    </li>
                                    <li className="nav-item ml-3">
                                        <NavLink to="/booking">Booking</NavLink>
                                    </li>

                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                        <img width={"100%"} src='./images/bg_customer_home_carousel.jpg' alt='...' />
                        <div className='row'>
                            <div className='col-md-10'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <div class="form-group">
                                            <select class="form-control" name="" id="">
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div class="form-group">
                                            <select class="form-control" name="" id="">
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div class="form-group">
                                            <select class="form-control" name="" id="">
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div class="form-group">
                                            <select class="form-control" name="" id="">
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-2'>
                                <button className='btn btn-success'>BOOKING NOW</button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className="card">
                                    <img className="card-img-top" src="http://i.pravatar.cc" alt />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className="card">
                                    <img className="card-img-top" src="http://i.pravatar.cc" alt />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className="card">
                                    <img className="card-img-top" src="http://i.pravatar.cc" alt />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className="card">
                                    <img className="card-img-top" src="http://i.pravatar.cc" alt />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className="card">
                                    <img className="card-img-top" src="http://i.pravatar.cc" alt />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className="card">
                                    <img className="card-img-top" src="http://i.pravatar.cc" alt />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className="card">
                                    <img className="card-img-top" src="http://i.pravatar.cc" alt />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className="card">
                                    <img className="card-img-top" src="http://i.pravatar.cc" alt />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container-fluid">
                    <div className="container">
                        <Outlet />
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container">

                        <footer>Footer here</footer>
                    </div>
                </div>



            </>
        );
    }
}

export default Customer;