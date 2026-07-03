import { ReactNode } from "react";

export interface FormTextareaProps {
  name: string;
  label: string;
  rows?: number;
  required?: boolean;
}
export interface FormSelectProps {
  name: string;
  label: string;
  options: {
    label: string;
    value: string;
  }[];
}
export interface FormSectionProps {
  title: string;
  children: ReactNode;
}
export interface FormInputProps {
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  className?: string;
}
export interface formLabelType {
  name: string;
  label: string;
  required?: boolean;
}
export interface FormTextareaProps {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  className?: string;
}
export interface FormDatePickerProps {
  name: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  min?: string;
  max?: string;
  className?: string;
}
export interface FormErrorProps {
  name: string;
}
