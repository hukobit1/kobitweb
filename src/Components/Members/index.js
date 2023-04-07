import React, { useState, useEffect } from 'react';
import UserList from './UserList'

const App = () => {
  const [users, setUsers] = useState({});
  const apiUrl = 'http://' + window.location.hostname;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}/api/v1/members/?format=json`, { mode: 'cors' });
      const data = await response.json();
      // Sort users by category
      const sortedUsers = {
        yonetimKurulu: data.filter(user => user.category.toLowerCase() === 'yonetimkurulu'),
  	denetlemeKurulu: data.filter(user => user.category.toLowerCase() === 'denetlemekurulu'),
  	toplulukBaskani: data.filter(user => user.category.toLowerCase() === 'toplulukbaskani')
      };
      setUsers(sortedUsers);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      { users.yonetimKurulu && 
        <div className="text-opacity-75 text-center">
          <h1 className="text-center display-2">
            YÖNETİM KURULU
            <hr />
          </h1>
        </div>
      }
      { users.yonetimKurulu &&  <UserList users={users.yonetimKurulu} /> }
      { users.denetlemeKurulu && 
        <div className="text-opacity-75 text-center">
          <h1 className="text-center display-2">
            DENETIM KURULU
            <hr />
          </h1>
        </div>
      }
      { users.denetlemeKurulu &&  <UserList users={users.denetlemeKurulu} /> }
      { users.toplulukBaskani &&  
      	<div className="text-opacity-75 text-center">
          <h1 className="text-center display-2">
            TOPLULUK BAŠKANI
            <hr />
          </h1>
        </div>
      }
      { users.toplulukBaskani &&  <UserList users={users.toplulukBaskani} /> }
    </div>
  )
}

export default App
