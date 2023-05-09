"use client"

import { Box, Typography } from "@mui/material"
// import UserList from "./UserList"
import { KpiList } from "./KpiList"

export const KpiTable = () => {
  return (
    <>
      {/* <UserList /> */}
      <Box display="flex" gap={3}>
        <KpiList />
      </Box>
    </>
  )
}
