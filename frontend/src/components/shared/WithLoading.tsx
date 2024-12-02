import { ReactNode } from "react"

type WithLoadingProps = {
  isLoading: boolean,
  children: ReactNode
}

export const WithLoading = ({ isLoading, children }: WithLoadingProps) => {
  return (
    isLoading ?
      <div>Loading...</div>
    :
      <>{children}</>
  )
}
