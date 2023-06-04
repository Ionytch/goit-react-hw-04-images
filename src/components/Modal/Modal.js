import { Overlay, ModalStyle } from './Modal.styled';
import PropTypes from "prop-types";



export default function Modal ({largeImageURL}) {
  return (
<Overlay class="overlay">
  <ModalStyle class="modal">
    <img src={largeImageURL} alt='' />
  </ModalStyle>
</Overlay>
  )
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};