import React, { Component } from 'react';

class Row extends Component {
    render() {
        const {placeholder,type}= this.props
        return (
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <div className="form-group">
                        <input type={`${type}`} className="form-control" aria-describedby="helpId" placeholder={placeholder} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Row;