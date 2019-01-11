import React from 'react';

import Character from './Character';

const CharacterList = props => {
    return (
        <div>
            {props.starwarsChars.map(characterInMap => (
                <Character 
                characterOnProps={characterInMap}
                />
            ))}   
        </div>
    );
};

export default CharacterList;