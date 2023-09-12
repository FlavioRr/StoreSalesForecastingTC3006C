import React, { useState } from "react";
import { handleSubmit } from "../queries/queryPredict";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";

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
  { name: "dayofweek_1", placeholder: "dayofweek_1", type: Boolean, value: 0 },
  { name: "dayofweek_2", placeholder: "dayofweek_2", type: Boolean, value: 0 },
  { name: "dayofweek_3", placeholder: "dayofweek_3", type: Boolean, value: 0 },
  { name: "dayofweek_4", placeholder: "dayofweek_4", type: Boolean, value: 0 },
  { name: "dayofweek_5", placeholder: "dayofweek_5", type: Boolean, value: 0 },
  { name: "dayofweek_6", placeholder: "dayofweek_6", type: Boolean, value: 1 },
  {
    name: "type_Additional",
    placeholder: "type_Additional",
    type: Boolean,
    value: 0,
  },
  { name: "type_Bridge", placeholder: "type_Bridge", type: Boolean, value: 0 },
  { name: "type_Event", placeholder: "type_Event", type: Boolean, value: 0 },
  {
    name: "type_Holiday",
    placeholder: "type_Holiday",
    type: Boolean,
    value: 0,
  },
  {
    name: "type_Transfer",
    placeholder: "type_Transfer",
    type: Boolean,
    value: 0,
  },
  {
    name: "type_Work Day",
    placeholder: "type_Work Day",
    type: Boolean,
    value: 0,
  },
];

const Form = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue =
      type === "number"
        ? parseFloat(value)
        : type === "checkbox"
        ? checked
        : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const onSubmitData = async (data) => {
    cconsole.log("Sending data to backend:", data);
    try {
      await handleSubmit(data);
      navigate("/ProjectInfo");
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
          <div className="mb-6 ml-10" key={field.name}>
            <div>
              <label className="bg-blue-200 text-black font-bold py-2 px-4 rounded">
                {field.name}
              </label>
            </div>

            {field.type === Boolean ? (
              <input
                type="checkbox"
                name={field.name}
                defaultChecked={field.value} // Use defaultChecked for checkboxes
                className="border rounded-md py-2 px-4 my-2"
                onChange={handleChange}
              />
            ) : (
              <input
                type={field.type === Number ? "number" : "text"}
                placeholder={field.placeholder}
                name={field.name}
                defaultValue={field.value}
                className="border rounded-md py-2 px-4 my-2"
                onChange={handleChange}
              />
            )}
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
