import styled from 'styled-components';
import { lightGreyColorOpacity } from '../../Assets/mixins';

export const EditButtonContainer = styled.span`
  display: none;
`;

export const LocationsCardContainer = styled.li`
  border: 1px solid ${lightGreyColorOpacity(0.1)};
  background-color: rgba(246, 246, 246, 0.2);
  font-size: 16px;
  padding: 15px 25px;
  flex: 0 0 18%;
  margin: 0 12px 25px;

  &:hover ${EditButtonContainer} {
    display: block;
  }
`;

export const LocationsCardHeading = styled.li`
  font-weight: ${(props) => props.theme.fontWeightBold};
  font-family: 'Lato';
  font-size: 18px;
  opacity: 80%;
  padding: 5px 0 10px;
  display: flex;
  justify-content: space-between;
`;

export const LocationsCardListContainer = styled.ul`
  list-style: none;
`;

export const LocationsCardListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-family: 'Lato';
`;

export const LocationsCardListItemText = styled.span`
  margin-left: 10px;
`;
