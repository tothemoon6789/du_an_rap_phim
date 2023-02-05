import React from 'react';
import { apiDeleteFilm } from '../../../service/apiAdmin';

const FilmItem = (props) => {
    const { filmItem } = props
    return (
        <tr>
            <td>{filmItem.maPhim}</td>
            <td><img src={filmItem.hinhAnh} width={50} height={50} alt="..." /></td>
            <td>{filmItem.tenPhim}</td>
            <td>{filmItem.moTa}</td>
            <td style={{width:'150px'}}>
                <button
                onClick={() => {
                    apiDeleteFilm(filmItem.maPhim)
                    .then((res) => {
                        window.alert('Xoá thành công!') 
                    })
                    .catch((error) => {
                        window.alert('Xoá thất bại!')
                    })
                }}
                className='btn btn-danger'>
                    Xoá
                </button>
                <button className='btn btn-warning'>
                    Sửa
                </button>
            </td>
        </tr>
    );
};

export default FilmItem;