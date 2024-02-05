import Form from './components/Form';
import { FormProvider } from './context';
import './App.css';

function App() {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
}

export default App;
