import React from 'react';
import { locationProps } from '../../models/location.model';
import Edit from '../../Assets/Edit.svg';
import TimeZoneIcon from '../../Assets/Timezone.svg';
import UsersIcon from '../../Assets/Users.svg';
import ViewsIcon from '../../Assets/Views.svg';

import {
  LocationsCardContainer,
  LocationsCardListContainer,
  LocationsCardHeading,
  LocationsCardListItem,
  LocationsCardListItemText,
  EditButtonContainer,
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
        <LocationsCardHeading>
          {location.name}
          <EditButtonContainer>
            <img src={Edit} />
          </EditButtonContainer>
        </LocationsCardHeading>
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
