"use client"

import { Box } from "@mui/material"
import { KpiList } from "./KpiList"

export const KpiTable = () => {
  return (
    <>
      <Box display="flex" gap={3}>
        <KpiList />
      </Box>
    </>
  )
}
