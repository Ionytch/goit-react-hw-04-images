import { useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";


 export default function App ()  {
const[request, setRequest]=useState('');

 const handleFormSubmit = request => { 
    console.log(request);
   setRequest(request );
  }


     return (
    <div
      style={{
          display: 'flex',
         flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
         <Searchbar onSubmit={handleFormSubmit} />
         
         <ImageGallery Request={ request} />
    </div>
  );
  
 
};
