import React from 'react'
import UserList from './UserList'
import users from './UsersData'

const App = () => {
  return (
    <div className="container">
      <div className="text-opacity-75 text-center">
        <h1 className="text-center display-2">
          YÖNETİM KURULU
          <hr />
        </h1>
      </div>
      <UserList users={users.yonetimKurulu} />
      <div className="text-opacity-75 text-center">
        <h1 className="text-center display-2">
          DENETIM KURULU
          <hr />
        </h1>
      </div>
      <UserList users={users.denetlemeKurulu} />
      <div className="text-opacity-75 text-center">
        <h1 className="text-center display-2">
          TOPLULUK BAŠKANI
          <hr />
        </h1>
      </div>
      <UserList users={users.toplulukBaskani} />
    </div>
  )
}

export default App
