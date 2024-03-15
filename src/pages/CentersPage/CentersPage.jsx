import React, { useState, useEffect } from 'react';
import './CentersPage.css';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

export const CentersPage = () => {
  const [centers, setCenters] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchCenters = async () => {
      const response = await fetch('http://localhost:4000/api/centers');
      const data = await response.json();
      setCenters(data.result);
    };

    fetchCenters();
  }, []);

  return (
    <div>
      <h1>Pobočky</h1>
      <h2>Seznam poboček</h2>
      <div className="centers__list">
        {
          centers.map(oneCenter =>
            <NavLink
              key={oneCenter.id}
              to={`/centers/center/${oneCenter.id}`}
                className={({ isActive }) =>
                  isActive ? "centers__link active--center" : "centers__link"
                }
            >{oneCenter.name}</NavLink>
          )
        }
      </div>
      {
        location.pathname === '/centers' && <p>Naše pobočky se nacházejí na třech významných místech v Praze. Stačí si vybrat kliknutím jednu z nich z výše uvedených a zjistíte, kde můžete objevovat svět plný překvapení!</p>
      }
      <Outlet />
    </div>
  )
}
