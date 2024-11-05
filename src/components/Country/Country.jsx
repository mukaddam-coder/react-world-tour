import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, cca3, population, area} = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }
    console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited? 'purple' : 'green'}}>Name: {name.common}</h3>
            <img src={flags.png} alt=''></img>
            <h5>Country Code: {cca3}</h5>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={() => {handleVisitedCountry(country)}}>Mark as Visited</button>
            <br></br>
            <br></br>
            <button onClick={() => {handleVisitedFlags(country.flags.png)}}>Add Flag</button>
            <br></br>
            <br></br>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'I will go'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit'}
            <hr></hr>
            <CountryDetail
            country={country} handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}>
                
            </CountryDetail>
        </div>
    );
};

export default Country;