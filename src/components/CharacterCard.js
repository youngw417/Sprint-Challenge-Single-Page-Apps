import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Col
} from 'reactstrap';

export default function CharacterCard(props) {

 const {character} = props;

  return (




    <Col sm ="4">
      <Card className = "charater-card" style = {{marginBottom: '40px'}}>
            <CardImg top width = "70%" src ={character.image} alt ="character" style = {{marginBottom: '20px'}}/>
            <CardBody>
              <CardTitle> Name: {character.name}</CardTitle>
              <CardText>ID: {character.id}</CardText>
              
              <CardText>Status: {character.status}</CardText>
              <CardText>Species: {character.species}</CardText>
            </CardBody>
      </Card>
    </Col>
      
      

  )
  
  
}
