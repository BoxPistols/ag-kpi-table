// KpiTable.tsx
"use client"
import React, { useEffect, useState } from "react"
import Data from "./kpi.json"
import { KpiTableClient } from "./KpiTableClient" // KpiTableClient をインポート
import { Suspense } from "react"

type Parent = {
  id: number
  name: string
  children: Child[]
  columns: string[]
}

type Child = {
  title: string
  items: Item[]
}

type Item = {
  id: number
  name: string
  value: number
  unit: string
  growth: number | string
}

export const KpiTable = () => {
  const [parents, setParents] = useState<Parent[]>([])

  useEffect(() => {
    setParents(Data)
  }, [])

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <KpiTableClient parents={parents} />
      </Suspense>
    </>
  )
}
