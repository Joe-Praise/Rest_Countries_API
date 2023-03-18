import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import CountryFlag from "../components/CountryFlag";
import CountryDetails from "../components/CountryDetails";

const SingleCountryPage = () => {
  const { id } = useParams({});
  const [country, setCountry] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const getCountry = () => {
    fetch(`https://restcountries.com/v2/capital/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCountry(data);
        setIsFetch(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function addComma(n) {
    const digits = n;
    return digits.toLocaleString("en-US");
  }

  useEffect(() => {
    getCountry();
  }, []);
  return (
    <React.Fragment>
      {isFetch === false ? <div className="loader">🚀</div> : (
      <main>
        <div className="links--container">
          <Link to="/" className="links returnBtn">
            <HiOutlineArrowNarrowLeft />
            <button>Back</button>
          </Link>
        </div>
        {country.map((info) => {
          return (
            <div
              key={info.capital}
              className="single--country--details-container"
            >
              <CountryFlag flag={info.flag} flagAlt={info.name} />
              <div className="country--right-details">
                <h1 className="country--name">{info.name}</h1>
                <div className="list--grid">
                  <CountryDetails
                    l1={"Native Name: "}
                    l2={"Population: "}
                    l3={"Region: "}
                    l4={"Sub Region: "}
                    l5={"Capital: "}
                    l1Value={info.nativeName}
                    l2Value={addComma(info.population)}
                    l3Value={info.region}
                    l4Value={info.subregion}
                    l5Value={info.capital}
                  />

                  <ul className="Single--country--details">
                    <li>
                      Top Level Domain: <span>{info.topLevelDomain}</span>
                    </li>
                    <li>
                      Currencies: <span>{info.currencies[0].code}</span>
                    </li>
                    <li>
                      Languages:{" "}
                      {info.languages.map((language, index) => {
                        return (
                          <span key={index}>
                            {(index ? ", " : "") + language.name}
                          </span>
                        );
                      })}
                    </li>
                  </ul>
                </div>

                {info.borders ? (
                  <div className="bounaries--container">
                    <p className="boundaries--header">Border Countries:</p>
                    <div className="boundaries--btn">
                      {info.borders.map((border, index) => {
                        return (
                          <button
                            className="boundary--country--btn"
                            key={index}
                          >
                            {border}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </main>
      )}
    </React.Fragment>
  );
};

export default SingleCountryPage;
