import React, { useState, useEffect } from 'react';
import UserList from './UserList'

const App = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/v1/members/?format=json');
      const data = await response.json();
      console.log(data);
      // Sort users by category
      const sortedUsers = {
        yonetimKurulu: data.filter(user => user.category.toLowerCase() === 'yonetimkurulu'),
  	denetlemeKurulu: data.filter(user => user.category.toLowerCase() === 'denetlemekurulu'),
  	toplulukBaskani: data.filter(user => user.category.toLowerCase() === 'toplulukbaskani')
      };
      console.log(sortedUsers);
      setUsers(sortedUsers);
      console.log(users);
    };

    fetchData();
  }, []);

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
