import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const CenterDetail = () => {
  const [centers, setCenters] = useState([]);
  const { centerId } = useParams();
  const centerData = centers.find((center) => center.id == centerId);

  useEffect(() => {
    const fetchCenters = async () => {
      const response = await fetch('http://localhost:4000/api/centers');
      const data = await response.json();
      console.log(data.result);
      setCenters(data.result);
    };

    fetchCenters();
  }, []);

  return (
    <div className="container">
      {centerData ? (
        <>
          <h3>Detail pobočky - {centerData.name}</h3>
          <h4>{centerData.address}</h4>
          {/* {centerData && centerData.open ? (
            <>
              <p>Otevírací doba:</p>
              <div>
                {centerData.open.map(oneDay => (
                  <div key={oneDay.day}>
                    <p>{oneDay.day}: {oneDay.open} - {oneDay.close}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p><strong>Informace o otevírací době není k dispozici.</strong></p>
          )} */}
          <p>{centerData.info}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
};