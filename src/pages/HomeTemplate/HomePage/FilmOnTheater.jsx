import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FilmOnTheater extends Component {
    render() {
        const { filmOnTheater,fimlClicked,booking } = this.props
        console.log(filmOnTheater);
        return (
            <div className=' p-3 rounded' style={{border:'1px solid rgba(255,255,255,0.2)'}}>
                <div
               
                className='d-flex'>
                    <div>

                        <img width={'100px'} src={filmOnTheater.hinhAnh} style={{ objectFit: "cover" }} alt='...' />
                    </div>
                    <div className='ml-2'>
                        <h5>{filmOnTheater.tenPhim}</h5>
                        {filmOnTheater.lstLichChieuTheoPhim.map((item, index) => {
                            return <Link
                            onClick={() => {
                                console.log(item);
                            //    fimlClicked(filmOnTheater)
                                booking(item)
                            }}
                            to='/booking'
                            
                            ><button
                            
                            key={index} className='btn btn-default'><span className='text-primary font-weight-bold ml-3'>{item.ngayChieuGioChieu}</span></button></Link>
                        })}

                    </div>
                </div>

            </div>
        );
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        fimlClicked: (film) => {
            const action = {
                type: 'FILM_CLICKED',
                payload: film,
            } 
            dispatch(action)
        } ,
        booking : (booking) => {
            const action = {
                type: 'BOOKING',
                payload: booking
            }
            dispatch(action)
        }
        
    }
   
}
export default connect(null,mapDispatchToProp) (FilmOnTheater);