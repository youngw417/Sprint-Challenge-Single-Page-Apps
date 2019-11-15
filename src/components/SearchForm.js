import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function SearchForm() {

const [searchTerm, setSearchTerm] = useState("");

const [searchResults, setSearchResults] = useState([]);

useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    const characters = res.data.results;
    const results = characters.filter(char => 
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
      
    )

    setSearchResults(results);
    console.log('results', results);
  })
  .catch(err => console.log(err));
}, [searchTerm]);

const handleChange = event => {
  setSearchTerm(event.target.value)
}

 
  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Search: </label>
        <input id="name" type ="text" name="name" placeholder="search name" value={searchTerm} onChange = {handleChange} />

      </form>

      <div className = "character-list">
        {
              searchResults.map( each => 
              {console.log(each);
              
              return <CharacterCard key={each.id} character = {each}/>
              }
              )
        }
      </div>
    </section>
  );
}
