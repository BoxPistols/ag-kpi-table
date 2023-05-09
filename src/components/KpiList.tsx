import React, { useState, useEffect } from "react"
import { Box, Select, MenuItem, Typography } from "@mui/material"
import { AgGridReact } from "ag-grid-react"
import Data from "@/data.json"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { List, ListItem, ListItemText } from "@mui/material"

type Parent = {
  id: number
  name: string
  columns: string[]
  children: Child[]
}

type Child = {
  title: string
  items: Item[]
  columns: string[]
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

    if (selectedParent) {
      const columns = selectedParent.columns.map((name: string) => ({
        headerName: name,
        field: name,
        sortable: true,
        filter: true,
      }))
      setColumnDefs(columns)
    }
  }

  const handleParentSelect = (event: { target: { value: any } }) => {
    const parent = parents.find((p) => p.id === Number(event.target.value))
    setSelectedParent(parent ?? null)
    setSelectedChild(null)
    setRowData([])
    setColumnDefs([])
  }

  const [columnCount, setColumnCount] = useState(0)

  useEffect(() => {
    if (selectedParent) {
      setColumnCount(selectedParent.columns.length)
    } else {
      setColumnCount(0)
    }
  }, [selectedParent])

  return (
    <>
      <Box
        display="grid"
        gap={3}
        sx={{
          gridTemplateColumns: "minmax(180px, 1fr) minmax(120px, 1fr) minmax(200px, 800px)",
          gridTemplateRows: "80px auto",
        }}
        width="100%"
      >
        <Box sx={{ gridColumn: "1 / 2", gridRow: "1 / 3" }}>
          <Typography variant="h6">特徴量セットリスト</Typography>
          {selectedParent && (
            <List>
              {selectedParent.children.map((child: Child, index: number) => (
                <ListItem button key={index} onClick={() => handleChildClick(child)}>
                  <ListItemText primary={child.title} />
                </ListItem>
              ))}
            </List>
          )}
        </Box>

        <Box sx={{ gridColumn: "2 / 4", gridRow: "1 / 1" }}>
          <Box display="flex" flexDirection="column" width="100%">
            <Typography variant="body1">選択されたParentとChildに応じたテーブル</Typography>
            <Select
              native
              value={selectedParent ? selectedParent.id : ""}
              onChange={handleParentSelect}
              displayEmpty
              sx={{ maxWidth: 800 }}
            >
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
            <Box sx={{ background: "#eee", width: "100%", height: "100%" }} px={1} py={0.5}>
              <Typography variant="h6">
                <>
                  {selectedParent?.name} - {selectedChild?.title}
                </>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ gridColumn: "2 / 2", gridRow: "2 / 2" }} mt={3}>
          <Box sx={{ overflowY: "auto", maxHeight: 720 }}>
            {/* Column Names List */}
            <Typography variant="h6">カラム一覧</Typography>
            <Typography variant="caption">({columnCount} カラム)</Typography>

            {selectedParent &&
              selectedParent.columns.map((name, index) => (
                <Typography key={index} variant="body1">
                  {name}
                </Typography>
              ))}
          </Box>
        </Box>

        {/* Table */}
        <Box sx={{ gridColumn: "3 / 3", gridRow: "2 / 2" }} mt={3}>
          <Box display="flex" flexDirection="column">
            {/* Column Names List */}

            <Box sx={{ height: 600 }}>
              {selectedChild ? (
                <>
                  <h3>
                    {selectedParent?.name} - {selectedChild.title}
                  </h3>
                  <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
                    <AgGridReact rowData={rowData} columnDefs={columnDefs} defaultColDef={{ resizable: true }} />
                  </div>
                </>
              ) : selectedParent ? (
                <p>特徴要素を選択してください</p>
              ) : (
                <p>KPIを選択してください</p>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
