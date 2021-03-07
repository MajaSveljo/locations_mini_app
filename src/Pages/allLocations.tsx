/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { getAllLocations } from '../Api/allLocationsApi';
import { locationProps } from '../models/location.model';
import LocationsModal from '../Components/locationsModal/locationsModal';

const AllLocations: React.FC = () => {
  const [locationsData, setLocationsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState({});

  useEffect(() => {
    getAllLocations()
      .then((data: any) => {
        setLocationsData(data.data);
      })
      .catch((e: any) => alert(`Error fetching locations data - ${e.message}`));
  }, []);

  const openModal = (location: locationProps) => {
    setIsModalOpen(true);
    setCurrentModalData(location);
  };

  return (
    <>
      <header>All locations</header>
      <section>
        <h1>Acme locations</h1>
        <ul>
          {locationsData.map((location: any) => (
            <li key={location.id} onClick={() => openModal(location)}>
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
      <LocationsModal
        isOpen={isModalOpen}
        location={currentModalData}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default AllLocations;
