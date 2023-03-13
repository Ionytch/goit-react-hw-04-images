import { useState } from "react";
import Modal from "components/Modal/Modal";
import { ImageItem, ImgStyle, ListItem } from "./ImageGalleryItem.styled";

export default function ImageGalleryItem ()
{
   const [isOpen, setIsOpen]=useState(false);
    // state = {
    //     isOpen: false,
    // }
       
     const toggleModal = (e) => {
        setIsOpen(!this.state.isOpen );
    }
    
    // render() {
        const{ webformatURL, largeImageURL, tags } = props;

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



//    < ListItem onClick={()=>toggleModal()}>                
//    <ImgStyle className="GalleryImage" src={webformatURL} alt={tags} />   
//    {this.state.isOpen&&<Modal largeImageURL={largeImageURL} />}
// </ListItem> 