import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Seat = (props) => {
    const [seat, setSeat] = useState({})
    const [chose,setChose] = useState(false)
    // console.log(props.seat);
    // const {handleOnclickSeat} = props
    // const { seat } = props
    // console.log(props);
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
            style={seat.daDat === true ?
                { width: "40px", height: "40px", backgroundColor: "gray", fontSize: '12px' } :
                chose ?
                    { width: "40px", height: "40px", backgroundColor: "red", fontSize: '12px' } :
                    seat.loaiGhe === 'Vip' ?
                    { width: "40px", height: "40px", backgroundColor: "orange", fontSize: '12px' } :
                    { width: "40px", height: "40px", backgroundColor: "green", fontSize: '12px' } 

            }>
            {seat.stt}
        </button>
    );
};

export default Seat;