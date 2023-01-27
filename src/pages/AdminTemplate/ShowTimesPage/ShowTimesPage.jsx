import React, { Component } from 'react';

class ShowTimesPage extends Component {
    render() {
        return (
            <div className='p-2'>
                <h1>Tạo lịch chiếu</h1>
                <h3>Aventer 2023</h3>
                <img src="https://i.pravatar.cc" width={400} alt="" />
                <div className="row mt-2 ">
                    <div className="col-md-2 text-right">
                        <label htmlFor="">Hệ thống rạp</label>
                    </div>
                    <div className="col-md-10">
                        <form className='form-group' action="">
                            <select className='form-control'>
                                <option value="ABC">ABC</option>
                                <option value="ABC">ABC</option>
                                <option value="ABC">ABC</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 text-right">
                        Cụm rạp
                    </div>
                    <div className="col-md-10">
                        <form className='form-group' action="">
                            <select className='form-control'>
                                <option value="ABC">ABC</option>
                                <option value="ABC">ABC</option>
                                <option value="ABC">ABC</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 text-right">
                        <label htmlFor="">Ngày chiếu, giờ chiếu</label>
                    </div>
                    <div className="col-md-10">
                        <form action="" className='form-group'>

                            <input type="datetime-local" name="" id="" className='form-control' />
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 text-right">
                        <label htmlFor="">Giá vé</label>
                    </div>
                    <div className="col-md-10">
                        <form action="" className='form-group'>

                            <input type="number" name="" id="" className='form-control' />
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 text-right">
                    </div>
                    <div className="col-md-10">
                        <form action="" className='form-group'>

                            <input type="submit" name="" id="" className='btn btn-primary' value='Khởi tạo' />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowTimesPage;