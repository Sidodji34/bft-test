type TOutput = {
  country: string;
  city: string;
  university: string;
  residence: string;
};

const Output: React.FC<TOutput> = (selections) => {
  return (
    <footer className='form-footer'>
      <span className='form-footer-title'>Вы выбрали:</span>
      <ul className='form-footer-list'>
        <li className='form-footer-list_item'>Страна: {selections.country}</li>
        <li className='form-footer-list_item'>Город: {selections.city}</li>
        <li className='form-footer-list_item'>ВУЗ: {selections.university}</li>
        <li className='form-footer-list_item'>Проживание: {selections.residence}</li>
      </ul>
    </footer>
  );
};

export default Output;
