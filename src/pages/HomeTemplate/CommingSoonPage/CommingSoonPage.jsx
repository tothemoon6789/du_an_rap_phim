// import axios from 'axios';
import React, { Component } from 'react';
import Film from '../../../components/Film/Film';
import { filmApi } from '../../../service/apiHome';

class CommingSoonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            data: null,
            error:null,
        }
    }
    
    componentDidMount(){
        this.setState({
            ...this.state,
            loading:true,
        })
       filmApi
        .then((res) => {
            this.setState({
                ...this.state,
                loading:false,
                data:res.data.content,
            })
        })
        .catch((error) => {
        })
    }
    
    render() {
        return (
            <>
                <div className='container'>
                <div className="row">
                   {this.renderCardCommingSoon()}
                </div>

            </div>
            </>
        );
    }
    renderCardCommingSoon=() => {
        const {data} = this.state
        if (data) {
            
            return data.map((film,index) => {
                return ( film.sapChieu ?
                    <div key={index} className="col-md-3">
                        <Film  film = {film}/>
                    </div> :
                    ""
                )
            })
        }
    }
}

export default CommingSoonPage;