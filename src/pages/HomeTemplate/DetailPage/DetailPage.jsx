import moment from 'moment';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiGetCodeShowingFilm } from '../../../service/apiHome';
import Theater from './Theater';
import TheaterOnDetail from './TheaterOnDetail';
import Week from './Week';
const DetailPage = (props) => {
    const [theater, setTheater] = useState({
        loading: false,
        data: null,
        error: true,
    })
    const [theaterDetail, setTheaterDetail] = useState({
        loading: false,
        data: null,

    })
    const { filmClicked } = props
    useEffect(() => {
        setTheater({
            ...theater,
            loading: true,
        })
        apiGetCodeShowingFilm(props.filmClicked.maPhim)
            .then((res) => {
                setTheater({
                    ...theater,
                    loading: false,
                    data: res.data.content.heThongRapChieu,
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
    useEffect(() => {
    }, [theaterDetail])
    const handleOnclickCumRap = (cumrap) => {
        setTheaterDetail(cumrap)
    }
    const renderTheater = () => {
        if (theater.data) {
            return theater.data.map((theater, index) => {
                return (
                    <div key={index} className="col-2 col-md-12 p-0">
                        <TheaterOnDetail theater={theater} handleOnclickCumRap={handleOnclickCumRap} />
                    </div>
                )
            })
        }
    }
    const renderTheaterDetail = () => {
        if (theaterDetail.length > 0) {

            return theaterDetail.map((item, index) => {
                return <div key={index} className='p-4 '>
                    <Theater theater={item} />
                </div>
            })
        }
    }
    return filmClicked.maPhim === undefined ?
        <div className="container">
            <Link to='/' className='text-center'><button type="button" class="btn btn-primary">Quay về trang chủ</button></Link>
        </div>
        :
        (
            <>
                <div className='container'>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/' >Trang chủ</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Chi tiết</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-md-4">
                            <img className='img-fluid' src={filmClicked.hinhAnh} alt='...' />
                        </div>
                        <div className="col-md-8">
                            <h2>{filmClicked.tenPhim}</h2>
                            <p>{filmClicked.moTa}</p>
                            <table >
                                <tbody>
                                    <tr>
                                        <td className='border-bottom p-2'>Đánh giá</td>
                                        <td className='border-bottom p-2'>{filmClicked.danhGia}</td>
                                    </tr>
                                    <tr>
                                        <td className='border-bottom p-2'>Độ hot</td>
                                        <td className='border-bottom p-2'>Rất hot</td>
                                    </tr>
                                    <tr>
                                        <td className='border-bottom p-2'>Ngày khởi chiếu</td>
                                        <td className='border-bottom p-2'>{moment(filmClicked.ngayKhoiChieu).format('DD/MM/YYYY')}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href={filmClicked.trailer}>
                                                <button
                                                    className='btn btn-primary mt-2'>XEM TRAILER</button>
                                            </a>
                                        </td>
                                        {/* <td><Link to='/booking'><button
                                            className='btn btn-primary'>MUA VÉ NGAY</button></Link></td> */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-2 d-flex d-md-block">
                            {/* loading ripple */}
                            {theater.loading ? <div className='d-flex justify-content-center'><div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> : ''}
                            {renderTheater()}
                        </div>
                        <div className="col-md-10">
                            <div className='justify-content-between d-flex'>
                                <Week />
                            </div>

                            {renderTheaterDetail()}

                        </div>
                    </div>
                </div>
            </>
        );
}
const mapStateToProp = (state) => {
    return {
        filmClicked: state.filmReducer.filmClicked
    }
}
export default connect(mapStateToProp, null)(DetailPage);