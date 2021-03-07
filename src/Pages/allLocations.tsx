/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { getAllLocations } from '../Api/allLocationsApi';
import { locationProps } from '../models/location.model';
import LocationsModal from '../Components/locationsModal/locationsModal';
import LocationsCard from '../Components/locationsCard/locationsCard';

const AllLocations: React.FC = () => {
  const [locationsData, setLocationsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState<locationProps | null>(null);
  const [modalsViewCount, setModalsViewCount] = useState<number[]>([]);

  useEffect(() => {
    getAllLocations()
      .then((data: any) => {
        setLocationsData(data.data);
      })
      .catch((e: any) => alert(`Error fetching locations data - ${e.message}`));
  }, []);

  const addModalsViewCount = (location: locationProps) => {
    const modalsViewCountData = modalsViewCount;
    if (!modalsViewCount[location.id]) {
      modalsViewCountData[location.id] = 1;
      setModalsViewCount(modalsViewCountData);
    } else {
      modalsViewCountData[location.id] = modalsViewCountData[location.id] + 1;
      setModalsViewCount(modalsViewCountData);
    }
  };

  const openModal = (location: locationProps) => {
    setIsModalOpen(true);
    setCurrentModalData(location);
    addModalsViewCount(location);
  };

  return (
    <>
      <header>All locations</header>
      <section>
        <h1>Acme locations</h1>
        <ul>
          {locationsData.map((location: any) => (
            <LocationsCard
              key={location.id}
              location={location}
              openModal={openModal}
              viewCount={modalsViewCount[location.id] ? modalsViewCount[location.id] : 0}
            />
          ))}
        </ul>
      </section>
      <LocationsModal
        isOpen={isModalOpen}
        location={currentModalData}
        onClose={() => {
          setIsModalOpen(false);
        }}
        viewCount={currentModalData ? modalsViewCount[currentModalData.id] : 0}
      />
    </>
  );
};

export default AllLocations;
