import React, { Component } from 'react';

class Theater extends Component {
    render() {
        const { theater, handelTheaterOnClick } = this.props
        return (
            <>
                <button style={{width:'100%'}} className='btn btn-default'>
                    <img
                        onClick={() => handelTheaterOnClick(theater.maHeThongRap)}
                        style={{width:'100%'}}
                        
                        
                        
                        className='rounded-circle img-thumbnail' src={theater.logo} alt='...' />
                </button>
            </>
        );
    }
}

export default Theater;