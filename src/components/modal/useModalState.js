import { useState } from 'react';

export const useModalState = () => {
    
    const [modal, setModal] = useState('0');
    const [index, setIndex] = useState('0');

    const modalToggler = (e) => {
        //console.log(e);
        e.stopPropagation();
        modal === '0' ? setModal('1') : setModal('0');
        console.log(e.target.getAttribute("data-value"));
        if (e.target.getAttribute("data-value")) {
            setIndex(e.target.getAttribute("data-value"));
        }
    };
    return [modal, index, modalToggler]
};
