import React, { Component } from 'react';
import { apiLogin } from '../../../service/apiLogin';
import { connect } from 'react-redux';
import { ADD_USER_ACCESS_TOKEN } from '../../../store/reducer/user/const';
import { Link, redirect } from 'react-router-dom';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            fullFilled: "",
            spiner: false,
            accessToken:'',

        }
    }

    render() {
        
       
        return (
            <form onClick={(event) => {
                event.preventDefault()
            }}
                className='container'
            >
                <div className='row justify-content-center '>
                    <div className="col-md-4 mt-5 border rounded py-5 mb-5 shadow">
                        <h1 className='mb-4'>Đăng nhập</h1>
                        <input onChange={this.handleOnchange} name='taiKhoan' className='form-control mt-2' type='text' placeholder='Tài khoản' />
                        <input onChange={this.handleOnchange} name='matKhau' className='form-control mt-2' type='password' placeholder='Mật khẩu' />
                        <div className='text-danger'>{this.state.fullFilled}</div>
                        <button
                            onClick={() => {
                                this.handelLogin()
                            }}
                            className='btn btn-block btn-primary mt-4'>Đăng nhập</button>
                             {this.state.spiner ?
                                <div className="d-flex justify-content-center">
                                    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>


                                </div> : ''
                            }
                    </div>
                </div>
                <Link to='/user'>

               
                <button
                className='btn btn-danger'
                onClick={() => {
                  console.log(this.props.accessToken);
                }}
                >CLIKE ME</button>
                 </Link>
            </form>
        );
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.accessToken!== this.props.accessToken) {
            console.log('IN DIDMOUNT');
            
        }
    }
    handelLogin = () => {
        const { taiKhoan, matKhau } = this.state
       
        const data = {
            taiKhoan,
            matKhau,
        }
        this.setState({
            ...this.state,
            fullFilled:'',
        })
        
        if (taiKhoan && matKhau) {
            this.setState({
                ...this.state,
                spiner:true,
                fullFilled:'',
            })
            apiLogin(data)
            .then((res) => {
                console.log(res);
                this.setState({
                    ...this.state,
                    spiner:false,
                })
                if (res.data.content.accessToken) {
                    this.props.addAccessToken(res.data.content.accessToken)
                    redirect()
                    // window.location = "http://localhost:3000/user"
                    // console.log('truoc redirect');
                    // redirect("user")
                    window.alert('Đăng nhập thành công!')
                }
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    ...this.state,
                    spiner:false,
                    fullFilled:'* Tên đăng nhập và mật khẩu không đúng!',
                })
            })
        } else {
            
            this.setState({
                ...this.state,
                fullFilled:'* Vui lòng điền đầy đủ thông tin!',
            })
        }
    }
    handleOnchange = (e) => {
        const { name, value } = e.target
        this.setState({
            ...this.state,
            [name]: value,
        }, () => console.log(this.state))
    }
    
}

const mapStateToProp = (state) => {
    return {
        accessToken: state.userReducer.accessToken,
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        addAccessToken : (token) => {
            const action = {
                type: ADD_USER_ACCESS_TOKEN,
                payload: token,
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProp,mapDispatchToProp) (LoginPage);