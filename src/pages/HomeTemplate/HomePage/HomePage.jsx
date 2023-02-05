import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Film from '../../../components/Film/Film';
import Spiner from '../../../components/Loading/Spiner';
import { apiTheater, apiTheaterDetailShowing, filmApi } from '../../../service/apiHome';
import Carousel from './Carousel';
import FilmOnTheater from './FilmOnTheater';
import Theater from './Theater';
import TheaterDetail from './TheaterDetail';
// import 'swiper/css'

const HomePage = () => {
    //TODO: Khai báo dữ liệu
    const refToScroll = React.createRef()
    const [theaterCode, setTheaterCode] = useState('CGV')
    const [film, setFilm] = useState({
        loading: false,
        data: null,
        error: true,
    })
    const [theater, setTheater] = useState({
        loading: false,
        data: null,
        error: true,
    })
    const [theaterDetail, setTheaterDetail] = useState({
        loading: false,
        data: null,
        error: true,
    })
    const [filmDetail, setFilmDetail] = useState({
        loading: false,
        data: null,
        error: true,
    })
    useEffect(() => {
        setTheaterDetail({
            ...theaterDetail,
            loading: true,
            data: null,
        })
        apiTheaterDetailShowing(theaterCode)
            .then((res) => {
                setTheaterDetail({
                    ...theaterDetail,
                    loading: false,
                    data: res.data.content[0],
                })
                setFilmDetail({
                    ...filmDetail,
                    data: res.data.content[0].lstCumRap[0],
                })
            })
            .catch((error) => {
            })
    }, [theaterCode])
    
    useEffect(() => {
        setFilm({
            ...film,
            loading: true,
        })
        setTheater({
            ...theater,
            loading: true,
        })
        setTheaterDetail({
            ...theaterDetail,
            loading: true,
        })
        filmApi
            .then((res) => {
                setFilm({
                    ...film,
                    loading: false,
                    data: res.data.content,
                    error: false,
                })
            })
            .catch((error) => {
                setFilm({
                    ...film,
                    loading: true,
                    data: null,
                    error: true,
                })
            })
        apiTheater
            .then((res) => {
                setTheater({
                    ...theater,
                    loading: false,
                    data: res.data.content,
                    error: false,
                })
            })
            .catch((error) => {
                setTheater({
                    ...theater,
                    loading: true,
                    data: null,
                    error: true,
                })
            })
    }, [])
    const renderShowingFilm = () => {
        if (film.data) {
            return film.data.map((film, index) => {
                if (film.dangChieu === true) {
                    return (
                        <div key={index} className='col-md-3 mt-2'>
                            <Film film={film} />
                        </div>
                    )
                }
            })
        }
    }
    const renderTheater = () => {
        if (theater.data) {
            return theater.data.map((theater, index) => {
                return (
                    <div key={index} className="col-2 col-md-12 p-0">
                        <Theater theater={theater} handelTheaterOnClick={handelTheaterOnClick} />
                    </div>
                )
            })
        }
    }
    const renderTheaterDetail = () => {
        if (theaterDetail.data) {
            return theaterDetail.data.lstCumRap.map((theaterDetail, index) => {
                   
                return (
                    <TheaterDetail key={index} theaterDetail={theaterDetail} scroll={handelScrollIntoView} handelTheaterDetailOnClick={handelTheaterDetailOnClick} />
                )
            })
        }
    }
    const renderFilmOnTheater = () => {
        if (filmDetail.data && filmDetail.data.danhSachPhim.length > 0) {
            return filmDetail.data.danhSachPhim.map((filmOnTheater, index) => {
                return <FilmOnTheater key={index} filmOnTheater={filmOnTheater} />

            })
        }
    }
    const handelScrollIntoView = () => {
        refToScroll.current.scrollIntoView()
    }
    const handelTheaterDetailOnClick = (itemClicked) => {
        setFilmDetail({
            ...filmDetail,
            data: itemClicked,
        })
    }
    const handelTheaterOnClick = (itemClicked) => {
        setTheaterCode(itemClicked)
    }
    return (
        <>
            <Carousel />
            <div className='' >
                {/* //TODO: END CHỌN PHIM _ RẠP _ GIỜ CHIẾU */}
                {/* //TODO: DANH SACH PHIM */}
                <div className='container text-dark'>
                    {/* loading ripple */}
                    <div className='d-flex justify-content-center'>
                        {film.loading ?
                            <Spiner/> :
                            ''}
                    </div>
                    <div className='row'>
                        {renderShowingFilm()}
                    </div>
                </div>
                {/* //TODO: END DANH SACH PHIM */}
                {/* //TODO: DANH SACH RAP */}
                <div className="container mt-2">
                    <div className='row'>
                        <div className='col-md-2 p-sm-0 p-md-5' >
                            {/* loading ripple */}
                            
                            {theater.loading ? <Spiner/>: ''}
                            <div className="row" style={{ maxHeight: '80vh', overflow: 'scroll' }}>
                                {renderTheater()}
                            </div>
                        </div>
                        <div className='col-md-10'>
                            <div className="d-flex justify-content-center" >
                                {/* loading ripple */}
                                {theaterDetail.loading ? <Spiner/> : ''}
                            </div>
                            <div className="row" >
                                <div className='col-md-4' style={{ maxHeight: '80vh', overflow: 'scroll' }}>
                                    {renderTheaterDetail()}
                                </div>
                                <div ref={refToScroll} className='col-md-8' style={{ maxHeight: '80vh', overflow: 'scroll' }}>
                                    {renderFilmOnTheater()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* //TODO: END DANH SACH RAP */}
            </div>
        </>
    );
}
export default HomePage;




{/* //TODO: CHỌN PHIM _ RẠP _ GIỜ CHIẾU */ }
{/* <div className='position-relative' >
                    <div style={{ backgroundImage: "linear-gradient(transparent,black,transparent)" }}>
                        <div className='container py-3'>
                            <div className='row'>
                                <div className='col-md-10'>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <div className="form-group">
                                                <select className="form-control" name="" id="">
                                                    <option>Chọn phim</option>
                                                    <option>B</option>
                                                    <option>C</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className="form-group">
                                                <select className="form-control" name="" id="">
                                                    <option>Chọn rạp</option>
                                                    <option>B</option>
                                                    <option>C</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className="form-group">
                                                <select className="form-control" name="" id="">
                                                    <option>Chọn ngày</option>
                                                    <option>B</option>
                                                    <option>C</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className="form-group">
                                                <select className="form-control" name="" id="">
                                                    <option>Chọn giờ</option>
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
                        </div>
                    </div>
                </div> */}