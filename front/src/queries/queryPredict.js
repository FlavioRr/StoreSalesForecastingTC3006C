import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const handleSubmit = async (data) => {
  const formData = new FormData();
  const {
    trend,
    freqWSUN1sin,
    freqWSUN1cos,
    freqWSUN2sin,
    freqWSUN2cos,
    freqWSUN3sin,
    freqWSUN3cos,
    Average_oil,
    week_day,
    dayofweek_1,
    dayofweek_2,
    dayofweek_3,
    dayofweek_4,
    dayofweek_5,
    dayofweek_6,
    type_Additional,
    type_Bridge,
    type_Event,
    type_Holiday,
    type_Transfer,
    type_WorkDay,
  } = data;

  formData.append("trend", trend);
  formData.append("sin(1,freq=W-SUN)", freqWSUN1sin);
  formData.append("cos(1,freq=W-SUN)", freqWSUN1cos);
  formData.append("sin(2,freq=W-SUN)", freqWSUN2sin);
  formData.append("cos(2,freq=W-SUN)", freqWSUN2cos);
  formData.append("sin(3,freq=W-SUN)", freqWSUN3sin);
  formData.append("cos(3,freq=W-SUN)", freqWSUN3cos);
  formData.append("Average_oil", Average_oil);
  formData.append("week_day", week_day);
  formData.append("dayofweek_1", dayofweek_1);
  formData.append("dayofweek_2", dayofweek_2);
  formData.append("dayofweek_3", dayofweek_3);
  formData.append("dayofweek_4", dayofweek_4);
  formData.append("dayofweek_5", dayofweek_5);
  formData.append("dayofweek_6", dayofweek_6);
  formData.append("type_Additional", type_Additional);
  formData.append("type_Bridge", type_Bridge);
  formData.append("type_Event", type_Event);
  formData.append("type_Holiday", type_Holiday);
  formData.append("type_Transfer", type_Transfer);
  formData.append("type_Work Day", type_WorkDay);

  try {
    const response = await axios({
        url: `${baseUrl}/predict`,
        method: "POST",
        data: formData
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
