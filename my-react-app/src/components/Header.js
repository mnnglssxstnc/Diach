import React from 'react';
import NavbarButton from './NavbarButton.js'

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
                <p>OLEXANDR DIACHENKO</p>
                <div onClick={toggleNav} id='header-button'></div>
            </div>
            <div style={isOpen} id='header-navbar'>
                <NavbarButton text='MAIN'></NavbarButton>
                <NavbarButton text='WEDDINGS'></NavbarButton>
                <NavbarButton text='COMMERCIAL'></NavbarButton>
                <NavbarButton text='CREATIVE'></NavbarButton>
                <NavbarButton text='CONTACTS'></NavbarButton>
            </div>
        </header>
    );
}