import React, { useState } from "react";
import { handleSubmit } from "../queries/queryPredict";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { InputForm } from "../components/InputForm";

// Define los nombres y placeholders de los campos
const inputFields = [
  { name: "trend", placeholder: "Trend", type: Number, value: 1.0 },
  {
    name: "sin(1,freq=W-SUN)",
    placeholder: "sin(1,freq=W-SUN)",
    type: Number,
    value: -0.7818314824680299,
  },
  {
    name: "cos(1,freq=W-SUN)",
    placeholder: "cos(1,freq=W-SUN)",
    type: Number,
    value: 0.6234898018587334,
  },
  {
    name: "sin(2,freq=W-SUN)",
    placeholder: "sin(2,freq=W-SUN)",
    type: Number,
    value: -0.9749279121818235,
  },
  {
    name: "cos(2,freq=W-SUN)",
    placeholder: "cos(2,freq=W-SUN)",
    type: Number,
    value: -0.2225209339563148,
  },
  {
    name: "sin(3,freq=W-SUN)",
    placeholder: "sin(3,freq=W-SUN)",
    type: Number,
    value: -0.43388373911755757,
  },
  {
    name: "cos(3,freq=W-SUN)",
    placeholder: "cos(3,freq=W-SUN)",
    type: Number,
    value: -0.9009688679024194,
  },
  {
    name: "Average_oil",
    placeholder: "Average_oil",
    type: Number,
    value: 49.15428571428572,
  },
  { name: "week_day", placeholder: "week_day", type: Number, value: 0 },
  { name: "dayofweek_1", placeholder: "dayofweek_1", type: Number, value: 0 },
  { name: "dayofweek_2", placeholder: "dayofweek_2", type: Number, value: 0 },
  { name: "dayofweek_3", placeholder: "dayofweek_3", type: Number, value: 0 },
  { name: "dayofweek_4", placeholder: "dayofweek_4", type: Number, value: 0 },
  { name: "dayofweek_5", placeholder: "dayofweek_5", type: Number, value: 0 },
  { name: "dayofweek_6", placeholder: "dayofweek_6", type: Number, value: 1 },
  {
    name: "type_Additional",
    placeholder: "type_Additional",
    type: Number,
    value: 0,
  },
  { name: "type_Bridge", placeholder: "type_Bridge", type: Number, value: 0 },
  { name: "type_Event", placeholder: "type_Event", type: Number, value: 0 },
  {
    name: "type_Holiday",
    placeholder: "type_Holiday",
    type: Number,
    value: 0,
  },
  {
    name: "type_Transfer",
    placeholder: "type_Transfer",
    type: Number,
    value: 0,
  },
  {
    name: "type_Work Day",
    placeholder: "type_Work Day",
    type: Number,
    value: 0,
  },
];

const Form = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue;
  
    if (type === "number") {
      newValue = parseFloat(value);
    } else if (type === "checkbox") {
      // Convert checkboxes to "1" for checked and "0" for unchecked
      newValue = checked ? 1 : 0;
    } else {
      newValue = value;
    }
  
    setFormData({ ...formData, [name]: newValue });
  };
  

  const onSubmitData = async (data) => {
    try {
      await handleSubmit(data);
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmitData)}
        className="w-full max-w-md mx-auto"
      >
        {inputFields.map((field) => (
          <div className="mb-3 ml-10" key={field.name}>
            <InputForm
              label={field.name}
              name={field.name}
              type={field.type === Boolean ? "checkbox" : "number"}
              defaultValue={field.value}
              placeholder={field.placeholder}
              onChange={handleChange}
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
    </FormProvider>
  );
};

export default Form;
