import { useFormContext } from '../../context';

type TSelectForm = {
  title: string;
  options: string[];
  objectKey: string;
  isSelectEnabled: string;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>, objectKey: string) => void;
};

function SelectForm({ title, objectKey, options, isSelectEnabled, handleSelect }: TSelectForm) {
  const { formValue, setFormValue, setOutputEnabled } = useFormContext();

  const handleRemoveSelect = (objectKey: string) => {
    let updatedValues: Record<string, string> = {};

    switch (objectKey) {
      case 'city':
        updatedValues = { city: '', university: '', residence: '' };
        break;
      case 'university':
        updatedValues = { university: '', residence: '' };
        break;
      case 'residence':
        updatedValues = { residence: '' };
        break;
      default:
        updatedValues = { country: '', city: '', university: '', residence: '' };
        break;
    }
    setFormValue({ ...formValue, ...updatedValues });
    setOutputEnabled(false);
  };

  return (
    <div className='select'>
      <div>
        <label className='select-title' htmlFor={objectKey}>
          {title}
        </label>
        <select
          className='select'
          id={objectKey}
          value={formValue[objectKey]}
          onChange={(e) => handleSelect(e, objectKey)}
          disabled={Boolean(!isSelectEnabled)}>
          <option value='' hidden></option>
          {options.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
      <button
        className='delete-select-button'
        type='button'
        onClick={() => handleRemoveSelect(objectKey)}>
        ✕
      </button>
    </div>
  );
}

export default SelectForm;
