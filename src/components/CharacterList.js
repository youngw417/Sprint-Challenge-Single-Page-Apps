import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';

const WrapperSec = styled.section`

display: flex;
flex-wrap: wrap;
justfy-content: center;

margin: 0 auto;
margin-left: 40px;

`;

const WrapH2 = styled.h2`

margin-bottom: 60px;
text-align: center;

`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect\

  const [characters, setCharacters]= useState([]);
// TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    

    useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        
        setCharacters(res.data.results)
        
        console.log(res);
      })
      .catch(err => console.log(err));
    }, []);
  

  return (
    <section className="character-list">
      <WrapH2>list of characters</WrapH2>
      <WrapperSec>
        {
              characters.map( each => 
              {console.log(each);
              
              return <CharacterCard key={each.id} character = {each}/>
              }
              )

            
              }

      </WrapperSec>
    
    </section>
  );
}
