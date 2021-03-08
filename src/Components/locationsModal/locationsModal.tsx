import React, { useEffect, useState } from 'react';
import { locationProps } from '../../models/location.model';
import CloseIcon from '../../Assets/Close.svg';
import TimeZoneIcon from '../../Assets/Timezone.svg';
import UsersIcon from '../../Assets/Users.svg';
import ViewsIcon from '../../Assets/Views.svg';

import {
  ModalBackground,
  ModalContainer,
  ModalHeaderContainer,
  ModalHeaderText,
  ModalHeaderClose,
  ModalListContainer,
  ModalListItem,
  ModalListItemText,
  ModalDescriptionHeading,
  ModalDescriptionText,
} from './locationsModal.styles';

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
    <ModalBackground
      onClick={() => {
        onClose();
      }}
    >
      <ModalContainer>
        <ModalHeaderContainer>
          <ModalHeaderText>{location.name}</ModalHeaderText>
          <ModalHeaderClose
            onClick={() => {
              onClose();
            }}
          >
            <img src={CloseIcon} />
          </ModalHeaderClose>
        </ModalHeaderContainer>
        <ModalListContainer>
          <ModalListItem>
            <img src={UsersIcon} />
            <ModalListItemText>{location.userCount}</ModalListItemText>
          </ModalListItem>
          <ModalListItem>
            <img src={TimeZoneIcon} />
            <ModalListItemText>{location.createdAt}</ModalListItemText>
          </ModalListItem>
          <ModalListItem>
            <img src={ViewsIcon} />
            <ModalListItemText>{viewCount}</ModalListItemText>
          </ModalListItem>
        </ModalListContainer>
        <section>
          <ModalDescriptionHeading>Description</ModalDescriptionHeading>
          <ModalDescriptionText>{location.description}</ModalDescriptionText>
        </section>
      </ModalContainer>
    </ModalBackground>
  ) : null;
};

export default LocationsModal;
