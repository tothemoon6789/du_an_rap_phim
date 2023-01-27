import React, { Component } from 'react';

class Theater extends Component {
    render() {
        const {theater,theaterOnClick} = this.props
        return (
            <img
            onClick={() => theaterOnClick(theater.maHeThongRap)}
            width={"100%"} className='rounded-circle img-thumbnail' src={theater.logo} alt='...' />
        );
    }
}

export default Theater;