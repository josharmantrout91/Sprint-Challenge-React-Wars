import React from 'react';
import './StarWars.css';

const Character = props => {
    return(
        <div className="character-stats">            
                <p>{ props.starWarsChar.name }</p>
                <p className="stat">Birth Year: { props.starWarsChar.birth_year }</p>
                <p className="stat">Gender: { props.starWarsChar.gender }</p>
                <p className="stat">Height: { props.starWarsChar.height }</p>
                <p className="stat">Mass: { props.starWarsChar.mass }</p>
                <p className="stat">Hair Color: { props.starWarsChar.hair_color }</p>
                <p className="stat">Eye Color: { props.starWarsChar.eye_color }</p>
                <p className="stat">Hair Color: { props.starWarsChar.hair_color }</p>
                <p className="stat">Skin Color: { props.starWarsChar.skin_color }</p>
        </div>
 );
}

export default Character;