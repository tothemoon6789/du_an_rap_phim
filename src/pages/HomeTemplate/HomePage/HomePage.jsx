import React, { Component } from 'react';
import Film from '../../../components/Film/Film';
import { filmApi } from '../../../service/filmApi';
import { apiShowTimeByTheater, apiTheater } from '../../../service/theaterApi';
import Carousel from './Carousel';
import FilmOnTheater from './FilmOnTheater';
import Theater from './Theater';
import TheaterDetail from './TheaterDetail';
// import 'swiper/css'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: {
                loading: false,
                data: null,
                error: null,
            },
            theater: {
                loading: false,
                data: null,
                error: null,
            },
            theaterDetail: {
                loading: false,
                data: [],
                error: null,
            },
            theaterCode: 'CGV',
            theaterCodeDetail: "cgv-aeon-tan-phu",
        }
        this.refToScroll = React.createRef()
    }
    render() {
        const { film, theater, theaterDetail } = this.state
        return (
            <>
                <Carousel />

                <div className='' >
                    {/* //TODO: HINH CAROUSEL */}
                    <div >

                        {/* <img width={"100%"} height="400px" style={{ objectFit: 'cover', objectPosition: "100% 20%" }} src='./images/bg_customer_home_avatar.jpg' alt='...' /> */}
                    </div>
                    {/* //TODO: END HINH CAROUSEL */}
                    {/* //TODO: CHỌN PHIM _ RẠP _ GIỜ CHIẾU */}
                    <div className='position-relative' >
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

                    </div>
                    {/* //TODO: END CHỌN PHIM _ RẠP _ GIỜ CHIẾU */}
                    {/* //TODO: DANH SACH PHIM */}
                    <div className='container text-dark'>
                        <div className='row'>
                            {/* loading ripple */}
                            {film.loading ? <div class="lds-ripple"><div></div><div></div></div> : ''}
                            {this.renderShowingFilm()}
                        </div>
                    </div>
                    {/* //TODO: END DANH SACH PHIM */}
                    {/* //TODO: DANH SACH RAP */}

                    <div className="container mt-2">
                        <div className='row'>
                            <div className='col-md-2 p-sm-0 p-md-5' >
                                <div className="row">
                                    {/* loading ripple */}
                                    {theater.loading ? <div class="lds-ripple"><div></div><div></div></div> : ''}
                                    {this.renderTheater()}
                                </div>
                            </div>
                            <div className='col-md-10'>
                                <div className="row">
                                    <div className='col-md-4 border'>
                                        {/* loading ripple */}
                                        {theaterDetail.loading ? <div class="lds-ripple"><div></div>{console.log(this.state.theater.error)}<div></div></div> : ''}
                                        {this.renderTheaterDetail()}


                                    </div>
                                    <div ref={this.refToScroll} className='col-md-8'>

                                        {this.renderFilmOnTheater()}


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
    componentDidMount() {
        this.setState({
            ...this.state,
            film: {
                ...this.state.film,
                loading: true,
            },
            theater: {
                ...this.state.theater,
                loading: true,
            },
            theaterDetail: {
                ...this.state.theaterDetail,
                loading: true,
            }

        })
        filmApi
            .then((res) => {
                this.setState({
                    ...this.state,
                    film: {
                        ...this.state.film,
                        loading: false,
                        data: res.data.content,

                    }
                })
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    film: {
                        ...this.state.film,
                        loading: true,
                        data: null,
                        error: error
                    }

                })
            })
        apiTheater
            .then((res) => {
                console.log(`in then apiTheater: ${res}`);
                this.setState({
                    ...this.state,
                    theater: {
                        ...this.state.theater,
                        loading: false,
                        data: res.data.content,

                    }
                })
            })
            .catch((error) => {
                console.log(`in err apiTheater: ${error}`);
                this.setState({
                    ...this.state,
                    theater: {
                        ...this.state.theater,
                        loading: true,
                        data: null,
                        error: error
                    }

                })
            })
        apiShowTimeByTheater
            .then((res) => {
                const findIndex = res.data.content.findIndex((theater) => {
                    return theater.maHeThongRap === this.state.theaterCode
                })
                if (findIndex !== -1) {
                    this.setState({
                        ...this.state,
                        theaterDetail: {
                            ...this.state.theaterDetail,
                            loading: false,
                            data: res.data.content[findIndex].lstCumRap,
                        }

                    })
                }
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    theaterDetail: {
                        ...this.state.theaterDetail,
                        loading: true,
                        error: error,
                    }

                })
            })
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.theaterCode !== this.state.theaterCode) {
            apiShowTimeByTheater
                .then((res) => {
                    const findIndex = res.data.content.findIndex((theater) => {
                        return theater.maHeThongRap === this.state.theaterCode
                    })
                    if (findIndex !== -1) {
                        this.setState({
                            ...this.state,
                            theaterDetail: {
                                ...this.state.theaterDetail,
                                loading: false,
                                data: res.data.content[findIndex].lstCumRap,
                            }

                        })
                    }
                })
                .catch((error) => {
                    this.setState({
                        ...this.state,
                        theaterDetail: {
                            ...this.state.theaterDetail,
                            loading: true,
                            error: error,
                        }

                    })
                })
        }
        console.log(this.state);
    }
    renderShowingFilm = () => {
        const { film } = this.state
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
    renderTheater = () => {
        const { theater } = this.state
        if (theater.data) {
            return theater.data.map((theater, index) => {
                return (
                    <div key={index} className="col-2 col-md-12 p-0">

                        <Theater theater={theater} theaterOnClick={this.handelTheaterOnClick} />
                    </div>
                )
            })
        }
    }
    renderTheaterDetail = () => {
        const { theaterDetail } = this.state
        if (theaterDetail.data) {
            return theaterDetail.data.map((theaterDetail, index) => {
                return (
                    <TheaterDetail key={index} theaterDetail={theaterDetail} scroll={this.handelScrollIntoView} handelTheaterDetailOnClick={this.handelTheaterDetailOnClick} />

                )
            })
        }

    }
    renderFilmOnTheater = () => {
        const { theaterDetail, theaterCodeDetail } = this.state
        if (theaterDetail.data) {
            const findIndex = theaterDetail.data.findIndex((theaterDetail) => {
                return theaterDetail.maCumRap === theaterCodeDetail
            })
            if (findIndex !== -1) {

                return theaterDetail.data[findIndex].danhSachPhim.map((filmOnTheater, index) => {
                    return (
                        <FilmOnTheater key={index} filmOnTheater={filmOnTheater} />
                    )


                })

            }

        }
    }
    handelScrollIntoView = () => {
        this.refToScroll.current.scrollIntoView()
    }
    handelTheaterOnClick = (itemClicked) => {
        this.setState({
            ...this.state,
            theaterCode: itemClicked,
        })
    }
    handelTheaterDetailOnClick = (itemClicked) => {
        this.setState({
            ...this.state,
            theaterCodeDetail: itemClicked,
        })
    }
}
export default HomePage;