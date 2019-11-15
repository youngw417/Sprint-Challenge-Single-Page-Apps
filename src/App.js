import React from "react";
import Header from "./components/Header.js";
import {Route, NavLink} from 'react-router-dom';
import CharacterList from './components/CharacterList';
import styled from 'styled-components';
import WelcomePage from './components/WelcomePage';

const WrapNav = styled.div`
background-color: grey;
height: 10vh;
color: white;
margin: 0;
padding: 20px;

`;



export default function App() {

  


  return (
    <main>
    

      <WrapNav className="nav-links">
        <NavLink to ="/" style = {{ paddingTop:'20px', padding: '10px', textDecoration: 'none', color: 'white', fontSize:'20px'}}>Home</NavLink >
        <NavLink to="character-list"  style = {{ paddingTop:'20px', padding: '10px', textDecoration: 'none', color: 'white', fontSize: '20px'}}>Characters</NavLink>
        <Header />
      </WrapNav>
     
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/character-list" render={ props =>
      <CharacterList />
    } />

   


    </main>
  );
}
