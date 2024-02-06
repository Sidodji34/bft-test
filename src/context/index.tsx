import { createContext, ReactNode, useState, useContext } from 'react';
import { TData } from '../data/data';

type TForm = {
  country: string;
  city: string;
  university: string;
  residence: string;
  [key: string]: string;
};

type TFormContext = {
  options: TData;
  setOptions: React.Dispatch<React.SetStateAction<TData>>;
  formValue: TForm;
  setFormValue: React.Dispatch<React.SetStateAction<TForm>>;
  outputEnabled: boolean;
  setOutputEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormContext = createContext<TFormContext | null>(null);

function FormProvider({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState<TData>({
    country: '',
    cities: [],
    university: [],
    residence: [],
  });
  const [formValue, setFormValue] = useState<TForm>({
    country: '',
    city: '',
    university: '',
    residence: '',
  });
  const [outputEnabled, setOutputEnabled] = useState<boolean>(false);

  return (
    <FormContext.Provider
      value={{
        options,
        setOptions,
        formValue,
        setFormValue,
        outputEnabled,
        setOutputEnabled,
      }}>
      {children}
    </FormContext.Provider>
  );
}

const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useTFormContext must be used inside the FormProvider');
  }

  return context;
};

export { FormProvider, useFormContext };
