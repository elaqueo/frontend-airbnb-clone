import countries from 'world-countries';

export type Country = {
  value: string;
  label: string;
  flag: string;
  latlng: [number, number];
  region: string;
};

const formattedCountries: Country[] = countries.map((c) => ({
  value: c.cca2,
  label: c.name.common,
  flag: c.flag,
  latlng: c.latlng,
  region: c.region,
}));

export const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) =>
    formattedCountries.find((f) => f.value === value);

  return {
    getAll,
    getByValue,
  };
};
