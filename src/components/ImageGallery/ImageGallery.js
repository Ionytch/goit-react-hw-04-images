// import { useEffect, useState } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallerylist } from "./ImageGallery.styled";
import PropTypes from "prop-types";

export default function ImageGallery ({gallery}){
 

      
    return (<>
              
            {gallery && 
            <Gallerylist class="gallery">
                {gallery.map(item=> <ImageGalleryItem key={item.id} webformatURL={item.webformatURL} tags={item.tags} largeImageURL={item.largeImageURL} /> )}
                
                                   
             </Gallerylist> 
            }
            </>
        )
    }

ImageGallery.propTypes = {
    gallery: PropTypes.array.isRequired,
};