/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { getAllLocations } from '../Api/allLocationsApi';

const AllLocations: React.FC = () => {
  const [locationsData, setLocationsData] = useState([]);

  useEffect(() => {
    getAllLocations()
      .then((data: any) => {
        setLocationsData(data.data);
      })
      .catch((e: any) => alert(`Error fetching locations data - ${e.message}`));
  }, []);

  return (
    <>
      <header>All locations</header>
      <section>
        <h1>Acme locations</h1>
        <ul>
          {locationsData.map((location: any) => (
            <li key={location.id}>
              <div>
                <ul>
                  <li>{location.name}</li>
                  <li>
                    <span>icon 1</span>
                    {location.userCount}
                  </li>
                  <li>
                    <span>icon 2</span>
                    {location.createdAt}
                  </li>
                  <li>
                    <span>icon 3</span>Views
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <aside>
        <div>
          <header>Heading</header>
          <button>Close</button>
        </div>
        <ul>
          <li>
            <span>icon 1</span>Users
          </li>
          <li>
            <span>icon 2</span>Time zone
          </li>
          <li>
            <span>icon 3</span>Views
          </li>
        </ul>
        <section>
          <header>Description</header>
          <p>Description text</p>
        </section>
      </aside>
    </>
  );
};

export default AllLocations;
