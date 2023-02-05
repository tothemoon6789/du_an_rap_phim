import React from 'react';
import { useEffect } from 'react';

const TheaterOnDetail = (props) => {
    const { theater, handleOnclickCumRap } = props
    console.log(theater);
    useEffect(() => {
       handleOnclickCumRap(theater.cumRapChieu) 
    },[])
    return (
        <>
            <button
            style={{width:'100%'}}
            onClick={() => {
                handleOnclickCumRap(theater.cumRapChieu)
                // handleOnclickCumRap('hi')
            }}
            className='btn btn-default'>
                <img width={"100%"} className='rounded-circle img-thumbnail' src={theater.logo} alt='...' />
            </button>
        </>
    );

};

export default TheaterOnDetail;