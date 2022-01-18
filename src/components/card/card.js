// import React from 'react';
import { useState } from 'react';
import '../styles/style.css';
import { string } from 'prop-types';

/* function scrollToElement(e,clickData) {
    alert(clickData); 
    e.preventDefault();
    document.querySelector('.Loginparent').scrollIntoView({ behavior: 'smooth' });
    document.querySelectorAll('.form_input')[0].focus();
    console.log(document.querySelectorAll('.form_input')[0]);
} */


function Cards(props) {
    
    return (
        <div className={`card ${ props.theme === 'light' ? 'card_Light':'card_Dark'} `}>
            <img src={`${props.image}`} alt='img'></img>
            <div onClick={props.Togglemodal} data-value={props.clickEvent}>{props.name}</div>
        </div>
    );
}

// const Cards = (props) => {...}  scrollToElement(e,props.clickEvent)
Cards.propTypes = {
    theme: string.isRequired,
    name: string.isRequired,
    image: string.isRequired
}
export default Cards;
