import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Seat = (props) => {
    const [seat, setSeat] = useState({})
    const [chose,setChose] = useState(false)
    useEffect(() => {
        setSeat(props.seat)
    }, [])
    return (
        <button 
            onClick={() => {
                if (chose) {
                    setChose(false);
                    props.handleOnRemoveSeat(seat)
                } else {
                    props.handleOnclickSeat(seat)
                    setChose(true)

                }
            }}
            disabled={seat.daDat}
            className='seat-booking'
            style={seat.daDat === true ?
                {  backgroundColor: "gray", fontSize: '12px' } :
                chose ?
                    {  backgroundColor: "red", fontSize: '12px' } :
                    seat.loaiGhe === 'Vip' ?
                    {  backgroundColor: "orange", fontSize: '12px' } :
                    {  backgroundColor: "green", fontSize: '12px' } 

            }>
            {seat.stt}
        </button>
    );
};

export default Seat;