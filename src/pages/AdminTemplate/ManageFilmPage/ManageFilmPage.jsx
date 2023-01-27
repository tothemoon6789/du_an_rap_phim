import React, { Component } from 'react';

class ManageFilmPage extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Quản lý phim</h1>
                <button className='btn btn-primary'>Thêm mới</button>
                <div className="form-group mt-2">
                    <input type="text" className="form-control" placeholder='Nhập tên phim' />
                </div>
                <table class="table">
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
                        <tr>
                            <td>123</td>
                            <td><img src="https://i.pravatar.cc" width={50} height={50} alt="..." /></td>
                            <td>Tam quốc chí</td>
                            <td>Tam quốc chí là bộ phim đặc sắc, abc gì đó</td>
                            <td><button className='btn btn-default'><i class="fa-solid fa-pen-to-square"></i></button><button className='btn btn-default'><i className="fa-solid fa-trash text-danger"></i></button></td>
                        </tr>

                       

                    </tbody>
                </table>

            </div>
        );
    }
}

export default ManageFilmPage;