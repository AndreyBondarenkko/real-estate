import React from 'react';

//import data
import { housesData } from '../data';

export const HouseContext = React.createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = React.useState(housesData);
  const [country, setCountry] = React.useState('Location (any)');
  const [countries, setCountries] = React.useState([]);
  const [property, setProperty] = React.useState('Property type (any)');
  const [properties, setProperties] = React.useState([]);
  const [price, setPrice] = React.useState('Price range (any)');
  const [loading, setLoading] = React.useState(false);

  console.log(houses);

  React.useEffect(() => {
    const allCountry = houses.map((house) => {
      return house.country
    });

    //Remove dublicate country
    const uniqueCountries = ['Location (any)', ...new Set(allCountry)]

    //Set countries state
    setCountries(uniqueCountries);

    //Properties
    const allProperties = houses.map((house) => {
      return house.type
    });

    //Remove dublicate properti
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)]

    //Set properti state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
    const isDeafault = (value) => value.includes('(any)');

    const minPrice = parseInt(price.split('-')[0]);
    const maxPrice = parseInt(price.split('-')[1]);

    const newHouse = housesData.filter(house => {
      const housePrice = parseInt(house.price);

      // if all values are selected
      if (house.country === country && house.type === property &&
        housePrice >= minPrice && housePrice <= maxPrice) {
        return house
      }

      // if all values are default
      if (isDeafault(country) && isDeafault(property) &&
        isDeafault(price)) {
        return house;
      }

      //if country is not default
      if (!isDeafault(country) && isDeafault(property) &&
        isDeafault(price)) {
        return house.country === country;
      }

      //if property is not default
      if (isDeafault(country) && !isDeafault(property) &&
        isDeafault(price)) {
        return house.type === property;
      }

      //if price is not default
      if (isDeafault(country) && isDeafault(property) &&
        !isDeafault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      //if country and property is not default
      if (!isDeafault(country) && !isDeafault(property) &&
        isDeafault(price)) {
        return house.country === country && house.type === property;
      }

      //if country and price is not default
      if (!isDeafault(country) && isDeafault(property) &&
        !isDeafault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      //if property and price is not default
      if (isDeafault(country) && !isDeafault(property) &&
        !isDeafault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }

    });

    setTimeout(() => {
      return newHouse.length < 1 ? setHouses([]) : setHouses(newHouse),
        setLoading(false);
    }, 1000);
  }

  return (
    <HouseContext.Provider value={{
      country, setCountry,
      countries, setCountries,
      property, setProperty,
      properties,
      price, setPrice,
      houses,
      loading,
      handleClick,
    }}>
      {children}
    </HouseContext.Provider >
  )
};

export default HouseContextProvider;
