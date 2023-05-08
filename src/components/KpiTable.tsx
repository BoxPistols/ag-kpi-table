"use client"

import { Box, Typography } from "@mui/material"
// import UserList from "./UserList"
import { KpiList } from "./KpiList"

export const KpiTable = () => {
  return (
    <>
      <Box>
        <Typography variant="h5" mb={3}>
          KPI Table Sets
        </Typography>
        {/* <UserList /> */}
        <Box display="flex" gap={3}>
          <KpiList />
        </Box>
      </Box>
    </>
  )
}
