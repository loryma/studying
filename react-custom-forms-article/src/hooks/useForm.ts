import { useCallback, FormEvent, useState, ChangeEvent } from "react";

type IValidatorFN = (s: string) => {};

export interface IField {
  value?: string;
  type?: string;
  label?: string;
  error?: string;
  isValid?: boolean;
  required?: boolean;
  touched?: boolean;
  setState?: (event: ChangeEvent<HTMLInputElement>) => {};
  validators?: IValidatorFN[];
}

export type ICustomField<T = {}> = IField & T;

export type ICustomObject<T = {}> = {
  [key: string]: ICustomField & T;
}

export type IValues = {
  [key: string]: string | number;
}

export type IForm = {
  fields: ICustomObject;
  isValid: boolean;
  handleSubmit: (onSubmit: Function) => (e: FormEvent) => void;
}

type IOptions = {
  [key: string]: any;
}

export const useForm = (initialFields: any = {}) => {
  const form = Object.entries(initialFields).reduce((fields, [name, value]: any[]) => {
    const isString = typeof value === 'string';

    const field = {
      [name]: {
        value: (isString && value) || ((!isString && value.value) || ''),
        setState: (value: ChangeEvent<HTMLInputElement>) => handleInput(value, name),
        ...(!isString && value),
      }
    };

    return {...fields, ...field};
}, {});

  const [fields, setState] = useState<any>(form);

  const handleInput = useCallback(
    (element: ChangeEvent<HTMLInputElement>, name: string) => {
      const input = fields[name];
      const value = element.target.value;
      const field = {...input, value};

      setState((prevState: ICustomObject) => ({...prevState, [name]: field }));
    }, [fields, setState]);

    const handleSubmit = (onSubmit: Function) => (e: FormEvent) => {
      if ( e && e.preventDefault) {
        e.preventDefault();
      }

      const values = Object.entries(fields).reduce(((prev: any, [name, {value}]: any) => ({
        ...prev, [name]: value
      })), {});
  
      onSubmit({values});
    }

    return {
      handleSubmit,
      fields,
    }
};