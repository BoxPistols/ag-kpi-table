import React from "react"
import data from "@/data.json"

type User = {
  id: number
  name: string
  age: number
}

const UserList = () => {
  const users: User[] = data
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
