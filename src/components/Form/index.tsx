import { useState } from 'react';
import { useFormContext } from '../../context/index';
import SelectForm from '../SelectForm';
import Output from '../Output';
import { getValues, getCountries } from '../../utils/getSortData';
import { selectTitle, dataPropertyKeys } from '../../utils/constants';

const Form: React.FC = () => {
  const [countries] = useState<string[]>(getCountries);
  const { options, setOptions, formValue, setFormValue, outputEnabled, setOutputEnabled } =
    useFormContext();

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>, objectKey: string) => {
    const isSelectedValue = event.target.value;
    if (objectKey === dataPropertyKeys.country) {
      setOptions({ ...options, ...getValues(isSelectedValue) });
      setFormValue({
        ...formValue,
        country: isSelectedValue,
        city: '',
        university: '',
        residence: '',
      });
      setOutputEnabled(false);
    } else {
      setFormValue({ ...formValue, [objectKey]: isSelectedValue });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOutputEnabled(true);
  };

  return (
    <>
      <form className='form-body' onSubmit={(event) => handleSubmit(event)}>
        <div className='content'>
          <SelectForm
            title={selectTitle.country}
            objectKey={dataPropertyKeys.country}
            isSelectEnabled={true}
            options={countries}
            handleSelect={handleSelect}
          />
          <SelectForm
            title={selectTitle.city}
            objectKey={dataPropertyKeys.city}
            isSelectEnabled={Boolean(formValue.country)}
            options={options.cities}
            handleSelect={handleSelect}
          />
          <SelectForm
            title={selectTitle.university}
            objectKey={dataPropertyKeys.university}
            isSelectEnabled={Boolean(formValue.city)}
            options={options.university}
            handleSelect={handleSelect}
          />
          <SelectForm
            title={selectTitle.residence}
            objectKey={dataPropertyKeys.residence}
            isSelectEnabled={Boolean(formValue.university)}
            options={options.residence}
            handleSelect={handleSelect}
          />
          <button className='form-submit-button' disabled={Boolean(!formValue.residence)}>
            Отправить
          </button>
        </div>
        {outputEnabled && <Output {...formValue} />}
      </form>
    </>
  );
};

export default Form;
