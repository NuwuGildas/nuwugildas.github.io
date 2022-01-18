import React,{useState,useEffect} from 'react';
import './modal.css';
import data from '../../data.json'
import { string } from 'prop-types';

function Modal(props) {
  const item = data.filter((item)=>{
    /* console.log(item.id === props.contentIndex); */
    return item.id === props.contentIndex;
  })
  console.log(item[0]);
  return (
    <div className={`parent_Modal ${props.modalState == '0' ? 'close':'active'}`} >
      <div className={`main_Modal main_Modal_size ${props.theme == 'light'? '':'main_Modal_Dark'}`}>
        <div onClick={props.Togglemodal} className={`modal_close ${props.theme == 'light'? '':'modal_close_Dark'}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/></svg></div>
        {         
          <>
            <p key={item[0].id}></p>
            <div className='modal_content modal_content_left'>
              <img src={`${item[0].img}`}></img>
            </div>
            <div className='modal_content modal_content_right'>
              <label className='modal_title'>{item[0].title}</label><br/>
              <label>{item[0].description}</label>


            </div>
          </>
        }
      </div>
    </div>
  );
}

Modal.propTypes = {
  theme: string.isRequired,
}
export default Modal;