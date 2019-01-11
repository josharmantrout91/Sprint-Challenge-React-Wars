import React from 'react';

const Character = props => {
    return(
        <div>            
            <ul>
                <li>Name: { props.characterOnProps.name } </li>
                <li>Birth Year: { props.characterOnProps.birth_year }</li>
                <li>Eye Color: { props.characterOnProps.eye_color }</li>
                <li>Films: { props.characterOnProps.films }</li>
                <li>Gender: { props.characterOnProps.gender }</li>
                <li>Hair Color: { props.characterOnProps.hair_color }</li>
                <li>Height: { props.characterOnProps.height }</li>
                <li>Home World: { props.characterOnProps.homeworld }</li>
                <li>Mass: { props.characterOnProps.mass }</li>
                <li>Skin Color: { props.characterOnProps.skin_color }</li>
                <li>Species: { props.characterOnProps.species }</li>
                <li>Starships: { props.characterOnProps.starships }</li>
                <li>Vehicles: { props.characterOnProps.vehicles }</li>
            </ul>
        </div>
 );
}

export default Character;