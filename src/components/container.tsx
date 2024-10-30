import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ContainerProps extends ComponentProps<"div"> {
  children?: ReactNode
}

export function Container(props: ContainerProps) {
  const { className, ...otherProps } = props

  return (
    <div
      className={twMerge("mx-auto px-8 max-w-xl", className)}
      {...otherProps}
    />
  )
}
