import React from 'react'
import { Row } from 'reactstrap'
import Character from './Character'

const CharactersList = ({targets}) => <Row>
  {targets.map((character)=> <Character
      key={character.id}
      {...character}
      /> )}
  </Row>


export default CharactersList