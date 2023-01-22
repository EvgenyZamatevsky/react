import { Dispatch, SetStateAction } from "react";

// Типизация функции, которую возвращает хук useState
export type SetStateType<T> = Dispatch<SetStateAction<T>>

// Чтобы не писать null | string
export type Nullable<T> = null | T

export type SlugType = "button-1" | "button-2" | "button-3"

export type SectionButtonsType = {
  id: number
  title: string
  slug: SlugType
}

export type UserType = {
  id: number
  title: string
}
