import React from "react";
import { Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
const CPassword = ({
  control,
  name,
  rules,
  required,
  defaultValue = "",
  label = "",
  isEnable = true,
  type = "text",
  placeholder = "",
  errorMessage = "This field is required!",
  showErrorMessage = true,
  toggleMask = false,
  autoFocus = false,
  ...props
}) => {
  return (
    <div className="custom-input-container  ">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <label htmlFor={field.name} className={`custom-label `}>
              {label}
              {required && <span className="text-red-700 fw-bold ">*</span>}
            </label>
            <Password
              {...field}
              id={field.name}
              type={type}
              toggleMask={toggleMask}
              placeholder={placeholder}
              autoFocus={autoFocus}
              disabled={!isEnable}
              className={`custom-input  ${error ? "input-error" : ""}`}
              style={{
                width: "100%",
              }}
              pt={{
                root: {
                  style: {
                    width: "100%",
                    padding: "0",
                    fontSize: ".9em",
                  },
                },
                input: {
                  style: {
                    width: "100%",
                    padding: "0.5rem",
                  },
                },
              }}
            />

            {showErrorMessage && error && (
              <span className="error-message">{errorMessage}</span>
            )}
          </>
        )}
      />
    </div>
  );
};

export default CPassword;
