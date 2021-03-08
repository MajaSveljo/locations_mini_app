import React from 'react';
import { locationProps } from '../../models/location.model';
import TimeZoneIcon from '../../Assets/Timezone.svg';
import UsersIcon from '../../Assets/Users.svg';
import ViewsIcon from '../../Assets/Views.svg';

import {
  LocationsCardContainer,
  LocationsCardListContainer,
  LocationsCardHeading,
  LocationsCardListItem,
  LocationsCardListItemText,
} from './locationsCard.styles';

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
    <LocationsCardContainer onClick={() => openModal(location)}>
      <LocationsCardListContainer>
        <LocationsCardHeading>{location.name}</LocationsCardHeading>
        <LocationsCardListItem>
          <img src={UsersIcon} />
          <LocationsCardListItemText>{location.userCount}</LocationsCardListItemText>
        </LocationsCardListItem>
        <LocationsCardListItem>
          <img src={TimeZoneIcon} />
          <LocationsCardListItemText>{location.createdAt}</LocationsCardListItemText>
        </LocationsCardListItem>
        <LocationsCardListItem>
          <img src={ViewsIcon} />
          <LocationsCardListItemText>{viewCount}</LocationsCardListItemText>
        </LocationsCardListItem>
      </LocationsCardListContainer>
    </LocationsCardContainer>
  );
};

export default LocationsCard;
