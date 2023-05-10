"use client"
import "@/styles.css"
import { KpiTable } from "./KpiTable"
import { CssBaseline, Typography } from "@mui/material"

export default function App() {
  return (
    <>
      <CssBaseline />

      <Typography
        align="center"
        sx={{
          backgroundColor: "#3e71c5f3",
          color: "#fff",
          padding: "8px",
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 100,
        }}
      >
        AgGrid Get Data from API
      </Typography>
      <Typography
        border={"1px solid #eee"}
        sx={{
          py: 1,
          px: 2,
        }}
      >
        <Typography>KPI APP</Typography>
      </Typography>
      <div className="App">
        <KpiTable />
      </div>
    </>
  )
}
