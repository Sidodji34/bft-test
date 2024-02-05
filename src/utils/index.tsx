import { data } from '../data/data';

function getCountries() {
  return data.map((item) => item['country']);
}

function getValues(property: string) {
  switch (property) {
    case 'РФ':
    case 'РБ':
      return data.find((item) => item.country === property);
    default:
      return { country: '', cities: [], university: [], residence: [] };
  }
}

export { getValues, getCountries };
