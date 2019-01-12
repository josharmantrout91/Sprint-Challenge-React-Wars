import React from 'react';
import './StarWars.css';

const Character = props => {
    return(
        <div className="charactersheet">            
                <p>{ props.starWarsChar.name } </p>
        </div>
 );
}

export default Character;