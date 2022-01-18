import React from 'react';
import '../styles/style.css';
import { string } from 'prop-types';
import ImportImage from './importImage.js';

function submitStart(e) {
    e.preventDefault();
    let list = document.querySelectorAll('.form_input');
    // return
    let items = [...list].map((elt)=>{
        //console.log(elt.value);
        if(elt.value == ''){
            elt.classList.add('shadow_error');
            document.querySelector('label[for='+elt.getAttribute("placeholder")+']').classList.remove('hidden');
            document.querySelector('label[for='+elt.getAttribute("placeholder")+']').innerText = 'please fill this field';
        }else{
            if (elt.getAttribute("placeholder") == 'email') {
                console.log(elt.value.length);
                if (elt.value.length < 5) {
                    if(!elt.classList.contains('shadow_error'))
                        elt.classList.add('shadow_error');

                    document.querySelector('label[for='+elt.getAttribute("placeholder")+']').classList.remove('hidden');
                    document.querySelector('label[for='+elt.getAttribute("placeholder")+']').innerText = 'invalid e-mail format';
                    return                  
                }
                if(!(elt.value.includes("@") && elt.value.includes("."))){
                    if(!elt.classList.contains('shadow_error'))
                        elt.classList.add('shadow_error');

                    document.querySelector('label[for='+elt.getAttribute("placeholder")+']').classList.remove('hidden');
                    document.querySelector('label[for='+elt.getAttribute("placeholder")+']').innerText = 'invalid e-mail format'
                }else{
                    elt.classList.remove('shadow_error');
                    document.querySelector('label[for='+elt.getAttribute("placeholder")+']').classList.add('hidden');    
                }
            }else{
                elt.classList.remove('shadow_error');
                document.querySelector('label[for='+elt.getAttribute("placeholder")+']').classList.add('hidden');
            }
        }
    });
}
function loginForm(props) {
  return (
    <div className='form_container'>
        <input className={`form_input ${ props.theme == 'dark' ? 'form_input_Dark' : ''}`} type="text" placeholder='name'></input> <br/> {/* shadow_error */}
        <label for="name" className='login_verif hidden'></label><br/>
        <input className={`form_input ${ props.theme == 'dark' ? 'form_input_Dark' : ''}`} type='email' placeholder='email'></input> <br/>
        <label for="email" className='login_verif hidden'></label><br/>
        <ImportImage theme={props.theme}/>
        <button className={`btnStart ${props.theme == 'light' ? '':'btnStart_Dark'}`} onClick={ e=>{submitStart(e)} }>start</button> 
    </div>
  );
}

loginForm.propTypes = {
    theme: string.isRequired
}

export default loginForm;