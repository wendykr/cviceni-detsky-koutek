import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

export const CentersPage = () => {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    const fetchCenters = async () => {
      const response = await fetch('http://localhost:4000/api/centers');
      const data = await response.json();
      setCenters(data.result);
    };

    fetchCenters();
  }, []);

  return (
    <div className="container">
      <h1>Pobočky</h1>
      <h2>Seznam poboček</h2>
      <ul>
        {
          centers.map(oneCenter =>
            <li key={oneCenter.id}>
              <Link to={`/centers/center/${oneCenter.id}`}>{oneCenter.name}</Link>
            </li>
          )
        }
      </ul>
      <Outlet />
    </div>
  )
}
