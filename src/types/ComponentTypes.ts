export type IInputProps = {
  name: string;
  placeholder: string;
  label?: string;
  error?: string | undefined | false;
  value: string | undefined | number;
  type?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
  rightSection?: React.ReactNode;
  leftSection?: React.ReactNode;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
};

export interface Option {
  value: string | number;
  label: string | number;
}

export type ICheckboxProps = {
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label?: string;
  value?: boolean | string | undefined;
  className?: string;
};

export type TSelectInputProps = {
  options: Option[];
  name?: string;
  value?: string | undefined | number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  css?: string;
  disabled?: boolean;
  defaultValue?: string;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  error?: string | undefined | false;
};

export interface TButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type: "button" | "reset" | "submit";
  disabled?: boolean;
  isLoading?: boolean;
  rightSection?: React.ReactNode;
  leftSection?: React.ReactNode;
}

export enum SupportedDateRange {
  LastMonth,
  LastQuarter,
  LastYear,
  Custom,
}

export interface INavigationPath {
  id: number;
  name: string;
  path: string;
  icon: React.FC<{ stroke: string }>;
  subItems?: { label: string; path: string }[];
}
