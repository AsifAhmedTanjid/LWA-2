import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {

    const [visited,setVisited]=useState(false)

    const handleVisited=()=>{

        //toggle 1

        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // toggle 2
            // setVisited(visited?false : true);

        // toggle 3
        setVisited(!visited);
            
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area>300000?"Big country":"Small Country"}</p>

            <button onClick={handleVisited}>{visited ? 'Visited':'Not Visited'}</button>
        </div>
    );
};

export default Country;