import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import ButtonNavlink from '../../components/Button/ButtonNavlink';
import ButtonOutlineNavlink from '../../components/Button/ButtonOutlineNavlink';
import { connect } from 'react-redux';
import { LOG_OUT } from '../../store/reducer/user/const';
import { useState } from 'react';
import { useEffect } from 'react';
const HomeTemplate = (props) => {
    const [theme, setTheme] = useState('darkTheme')
    const [loading, setLoading] = useState(false)
    const { accessToken } = props
    useEffect(() => {
        setLoading(true)
        const dataLocalStore = localStorage.getItem('movie');
        if (dataLocalStore) {
            setTheme(dataLocalStore.theme)
        }
    }, [])
    useEffect(() => {
        const myJson = JSON.stringify(theme)
        localStorage.setItem("movie", myJson)
    }, [theme])
    const handleDarkTheme = () => {
        if (theme === 'darkTheme') {
            setTheme('lightTheme')
        } else {
            setTheme('darkTheme')
        }
    }
    return (
        <>
            <div className={`${theme}`}>
                {/* //TODO: navbar */}
                <div className='container'>
                    <nav className="navbar navbar-expand-md">
                        <NavLink className="navbar-brand animate__animated animate__fadeInLeftBig" to=""><i className="fa-solid fa-film" style={{ fontSize: "50px" }}></i><h1 className='ml-2 d-inline-block'>CINEMA</h1></NavLink>
                        <button
                            style={{ background: 'rgba(255,255,255,0.2)' }}
                            className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item ml-3 animate__animated animate__fadeIn">
                                    <NavLink to="/showing" className={({ isActive }) => isActive ? 'bg-primary text-white nav-link p-2' : 'nav-link p-2'} >Phim ??ang chi???u</NavLink>
                                </li>
                                <li className="nav-item ml-3 animate__animated animate__fadeIn">
                                    <NavLink to="/comming-soon" className={({ isActive }) => isActive ? 'bg-primary text-white nav-link p-2' : 'nav-link p-2'} >Phim s???p chi???u</NavLink>
                                </li>
                            </ul>
                            {accessToken === '' ?
                                <div className='d-flex justify-content-end' style={{ minWidth: '400px' }}>
                                    <button
                                        className='btn btn-default'
                                        onClick={handleDarkTheme}>{theme === 'darkTheme' ? <i style={{ color: 'white' }} className="fa-solid fa-sun" ></i> : <i className="fa-solid fa-moon"></i>}
                                    </button>
                                    <ButtonOutlineNavlink theme={theme} navlinkTo='/sign-in' buttonName='????ng k??' />
                                    <ButtonNavlink theme={theme} navlinkTo='/login' buttonName='????ng nh???p' />
                                </div>
                                :
                                <div>
                                    <button
                                        className='btn btn-default'
                                        onClick={handleDarkTheme}>{theme === 'darkTheme' ? <i style={{ color: 'white' }} className="fa-solid fa-sun" ></i> : <i className="fa-solid fa-moon"></i>}
                                    </button>
                                    <NavLink to='/user'> <img className='rounded-circle img-fluid ml-2' src="./images/img_avatar.png" width='50px' height='50px' alt="..." /></NavLink>
                                    <button onClick={() => {
                                        props.logOut()
                                        window.alert('????ng xu???t th??nh c??ng!')
                                    }} className='btn btn-danger ml-2' >????ng xu???t</button>
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
                                <h4>G??C ??I???N ???NH</h4>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item' style={{ background: 'none' }}><a href="">TH??? LO???I PHIM</a></li>
                                    <li className='list-group-item' style={{ background: 'none' }}><a href="">B??NH LU???N PHIM</a></li>
                                    <li className='list-group-item' style={{ background: 'none' }}><a href="">BLOG ??I???N ???NH</a></li>
                                    <li className='list-group-item' style={{ background: 'none' }}><a href="">PHIM HAY TH??NG</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4>H??? TR???</h4>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item' style={{ background: 'none' }}><a href="">G??P ??</a></li>
                                    <li className='list-group-item' style={{ background: 'none' }}><a href="">SALE &amp; SERVICES</a></li>
                                    <li className='list-group-item' style={{ background: 'none' }}><a href="">R???P</a></li>
                                    <li className='list-group-item' style={{ background: 'none' }}><a href="">GI?? V?? TUY???N D???NG</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4>K???T N???I</h4>
                                <button className='btn'>
                                    <img src="https://static.chotot.com/storage/default/facebook.svg" alt="Facebook" />
                                </button>
                                <button className='btn'>
                                    <img src="https://static.chotot.com/storage/default/youtube.svg" alt="Youtube" />
                                </button>
                                <button className='btn'>
                                    <img src="https://static.chotot.com/storage/default/linkedin.svg" alt="LinkedIn" />
                                </button>
                                <h4 className='mt-3'>Dowload APP</h4>
                                <div className="d-flex">

                                    <div>
                                        <img width={100} height={100} src="https://static.chotot.com/storage/default/group-qr.jpeg" alt="Download App" />
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <button className='btn'>
                                            <img src="https://static.chotot.com/storage/default/ios.svg" alt="App Store" />
                                        </button>
                                        <button className='btn ml-2'>
                                            <img src="https://static.chotot.com/storage/default/android.svg" alt="Play Store" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='bg-white' style={{ opacity: '0.2' }} />
                        <div>
                            <i className="fa-solid fa-film text-primary" style={{ fontSize: '100px', }} />
                            <h4>C??NG TY TNHH MTV BBM MOVIE THEATER</h4>
                            <address>
                                ?????A CH???: 442 Nguy???n Th??? Minh Khai, P.3, H??? Ch?? Minh <br />
                                Tel: <a href="tel:028990999">028.990.999</a><br/>
                                <span>Designed by: <a href="#">Linh Pham</a></span>
                            </address>
                        </div>
                    </div>
                </div>
                {/* //TODO: end footer */}
            </div>
        </>
    );


}
const mapStateToProp = (state) => {
    return {
        accessToken: state.userReducer.accessToken,
        allProps: state,
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