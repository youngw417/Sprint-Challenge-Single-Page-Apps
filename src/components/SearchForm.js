import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function SearchForm(props) {

const [searchTerm, setSearchTerm] = useState();




const handleChange = event => {
  setSearchTerm(event.target.value)
}


const submitHandler = event => {

event.preventDefault();

const results = props.characters.filter( each => {
  return each.name.toLowerCase().includes(searchTerm.toLowerCase());
 
})

props.search(results);
 setSearchTerm("");
}

 
  return (
    <section className="search-form">
      <form onSubmit = {submitHandler}>
        <label htmlFor="name">Search: </label>
        <input id="name" type ="text" name="name" placeholder="search name" value={searchTerm} onChange = {handleChange} style = {{fontSize: '20px', padding: '5px', textAlign:'center'}}/>

      </form>

      
    </section>
  );
}
