import React, { Component } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiUserAccount, apiUserInfo} from '../../service/apiUserInfo';
import { ADD_USER_INFORMATION } from '../../store/reducer/user/const';
import LoginPage from '../HomeTemplate/LoginPage/LoginPage';
import moment from 'moment/moment';
import UpdateUser from './UpdateUser';

const UserTemplate = (props) => {
    console.log(props);
    const { thongTinDatVe } = props.userInfo
    useEffect(() => {
        apiUserInfo(props.accessToken)
            .then((res) => {
                console.log(res);
                props.addUserInfomation(res.data.content)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    console.log(thongTinDatVe);
    const { userInfo, accessToken } = props
    const renderHistoryBooking = () => {
        console.log(props);
        console.log(thongTinDatVe);
        if (thongTinDatVe && thongTinDatVe.length > 0) {
            return thongTinDatVe.map((item, index) => {
                return <div key={index} className='d-flex shadow mt-2'>
                    <img className='rounded-left' src={item.hinhAnh} alt="..." width={120} height={120} style={{ objectFit: 'cover' }} />
                    <div className='ml-2'>
                        <h5>{item.tenPhim}</h5>
                        <span className='d-block'>Rạp chiếu: {item.danhSachGhe[0].tenHeThongRap}</span>
                        <span className='d-block'>Phòng chiếu: {item.danhSachGhe[0].maCumRap}</span>
                        <span className='d-block'>Ngày đặt vé: {moment(item.ngayDat).format('DD/MM/YYYY')}</span>
                        <span className='d-block'>Ghế chọn: {item.danhSachGhe.map((seat) => {
                            return seat.tenGhe + ', '
                        })}</span>
                    </div>
                </div>

            })
        }
    }
    return accessToken === '' ?
        <LoginPage /> :
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

                                <button type="button" className="btn btn-default border" data-toggle="modal" data-target="#modelId">Chỉnh sửa</button>
                                <Link to='/showing'>  <button type="button" className="btn btn-primary ml-2">Mua vé  <i className="fa-solid fa-ticket"></i></button></Link>
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

                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="history" role="tabpanel" aria-labelledby="home-tab">
                                        {renderHistoryBooking()}
                                    </div>
                                    <div className="tab-pane fade" id="promotion" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="mt-2">

                                            <div className="card" style={{ width: '18rem' }}>
                                                <img className="card-img-top" src="https://cdn.tuoitrethudo.com.vn/stores/news_dataimages/tuoitrethudocomvn/092019/24/12/dcine-cinemas-thuong-hieu-rap-chieu-phim-moi-va-day-tiem-nang-gia-nhap-thi-truong-viet-nam-29-.0228.jpg" alt="Card cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã khuyến mãi</h5>
                                                    <p className="card-text">Nhận khuyến mãi trước ngày 20/5/2023 để thưởng thức những bộ phim hay !</p>
                                                    <a href="" className="btn btn-primary">Nhận ngay</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <div className="tab-pane fade" id="likedFilm" role="tabpanel" aria-labelledby="contact-tab">
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
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </div>




                </div>
                <UpdateUser />
                {/* <Test/> */}
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
        addUserInfomation: (userInfo) => {
            const action = {
                type: ADD_USER_INFORMATION,
                payload: userInfo
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(UserTemplate);