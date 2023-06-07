import { useEffect, useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { Vortex } from "react-loader-spinner";
import { LoadMoreButton } from "./ImageGallery/ImageGallery.styled";


 export default function App ()  {
   const [request, setRequest] = useState('');
   const [gallery, setGallery] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
  const [totalResult, setTotalResult] = useState(0)

    
   
   useEffect(() => {
        if (!request) {
            return
        }
        

        setLoading(true);
        
                fetch(`https://pixabay.com/api/?q=${request.request}&page=${page}&key=32152184-2ad461e647b19751df8bc3af5&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(({ hits, total }) => {
                  setGallery(gallery => [...gallery, ...hits]);
                  setTotalResult(total);
                })
                .catch((error) => console.log(error.message))
                .finally(setLoading(false));
        }, [request, page]);
      
    
    
    function loadMore() {
        setPage(state => state + 1);
    }

    const handleFormSubmit = newRequest => {
     setRequest(newRequest);
     if (newRequest !== request.request) {
       setGallery([])
       setPage(1);
     };
   }
     return (
       <div
         style={{
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
           fontSize: 40,
           color: '#010101'
         }}
       >
         {!request && <div>Start your search</div>}
         {loading && <Vortex
    visible={true}
    height="80"
    width="80"
    ariaLabel="vortex-loading"
    wrapperStyle={{}}
    wrapperClass="vortex-wrapper"
    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
          />}
         <Searchbar onSubmit={handleFormSubmit} />
         
         <ImageGallery gallery={gallery} />
          {gallery.length >= 1 && gallery.length < totalResult &&request && <LoadMoreButton type="button" onClick={loadMore}>load more</LoadMoreButton>}

       </div>
     );
  
   };
