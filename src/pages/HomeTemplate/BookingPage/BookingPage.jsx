import React, { Component } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spiner from '../../../components/Loading/Spiner';
import { apiBooking, apiGetCodeShowingFilm, apiSeatBooking } from '../../../service/apiHome';
import Seat from './Seat';

const BookingPage = (props) => {
    const navigate = useNavigate()
    const refTime = useRef()
    const [spiner, setSpiner] = useState(false)
    const [spinerBooking, setSpinerBooking] = useState(false);
    const [seat, setSeat] = useState([])
    const [info, setInfo] = useState({})
    const [seated, setSeated] = useState([]);
    const { booking, accessToken, allData } = props
    const [time, setTime] = useState({
        hour:0,
        minute:0,
        second :0,
    })
    const [bookingAction, setBookingAction] = useState({
        maLichChieu: 0,
        danhSachVe: [
            // {

            //     maGhe: 51110,
            //     giaVe: 120000,
            // }
        ]
    })
   
    useEffect(() => {
        let timer = setInterval(() => {
            const date = new Date();
            setTime({
                hour:date.getHours(),
                minute:date.getMinutes(),
                second:date.getSeconds(),
            })
            // let 
            // console.log(date.getMilliseconds());
        }, 1000);
        return () => {
            console.log('CLEAR INTERVAL');
            clearInterval(timer)
        }
    },[])
    useEffect(() => {
        setBookingAction({
            ...bookingAction,
            maLichChieu: booking.maLichChieu,
        })
    }, [])
    useEffect(() => {
        setSpiner(true)
        apiSeatBooking(booking.maLichChieu)
            .then((res) => {
                setSpiner(false)
                const inforFilm = res.data.content.thongTinPhim;
                setInfo(inforFilm)
                const allSeat = res.data.content.danhSachGhe;
                let newArray = [];
                let resulArray = [];
                allSeat.map((item, index) => {
                    newArray.push(item);
                    if (index > 0 && (index + 1) % 16 === 0) {
                        resulArray.push(newArray)
                        newArray = [];
                    }
                })
                setSeat(resulArray)
            })
            .catch((res) => {
                setSpiner(true)
            })
    }, [booking])
    const handleOnclickSeat = (itemClicked) => {
        console.log(itemClicked);
        setSeated([
            ...seated,
            {
                tenGhe: itemClicked.tenGhe * 1,
                giaVe: itemClicked.giaVe * 1
            }
        ])
        setBookingAction({
            ...bookingAction,
            danhSachVe: [
                ...bookingAction.danhSachVe,
                {
                    maGhe: itemClicked.maGhe,
                    giaVe: itemClicked.giaVe,
                }
            ]
        })
    }
    const handleOnRemoveSeat = (itemClicked) => {
        // console.log(item);
        setSeated(seated.filter((item) => {
            return item.tenGhe * 1 !== itemClicked.tenGhe * 1
        }))
        // console.log(seated);
        // const check = seated.filter((item) => {
        //     console.log(item);
        //     console.log(itemClicked.tenGhe);
        //     return item !== itemClicked.tenGhe
        // })
        // console.log(check);
        setBookingAction({
            ...bookingAction,
            danhSachVe: bookingAction.danhSachVe.filter((item) => {
                return item.maGhe !== itemClicked.maGhe
            })

        })
    }
    useEffect(() => {
        // console.log(bookingAction);
    }, [bookingAction])

    const renderSeat = (row) => {
        return row.map((seat) => {
            return <Seat seat={seat} handleOnclickSeat={handleOnclickSeat} handleOnRemoveSeat={handleOnRemoveSeat} />
        })
    }
    const renderRow = () => {
        if (seat.length > 0) {
            return seat.map((row) => {
                return (
                    <div className='d-flex'>
                        {renderSeat(row)}
                    </div>
                )
            })
        }
    }

    const datVe =
    {
        "maLichChieu": 40481,
        "danhSachVe": [
            {
                "maGhe": 51110,
                "giaVe": 120000
            }
        ]
    }
    // console.log(info);
    return (
        <div className='container'>
            {/* //! Test dat ve */}

            <div className='text-center'>

                <h3>Thời gian đặt vé</h3>
                <span>{time.hour}:{time.minute}:{time.second}</span>
            </div>
            <h3>{info.tenCumRap} {info.tenRap}</h3>
            <div className='row'>
                <div className="col-md-7">
                    <div className='mb-4 text-center py-4 text-white' style={{ backgroundColor: "orange", fontSize: '35px' }}>Màn Chiếu</div>
                    {spiner ? <Spiner /> : ''}
                    {renderRow()}
                </div>
                <div className="col-md-5">
                    <div className='border rounded p-4' >
                        <div className='text-center'>
                            <div className="d-flex">

                                <img src={info.hinhAnh} width={70} alt="" />
                                <h2 className='ml-3'>{info.tenPhim}</h2>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <h4 className='d-inline-block'>Ngày chiếu</h4>
                            <h4 className='d-inline-block'>{info.ngayChieu}</h4>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <h4 className='d-inline-block'>Giờ chiếu</h4>
                            <h4 className='d-inline-block'>{info.gioChieu}</h4>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <h4 className='d-inline-block'>Cụm rạp</h4>
                            <h4 className='d-inline-block'>{info.tenCumRap}</h4>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <h4 className='d-inline-block'>Rạp:</h4>
                            <h4 className='d-inline-block'>{info.tenRap}</h4>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <h4 className='d-inline-block'>Ghế chọn</h4>
                            <h4 className='d-inline-block'>{seated.map((item) => {
                                return item.tenGhe +', '
                            })}</h4>
                        </div>
                        <hr />
                        {/* <div className='d-flex justify-content-between'>
                            <h4 className='d-inline-block'>ƯU ĐÃI</h4>
                            <h4 className='d-inline-block'>0%</h4>
                        </div> */}
                        <div className='d-flex justify-content-between'>
                            <h4 className='d-inline-block'>Tổng tiền</h4>
                            <h4 className='d-inline-block'>{seated.length!==0 ? seated.reduce((total,obj) => {
                                return total+obj.giaVe*1
                            },0):''} vnđ</h4>
                        </div>
                        <button
                            disabled={seated.length>0 ? false: true}
                            onClick={() => {
                                setSpinerBooking(true)
                                apiBooking(bookingAction, accessToken).then((res) => {
                                    console.log(res);
                                    window.alert("Đặt vé thành công!")
                                    navigate('/user')
                                }).catch((error) => {
                                    console.log(error);
                                    window.alert('Vui lòng đăng nhập trước khi đặt vé!')
                                    navigate('/login')
                                })
                            }}
                            className='btn btn-block btn-danger mt-3'>Đặt vé ngay</button>
                            {spinerBooking ? <Spiner /> : ''}
                    </div>
                </div>
            </div>
            <div className='d-flex p-3'>
                <div className='d-flex align-items-center ml-2'>
                    <div style={{ width: "10px", height: "10px", background: "gray" }}></div>
                    <span className='ml-2'>Đã đặt</span>
                </div>
                <div className='d-flex align-items-center ml-2'>
                    <div style={{ width: "10px", height: "10px", background: "green" }}></div>
                    <span className='ml-2'>Ghế thường</span>
                </div>
                <div className='d-flex align-items-center ml-2'>
                    <div style={{ width: "10px", height: "10px", background: "orange" }}></div>
                    <span className='ml-2'>Ghế VIP</span>
                </div>
                <div className='d-flex align-items-center ml-2'>
                    <div style={{ width: "10px", height: "10px", background: "red" }}></div>
                    <span className='ml-2'>Đang chọn</span>
                </div>
                
                {/* <div className='d-flex align-items-center ml-2'>
                    <div style={{ width: "10px", height: "10px", background: "orange" }}></div>
                    <span className='ml-2'>Ghế thường</span>
                </div> */}
            </div>

        </div>
    );

}
const mapStateToProp = (state) => {
    return {
        filmClicked: state.filmReducer.filmClicked,
        booking: state.filmReducer.booking,
        accessToken: state.userReducer.accessToken,
        allData: state,
    }
}
export default connect(mapStateToProp, null)(BookingPage);