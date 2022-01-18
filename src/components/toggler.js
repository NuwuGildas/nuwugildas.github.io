import React from 'react';
import { string,func } from 'prop-types';


const Toggle = ({theme, toggleTheme }) => {

    return (
        <div onClick={toggleTheme} id='tdnn' className={`tdnn ${theme == 'light' ? '':'day'}`}>
            <div id='darkMode' className={`${theme == 'light' ? 'moon':'sun'}`}></div>
        </div>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;