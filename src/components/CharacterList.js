import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';
import SearchForm from "./SearchForm";

const WrapperSec = styled.section`


display: flex;
flex-wrap: wrap;
justfy-content: center;

margin: 0 auto;
margin-left: 40px;

`;

const WrapH2 = styled.h2`

margin-bottom: 60px;
margin-top: 50px;
text-align: center;
color: #555;

`;

const WrapDiv = styled.div`

margin-bottom: 40px;
font-size: 230x;
padding: 5px 10px;
text-align: center;

`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect\

  const [characters, setCharacters]= useState([]);
  const [searchResults, setSearchResults] = useState([]);

    const search = (newArray) => {
      setSearchResults(newArray);
    };

// TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    

    useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        
        setCharacters(res.data.results);
        setSearchResults(res.data.results);
        
        console.log(res);
      })
      .catch(err => console.log(err));
    }, []);
  

  return (
    <section className="character-list">
        <WrapH2>List of Characters</WrapH2>
        <WrapDiv className = "searchForm">
        <SearchForm search={search} characters = {characters}/>
        </WrapDiv>

        { searchResults.length === 0 ? <p style ={{textAlign: 'center'}}>No name found in this search</p> : null}
      <WrapperSec>
      

        {     
             
                searchResults.map( each => 
                {console.log(each);
                
                return <CharacterCard key={each.id} character = {each}/>
                }
                )

              
            

            }

      </WrapperSec>
    
    </section>
  );
}
