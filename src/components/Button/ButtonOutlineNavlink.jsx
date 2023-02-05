import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ButtonOutlineNavlink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'darkTheme'
        }
    }

    render() {
        const { navlinkTo, buttonName } = this.props
        return (
            <NavLink
                style={{ color: 'white' }}
                to={navlinkTo}>
                <button
                    className={`${this.state.theme === 'darkTheme' ?
                        'btn btn-outline-primary ml-2' :
                        'btn btn-outline-dark ml-2'
                        }`}>
                    {buttonName}
                </button>
            </NavLink>
        );
    }
    componentDidUpdate(prevProps) {
        const { theme } = this.props
        if (prevProps.theme !== theme) {
            this.setState({
                theme: theme
            })
        }
    }
}

export default ButtonOutlineNavlink;