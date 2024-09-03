import { IInputProps } from "@/types/ComponentTypes";
import { ChangeEvent } from "react";

const PhoneInput: React.FC<IInputProps> = ({ name, onBlur, value, placeholder, label, error, onChange }) => {
  // Define the phone prefix
  const phonePrefix = "+234";

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Use a regular expression to allow only numeric characters
    const numericInput = inputValue.replace(/[^0-9]/g, "");

    // Limit the input to a maximum of 10 characters
    const maxLengthInput = numericInput.slice(0, 10);

    const customEvent = {
      target: {
        name,
        value: maxLengthInput,
      },
    };
    // Call the onChange callback with the custom event
    onChange(customEvent as ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col space-y-1 w-[100%]">
      <label htmlFor={name} className="text-sm text-[#344054]">
        {label}
      </label>
      <div className="relative w-[100%]">
        <span className="absolute top-1/2 transform -translate-y-1/2 left-4 text-xs text-gray-500 font-normal border-borderGrey border-r-[1px] pr-2">
          {phonePrefix}
        </span>
        <input
          type="tel"
          placeholder={placeholder}
          name={name}
          value={value}
          onBlur={onBlur}
          data-testid="phone-input"
          onChange={handleInputChange}
          className={`border-[1px] border-borderGrey rounded-lg w-[100%] h-[40px] pl-16 text-xs placeholder:text-xs placeholder:font-normal outline-none focus:border-darkGreen transition-all duration-300 ${
            error ? "border-red-500 bg-errorBg" : ""
          }`}
        />
      </div>
      {error && <small className="text-red-500 text-xs transition-all duration-300">{error}</small>}
    </div>
  );
};

export default PhoneInput;
