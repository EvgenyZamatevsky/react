import { Dispatch, SetStateAction } from 'react'

export type SetStateType<T> = Dispatch<SetStateAction<T>>

export type Nullable<T> = null | T
