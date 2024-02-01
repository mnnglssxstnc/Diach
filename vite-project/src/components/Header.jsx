import React from 'react';
import { NavLink, Link } from 'react-router-dom'

export default function Header () {
    const [isOpen, toggle] = React.useState({transform: 'translateY(0px)', display: 'none', state: 'closed'});

    const toggleNav = () => {
        toggle(prevState => {
            if (prevState.state === 'closed') {
                let nextState = {...prevState};
                nextState.display = 'block';
                nextState.state = 'open';
                return nextState;
            } else if (prevState.state === 'open') {
                let nextState = {...prevState};
                nextState.transform = 'translateY(0px)';
                nextState.state = 'closed';
                return nextState;
            }
        });
        setTimeout(() => {
            toggle(prevState => {
                if (prevState.state === 'open') {
                    let nextState = {...prevState};
                    nextState.transform = 'translateY(275px)';
                    return nextState;
                } else {
                    return prevState;
                }
            });
        }, 0);
        setTimeout(() => {
            toggle(prevState => {
                if (prevState.state === 'closed') {
                    let nextState = {...prevState};
                    nextState.display = 'none';
                    return nextState;
                } else {
                    return prevState;
                }
            });
        }, 300);
    };


    return (
        <header id='header'>
            <div id='header-body'>
                <Link to='.'>OLEXANDR DIACHENKO</Link>
                <div onClick={toggleNav} id='header-button'></div>
            </div>
            <div style={isOpen} id='header-navbar'>
                <NavLink onClick={toggleNav} className='navbar-button' to='weddings'>Weddings</NavLink>
                <NavLink onClick={toggleNav} className='navbar-button' to='commercial'>Commercial</NavLink>
                <NavLink onClick={toggleNav} className='navbar-button' to='creative'>Creative</NavLink>
                <NavLink onClick={toggleNav} className='navbar-button' to='contacts'>Contacts</NavLink>
            </div>
        </header>
    );
}