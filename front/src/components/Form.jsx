import React, { useState } from 'react';
import CustomInput from './CustomInput';

// Define los nombres y placeholders de los campos
const inputFields = [
  { name: 'index', placeholder: 'Index', type: '', value: '' },
  { name: 'trend', placeholder: 'Trend', type: '', value: '' },
  { name: 'sin(1,freq=W-SUN)', placeholder: 'sin(1,freq=W-SUN)', type: '', value: '' },
  { name: 'cos(1,freq=W-SUN)', placeholder: 'cos(1,freq=W-SUN)', type: '', value: '' },
  { name: 'sin(2,freq=W-SUN)', placeholder: 'sin(2,freq=W-SUN)', type: '', value: '' },
  { name: 'cos(2,freq=W-SUN)', placeholder: 'cos(2,freq=W-SUN)', type: '', value: '' },
  { name: 'sin(3,freq=W-SUN)', placeholder: 'sin(3,freq=W-SUN)', type: '', value: '' },
  { name: 'cos(3,freq=W-SUN)', placeholder: 'cos(3,freq=W-SUN)', type: '', value: '' },
  { name: 'Average_oil', placeholder: 'Average_oil', type: '', value: '' },
  { name: 'week_day', placeholder: 'week_day', type: '', value: '' },
  { name: 'dayofweek_1', placeholder: 'dayofweek_1', type: '', value: '' },
  { name: 'dayofweek_2', placeholder: 'dayofweek_2', type: '', value: '' },
  { name: 'dayofweek_3', placeholder: 'dayofweek_3', type: '', value: '' },
  { name: 'dayofweek_4', placeholder: 'dayofweek_4', type: '', value: '' },
  { name: 'dayofweek_5', placeholder: 'dayofweek_5', type: '', value: '' },
  { name: 'dayofweek_6', placeholder: 'dayofweek_6', type: '', value: '' },
  { name: 'type_Additional', placeholder: 'type_Additional', type: '', value: '' },
  { name: 'type_Bridge', placeholder: 'type_Bridge', type: '', value: '' },
  { name: 'type_Event', placeholder: 'type_Event', type: '', value: '' },
  { name: 'type_Holiday', placeholder: 'type_Holiday', type: '', value: '' },
  { name: 'type_Transfer', placeholder: 'type_Transfer', type: '', value: '' },
];


const Form = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío de datos o realizar otras acciones con los datos del formulario.
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      {inputFields.map((field) => (
        <input
          key={field.name}
          type="text"
          placeholder={field.placeholder}
          name={field.name}
          value={formData[field.name] || ''}
          onChange={handleChange}
          className="border rounded-md py-2 px-4 my-2"
        />
      ))}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;
