import React from 'react';
import '../styles/style.css';
import { string } from 'prop-types';
import LoginForm from './loginForm.js'


function loginApp(props) {
  return (
      <div id='login' className='Loginparent loginParent_position'>
        <label className='loginLabel height' >Register</label>
        <form>
          <LoginForm theme={props.theme}/>
        </form>
      </div>
  );
}

/* Document.prototype.createElementFromString = function (str) {
  const element = new DOMParser().parseFromString(str, 'text/html');
  const child = element.documentElement.querySelector('body').firstChild;
  return child;
}; */
loginApp.propTypes = {
  theme: string.isRequired
}
export default loginApp;
