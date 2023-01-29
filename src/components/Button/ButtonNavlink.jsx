import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ButtonNavlink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'darkTheme'
        }
    }

    render() {
        const { navlinkTo, buttonName, type='button' } = this.props
        return (
            <NavLink
                // className={`${({isActive}) => isActive ? 'text-danger' : '' } `}
                to={navlinkTo}>
                <button
                    type={type}
                    className={`  ${this.state.theme === 'darkTheme' ?
                        'btn btn-primary ml-2' :
                        'btn btn-dark ml-2'
                        }`}
                        >
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
            }, () => console.log(this.state.theme))
        }
    }
}

export default ButtonNavlink;