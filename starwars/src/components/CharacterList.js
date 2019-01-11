import React from 'react';
import './StarWars.css';
import Character from './Character';

const CharacterList = props => {
    return (
        <div>
            {props.starwarsChars.map(characterInMap => (
                <Character 
                starWarsChar={characterInMap}
                />
            ))}   
        </div>
    );
};

export default CharacterList;