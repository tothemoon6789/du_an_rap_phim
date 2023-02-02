import React, { Component } from 'react';

class Theater extends Component {
    render() {
        const { theater, theaterOnClick } = this.props
        return (
            <>
                <button className='btn btn-default'>
                    <img
                        onClick={() => theaterOnClick(theater.maHeThongRap)}
                        width={"100%"} className='rounded-circle img-thumbnail' src={theater.logo} alt='...' />
                </button>
            </>
        );
    }
}

export default Theater;