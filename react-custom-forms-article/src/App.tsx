import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm, IValues } from './hooks/useForm';

const formInputs = {
  firstName: {},
  lastName: '',
};

function App() {
  const { fields, handleSubmit } = useForm(formInputs);

  const { firstName } = fields;

  const onSubmit = ({ values }: { values: IValues }) => {
    console.log(values, 'submit');
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" value={firstName.value} onChange={firstName.setState} />
      </form>
    </div>
  );
}

export default App;
