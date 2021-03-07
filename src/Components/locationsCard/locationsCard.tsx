import React from 'react';
import { locationProps } from '../../models/location.model';
import TimeZoneIcon from '../../Assets/Timezone.svg';
import UsersIcon from '../../Assets/Users.svg';
import ViewsIcon from '../../Assets/Views.svg';

interface locationModalProps {
  location: locationProps;
  openModal: (location: locationProps) => void;
  viewCount: number;
}

const LocationsCard: React.FC<locationModalProps> = ({
  location,
  openModal,
  viewCount,
}: locationModalProps) => {
  return (
    <li onClick={() => openModal(location)}>
      <ul>
        <li>{location.name}</li>
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
    </li>
  );
};

export default LocationsCard;
