import React, { useState, useEffect } from 'react';
import UserList from './UserList'

const App = () => {
  const [categories, setCategories] = useState([]);
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;

  useEffect(() => {
    const fetchData = async () => {
      const memebersResponse = await fetch(`${apiUrl}/api/v1/members/?format=json`, { mode: 'cors' });
      const categoriesResponse= await fetch(`${apiUrl}/api/v1/categories/?format=json`, { mode: 'cors' });
      const members = await memebersResponse.json();
      const categoriesResult = await categoriesResponse.json();
      // Sort users by category
      categoriesResult.forEach(category => {
      	category.users = members.filter(member => member.category === category.name);
      })
      setCategories(categoriesResult);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
    	{ categories && categories.map((category, index) => (
    		<div key={index}>
    			{ category.users.length > 0 && (
    				<div className="text-opacity-75 text-center">
      					<h1 className="text-center display-2 category-name">
        					{ category.name }
        					<hr />
      					</h1>
    				</div>
    			)}
    			{ <UserList users={ category.users } /> }
    		</div>
    	))}
    </div>
  )
}

export default App
