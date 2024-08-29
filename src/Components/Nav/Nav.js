import React from 'react';
import '../../App.css';

const Nav = (props) => {
    return (
        <div className='nav_container bg-body-tertiary'>
            <h1> Total Sum = {props.total}</h1>
        </div>
    );
};

export default Nav;