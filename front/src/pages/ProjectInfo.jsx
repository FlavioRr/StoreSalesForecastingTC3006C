import React, { useState } from "react";
import Chart from "../components/Chart";
import { handleSubmit } from "../queries/queryPredict";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { InputForm } from "../components/InputForm";
import inputFields from "../data/dummy";

const ProjectInfo = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [chartData, setChartData] = useState([]); // Initialize chart data state

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = parseFloat(value);
    setFormData({ ...formData, [name]: newValue });
  };

  const onSubmitData = async (data) => {
    try {
      const response = await handleSubmit(data);
      setChartData(response);
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-200">
      <div className="overflow-y-auto h-full w-1/3 p-6 rounded shadow-md bg-white">
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
      </div>
      <Chart chartData={chartData}/>
    </div>
  );
};

export default ProjectInfo;
