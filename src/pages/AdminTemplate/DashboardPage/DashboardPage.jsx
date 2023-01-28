import React, { Component } from 'react';
import { filmApi } from '../../../service/filmApi';

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false, 
            data: null,
            error: null,
        }
    }
    
    render() {
        return (
            <>
            
            <div>

                loading: {this.state.loading} <br/>
                data: {this.state.data} <br/>
                error: {this.state.error}
            </div>
            <button
            
            className='btn btn-danger' disabled>CLIK me to reload</button>
            </>
        );
    }
    componentDidMount(){
        filmApi.then((res) => {
            console.log(res); 
            this.setState({
                loading: "false",
                data: res.status,
                error: 'no error'
            })
        })
        .catch((error) => {
            this.setState({
                loading: "true",
                data: error.name,
                error: error.code
            })
            console.log(error); 
        })
    }
    componentDidUpdate(prevProps, prevState){
       if (prevState.loading !== this.state.loading) {
        filmApi.then((res) => {
            console.log(res); 
            this.setState({
                loading: "false",
                data: res.status,
                error: 'no error'
            })
        })
        .catch((error) => {
            this.setState({
                loading: "true",
                data: error.name,
                error: error.code
            })
            console.log('in error did  update'+error); 
        })
       }

    }
}

export default DashboardPage;