import React, { useState, useEffect } from 'react';
import './CenterDetail.css';
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
    <div>
      {centerData ? (
        <>
          <iframe src={`https://frame.mapy.cz/s/${centerData.mapy}`} width="100%" height="280" frameborder="0"></iframe>
          <h3>{centerData.name}</h3>
          <h4>{centerData.address}</h4>
          {centerData && centerData.open ? (
            <>
              <p className="subtitle">Otevírací doba:</p>
              <div className="opening">
                {Object.entries(centerData.open).map(([day, time], index) => (
                  <div key={index} className="opening__row">
                    <p className="opening__row--day">{dayTranslations[day]}:</p>
                    <p className="opening__row--time">{time || 'Zavřeno'}</p>
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