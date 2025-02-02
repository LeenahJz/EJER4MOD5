import { useState } from 'react';

interface FormValues {
    patientName: string;
    doctorId: string;
    date: string;
    time: string;
    phone: string;  // Add phone here
  }
  
  const useForm = (initialValues: FormValues, onSubmit: (values: FormValues) => void) => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(values);
    };
  
    return { values, errors, handleChange, handleSubmit };
  };
  
  export default useForm;