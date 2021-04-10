export interface ICountry {
  name: string;
  nativeName?: string;
  alpha3Code: string;
  population: number;
  region: string;
  subregion?: string;
  capital: string;
  flag: string;
  topLevelDomain?: Array<string>;
  currencies?: Array<ICurrency>;
  languages?: Array<ILanguage>;
  borders?: Array<string>;
}

export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface ILanguage {
  name: string;
  nativeName: string;
}
