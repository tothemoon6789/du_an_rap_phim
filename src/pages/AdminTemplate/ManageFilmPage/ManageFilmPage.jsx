
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { apiListFilm } from '../../../service/apiAdmin';
import FilmItem from './FilmItem';

const ManageFilmPage = (props) => {
    useEffect(() => {
        apiListFilm
        .then((res) => {
            props.addListFilm(res.data.content);
        })
        .catch((error) => {
            // console.log(error); 
        })
    },[])
    useEffect(() => {
        // console.log(props.searchKey);
    },[props.searchKey])
    const renderListFilm = () => {
        if (props.listSearchFilm.length) {
            return props.listSearchFilm.map((film, index) => {
                return <FilmItem key= {index} filmItem = {film}/>
            })
        }

    }
    return (
        <div className='container p-3' style={{marginTop:'50px'}}>
            <h1>Quản lý phim</h1>
            <button className='btn btn-primary'>Thêm mới</button>
            <div className="form-group mt-2">
                <input
                onChange={(e) => {
                    props.addSearhKey(e.target.value)
                }}
                type="text" className="form-control bg-dark text-white" placeholder='Nhập tên phim' />
            </div>
            <table className="table text-white">
                <thead>
                    <tr>
                        <th>Mã phim</th>
                        <th>Hình ảnh</th>
                        <th>Tên phim</th>
                        <th>Mô tả</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                  

                   {renderListFilm()}

                </tbody>
            </table>

        </div>
    );
   
};
const mapStateToProp = (state) => {
    return {
        listFilm : state.filmReducer.listFilm,
        searchKey : state.filmReducer.searchKey,
        listSearchFilm : state.filmReducer.listSearchFilm,
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        addListFilm : (listFilm) => {
            const action = {
                type: 'ADD_LIST_FILM',
                payload: listFilm
            } 
            dispatch(action)
        },
        addSearhKey : (searchKey) => {
            const action = {
                type: 'SEARCH_FILM',
                payload: searchKey
            } 
            dispatch(action)
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp) (ManageFilmPage);