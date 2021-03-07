import React, { useEffect, useState } from 'react';
import { locationProps } from '../../models/location.model';
import CloseIcon from '../../Assets/Close.svg';
import TimeZoneIcon from '../../Assets/Timezone.svg';
import UsersIcon from '../../Assets/Users.svg';
import ViewsIcon from '../../Assets/Views.svg';

interface locationModalProps {
  isOpen: boolean;
  location: locationProps;
  onClose: () => void;
  viewCount: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LocationsModal: locationModalProps | any = ({
  isOpen,
  location,
  onClose,
  viewCount,
}: locationModalProps) => {
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
          <img src={CloseIcon} />
        </button>
      </div>
      <ul>
        <li>
          <img src={UsersIcon} />
          {location.userCount}
        </li>
        <li>
          <img src={TimeZoneIcon} />
          {location.createdAt}
        </li>
        <li>
          <img src={ViewsIcon} />
          {viewCount}
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
