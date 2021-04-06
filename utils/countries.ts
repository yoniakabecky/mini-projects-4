import { ICountry } from "../types/country";

export const getInitialDisplayData = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2");
  const data: ICountry[] = await res.json();

  const firstDisplay = ["DEU", "USA", "BRA", "ISL"];
  let reOrderedData = [...data];

  for (let i = 0; i < firstDisplay.length; i++) {
    const index = reOrderedData.findIndex(
      (country: ICountry) => country.alpha3Code === firstDisplay[i]
    );

    const countryData = reOrderedData.splice(index, 1);
    reOrderedData.splice(i, 0, ...countryData);
  }

  return reOrderedData;
};
