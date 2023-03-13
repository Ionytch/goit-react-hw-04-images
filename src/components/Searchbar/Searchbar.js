import { useState } from "react";
import { Component } from "react";
import { Button, Form, SearchbarStyle } from "./Searchbar.styled";

 const Searchbar =()=> {
  const [request, setRequest]=useState('');  
  // state = {
  //       request:''
  //    }
     
   const handleChange = e => {
         setRequest (e.currentTarget.value.toLowerCase());
         
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (request.trim() === '') {
            alert("PLease, enter a request");
            return
        }
      const { onSubmit } = this.props;
        
        onSubmit(this.state);
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

