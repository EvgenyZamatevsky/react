import React, { ChangeEvent, FC } from "react";
import { CheckboxPropsType } from "./types";
import classes from "./index.module.scss";

export const Checkbox: FC<CheckboxPropsType> =
  ({
     className,
     labelClassName,
     spanClassName,
     children,
     onChange,
     setChecked,
     variant,
     ...restProps
   }) => {

    const checkboxClass = variant ? classes[variant] : classes.checkbox;
    const additionalCheckboxClass = className ? className : "";
    const checkboxClasses = `${checkboxClass} ${additionalCheckboxClass}`;
    const labelClass = children ? classes.label : "";
    const additionalLabelClass = children && labelClassName ? labelClassName : "";
    const labelClasses = `${labelClass} ${additionalLabelClass}`;
    const spanClass = classes.span;
    const additionalSpanClass = spanClassName ? spanClassName : "";
    const spanClasses = `${spanClass} ${additionalSpanClass}`;

    const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
      onChange && onChange(event);

      setChecked && setChecked(event.currentTarget.checked);
    };

    return (
      <label className={labelClasses}>
        <input
          type="checkbox"
          className={checkboxClasses}
          style={children ? { marginRight: "9px" } : {}}
          onChange={onCheckboxChange}
          {...restProps}
        />
        {children && <span className={spanClasses}>{children}</span>}
      </label>
    );
  };
