import styled, { css } from 'styled-components';

const verticalCenter = css`
  display: flex;
  align-items: center;
`;

export const ModalBackground = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 17, 34, 0.8);
  ${verticalCenter};
  justify-content: center;
`;

export const ModalContainer = styled.aside`
  padding: 15px 25px;
  background-color: #fff;
  width: 50%;
  max-width: 440px;
`;

export const ModalHeaderContainer = styled.aside`
  ${verticalCenter};
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ModalHeaderText = styled.aside`
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeightSemiBold};
`;

export const ModalHeaderClose = styled.button`
  border: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const ModalListContainer = styled.ul`
  list-style: none;
  margin: 30px 0;
`;

export const ModalListItem = styled.li`
  margin: 15px 0;
  ${verticalCenter};
  font-size: 14px;
`;

export const ModalListItemText = styled.span`
  margin-left: 10px;
`;

export const ModalDescriptionHeading = styled.header`
  font-weight: ${(props) => props.theme.fontWeightSemiBold};
  font-size: 14px;
  margin-bottom: 5px;
`;

export const ModalDescriptionText = styled.header`
  font-weight: ${(props) => props.theme.fontWeightLight};
  font-size: 14px;
  line-height: 20px;
`;
