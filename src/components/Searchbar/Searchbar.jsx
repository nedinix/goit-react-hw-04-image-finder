import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { SearchbarStyled, FieldStyled, FormStyled } from './Searchbar.styled';

const validationSchema = yup.string().required();

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
          <button type="submit">
            <span>Search</span>
          </button>

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
