import React, { useState, useEffect } from "react"
import { Box, Select, MenuItem, Typography } from "@mui/material"
import { AgGridReact } from "ag-grid-react"
import Data from "@/kpi.json"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"

type Parent = {
  id: number
  name: string
  children: Child[]
}

type Child = {
  title: string
  items: Item[]
}

type Item = {
  id: number
  [key: string]: number | string
}

export const KpiList = () => {
  const kpis: Parent[] = Data as Parent[]

  const [parents, setParents] = useState<Parent[]>([])
  const [selectedParent, setSelectedParent] = useState<Parent | null>(null)
  const [selectedChild, setSelectedChild] = useState<Child | null>(null)
  const [rowData, setRowData] = useState<Item[]>([])
  const [columnDefs, setColumnDefs] = useState<any[]>([])

  useEffect(() => {
    setParents(Data as Parent[])
  }, [])

  const handleChildClick = (child: Child) => {
    setSelectedChild(child)
    setRowData(child.items)

    const columnNames = Object.keys(child.items[0])
    const columns = columnNames.map((name) => ({
      headerName: name,
      field: name,
      sortable: true,
      filter: true,
    }))
    setColumnDefs(columns)
  }

  const handleParentSelect = (event: { target: { value: any } }) => {
    const parent = parents.find((p) => p.id === Number(event.target.value))
    setSelectedParent(parent ?? null)
    setSelectedChild(null)
    setRowData([])
    setColumnDefs([])
  }

  return (
    <>
      <Box
        display="grid"
        gap={3}
        sx={{ gridTemplateColumns: "minmax(180px, 1fr) minmax(200px, 4fr)", gridTemplateRows: "80px auto" }}
        width="100%"
      >
        <Box sx={{ gridColumn: "1 / 3", gridRow: "1 / 2" }}>
          <Typography variant="h6">特徴量セットリスト</Typography>
        </Box>
        <Box sx={{ gridColumn2: "1 / 2", gridRow2: "2 / 3" }}>
          {selectedParent?.children.map((child: Child, index: React.Key | null | undefined) => (
            <MenuItem key={index} onClick={() => handleChildClick(child)}>
              {child.title}
            </MenuItem>
          ))}
        </Box>
        <Box sx={{ gridColumn3: "2 / 3", gridRow3: "2 / 3" }}>
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
                <React.Fragment key={item.id}>{item.name}</React.Fragment>
              ))}
            </>
          </Select>
          {selectedChild ? (
            <>
              <h3>
                {selectedParent?.name} - {selectedChild.title}
              </h3>
              <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
                <AgGridReact rowData={rowData} columnDefs={columnDefs} defaultColDef={{ resizable: true }}>
                  <AgGridReact rowData={rowData} columnDefs={columnDefs} defaultColDef={{ resizable: true }} />
                </AgGridReact>
              </div>
            </>
          ) : selectedParent ? (
            <p>子要素を選択してください</p>
          ) : (
            <p>KPIを選択してください</p>
          )}
        </Box>
      </Box>
    </>
  )
}
