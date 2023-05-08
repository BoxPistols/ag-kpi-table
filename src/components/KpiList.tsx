import React, { useState, useEffect } from "react"
import { Box, Select, MenuItem, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material"
import Data from "@/kpi.json"

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

export const KpiList = () => {
  const kpis: Parent[] = Data as Parent[]

  const [parents, setParents] = useState<Parent[]>([])
  const [selectedParent, setSelectedParent] = useState<Parent | null>(null)
  const [selectedChild, setSelectedChild] = useState<Child | null>(null)

  useEffect(() => {
    return setParents(Data as Parent[])
  }, [])

  const handleChildClick = (child: Child) => {
    setSelectedChild(child)
  }

  const handleParentSelect = (event: { target: { value: any } }) => {
    const parent = parents.find((p) => p.id === Number(event.target.value))
    setSelectedParent(parent ?? null)
    setSelectedChild(null)
  }

  return (
    <Box display="flex" gap={3}>
      <Box>
        <Typography variant="h6">特徴量セットリスト</Typography>
        {selectedParent?.children.map((child: Child, index: React.Key | null | undefined) => (
          <MenuItem key={index} onClick={() => handleChildClick(child)}>
            {child.title}
          </MenuItem>
        ))}
      </Box>
      <Box>
        <Typography variant="body1">選択されたParentとChildに応じたテーブル</Typography>
        <Select native value={selectedParent ? selectedParent.id : ""} onChange={handleParentSelect} displayEmpty>
          <option value="">-- KPIを選択 --</option>
          {parents.map((parent) => (
            <option key={parent.id} value={parent.id}>
              {parent.name}
            </option>
          ))}
          <>
            {kpis.map((item) => (
              <p key={item.id}>{item.name}</p>
            ))}
          </>
        </Select>
        {selectedChild ? (
          <>
            <h3>
              {selectedParent?.name} - {selectedChild.title}
            </h3>
            <Table>
              <TableHead>
                <TableRow>
                  {selectedParent?.columns.map((column, index) => (
                    <TableCell key={index}>{column}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedChild.items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.value}</TableCell>
                    <TableCell>{item.unit}</TableCell>
                    <TableCell>{item.growth}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        ) : selectedParent ? (
          <p>子要素を選択してください</p>
        ) : (
          <p>KPIを選択してください</p>
        )}
      </Box>
    </Box>
  )
}
