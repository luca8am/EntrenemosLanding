import type { InputHTMLAttributes } from "react";

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  id: string;
  label: string;
  error?: string;
  wrapperClassName?: string;
}

export function TextField({ id, label, error, wrapperClassName, "aria-describedby": describedBy, ...inputProps }: TextFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const description = [describedBy, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <label className={["ui-field", error ? "ui-field--error" : "", wrapperClassName].filter(Boolean).join(" ")} htmlFor={id}>
      <span className="ui-field__label">{label}</span>
      <input
        {...inputProps}
        id={id}
        className={["ui-field__control", inputProps.className].filter(Boolean).join(" ")}
        aria-invalid={error ? true : inputProps["aria-invalid"]}
        aria-describedby={description}
      />
      {error ? <span className="ui-field__message" id={errorId}>{error}</span> : null}
    </label>
  );
}
