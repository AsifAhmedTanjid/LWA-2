import React from 'react';
import './Country.css'

const Country = ({country}) => {

    const handleVisited=()=>{
            console.log("button clicked");
            
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area>300000?"Big country":"Small Country"}</p>

            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;