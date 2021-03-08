import styled from 'styled-components';

export const LocationsCardContainer = styled.li`
  border: 1px solid rgba(0, 17, 34, 0.1);
  background-color: rgba(246, 246, 246, 0.2);
  font-size: 16px;
  padding: 15px 25px;
  flex: 1 0 18%;
  margin: 0 12px 25px;
`;

export const LocationsCardHeading = styled.li`
  font-weight: ${(props) => props.theme.fontWeightBold};
  font-size: 18px;
  opacity: 80%;
  padding: 5px 0 10px;
`;

export const LocationsCardListContainer = styled.ul`
  list-style: none;
`;

export const LocationsCardListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const LocationsCardListItemText = styled.span`
  margin-left: 10px;
`;
