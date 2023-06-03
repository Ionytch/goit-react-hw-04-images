import { useState } from "react";
import Modal from "components/Modal/Modal";
import { ImageItem, ImgStyle, ListItem } from "./ImageGalleryItem.styled";

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
                        {isOpen&&<Modal largeImageURL={largeImageURL} />}
                    </ListItem> 
                    
                                 
        </ImageItem>
    </>
        ) 
   }   


