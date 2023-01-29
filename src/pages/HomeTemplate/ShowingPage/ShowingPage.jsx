// import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Film from '../../../components/Film/Film';
import { filmApi } from '../../../service/filmApi';


class ShowingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: null,
            error: null,
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            loading: true,
        })
        filmApi

            .then((res) => {
                this.setState({
                    ...this.state,
                    loading: false,
                    data: res.data.content,
                }, () => console.log(this.state))
            })
            .catch((error) => {
                console.log(error);
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
    renderCardCommingSoon = () => {
        const { data } = this.state
        if (data) {

            return data.map((film, index) => {
                return (film.dangChieu ?


                    <div className="col-md-3">

                        <Film key={index} film={film} />
                    </div>
                    :
                    ""
                )
            })
        }
    }
}

export default ShowingPage;