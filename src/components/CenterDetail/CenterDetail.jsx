import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const CenterDetail = () => {
  const [centers, setCenters] = useState([]);
  const { centerId } = useParams();
  const centerData = centers.find((center) => center.id == Number(centerId));

  useEffect(() => {
    const fetchCenters = async () => {
      const response = await fetch('http://localhost:4000/api/centers');
      const data = await response.json();
      setCenters(data.result);
    };

    fetchCenters();
  }, []);

  const dayTranslations = {
    mon: 'Pondělí',
    tue: 'Úterý',
    wed: 'Středa',
    thu: 'Čtvrtek',
    fri: 'Pátek',
    sat: 'Sobota',
    sun: 'Neděle'
  };

  return (
    <div className="container">
      {centerData ? (
        <>
          <h3>Detail pobočky - {centerData.name}</h3>
          <h4>{centerData.address}</h4>
          {centerData && !centerData.open ? (
            <>
              <p>Otevírací doba:</p>
              <div>
                {Object.entries(centerData.open).map(([day, time], index) => (
                  <div key={index}>
                    <p>{dayTranslations[day]}: {time || 'Zavřeno'}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p><strong>Informace o otevírací době není k dispozici.</strong></p>
          )}
          <p>{centerData.info}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
};