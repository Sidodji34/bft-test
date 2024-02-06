import { useFormContext } from '../../context';
import { dataPropertyKeys } from '../../utils/constants';

type TSelectForm = {
  title: string;
  options: string[];
  objectKey: string;
  isSelectEnabled: boolean;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>, objectKey: string) => void;
};

const SelectForm: React.FC<TSelectForm> = ({
  title,
  objectKey,
  options,
  isSelectEnabled,
  handleSelect,
}) => {
  const { formValue, setFormValue, setOutputEnabled } = useFormContext();

  const handleRemoveSelect = (objectKey: string) => {
    let updatedValues: Record<string, string> = {};
    switch (objectKey) {
      case dataPropertyKeys.city:
        updatedValues = { city: '', university: '', residence: '' };
        break;
      case dataPropertyKeys.university:
        updatedValues = { university: '', residence: '' };
        break;
      case dataPropertyKeys.residence:
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
          disabled={!isSelectEnabled}>
          <option defaultValue='' hidden></option>
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
};

export default SelectForm;
