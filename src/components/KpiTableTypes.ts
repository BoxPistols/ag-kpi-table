// KpiTableTypes.ts
export type Parent = {
  id: number
  name: string
  children: Child[]
  columns: string[]
}

export type Child = {
  title: string
  items: Item[]
}

export type Item = {
  id: number
  name: string
  value: number
  unit: string
  growth: number | string
}
