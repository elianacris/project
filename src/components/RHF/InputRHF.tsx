import { ChangeEvent, FocusEvent } from "react";
import { useController } from "react-hook-form";

import { TextField } from "@mui/material";
import { InputRHFProps } from "../../domain/models/inputRHF-model";

export default function InputRHF(props: InputRHFProps) {
  const {
    required,
    name,
    control,
    sx,
    children,
    disabled,
    helperText,
    onBlurAction,
    onChangeAction,
    onFocusAction,
    defaultValue,
    customError,
    variant,
    ...rest
  } = props;
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name, control, defaultValue });
const { ref, onBlur, onChange, value, ...otheProps } = field;
const onBlurPropagator = (event: FocusEvent<HTMLInputElement>) => {
    onBlur();
    onBlurAction && onBlurAction(event);
};

const onChangePropagator = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
    onChange(event.target.value);
    onChangeAction && onChangeAction(event.target.value as unknown as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
};
  return (
    <TextField
      {...otheProps}
      variant={variant}
      value={value ?? ""}
      disabled={disabled}
      onBlur={onBlurPropagator}
      onChange={onChangePropagator}
      onFocus={onFocusAction}
      inputRef={ref}
      error={invalid || customError}
      helperText={ error?.message || helperText}
      FormHelperTextProps={{ "aria-live": invalid ? "polite" : "off" }}
      required={Boolean(required)}
      {...(disabled
        ? {
            InputProps: { readOnly: true, color: "secondary" },
            inputProps: { "aria-disabled": true },
            InputLabelProps: { color: "secondary" },
            sx: {
              ".MuiFormHelperText-root.Mui-error": {
                m: 0,
              },
              ...sx,
              "& input": { color: "text.disabled", marginTop: "0px" },
            },
          }
        : { sx })}
      sx={{
        ".MuiFormHelperText-root.Mui-error": {
          ml: "5px",
          mt: "0px",
          mb: "0px",
        },

        ...sx,
      }}
      {...rest}
    >
      {children}
    </TextField>
  );
}
