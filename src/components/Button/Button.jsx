import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <ButtonStyled onClick={onClick} type="button">
      Load more
    </ButtonStyled>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
