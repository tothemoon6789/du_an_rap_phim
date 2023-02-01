import React, { Component } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiUserInfo } from '../../service/apiUserInfo';
import { ADD_USER_INFORMATION } from '../../store/reducer/user/const';
import LoginPage from '../HomeTemplate/LoginPage/LoginPage';

const UserTemplate = (props) => {
        useEffect(() => {
            apiUserInfo(props.accessToken)
            .then((res) => {
                console.log(res); 
                props.addUserInfomation(res.data.content)
            }) 
            .catch((error) => {
                console.log(error); 
            })
        },[])
        const {userInfo, accessToken} = props
        console.log(userInfo);
        return accessToken ==='' ?
        <LoginPage/>:
        (
            <>
                <div className="container">
                  
                    <div className="shadow pb-3">

                        <div className=' bg-danger rounded-top position-relative' style={{ height: '25vh', background: 'linear-gradient(to left, red,yellow)' }}>
                            <img className='rounded-circle position-absolute' style={{ bottom: 0, left: '50px', transform: 'translateY(50%)', zIndex: '1', border: '5px solid white' }} src="./images/img_avatar.png" width={130} height={130} alt="..." />
                        </div>
                        <div className='px-5' style={{ marginTop: '70px' }}>
                            {/* <img className='rounded-circle' style={{ border: '5px solid white' }} src="https://i.pravatar.cc//" width={130} height={130} alt="" /> */}
                            <h3 className='mt-2'>{userInfo.hoTen}</h3>
                            <span className='d-block'>Số điện thoại: {userInfo.soDT}</span>
                            <span className='d-block'>Email: {userInfo.email}</span>
                            <Link to='/admin'>ADMIN</Link>
                            <div className="p-3">

                                <button type="button" className="btn btn-default border">Chỉnh sửa</button>
                                <button type="button" className="btn btn-primary ml-2">Mua vé  <i className="fa-solid fa-ticket"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="shadow mt-3">
                        <div className="p-5">

                            <div>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#history" role="tab" aria-controls="home" aria-selected="true">Lịch sử đặt vé</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#promotion" role="tab" aria-controls="profile" aria-selected="false">Khuyến mãi</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="likedFilm" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Phim yêu thích</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="history" role="tabpanel" aria-labelledby="home-tab">
                                        <div className='d-flex shadow mt-2'>
                                            <img className='rounded-left' src="https://genk.mediacdn.vn/k:thumb_w/640/2016/1261472269444180140-1463473225836/bom-tan-transformer-tung-teaser-xac-nhan-ra-mat-phan-moi-the-last-knight.jpg" alt="..." width={80} height={80} style={{ objectFit: 'cover' }} />
                                            <div className='ml-2'>

                                                <h6>Transformer 2024</h6>
                                                <span className='d-block'>Ngày đặt vé: 23-12-2022</span>
                                                <span className='d-block'>Số ghế: 2A 4G</span>
                                            </div>
                                        </div>
                                        <div className='d-flex shadow mt-2'>
                                            <img className='rounded-left' src="https://vcdn1-giaitri.vnecdn.net/2022/02/26/bay-ngot-1-4572-1645848404.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=LBNcihWOnwukrF9IuwInJw" alt="..." width={80} height={80} style={{ objectFit: 'cover' }} />
                                            <div className='ml-2'>

                                                <h6>Transformer 2024</h6>
                                                <span className='d-block'>Ngày đặt vé: 23-12-2022</span>
                                                <span className='d-block'>Số ghế: 2A 4G</span>
                                            </div>
                                        </div>
                                        <div className='d-flex shadow mt-2'>
                                            <img className='rounded-left' src="https://www.evn.com.vn/userfile/VH/User/quanghuytcdl/images/2020/12/141220-matbiec.jpg" alt="..." width={80} height={80} style={{ objectFit: 'cover' }} />
                                            <div className='ml-2'>

                                                <h6>Transformer 2024</h6>
                                                <span className='d-block'>Ngày đặt vé: 23-12-2022</span>
                                                <span className='d-block'>Số ghế: 2A 4G</span>
                                            </div>
                                        </div>
                                        <div className='d-flex shadow mt-2'>
                                            <img className='rounded-left' src="https://icdn.dantri.com.vn/thumb_w/680/2023/01/03/song-hye-kyo-11-1672711164571.jpg" alt="..." width={80} height={80} style={{ objectFit: 'cover' }} />
                                            <div className='ml-2'>

                                                <h6>Transformer 2024</h6>
                                                <span className='d-block'>Ngày đặt vé: 23-12-2022</span>
                                                <span className='d-block'>Số ghế: 2A 4G</span>
                                            </div>
                                        </div>
                                        <div className='d-flex shadow mt-2'>
                                            <img className='rounded-left' src="https://image.winudf.com/v2/image/Y29tLnR3ZW50eWdyb3VwLnBoaW1jYXAzX3NjcmVlbnNob3RzXzBfNGUyYjgwZDc/screen-0.jpg?fakeurl=1&type=.webp" alt="..." width={80} height={80} style={{ objectFit: 'cover' }} />
                                            <div className='ml-2'>

                                                <h6>Transformer 2024</h6>
                                                <span className='d-block'>Ngày đặt vé: 23-12-2022</span>
                                                <span className='d-block'>Số ghế: 2A 4G</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="promotion" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="mt-2">

                                            <div className="card" style={{ width: '18rem' }}>
                                                <img className="card-img-top" src="https://cdnimg.vietnamplus.vn/uploaded/ngtmbh/2014_10_14/ironmanrobert_downey_jr1.jpg" alt="Card cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="likedFilm" role="tabpanel" aria-labelledby="contact-tab">
                                        <div className="mt-2">

                                            <div className="card" style={{ width: '18rem' }}>
                                                <img className="card-img-top" src="https://cdnimg.vietnamplus.vn/uploaded/ngtmbh/2014_10_14/ironmanrobert_downey_jr1.jpg" alt="Card cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>




                </div>
            </>
        );
    
   
 
}
const mapStateToProp = (state) => {
    return {
        accessToken: state.userReducer.accessToken,
        userInfo: state.userReducer.userInfo,
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        addUserInfomation : (userInfo) => {
            const action = {
                type: ADD_USER_INFORMATION,
                payload: userInfo
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProp) (UserTemplate);