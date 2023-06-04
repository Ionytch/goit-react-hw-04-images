import { useState } from "react";
import { Button, Form, SearchbarStyle } from "./Searchbar.styled";
import PropTypes from "prop-types";


 const Searchbar =({onSubmit})=> {
  const [request, setRequest]=useState('');  
       
   const handleChange = e => {
         setRequest (e.currentTarget.value.toLowerCase());
         
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (request.trim() === '') {
            alert("PLease, enter a request");
            return
        }
            
        onSubmit({request});
        reset();
    };

    const reset = () => {
        setRequest('');
    };
    
    
     return(
        <SearchbarStyle class="searchbar">
  <Form class="form" onSubmit={handleSubmit}>
    <Button type="submit" class="button">
      <span class="button-label">Search</span>
    </Button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      value={request}
      onChange={handleChange}
    />
  </Form>
</SearchbarStyle>
    )   
    }
     

    
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.string.isRequired,
};

