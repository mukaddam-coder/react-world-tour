import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country =>{
        console.log('add this to your visited country');
       const newVisitedCountries = [...visitedCountries, country];
       setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags = (flag) => {
      console.log('The Flag is added');
      const newVisitedFlags = [...visitedFlags, flag];
      setVisitedFlags(newVisitedFlags);
    }
        
    return (
        <div>
            <h4>Countries:{countries.length}</h4>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx)=> <img key={idx} src={flag}></img>)
                }
            </div>
           <div className='country-container'>
           {
                countries.map(country =><Country key={country.cca3}
                    handleVisitedCountry={handleVisitedCountry} 
                    country={country} handleVisitedFlags={handleVisitedFlags}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;