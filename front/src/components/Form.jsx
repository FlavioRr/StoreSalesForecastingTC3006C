import React, { useState } from 'react';

// Define los nombres y placeholders de los campos
const inputFields = [
  { name: 'trend', placeholder: 'Trend', type: Number, value: 1.0 },
  { name: 'sin(1,freq=W-SUN)', placeholder: 'sin(1,freq=W-SUN)', type: Number, value: -0.7818314824680299 },
  { name: 'cos(1,freq=W-SUN)', placeholder: 'cos(1,freq=W-SUN)', type: Number, value: 0.6234898018587334 },
  { name: 'sin(2,freq=W-SUN)', placeholder: 'sin(2,freq=W-SUN)', type: Number, value: -0.9749279121818235 },
  { name: 'cos(2,freq=W-SUN)', placeholder: 'cos(2,freq=W-SUN)', type: Number, value: -0.2225209339563148 },
  { name: 'sin(3,freq=W-SUN)', placeholder: 'sin(3,freq=W-SUN)', type: Number, value: -0.43388373911755757 },
  { name: 'cos(3,freq=W-SUN)', placeholder: 'cos(3,freq=W-SUN)', type: Number, value: -0.9009688679024194 },
  { name: 'Average_oil', placeholder: 'Average_oil', type: Number, value: 49.15428571428572 },
  { name: 'week_day', placeholder: 'week_day', type: Number, value: 0 },
  { name: 'dayofweek_1', placeholder: 'dayofweek_1', type: Boolean, value: 0 },
  { name: 'dayofweek_2', placeholder: 'dayofweek_2', type: Boolean, value: 0 },
  { name: 'dayofweek_3', placeholder: 'dayofweek_3', type: Boolean, value: 0 },
  { name: 'dayofweek_4', placeholder: 'dayofweek_4', type: Boolean, value: 0 },
  { name: 'dayofweek_5', placeholder: 'dayofweek_5', type: Boolean, value: 0 },
  { name: 'dayofweek_6', placeholder: 'dayofweek_6', type: Boolean, value: 1 },
  { name: 'type_Additional', placeholder: 'type_Additional', type: Boolean, value: 0 },
  { name: 'type_Bridge', placeholder: 'type_Bridge', type: Boolean, value: 0 },
  { name: 'type_Event', placeholder: 'type_Event', type: Boolean, value: 0 },
  { name: 'type_Holiday', placeholder: 'type_Holiday', type: Boolean, value: 0 },
  { name: 'type_Transfer', placeholder: 'type_Transfer', type: Boolean, value: 0 },
  { name: 'type_Work Day', placeholder: 'type_Work Day', type: Boolean, value: 0 },
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
		<div class="mb-6 ml-10">
			<div>
				<label class="bg-blue-200 text-black font-bold py-2 px-4 rounded">
				{field.name}
				</label>
			</div>
			
			<input
			key={field.name}
			type={field.type}
			placeholder={field.placeholder}
			name={field.name}
			value={field.value}
			className="border rounded-md py-2 px-4 my-2"
			/>
		</div>
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
