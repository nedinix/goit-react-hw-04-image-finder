import styled from '@emotion/styled';
import { FiX } from 'react-icons/fi';

export const Image = styled.img`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const CrossIcon = styled(FiX)`
  position: absolute;
  right: 18px;
  top: 18px;

  color: white;
  svg {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }

  &:hover,
  &:focus {
    color: #3f51b5;
    svg {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
  }
`;
