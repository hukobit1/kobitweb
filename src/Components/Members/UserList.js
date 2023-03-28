import React from 'react'
import { Row } from 'react-bootstrap'
import UserCard from './UserCard'

const UserList = ({ category }) => {
  
  return (
    <>
      <Row className="MembersRow">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Row>
    </>
  )
}

export default UserList
