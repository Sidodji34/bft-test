import { useFormContext } from '../../context/index';
import SelectForm from '../SelectForm';
import Output from '../Output';
import { getValues } from '../../utils';

function Form() {
  const {
    options,
    setOptions,
    countries,
    formValue,
    setFormValue,
    outputEnabled,
    setOutputEnabled,
  } = useFormContext();

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>, objectKey: string) {
    const isSelectedValue = event.target.value;
    if (objectKey === 'country') {
      setOptions({ ...options, ...getValues(isSelectedValue) });
      setFormValue({
        ...formValue,
        country: isSelectedValue,
        city: '',
        university: '',
        residence: '',
      });
    } else {
      setFormValue({ ...formValue, [objectKey]: isSelectedValue });
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOutputEnabled(true);
  }

  return (
    <>
      <form className='form-body' onSubmit={(e) => handleSubmit(e)}>
        <div className='content'>
          <SelectForm
            title='Выбор страны'
            objectKey='country'
            isSelectEnabled='enabled'
            options={countries}
            handleSelect={handleSelect}
          />
          <SelectForm
            title='Выбор города'
            objectKey='city'
            isSelectEnabled={formValue.country}
            options={options.cities}
            handleSelect={handleSelect}
          />
          <SelectForm
            title='Выбор ВУЗа'
            objectKey='university'
            isSelectEnabled={formValue.city}
            options={options.university}
            handleSelect={handleSelect}
          />
          <SelectForm
            title='Вариант проживания'
            objectKey='residence'
            isSelectEnabled={formValue.university}
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
}

export default Form;
