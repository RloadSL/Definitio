import { FieldHookConfig, useField } from "formik";
import Image from "next/image";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { FormattedMessage } from "react-intl";
import style from "./rld-input-formik.module.scss";

type TYPEINPUT = "email" | "password" | "number" | "text";

interface RLDInputFormikProps {
  labelID: any;
  onChange?: Function;
  onBlur?: Function;
  type: TYPEINPUT;
  error?: string | undefined;
  placeholder?: string;
  name: string;
  maxLength?: number;
  inputStyle?: "default" | "code";
  icon?: any;
  helper?: string;
  value?: string;
  disabled?: boolean;
}

/**
 * * Main function of the application's Input component: Text | password | number | form email
 * @param  labelID JSON translation ID
 * @param  onChange Control input change
 * @param  onBlur Control input focus
 * @param  type Input type
 * @param  error Input Error
 * @param  placeholder Input placeholder
 * @param  name Input name
 * @param  inputStyle Input Style default | code
 * @param  maxLength Input text length
 * @param icon Input icon;
 * @param helper Input information help text
 * @param value Input value;
 * @param disabled Enable / Disable Input
 */

const RLDInputFormik = ({
  labelID,
  icon,
  error,
  placeholder,
  name,
  onChange,
  onBlur,
  inputStyle,
  type = "text",
  disabled,
  maxLength,
  helper,
  value
}: RLDInputFormikProps) => {
  const [field, meta] = useField({ name });
  const [isFloating, setIsFloating] = useState("");

  useEffect(() => {
    setIsFloating(field.value ? `${style.filled} ${style.label}` : style.label);
  }, [field.value]);

  return (
    <>
      {maxLength && (
        <div className={style.infoChar}>
          <small>{maxLength} caracteres máximo</small>
        </div>
      )}
      <div
        className={`${style.inputContainer} ${error ? style.hasError : ""} ${
          error ? style.hasError : ""
        } ${inputStyle ? style[inputStyle] : ""}`}
      >
        {labelID && (
          <label htmlFor={name} className={`${icon ? style.iconLabel : style.label} ${isFloating}`}>
            <span>
              <FormattedMessage id={labelID} />
            </span>
          </label>
        )}
        <div className="flex-container row align-center">
          {icon != undefined && (
            <div className={`${style.icon}`}>
              <Image className={style.icon} src={icon} alt="" />
            </div>
          )}
          <input
            {...field}
            maxLength={maxLength}
            max={maxLength}
            type={type}
            disabled={disabled}
            name={name}
            id={name}
            autoComplete={"off"}
            placeholder={placeholder}
            step={0.01}
            onBlur={() => {
              if (onBlur) onBlur();
            }}
            className={style.input}
          />
        </div>
        {helper && !meta.error && (
          <small className={style.helper}>
            {" "}
            <FormattedMessage id={helper} />{" "}
          </small>
        )}
      </div>
      {meta.error && meta.touched && <div className={style.error}>{meta.error}</div>}
    </>
  );
};

export default RLDInputFormik;
