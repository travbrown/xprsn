import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

export const Header = () => { 

    return (
        <>
            <header className="App-header">
                <div className="headerContainer">
                    <div>XPRSV</div>
                    {/* <div>ART</div>
                    <div>ABOUT</div>
                    <div>THOUGHT</div> */}
                    <MenuIcon style={{ fontSize: 50 }}></MenuIcon>
                </div>
            </header>
        </>
    );
};