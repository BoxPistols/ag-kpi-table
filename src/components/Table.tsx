import React from "react"
import { Box, Typography } from "@mui/material"
import { AgGridReact } from "ag-grid-react"
import { Parent, Child, Item } from "./KpiList"

import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"

type TableProps = {
  rowData: Item[]
  columnDefs: any[]
  selectedParent: Parent | null
  selectedChild: Child | null
}

export const Table = ({ rowData, columnDefs, selectedParent, selectedChild }: TableProps) => {
  return (
    <Box>
      {selectedChild ? (
        <>
          <h3>
            {selectedParent?.name} - {selectedChild.title}
          </h3>
          {/* <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}> */}
          <div className="ag-theme-alpine" style={{ height: 800, width: 800 }}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} defaultColDef={{ resizable: true }} />
          </div>
        </>
      ) : selectedParent ? (
        <Typography>特徴要素を選択してください</Typography>
      ) : (
        <Typography>KPIを選択してください</Typography>
      )}
    </Box>
  )
}
