import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const SearchbarStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const FieldStyled = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

// .search-input:hover,
// .search-input:focus {
//   transform: scale(1);
//   box-shadow: 0 0 10px -2px var(--shadow-color);
// }

// .search-input:active,
// .search-input:focus {
//   outline: 1px solid var(--button-color);
// }

// .search-button {
//   padding: 8px;

//   color: #fff;

//   background-color: var(--button-color);
//   border: transparent;
//   border-radius: 4px;
//   box-shadow: 0 0 5px -2px #313131d3;

//   transform: scale(0.98);
//   transition: box-shadow var(--transision), color var(--transision),
//     background-color var(--transision), transform var(--transision-scale);
// }

// .search-button:hover,
// .search-button:focus,
// .search-button:active {
//   box-shadow: 0 0 10px -2px var(--shadow-color);
//   transform: scale(1);
// }

// .search-button:active {
//   color: #0f3c77d3;
//   background-color: #dee9f3;
// }
