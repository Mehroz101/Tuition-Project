import React from "react";
import { Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import "../../styles/CustomTextInput.css";

const CustomTextInput = ({
  control,
  name,
  required = false,
  defaultValue = "",
  label = "",
  isEnable = true,
  type = "text",
  placeholder = "",
  errorMessage = "This field is required!",
  showErrorMessage = true,
  autoFocus = false,
  onChange = () => {},
  RegexCode = null,
  validateOnChange = false, // New prop to control validation on change
  ...props
}) => {
  return (
    <div className="custom-input-container">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{
          required: required ? errorMessage : false,
          validate: (value) => {
            const urlRegex = new RegExp(RegexCode); // Create a regex from the prop
            return urlRegex.test(value) || "Invalid URL format!";
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <label htmlFor={field.name} className={`custom-label`}>
              {label}
              {required && <span className="text-red-700 fw-bold">*</span>}
            </label>
            <InputText
              {...field}
              onChange={(e) => {
                const newValue = e.target.value;

                // Update the value in the form state
                field.onChange(newValue); 

                // Validate on change if the prop is true
                if (validateOnChange) {
                  const urlRegex = new RegExp(RegexCode); // Create a regex from the prop
                  if (!urlRegex.test(newValue)) {
                    // Optionally set an error message in the form state
                    // You can also handle this differently if needed
                  }
                }

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
                {error.message}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};

export default CustomTextInput;