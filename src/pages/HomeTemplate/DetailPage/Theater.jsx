import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Theater = (props) => {
    const {theater}= props
    return (
        <>
            <div className='d-flex'>
                <div>
                    <img width={50} height={50} src={theater.hinhAnh} alt='...' />
                </div>
                <div className='ml-2'>
                    <h6>{theater.tenCumRap}</h6>
                    <address>{theater.diaChi}</address>
                </div>
            </div>
          
            <div className='d-flex'>
                <span className=''>Lịch chiếu</span>
                <div className='ml-2'>
                    {theater.lichChieuPhim?.map((item) => {
                        return <Link onClick={() => {
                            props.booking(item)
                        }} 
                        to='/booking'
                        ><span className='font-weight-bold text-primary ml-2'>{moment(item.ngayChieuGioChieu).format('DD/MM/YYYY')}</span></Link>
                        // giaVe
                        // : 
                        // 75000
                        // maLichChieu
                        // : 
                        // "40481"
                        // maRap
                        // : 
                        // "474"
                        // ngayChieuGioChieu
                        // : 
                        // "2020-08-30T18:30:00"
                        // tenRap
                        // : 
                        // "Rạp 4"
                        // thoiLuong
                        // : 
                        // 120


                        // giaVe
                        //     : 
                        //     75000
                        //     maLichChieu
                        //     : 
                        //     40480
                        //     maRap
                        //     : 
                        //     "511"
                        //     ngayChieuGioChieu
                        //     : 
                        //     "2020-08-27T12:27:58"
                        //     tenRap
                        //     : 
                        //     "Rạp 1"
                    })}
                </div>
            </div>
        </>
    );
};
const mapDispatchToProp = (dispatch) => {
    return {
        booking : (booking) => {
            const action = {
                type: 'BOOKING',
                payload: booking
            }
            dispatch(action)
        }
    }
}
export default connect(null,mapDispatchToProp) (Theater);