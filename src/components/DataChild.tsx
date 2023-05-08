import React, { useState, useEffect } from "react"
import Data from "./child.json"
import { Select, MenuItem, Table, TableHead, TableRow, TableCell, TableBody, SelectChangeEvent } from "@mui/material"

type Parent = {
  id: number
  name: string
  children: Child[]
}

type Child = {
  id: number
  name: string
}

export const DataChild = () => {
  const [parents, setParents] = useState<Parent[]>([])
  const [selectedParent, setSelectedParent] = useState<Parent | null>(null)

  useEffect(() => {
    setParents(Data)
  }, [])

  const handleParentClick = (parent: Parent) => {
    setSelectedParent(parent)
  }

  const handleParentSelect = (event: SelectChangeEvent<number>) => {
    setSelectedParent(parents.find((parent) => parent.id === Number(event.target.value)) ?? null)
  }

  return (
    <>
      <div>
        {/* Table */}
        <div>
          <h3>Table Choose</h3>
          <Select native value={selectedParent ? selectedParent.id : ""} onChange={handleParentSelect} displayEmpty>
            <option value="">-- 親を選択 --</option>
            {parents.map((parent) => (
              <option key={parent.id} value={parent.id}>
                {parent.name}
              </option>
            ))}
          </Select>
          {selectedParent ? (
            <>
              <h1>{selectedParent.name}</h1>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>名前</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedParent.children.map((child) => (
                    <TableRow key={child.id}>
                      <TableCell>{child.id}</TableCell>
                      <TableCell>{child.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          ) : (
            <>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>...</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>here...</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </>
          )}
        </div>

        {/* button */}
        <h3>Pick</h3>
        <div>
          {parents.map((parent) => (
            <button key={parent.id} onClick={() => handleParentClick(parent)}>
              {parent.name}
            </button>
          ))}
        </div>
        <div>
          {selectedParent && (
            <div key={selectedParent.id}>
              <h1>{selectedParent.name}</h1>
              {/* <p>{selectedParent.id}</p> */}
              <ul>
                {selectedParent.children.map((child) => (
                  <li key={child.id}>
                    <ul>
                      <li>{child.id}</li>
                      <li>{child.name}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* all map */}
        {/*
        <h3>Test</h3>
        {parents.map((parent) => (
          <div key={parent.id}>
            <h1>{parent.name}</h1>
            <ul>
              {parent.children.map((child) => (
                <li key={child.id}>{child.name}</li>
              ))}
            </ul>
          </div>
        ))}
        */}
      </div>
    </>
  )
}
