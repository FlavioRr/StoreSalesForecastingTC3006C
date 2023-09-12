import React from "react";
import { useFormContext } from "react-hook-form";

export const InputForm = ({
  label,
  name,
  type,
  placeholder,
  defaultValue,
  pattern,
  required = false,
  onChange,
}) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <label htmlFor={name} className="font-semibold text-md py-1">
        {label}
      </label>
      <input
        {...register(name, { pattern: { value: pattern } })}
        defaultValue={defaultValue}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
        type={type}
        id={name}
        placeholder={placeholder}
        autoComplete="off"
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

