import { cn } from "@/helpers/classHelpers";
import { IInputProps } from "@/types/ComponentTypes";

import { ChangeEvent } from "react";
import { CiLock } from "react-icons/ci";
import Typography from "../Typography";

const PrimaryInput: React.FC<IInputProps> = ({
  name,
  onBlur,
  value,
  placeholder,
  label,
  error,
  type,
  onChange,
  disabled,
  className,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // If the type is "number," allow only numeric characters

    if (type === "tel") {
      inputValue = inputValue.replace(/[^0-9]/g, "");
    } else if (type === "pin") {
      const numericInput = inputValue.replace(/[^0-9]/g, "");

      inputValue = numericInput.slice(0, 4);
    }

    const customEvent = {
      target: {
        name,
        value: inputValue,
      },
    };

    // Call the onChange callback with the custom event
    onChange(customEvent as ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={cn("flex flex-col space-y-1 w-[100%] hide-calendar-icon", className)}>
      <Typography.SubText htmlFor={name} className="text-[#344054]">
        {label}
      </Typography.SubText>
      <div className={"w-[100%] relative"}>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={handleInputChange}
          // onKeyDown={(e) => e.preventDefault() }
          className={`border-[1px] border-borderGrey rounded-lg h-9 text-xs placeholder:text-xs pl-4 outline-none focus:border-[#C8BEEB] focus:border-2 transition-all w-[100%] duration-300 ${
            error ? "border-red-500 bg-errorBg" : ""
          } ${disabled ? "bg-gray-100 text-gray-500" : ""}`}
          disabled={disabled}
        />
        {disabled && <CiLock className={"absolute top-3 right-4 text-gray-500"} />}
      </div>

      {error && <small className="text-red-500 text-xs transition-all duration-300 font-light">{error}</small>}
    </div>
  );
};

export default PrimaryInput;
