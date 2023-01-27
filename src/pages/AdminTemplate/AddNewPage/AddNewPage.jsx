import React, { Component } from 'react';

class AddNewPage extends Component {
    render() {
        return (
            <div className='ml-25%'>
                <h1>Thêm mới phim</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label text-right">Font Size</label>
                        <div className="col-sm-10">
                            <div className="btn-group">

                                <button type="button" className="btn btn-primary">Small</button>
                                <button type="button" className="btn btn-primary">Default</button>
                                <button type="button" className="btn btn-primary">Large</button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-form-label text-right">Tên phim</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-form-label text-right">Trailer</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-form-label text-right">Mô tả</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-form-label text-right">Ngày khởi chiếu</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-form-label text-right">Đang chiếu</label>
                        <div className="col-sm-10">

                            <input type="checkbox" style={{ transform: 'scale(2)' }} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-form-label text-right">Sắp chiếu</label>
                        <div className="col-sm-10">

                            <input type="checkbox" style={{ transform: 'scale(2)' }} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-form-label text-right">Hot chiếu</label>
                        <div className="col-sm-10">

                            <input type="checkbox" style={{ transform: 'scale(2)' }} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-form-label text-right">Số sao</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" style={{ width: '50%' }} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-form-label text-right">Hình ảnh</label>
                        <div className="col-sm-10">
                            <input type="file" className="" style={{ width: '50%' }} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-form-label text-right"></label>
                        <div className="col-sm-10">
                            <img src="https://i.pravatar.cc" alt="..." width={'50%'} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-form-label text-right"></label>
                        <div className="col-sm-10">
                            <button type="button" name id className="btn btn-primary btn-lg btn-block">Thêm phim</button>
                        </div>
                    </div>

                </form>


            </div>
        );
    }
}

export default AddNewPage;