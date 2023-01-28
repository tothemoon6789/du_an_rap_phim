// import axios from 'axios';
import React, { Component } from 'react';
import Film from '../../../components/Film/Film';
import { filmApi } from '../../../service/filmApi';

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
    //    filmApi
    //     .then((res) => {
    //         this.setState({
    //             ...this.state,
    //             loading:false,
    //             data:res.data.content,
    //         })
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
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
                    <div className="col-md-3">
                        <Film key={index} film = {film}/>
                    </div> :
                    ""
                )
            })
        }
    }
}

export default CommingSoonPage;