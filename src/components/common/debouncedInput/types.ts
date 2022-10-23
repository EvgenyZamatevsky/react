import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type DebouncedInputPropsType = Omit<DefaultInputPropsType, "type"> & {
  setValue?: (value: string) => void
  setDebouncedValue: (debouncedValue: string) => void
}