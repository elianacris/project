import {
    SxProps,
    TextFieldVariants,
    Theme,
  } from "@mui/material";
  import { ChangeEvent, FocusEvent, ReactNode } from "react";
  import {
    Control,
    FieldPath,
    FieldValues,
    UseControllerProps,
    UseFormSetValue,
    UseFormTrigger,
  } from "react-hook-form";
  
  export interface BaseRHFProps<T extends FieldValues = FieldValues>
    extends Partial<UseControllerProps<T>> {
    disabled?: boolean;
    required?: boolean;
    placeholder?: string;
    sx?: SxProps<Theme>;
    children?: ReactNode;
    setValue?: UseFormSetValue<T>;
    trigger?: UseFormTrigger<T>;
    control: Control<T>;
  }
  
  export interface InputRHFProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  > extends BaseRHFProps<TFieldValues>,
      Omit<TextFieldVariants, "defaultValue" | "sx" | "name"> {
    name: TName;
    label?: string;
    select?: boolean;
    type?: string;
    helperText?: string;
    onBlurAction?: (event: FocusEvent<HTMLInputElement>) => void;
    onChangeAction?: (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChange?: (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFocusAction?: () => void;
    fullWidth?: boolean;
    // eslint-disable-next-line @typescript-eslint/ban-types
    InputProps?: Object ;
    customError?: boolean;
    loading?: boolean;
    multiline?: boolean;
    value?: string | number | string[];
    autoComplete?: string;
    removeAnswer?: () => void;
    disabledRemoveAnswer?: boolean;
    hideDelete?: boolean;
    variant?: TextFieldVariants ;
  }
  

 
  
  