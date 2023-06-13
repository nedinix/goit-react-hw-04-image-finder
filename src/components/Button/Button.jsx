import { ButtonStyled } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <ButtonStyled onClick={onClick} type="button">
      Load more
    </ButtonStyled>
  );
};
export default Button;
