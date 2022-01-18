import React from 'react';
import '../styles/style.css';
import { string } from 'prop-types';
import maleImage from '../../avatar/male.png';
import femaleImage from '../../avatar/female.png';


function allowDrop(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    if(!document.querySelector('.drop_avatar').classList.contains('over'))
        document.querySelector('.drop_avatar').classList.add('over');
}
function allowDropLeave(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    if(document.querySelector('.drop_avatar').classList.contains('over'))
        document.querySelector('.drop_avatar').classList.remove('over');
}
function drop(ev) {
    if(document.querySelector('.drop_avatar').classList.contains('over'))
        document.querySelector('.drop_avatar').classList.remove('over');
    removePlaceHolder();
    ev.stopPropagation();
    ev.preventDefault();
    let list = document.querySelector('.avatar_carrier').childNodes;
    console.log(list);
    let items = [...list].map((elt)=>{
            if(elt.classList.contains('selected'))
                elt.classList.remove('selected');
    })
    document.querySelector('.drop_placeholder').classList.add('none');
    
    let files = ev.dataTransfer ? ev.dataTransfer.files[0] : ev.target.files[0];
    //return
     //ev.dataTransfer.files[0]; // FileList object.
    const reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      const image = new Image();
      image.src = reader.result;
      image.onload = () => {
        const canvas = document.querySelector('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const context = canvas.getContext('2d');
        context.filter = 'blur(10px)';
        context.drawImage(image, 0, 0);
      }
    }
}
function removePlaceHolder() {
    if(!document.querySelector('.drop_placeholder').classList.contains('none'))
        document.querySelector('.drop_placeholder').classList.add('none');
}

function selectImage(e) {
    removePlaceHolder();
    let list = e.target.parentNode.parentNode.childNodes;
    if (!e.target.parentNode.classList.contains('selected')) {
        e.target.parentNode.classList.add('selected');
    }
    let items = [...list].map((elt)=>{
        if (elt !== e.target.parentNode) {
            if(elt.classList.contains('selected'))
                elt.classList.remove('selected');
        }
    })
    e.target.parentNode.classList.add('selected');
    const base_image = new Image();
    base_image.src = e.target.getAttribute('src');
    base_image.onload = ()=>{
        const canvas = document.querySelector('canvas');
        canvas.width = base_image.width;
        canvas.height = base_image.height;
        const context = canvas.getContext('2d');
        context.filter = 'blur(10px)';
        context.drawImage(base_image, 0, 0);
    }
}

function importImage(props) {
    return (
      <div className='avatar_container'>
        <div className={`drop_avatar ${props.theme == 'light' ? '':'drop_avatar_Dark'}`} onDrop={(ev)=>{drop(ev)}} onDragOver={(ev)=>{allowDrop(ev)}} onDragLeave={(ev)=>{allowDropLeave(ev)}}>
            <canvas className='canvas'/>
            <label className={`drop_placeholder ${props.theme == 'light' ? '':'drop_placeholder_Dark'}`}>DROP IMAGE HERE</label>
            <input type='file' className='avtar_file' onChange={(e)=>{drop(e)}}></input>
        </div>
        <label className='avatar_OR'>OR</label>
        <div className='avatar_carrier'>
            <div className='male_avatar' onClick={(e)=>{selectImage(e)}}><img className='avatar_image' src={maleImage}/></div>
            <div className='female_avatar'  onClick={(e)=>{selectImage(e)}}><img className='avatar_image' src={femaleImage}/></div>
        </div>
      </div>
    );
}

importImage.propTypes = {
    theme: string.isRequired
}

export default importImage;

