import React from 'react';

function StarWarsCharProfile(props) {
 
    const { birth_year, 
            eye_color, 
            films,
            gender,
            hair_color,
            height,
            homeworld,
            mass,
            name,
            skin_color,
            species,
            starships,
            vehicles
        } = props;
 
    return(
        <div>
            <h1> { starwarsChar.name } </h1>
            <ul>
                <li>Birth Year: { birth_year }</li>
                <li>Eye Color: { eye_color }</li>
                <li>Films: { films }</li>
                <li>Gender: { gender }</li>
                <li>Hair Color: { hair_color }</li>
                <li>Height: { height }</li>
                <li>Home World: { homeworld }</li>
                <li>Mass: { mass }</li>
                <li>Skin Color: { skin_color }</li>
                <li>Species: { species }</li>
                <li>Starships: { starships }</li>
                <li>Vehicles: { vehicles }</li>
            </ul>
        </div>
 );
}

export default StarWarsCharProfile;