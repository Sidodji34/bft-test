type TData = {
  country: string;
  cities: string[];
  university: string[];
  residence: string[];
};

const data: TData[] = [
  {
    country: 'РФ',
    cities: ['Москва', 'Сочи'],
    university: ['Технический', 'Гуманитарный'],
    residence: ['Общежития', 'Аренда', 'Не интересует', 'Общежития + Аренда'],
  },
  {
    country: 'РБ',
    cities: ['Минск', 'Гомель'],
    university: ['Технический', 'Гуманитарный'],
    residence: ['Не интересует', 'Общежития + Аренда'],
  },
];

export { data };
export type { TData };
