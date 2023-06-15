import { TailSpin } from 'react-loader-spinner';
import styled from '@emotion/styled';

const LoaderStyled = styled(TailSpin)`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const LoaderWrapper = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  zIndex: '1000',
};

const Loader = () => {
  return (
    <LoaderStyled
      height="120"
      width="120"
      color="#3f51b5"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={LoaderWrapper}
      visible={true}
    />
  );
};

export default Loader;
