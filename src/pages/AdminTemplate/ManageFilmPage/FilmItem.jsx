import React from 'react';

const FilmItem = (props) => {
    // console.log(props);
    const {filmItem} = props
    return (
        <tr>
            <td>{filmItem.maPhim}</td>
            <td><img src={filmItem.hinhAnh} width={50} height={50} alt="..." /></td>
            <td>{filmItem.tenPhim}</td>
            <td>{filmItem.moTa}</td>
            <td><button className='btn btn-default'><i className="fa-solid fa-pen-to-square"></i></button><button className='btn btn-default'><i className="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
    );
};

export default FilmItem;