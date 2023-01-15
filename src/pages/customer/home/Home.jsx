import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <>
            {/* style={{position:"relative",top:"-100px",zIndex:"-2"}} */}
            
                <div className='bg-dark text-white' >
                    {/* //TODO: HINH CAROUSEL */}
                    <div >
                        <img width={"100%"} height="400px" style={{ objectFit: 'cover', objectPosition: "100% 20%" }} src='./images/bg_customer_home_avatar.jpg' alt='...' />
                    </div>
                    {/* //TODO: END HINH CAROUSEL */}
                    {/* //TODO: CHỌN PHIM _ RẠP _ GIỜ CHIẾU */}
                    <div className='position-relative' style={{ top: "-50px" }}>

                        <div style={{ backgroundImage: "linear-gradient(transparent,black,transparent)" }}>
                            <div className='container py-3'>

                                <div className='row'>
                                    <div className='col-md-10'>
                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <div className="form-group">
                                                    <select className="form-control" name="" id="">
                                                        <option>Chọn phim</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className="form-group">
                                                    <select className="form-control" name="" id="">
                                                        <option>Chọn phim</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className="form-group">
                                                    <select className="form-control" name="" id="">
                                                        <option>Chọn phim</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className="form-group">
                                                    <select className="form-control" name="" id="">
                                                        <option>Chọn phim</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                    </select>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='col-md-2'>
                                        <button className='btn btn-success'>BOOKING NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* //TODO: END CHỌN PHIM _ RẠP _ GIỜ CHIẾU */}
                    {/* //TODO: DANH SACH PHIM */}
                    <div className='container text-dark'>
                        <div className='row'>
                            <div className='col-md-3 mt-2'>
                                <div className="card">
                                    <img
                                        style={{ height: "300px", objectFit: "cover" }}
                                        className="card-img-top" src="https://file.qdnd.vn/data/images/0/2021/02/25/vuongha/bo%20gia%20comback.png?dpi=150&quality=100&w=575" alt='...' />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 mt-2'>
                                <div className="card">
                                    <img
                                        style={{ height: "300px", objectFit: "cover" }}
                                        className="card-img-top" src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/3/1040917/279439500_3960908423.jpg" alt='...' />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 mt-2'>
                                <div className="card">
                                    <img
                                        style={{ height: "300px", objectFit: "cover" }} className="card-img-top" src="https://toplist.vn/images/800px/nghe-sieu-de-869239.jpg" alt='...' />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 mt-2'>
                                <div className="card">
                                    <img
                                        style={{ height: "300px", objectFit: "cover" }} className="card-img-top" src="https://upload.wikimedia.org/wikipedia/vi/d/d2/Poster_phim_Black_Adam.jpg" alt='...' />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 mt-2' >
                                <div className="card">
                                    <img
                                        style={{ height: "300px", objectFit: "cover" }} className="card-img-top" src="https://fr.web.img6.acsta.net/pictures/22/10/04/14/00/5857542.jpg" alt='...' />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 mt-2'>
                                <div className="card">
                                    <img
                                        style={{ height: "300px", objectFit: "cover" }} className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/1/17/BadMan1930.jpg" alt='...' />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 mt-2'>
                                <div className="card">
                                    <img
                                        style={{ height: "300px", objectFit: "cover" }} className="card-img-top" src="data:image/jpeg;base64,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" alt='...' />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 mt-2'>
                                <div className="card">
                                    <img
                                        style={{ height: "300px", objectFit: "cover" }} className="card-img-top" src="https://de.web.img3.acsta.net/pictures/18/12/20/10/51/0652418.jpg" alt='...' />
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* //TODO: END DANH SACH PHIM */}
                    {/* //TODO: DANH SACH RAP */}
                    <div className="container mt-2">
                        <div className='row'>
                            <div className='col-md-2 d-flex d-md-block'>
                                <div className='p-2'>
                                    <img className='img-fluid rounded-circle img-thumbnail' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPZ_vEsQvOdr4V-aDMvh8d1MW0moR1XfTieIDHpIvN4-RVAjuVhl-VxONpXY_1KWvy-A&usqp=CAU' alt='...' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid rounded-circle img-thumbnail' src='https://storage.clingme.vn/storage/file_1524802570_895921188.png?imageWidth=562' alt='...' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid rounded-circle img-thumbnail' src='https://yt3.ggpht.com/ytc/AAUvwninldvPmSqaBokFTUU-Wk66FtqF0HuETaKUjxFaiQ=s900-c-k-c0x00ffffff-no-rj' alt='...' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid rounded-circle img-thumbnail' src='https://yt3.googleusercontent.com/n83D4riFGrEx2aouQdc85v8VGelD7JcN97L8JTZ8e8PPUMb6QuqCgeutdrL71Q-cgDUIn3QT4Q=s900-c-k-c0x00ffffff-no-rj' alt='...' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid rounded-circle img-thumbnail' src='https://www.hoteljob.vn/uploads/images/18-12-19-11/t%E1%BA%A3ixu%E1%BB%91ngmmmmmm.jpg' alt='...' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid rounded-circle img-thumbnail' src='https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.18169-9/11738012_638376569630533_4842848653150639340_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SO4Te7Kew1gAX_Mdl9O&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfA_w3EFpKCO2exEPjjspGNCR2s2DV1DZbAuTstCaoaZEQ&oe=63EB0FD2' alt='...' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid rounded-circle img-thumbnail' src='data:image/png;base64,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' alt='...' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid rounded-circle img-thumbnail' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPZ_vEsQvOdr4V-aDMvh8d1MW0moR1XfTieIDHpIvN4-RVAjuVhl-VxONpXY_1KWvy-A&usqp=CAU' alt='...' />
                                </div>

                            </div>
                            <div className='col-md-10'>
                                <div className="row">
                                    <div className='col-md-4 border'>
                                        <div className='d-flex p-2'>
                                            <img src='https://i.pravatar.cc//100' alt='...' />
                                            <div className='ml-2'>
                                                <h5>Galaxy Quang trung</h5>
                                                <span>Chi tiết</span>
                                            </div>
                                        </div>
                                        <div className='d-flex p-2'>
                                            <img src='https://i.pravatar.cc//100' alt='...' />
                                            <div className='ml-2'>
                                                <h5>Galaxy Quang trung</h5>
                                                <span>Chi tiết</span>
                                            </div>
                                        </div>
                                        <div className='d-flex p-2'>
                                            <img src='https://i.pravatar.cc//100' alt='...' />
                                            <div className='ml-2'>
                                                <h5>Galaxy Quang trung</h5>
                                                <span>Chi tiết</span>
                                            </div>
                                        </div>
                                        <div className='d-flex p-2'>
                                            <img src='https://i.pravatar.cc//100' alt='...' />
                                            <div className='ml-2'>
                                                <h5>Galaxy Quang trung</h5>
                                                <span>Chi tiết</span>
                                            </div>
                                        </div>
                                        <div className='d-flex p-2'>
                                            <img src='https://i.pravatar.cc//100' alt='...' />
                                            <div className='ml-2'>
                                                <h5>Galaxy Quang trung</h5>
                                                <span>Chi tiết</span>
                                            </div>
                                        </div>
                                        <div className='d-flex p-2'>
                                            <img src='https://i.pravatar.cc//100' alt='...' />
                                            <div className='ml-2'>
                                                <h5>Galaxy Quang trung</h5>
                                                <span>Chi tiết</span>
                                            </div>
                                        </div>
                                        <div className='d-flex p-2'>
                                            <img src='https://i.pravatar.cc//100' alt='...' />
                                            <div className='ml-2'>
                                                <h5>Galaxy Quang trung</h5>
                                                <span>Chi tiết</span>
                                            </div>
                                        </div>


                                    </div>
                                    <div className='col-md-8'>
                                        <div className=' p-3 rounded border'>
                                            <div className='d-flex'>
                                                <img src='https://i.pravatar.cc//100' style={{ objectFit: "cover" }} alt='...' />
                                                <div className='ml-2'>
                                                    <h5>Phim avatar 5</h5>
                                                    <address>Tổ 5: Phường hiệp bình chánh   </address>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>

                                                </div>
                                            </div>

                                        </div>
                                        <div className=' p-3 rounded border'>
                                            <div className='d-flex'>
                                                <img src='https://i.pravatar.cc//100' style={{ objectFit: "cover" }} alt='...' />
                                                <div className='ml-2'>
                                                    <h5>Phim avatar 5</h5>
                                                    <address>Tổ 5: Phường hiệp bình chánh   </address>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>

                                                </div>
                                            </div>

                                        </div>
                                        <div className=' p-3 rounded border'>
                                            <div className='d-flex'>
                                                <img src='https://i.pravatar.cc//100' style={{ objectFit: "cover" }} alt='...' />
                                                <div className='ml-2'>
                                                    <h5>Phim avatar 5</h5>
                                                    <address>Tổ 5: Phường hiệp bình chánh   </address>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>

                                                </div>
                                            </div>

                                        </div>
                                        <div className=' p-3 rounded border'>
                                            <div className='d-flex'>
                                                <img src='https://i.pravatar.cc//100' style={{ objectFit: "cover" }} alt='...' />
                                                <div className='ml-2'>
                                                    <h5>Phim avatar 5</h5>
                                                    <address>Tổ 5: Phường hiệp bình chánh   </address>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>

                                                </div>
                                            </div>

                                        </div>
                                        <div className=' p-3 rounded border'>
                                            <div className='d-flex'>
                                                <img src='https://i.pravatar.cc//100' style={{ objectFit: "cover" }} alt='...' />
                                                <div className='ml-2'>
                                                    <h5>Phim avatar 5</h5>
                                                    <address>Tổ 5: Phường hiệp bình chánh   </address>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>

                                                </div>
                                            </div>

                                        </div>
                                        <div className=' p-3 rounded border'>
                                            <div className='d-flex'>
                                                <img src='https://i.pravatar.cc//100' style={{ objectFit: "cover" }} alt='...' />
                                                <div className='ml-2'>
                                                    <h5>Phim avatar 5</h5>
                                                    <address>Tổ 5: Phường hiệp bình chánh   </address>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>

                                                </div>
                                            </div>

                                        </div>
                                        <div className=' p-3 rounded border'>
                                            <div className='d-flex'>
                                                <img src='https://i.pravatar.cc//100' style={{ objectFit: "cover" }} alt='...' />
                                                <div className='ml-2'>
                                                    <h5>Phim avatar 5</h5>
                                                    <address>Tổ 5: Phường hiệp bình chánh   </address>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>
                                                    <button className='btn btn-default'><span className='text-success font-weight-bold ml-3'>10:50 AM</span></button>

                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //TODO: END DANH SACH RAP */}
                </div>
            </>
        );
    }
}

export default Home;