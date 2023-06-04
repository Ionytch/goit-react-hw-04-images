import { useEffect, useState } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Vortex } from "react-loader-spinner";
import { Gallerylist, LoadMoreButton } from "./ImageGallery.styled";
import PropTypes from "prop-types";

export default function ImageGallery ({Request}){

    const [gallery, setGallery] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
               
    useEffect(() => {
        if (!Request) {
            return
        }
        setLoading(true);
        
                fetch(`https://pixabay.com/api/?q=${Request}&page=${page}&key=32152184-2ad461e647b19751df8bc3af5&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(({ hits }) => {
                    setGallery(gallery=>[...gallery, ...hits]);
                })
                .catch((error) => console.log(error.message))
                .finally(setLoading(false));
        }, [Request, page]);
      
    
    function loadMore() {
        setPage(state => state + 1);
    }

      
    return (<>
    {loading&& <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
          />}
          
          {!Request && <div>Start your search</div>}
          
            {gallery && 
            <Gallerylist class="gallery">
                {gallery.map(item=> <ImageGalleryItem key={item.id} webformatURL={item.webformatURL} tags={item.tags} largeImageURL={item.largeImageURL} /> )}
                
                                   
             </Gallerylist> 
            }
            {gallery &&Request && <LoadMoreButton type="button" onClick={loadMore}>load more</LoadMoreButton>}
            </>
        )
    }

ImageGallery.propTypes = {
    Request: PropTypes.string.isRequired,
};