import React, { useState, useEffect } from "react"
import { Box, Container } from "@mui/material"
import Data from "@/data.json"
import { ParentList } from "./ParentList"
import { ChildList } from "./ChildList"
import { ColumnNamesList } from "./ColumnNamesList"
import { Table } from "./Table"

export type Parent = {
  id: number
  name: string
  columns: string[]
  children: Child[]
}

export type Child = {
  title: string
  items: Item[]
  columns: string[]
}

export type Item = {
  id: number
  [key: string]: number | string
}

export const KpiList = () => {
  // const kpis: Parent[] = Data as Parent[]
  const kpis: Parent[] = Data as unknown as Parent[]

  const [parents, setParents] = useState<Parent[]>([])
  const [selectedParent, setSelectedParent] = useState<Parent | null>(null)
  const [selectedChild, setSelectedChild] = useState<Child | null>(null)
  const [rowData, setRowData] = useState<Item[]>([])
  const [columnDefs, setColumnDefs] = useState<any[]>([])

  useEffect(() => {
    setParents(Data as unknown as Parent[])
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
      <Box>
        {selectedParent ? (
          <ParentList childList={selectedParent.children} onChildClick={handleChildClick} />
        ) : (
          <ParentList childList={[]} onChildClick={handleChildClick} />
        )}
      </Box>
      <Container sx={{ marginLeft: 1 }}>
        <Box display="flex" flexDirection="column">
          <Box mb={3}>
            <ChildList parents={parents} selectedParent={selectedParent} onParentSelect={handleParentSelect} />
          </Box>

          <Box display="flex">
            <Box>{selectedParent && <ColumnNamesList columns={selectedParent.columns} />}</Box>

            <Box>
              <Table
                rowData={rowData}
                columnDefs={columnDefs}
                selectedParent={selectedParent}
                selectedChild={selectedChild}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}
