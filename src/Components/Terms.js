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
    <main role="main" class="">
      <section class="section-oldfeatured js-section-featured section-featured-article">
        <div class="">
          <div class="line">
            <div class="column one one"></div>
          </div>
        </div>
      </section>
      <section class="section-articlesdetail p-5">
        { meta.contract }
      </section>
      {/* <!-- // AB-Test stickyFooterBannerGuestTest --> */}
    </main>
  )
}

export default Terms
