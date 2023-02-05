import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { apiMakeShowing, apiTheaterDetail } from '../../../service/apiAdmin';
import moment from 'moment';
import { apiTheater, filmApi } from '../../../service/apiHome';

const ShowTimesPage = () => {
    const [maPhim, setMaPhim] = useState(null)
    const [maPhiSelected,setMaPhiSelected] = useState(null)
    const [theater, setTheater] = useState({})
    const [theaterDetail, setTheaterDetail] = useState({})
    const [theaterSelected, setTheaterSelected] = useState(null)
    const [theaterDetailSelected, setTheaterDetailSelected] = useState(null)
    const [daySelected, setDaySelected] = useState(null)
    const [price, setPrice]= useState(null)
    const [priceError, setPriceError] = useState('');
    useEffect(() => {
        filmApi
        .then((res) => {
            setMaPhim(res.data.content)
        })
        .catch((error) => {
        })
    },[])
    useEffect(() => {
        apiTheater.then((res) => {
            setTheater(res.data.content)
        })
            .catch((error) => {
            })
    }, [])
    useEffect(() => {
        apiTheaterDetail(theaterSelected)
            .then((res) => {
                setTheaterDetail(res.data.content)
            })
            .catch((error) => {
            })
    }, theaterSelected)
    const renderTheater = () => {
        if (theater.length > 0) {
            return theater.map((item) => {
                return <option value={item.maHeThongRap}>{item.tenHeThongRap}</option>
            })
        }
    }
    const renderTheaterDetail = () => {
        if (theaterDetail.length > 0) {
            return theaterDetail.map((item) => {
                return <option value={item.maCumRap}>{item.tenCumRap}</option>
            })
        }
    }
    const renderMaPhim = () => {
        if (maPhim) {
            return maPhim.map((item) => {
                return <option value={item.maPhim}>{item.tenPhim}</option>
            })
        }
    }
    const handleOnBlur = (e) => {
        const value = e.target.value
        if (!value) {
            setPriceError('Giá vé không được để trống!')
        } else if (value * 1 < 75000 || value * 1 > 200000) {
            setPriceError('Giá vé không được nhỏ hơn 75.000đ hoặc lớn hơn 200.000đ!')

        } else {

            setPriceError('')
        }
    }
    const handleOnsubmit = (e) => {
        e.preventDefault()
        const data = {
            maPhim: maPhiSelected*1,
            ngayChieuGioChieu: daySelected,
            maRap: theaterDetailSelected,
            giaVe: price*1,
          }
          console.log(data);
        apiMakeShowing(data)
        .then((res) => {
        })
        .catch((error) => {
        })
    }
    return (
        <div className='p-3' style={{marginTop:'50px'}}>
            <form onSubmit={(e) => {
                handleOnsubmit(e)
            }}>
                <h1>Tạo lịch chiếu</h1>
                {/* <h3>Aventer 2023</h3> */}
                {/* <img src="https://i.pravatar.cc" width={400} alt="" /> */}
                <div className="row mt-2 ">
                    <div className="col-md-2 text-right">
                        <label htmlFor="">Mã phim</label>
                    </div>
                    <div className="col-md-10">
                        <div className='form-group' action="">
                            <select
                                onChange={(e) => {
                                    // setTheaterSelected(e.target.value)
                                    setMaPhiSelected(e.target.value)
                                }}
                                className='form-control bg-dark text-white'>
                                {/* {renderTheater()} */}
                                {renderMaPhim()}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 ">
                    <div className="col-md-2 text-right">
                        <label htmlFor="">Hệ thống rạp</label>
                    </div>
                    <div className="col-md-10">
                        <div className='form-group' action="">
                            <select
                                onChange={(e) => {
                                    setTheaterSelected(e.target.value)
                                }}
                                className='form-control bg-dark text-white'>
                                {renderTheater()}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 text-right">
                        Cụm rạp
                    </div>
                    <div className="col-md-10">
                        <div className='form-group' action="">
                            <select
                                onChange={(e) => {
                                    setTheaterDetailSelected(e.target.value)
                                }}
                                className='form-control bg-dark text-white'>
                                {renderTheaterDetail()}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 text-right">
                        <label htmlFor="">Ngày chiếu, giờ chiếu</label>
                    </div>
                    <div className="col-md-10">
                        <div action="" className='form-group'>

                            <input
                            onChange={(e) => {
                                setDaySelected(moment(e.target.value).format('DD/MM/YYYY hh:mm:ss'))
                            }}
                            type="datetime-local" name="" id="" className='form-control bg-dark text-white' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 text-right">
                        <label htmlFor="">Giá vé</label>
                    </div>
                    <div className="col-md-10">
                        <div className='form-group'>

                            <input
                            onChange={(e) => {
                                setPrice(e.target.value)
                            }}
                            onBlur={handleOnBlur} type="number" name="" id="" className='form-control bg-dark text-white' />
                            <div className='text-danger'>{priceError}</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 text-right">
                    </div>
                    <div className="col-md-10">
                        <div className='form-group'>

                            <input type="submit" name="" id="" className='btn btn-primary' value='Khởi tạo' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ShowTimesPage;