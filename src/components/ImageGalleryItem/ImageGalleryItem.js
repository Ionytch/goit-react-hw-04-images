import { useState } from "react";
import Modal from "components/Modal/Modal";
import { ImageItem, ImgStyle, ListItem } from "./ImageGalleryItem.styled";
import PropTypes from "prop-types";


export default function ImageGalleryItem ({webformatURL, tags, largeImageURL})
{
   const [isOpen, setIsOpen]=useState(false);
           
    const toggleModal = () => {
        setIsOpen(!isOpen );
    }
    
    
       return (<>       
        <ImageItem>        
            
                    < ListItem onClick={()=>toggleModal()}>                
                        <ImgStyle className="GalleryImage" src={webformatURL} alt={tags} />   
                        {isOpen&&<Modal largeImageURL={largeImageURL} toggleModal={toggleModal}/>}
                    </ListItem> 
                    
                                 
        </ImageItem>
    </>
        ) 
   }   

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};
