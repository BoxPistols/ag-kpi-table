// KpiTableClient.tsx
import React, { useState } from "react"
import { Parent, Child } from "./KpiTableTypes" // ここで型をインポート
import { Suspense } from "react"

import {
  SelectChangeEvent,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material"
import Data from "./kpi.json"
import { Box } from "@mui/material"

type KpiTableClientProps = {
  parents: Parent[]
}

export const KpiTableClient: React.FC<KpiTableClientProps> = ({ parents }) => {
  // 状態とイベントハンドラを移動します
  const [selectedParent, setSelectedParent] = useState<Parent | null>(null)
  const [selectedChild, setSelectedChild] = useState<Child | null>(null)

  const handleChildClick = (child: Child) => {
    setSelectedChild(child)
  }

  const handleParentSelect = (event: SelectChangeEvent<number>) => {
    setSelectedParent(parents.find((parent) => parent.id === event.target.value) ?? null)
  }

  return (
    <>
      <Box display="flex" gap={3}>
        <Suspense fallback={<p>Loading...</p>}>
          <Box>
            <Typography variant="h5">特徴量セットリスト</Typography>
            {selectedParent &&
              selectedParent.children.map((child, index) => (
                <MenuItem key={index} onClick={() => handleChildClick(child)}>
                  {child.title}
                </MenuItem>
              ))}
          </Box>
          <Box>
            <Typography variant="h5">選択されたParentとChildに応じたテーブル</Typography>
            <Select native value={selectedParent ? selectedParent.id : ""} onChange={handleParentSelect} displayEmpty>
              <option value="">-- KPIを選択 --</option>
              {parents.map((parent) => (
                <option key={parent.id} value={parent.id}>
                  {parent.name}
                </option>
              ))}
            </Select>

            {selectedChild ? (
              <>
                <h3>
                  {selectedParent?.name} - {selectedChild?.title}
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
        </Suspense>
      </Box>
    </>
  )
}
