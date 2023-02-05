import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
                <Link onClick={() => {
                    this.props.fimlClicked(film)
                    // window.alert(film.maPhim)
                }} to="/detail">
                    <div
                        className="mt-3 rounded shadow animate__animated animate__fadeIn" style={{border:'1px solid rgba(255,255,255,0.2)'}}>
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
                </Link>
            </>
        );
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        fimlClicked: (film) => {
            const action = {
                type: 'FILM_CLICKED',
                payload: film,
            } 
            dispatch(action)
        }
    }
}

export default connect(null,mapDispatchToProp) (Film);