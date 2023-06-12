import { Formik, Form, Field } from 'formik';
import * as yup from 'yup'
import PropTypes from 'prop-types'
import { SearchbarStyled } from './Searchbar.styled';

const validationSchema = yup.string().required();

const initialValues = {
  query: ''
}

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarStyled>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <button type="submit" >
            <span >Search</span>
          </button>

          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;
