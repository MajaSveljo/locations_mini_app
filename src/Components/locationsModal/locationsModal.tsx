import React, { useEffect, useState } from 'react';
import { locationProps } from '../../models/location.model';

interface locationModalProps {
  isOpen: boolean;
  location: locationProps;
  onClose: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LocationsModal: React.FC | any = ({ isOpen, location, onClose }: locationModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [isOpen]);

  return isModalOpen ? (
    <aside>
      <div>
        <header>{location.name}</header>
        <button
          onClick={() => {
            onClose();
          }}
        >
          Close
        </button>
      </div>
      <ul>
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
      <section>
        <header>Description</header>
        <p>{location.description}</p>
      </section>
    </aside>
  ) : null;
};

export default LocationsModal;
