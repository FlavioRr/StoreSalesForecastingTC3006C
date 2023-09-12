import axios from "axios";

// Assuming you have defined baseUrl somewhere like you did before
const baseUrl = import.meta.env.VITE_BASE_URL;

export const handleSubmit = async (data) => {
  const inputData = {
    "trend": parseFloat(data.trend),
    "sin(1,freq=W-SUN)": parseFloat(data["sin(1,freq=W-SUN)"]),
    "cos(1,freq=W-SUN)": parseFloat(data["cos(1,freq=W-SUN)"]),
    "sin(2,freq=W-SUN)": parseFloat(data["sin(2,freq=W-SUN)"]),
    "cos(2,freq=W-SUN)": parseFloat(data["cos(2,freq=W-SUN)"]),
    "sin(3,freq=W-SUN)": parseFloat(data["sin(3,freq=W-SUN)"]),
    "cos(3,freq=W-SUN)": parseFloat(data["cos(3,freq=W-SUN)"]),
    "Average_oil": parseFloat(data.Average_oil),
    "week_day": parseFloat(data.week_day),
    "dayofweek_1": data.dayofweek_1 ? 1 : 0,
    "dayofweek_2": data.dayofweek_2 ? 1 : 0,
    "dayofweek_3": data.dayofweek_3 ? 1 : 0,
    "dayofweek_4": data.dayofweek_4 ? 1 : 0,
    "dayofweek_5": data.dayofweek_5 ? 1 : 0,
    "dayofweek_6": data.dayofweek_6 ? 1 : 0,
    "type_Additional": data.type_Additional ? 1 : 0,
    "type_Bridge": data.type_Bridge ? 1 : 0,
    "type_Event": data.type_Event ? 1 : 0,
    "type_Holiday": data.type_Holiday ? 1 : 0,
    "type_Transfer": data.type_Transfer ? 1 : 0,
    "type_Work Day": data["type_Work Day"] ? 1 : 0,
  };

  try {
    console.log("Data:", inputData);
    const response = await axios({
      url: `${baseUrl}/predict`,
      method: "POST",
      data: inputData,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
