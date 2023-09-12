import React from 'react';

const CustomInput = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="border rounded-md py-2 px-4 my-2"
    />
  );
};

export default CustomInput;