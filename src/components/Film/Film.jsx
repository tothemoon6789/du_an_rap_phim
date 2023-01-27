import React, { Component } from 'react';
const textStyleOne = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
};
const textStyleThree = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
};
class Film extends Component {
    render() {
        const { film } = this.props
        return (
            <>
            

                <div
                className="border mt-3 rounded shadow">
                    <img
                        style={{ height: '250px', objectFit: 'cover', objectPosition: '0% 20%' }}
                        className="card-img-top" src={film.hinhAnh} alt="" />
                    <div className="card-body" style={{ height: '150px' }}>
                        <h4 style={textStyleOne} className="card-title">
                            {film.tenPhim}
                        </h4>
                        <p style={textStyleThree}>
                            {film.moTa}
                        </p>
                    </div>
                </div>
                 
            </>
        );
    }
}

export default Film;