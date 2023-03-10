import { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Vortex } from "react-loader-spinner";
import Modal from "components/Modal/Modal";
import { Gallerylist, LoadMoreButton } from "./ImageGallery.styled";

export default class ImageGallery extends Component{

    state = {
        response: [],
        page: 1,
        loading: false,
        errorMessage: '',
        isOpen: false,
        largeImage: ''      
        }

       
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.Request.request !== this.props.Request.request) {
            console.log("changes occured")
            console.log("value 1=", prevProps.Request.request);
            console.log("value 2=", this.props.Request.request);
            this.setState({
                loading: true
            });
             this.loadImages();

             }
   
        
        if (prevState.page !== this.state.page) {
            this.loadImages();
        }      
       
    }

    loadImages = () => {
                 fetch(`https://pixabay.com/api/?q=${this.props.Request.request}&page=${this.state.page}&key=32152184-2ad461e647b19751df8bc3af5&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(({ hits }) => { this.setState((prevState) => ({ response: [...prevState.response, ...hits], errorMessage: '' })); } )
                .catch((error) => ({ errorMessage: error.message }))
                .finally(()=>this.setState({loading: false}));
            
    }  
    
    loadMore = () => {
        this.setState((prevState) => ({
            page:prevState.page+1
        }))
    }

handleGalleryItem = fullImageUrl => {
    this.setState({
      largeImage: fullImageUrl,
      isOpen: true,
    });
  };

      
    render() {
        const { response, isOpen } = this.state;
        return (<>
            {this.state.loading&& <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
          />}
          
          {!this.props.Request && <div>Start your search</div>}
          
            {this.state.response && 
            <Gallerylist class="gallery">
                {response.map(item=> <ImageGalleryItem key={item.id} webformatURL={item.webformatURL} tags={item.tags} largeImageURL={item.largeImageURL} /> )}
                
                {isOpen&&<Modal largeImageURL={this.props.largeImage} />}                    
             </Gallerylist> 
            }
            {this.state.response &&this.props.Request && <LoadMoreButton type="button" onClick={this.loadMore}>load more</LoadMoreButton>}
            </>
        )
    }
}



