import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm, IValues } from './hooks/useForm';

const formInputs = {
  firstName: {
    required: true,
    validators: [
      (s: string) => !s.length && 'Поле обязательно для заполнения',
      (s: string) => s.length < 2 && 'Минимальная длина строки 2',
      (s: string) => s.length <= 2 && 'А теперь 3',
      (s: string) => parseInt(s) < 2 && 'Должна быть цифра больше 1',
    ]
  },
  datetime: {
    validators: [
      (s: string) => new Date(s).getUTCFullYear() > new Date().getUTCFullYear() && 'Год рождения не может быть больше текущего',
    ]
  }
};

function App() {
  const { fields, isValid, handleSubmit } = useForm(formInputs);

  const { firstName, datetime } = fields;

  const onSubmit = ({ values }: { values: IValues }) => {
    console.log(values, 'submit');
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" value={firstName.value} onChange={firstName.setState} />
        <span>{firstName.touched && firstName.error}</span>
        <input type='date' value={datetime.value} onChange={datetime.setState} />
        <span>{datetime.touched && datetime.error}</span>
        <button disabled={!isValid}>Send form</button>
      </form>
    </div>
  );
}

export default App;
