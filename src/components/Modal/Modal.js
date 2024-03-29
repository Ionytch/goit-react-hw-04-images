import { useEffect } from 'react';
import { Overlay, ModalStyle } from './Modal.styled';
import PropTypes from "prop-types";

export default function Modal({ largeImageURL, toggleModal }) {
  
  const hadleClick = e => {
    e.stopPropagation();
  };

useEffect(() => {
        console.log('mounted');
            
        const closeModalByEsc = e => {
            console.log(e.code);
            if (e.code === 'Escape') {
                toggleModal()
            };
        };
         

        document.addEventListener('keydown', closeModalByEsc)

        return () => document.removeEventListener('keydown', closeModalByEsc)

}, [toggleModal])
  
  

  return (
<Overlay class="overlay" id='overlay' onClick={()=>toggleModal()}>
  <ModalStyle class="modal" onClick={hadleClick}>
    <img src={largeImageURL} alt='' />
  </ModalStyle>
    </Overlay>
  
  )
  
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};