import React from "react"
import { List, ListItem, ListItemText } from "@mui/material"
import { Child } from "./KpiList"

interface ParentListProps {
  childList: Child[]
  onChildClick: (child: Child) => void
}

export const ParentList = ({ childList, onChildClick }: ParentListProps) => {
  return (
    <List
      sx={{
        overflowY: "scroll",
        maxHeight: "84vh",
        height: "100%",
        border: "1px solid #eee",
        m: 1,
        whiteSpace: "nowrap",
        overflowX: "hidden",
      }}
    >
      {childList.map((child: Child, index: number) => (
        <ListItem
          button
          key={index}
          onClick={() => onChildClick(child)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <ListItemText
            primary={child.title}
            sx={{
              "&.MuiListItemText-root>.MuiTypography-root": {
                fontSize: 14,
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  )
}
