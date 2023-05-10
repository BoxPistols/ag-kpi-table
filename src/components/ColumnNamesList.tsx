import React from "react"
import { Box, Typography } from "@mui/material"

type ColumnNamesListProps = {
  columns: string[]
}

export const ColumnNamesList: React.FC<ColumnNamesListProps> = ({ columns }) => (
  <Box maxHeight="60vh" overflow="scroll">
    <Typography variant="h6">カラム一覧</Typography>
    {columns.map((name, index) => (
      <Typography key={index} variant="body1">
        {name}
      </Typography>
    ))}
  </Box>
)
