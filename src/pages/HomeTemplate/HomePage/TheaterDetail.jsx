import React, { Component } from 'react';

class TheaterDetail extends Component {
    render() {
        const {theaterDetail, scroll, handelTheaterDetailOnClick} = this.props
        return (
            <>
            <div
            onClick={() => {
                scroll()
                handelTheaterDetailOnClick(theaterDetail)
            }}
            
            className='d-flex p-2'>
                {/* <button
                onClick={() => {
                }}
                > */}
                        <img width={'50px'} height={'50px'} style={{objectFit:'cover'}} src={theaterDetail.hinhAnh} alt='...' />
                        <div className='ml-2'>
                            <h5>{theaterDetail.tenCumRap}</h5>
                            <span>{theaterDetail.diaChi}</span>
                        </div>
                        {/* </button> */}
                    </div>
            </>
        );
    }
}

export default TheaterDetail;