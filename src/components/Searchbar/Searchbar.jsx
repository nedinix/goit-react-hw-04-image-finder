import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {
  SearchbarStyled,
  FieldStyled,
  FormStyled,
  SearchButtonStyled,
} from './Searchbar.styled';
import { CiSearch } from 'react-icons/ci';

const validationSchema = yup
  .string()
  .min(2, 'No data to search, fill in the search field')
  .max(32)
  .required();

const initialValues = {
  query: '',
};

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <FormStyled>
          <SearchButtonStyled type="submit">
            <CiSearch size="24" />
          </SearchButtonStyled>

          <FieldStyled
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormStyled>
      </Formik>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
