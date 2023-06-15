import { TailSpin } from 'react-loader-spinner';
import styled from '@emotion/styled';

export const LoaderStyled = styled(TailSpin)`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
