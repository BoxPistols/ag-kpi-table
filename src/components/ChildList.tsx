import React from "react"
import { Box, Typography, Select } from "@mui/material"
import { Parent } from "./KpiList"

type ChildListProps = {
  parents: Parent[]
  selectedParent: Parent | null
  onParentSelect: (event: { target: { value: any } }) => void
}

export const ChildList: React.FC<ChildListProps> = ({ parents, selectedParent, onParentSelect }) => (
  <Box>
    <Typography variant="body1">選択されたParentとChildに応じたテーブル</Typography>
    <Select native value={selectedParent ? selectedParent.id : ""} onChange={onParentSelect} displayEmpty>
      <option value="">-- KPIを選択 --</option>
      {parents.map((parent) => (
        <option key={parent.id} value={parent.id}>
          {parent.name}
        </option>
      ))}
    </Select>
  </Box>
)
