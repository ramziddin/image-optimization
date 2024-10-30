import { ComponentType } from "react"
import { range } from "./range"

export function renderRange(component: ComponentType, max: number) {
  const Component = component
  return range(max).map((_value, index) => <Component key={index} />)
}
