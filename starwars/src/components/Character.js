import React from 'react';
import './StarWars.css';

const Character = props => {
    return(
        <div>            
            <ul>
                <li>Name: { props.starWarsChar.name } </li>
                <li>Birth Year: { props.starWarsChar.birth_year }</li>
                <li>Eye Color: { props.starWarsChar.eye_color }</li>
                <li>Gender: { props.starWarsChar.gender }</li>
                <li>Hair Color: { props.starWarsChar.hair_color }</li>
                <li>Height: { props.starWarsChar.height }</li>    
                <li>Mass: { props.starWarsChar.mass }</li>
                <li>Skin Color: { props.starWarsChar.skin_color }</li>
                <li>Home World: { props.starWarsChar.homeworld }</li>
                <li>Species: { props.starWarsChar.species }</li>
                <li>Films: { props.starWarsChar.films }</li>
                <li>Starships: { props.starWarsChar.starships }</li>
                <li>Vehicles: { props.starWarsChar.vehicles }</li>
            </ul>
        </div>
 );
}

export default Character;