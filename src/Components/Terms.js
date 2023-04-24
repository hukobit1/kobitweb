import React, { useState, useEffect } from 'react';

function Terms(params) {
  const [meta, setMeta] = useState({});
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}/api/v1/meta/?format=json`, { mode: "cors" } );
      const data = await response.json();
      // Sort users by category
      setMeta(data);
    };

    fetchData();
  }, []);

  return (
    <main role="main">
      <section className="section-articlesdetail p-5">
        <div dangerouslySetInnerHTML={{ __html: meta.contract  }} />
      </section>
    </main>
  )
}

export default Terms
