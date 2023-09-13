import React, { useState } from "react";
import { handleSubmit } from "../queries/queryPredict";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { InputForm } from "../components/InputForm";
import inputFields from "../data/dummy";

const Form = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = parseFloat(value);
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
