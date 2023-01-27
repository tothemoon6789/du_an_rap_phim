import React, { Component } from 'react';

class FilmOnTheater extends Component {
    render() {
        const { filmOnTheater } = this.props
        return (
            <div className=' p-3 rounded border'>
                <div
               
                className='d-flex'>
                    <div>

                        <img width={'100px'} src={filmOnTheater.hinhAnh} style={{ objectFit: "cover" }} alt='...' />
                    </div>
                    <div className='ml-2'>
                        <h5>{filmOnTheater.tenPhim}</h5>
                        {filmOnTheater.lstLichChieuTheoPhim.map((time, index) => {
                            return <button key={index} className='btn btn-default'><span className='text-success font-weight-bold ml-3'>{time.ngayChieuGioChieu}</span></button>
                        })}

                    </div>
                </div>

            </div>
        );
    }
}

export default FilmOnTheater;