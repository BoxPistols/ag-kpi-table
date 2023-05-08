"use client"

import { Box, Typography } from "@mui/material"
import UserList from "./UserList"

export const KpiTable = () => {
  return (
    <>
      <Box display="flex" gap={3}>
        <Box>
          <Typography variant="h5" mb={3}>
            KPI Table
          </Typography>
          <UserList />
        </Box>
      </Box>
    </>
  )
}
