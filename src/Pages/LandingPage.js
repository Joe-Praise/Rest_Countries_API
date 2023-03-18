import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import LandingPageCard from "../components/LandingPageCard";
import SearchInput from "../components/SearchInput";
const LandingPage = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const getCountries = () => {
    fetch("https://restcountries.com/v2/all")
      .then((resp) => resp.json())
      .then((data) => {
        setCountries(data);
        setIsFetch(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchCountries = (value) => {
    const searchResult = countries.filter((country) => {
      return country.name.toLowerCase().includes(value.toLowerCase());
    });
    setSearchCountry(searchResult);
  };

  const filterHandler = (value) => {
    const filterInput = countries.filter((country)=>{
      return country.region.toLowerCase() === value.toLowerCase();
    })
    setSearchCountry(filterInput);
  }
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <main className="landing-page">
      <div className="search--region--container">
        <SearchInput getCountry={searchCountries} />
        <Filter onFilter={filterHandler} />
      </div>
      {isFetch === false ? (
        <div className="loader">🚀</div>
      ) : (
        <React.Fragment>
          {searchCountry.length > 0 ? (
            <div className="cards--grid-container">
              {searchCountry.map((country) => {
                return (
                  <LandingPageCard
                    country={country.name}
                    img={country.flag}
                    alt={country.name}
                    population={country.population}
                    Region={country.region}
                    capital={country.capital}
                    key={country.name + country.population}
                    name={country.capital}
                  />
                );
              })}
            </div>
          ) : (
            <div className="cards--grid-container">
              {countries.map((country) => {
                return (
                  <LandingPageCard
                    country={country.name}
                    img={country.flag}
                    alt={country.name}
                    population={country.population}
                    Region={country.region}
                    capital={country.capital}
                    key={country.name + country.population}
                    name={country.capital}
                  />
                );
              })}
            </div>
          )}
        </React.Fragment>
      )}
    </main>
  );
};

export default LandingPage;
