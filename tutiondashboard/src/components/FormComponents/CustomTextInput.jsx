import React from "react";
import { Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import "../../styles/CustomTextInput.css"
const CustomTextInput = ({
  control,
  name,
  required=false,
  defaultValue = "",
  label = "",
  isEnable = true,
  type = "text",
  placeholder = "",
  errorMessage = "This field is required!",
  showErrorMessage = true,
  autoFocus = false,
  onChange = () => {},
  ...props
}) => {
  return (
    <div className="custom-input-container">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={required ? { required: errorMessage } : {}}
        render={({ field, fieldState: { error } }) => (
          <>
            <label htmlFor={field.name} className={`custom-label `}>
              {label}
              {required && <span className="text-red-700 fw-bold ">*</span>}
            </label>
            <InputText
              {...field}
              onChange={(e) => {
                field.onChange(e.target.value);
                if (onChange) {
                  onChange(e);
                }
              }}
              id={field.name}
              type={type}
              placeholder={placeholder}
              autoFocus={autoFocus}
              disabled={!isEnable}
              className={`custom-input ${error ? "input-error" : ""}`}
            />

            {showErrorMessage && error && (
              <span className="error-message text-red-500 text-sm">
                {errorMessage}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};

export default CustomTextInput;

