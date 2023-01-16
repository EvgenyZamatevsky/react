import React, { ChangeEvent, MouseEvent } from "react";
import { RangePropsType } from "components/common/range/types";
import classes from "./index.module.scss";

export const Range: React.FC<RangePropsType> =
  ({
     onChange,
     onMouseUp,
     setValue,
     setCurrentValue,
     className,
     variant,
     ...restProps
   }) => {

    const rangeClass = variant ? classes[variant] : classes.range;
    const additionalRangeClass = className ? className : "";
    const rangeClasses = `${rangeClass} ${additionalRangeClass}`;

    const onRangeChange = (event: ChangeEvent<HTMLInputElement>): void => {
      onChange && onChange(event);

      setValue && setValue(Number(event.currentTarget.value));
    };

    const onRangeMouseUp = (event: MouseEvent<HTMLInputElement>): void => {
      onMouseUp && onMouseUp(event);

      setCurrentValue && setCurrentValue(Number(event.currentTarget.value));
    };

    return (
      <input
        type={"range"}
        className={rangeClasses}
        onChange={onRangeChange}
        onMouseUp={onRangeMouseUp}
        {...restProps} />
    );
  };
