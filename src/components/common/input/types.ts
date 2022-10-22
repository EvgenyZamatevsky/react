import { DetailedHTMLProps, InputHTMLAttributes, ReactNode, Ref } from "react"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type InputPropsType = Omit<DefaultInputPropsType, "type"> & {
  setValue?: (value: string) => void
  onEnter?: () => void
  onEscape?: () => void
  error?: ReactNode
  additionalErrorSpanClass?: string
  variant?: string
  ref?: Ref<HTMLInputElement>
}
