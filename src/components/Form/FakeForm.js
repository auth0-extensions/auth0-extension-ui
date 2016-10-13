import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

const FakeForm = (props) => (
  <form>
    { props.children }
  </form>
);

FakeForm.propTypes = {
  children: PropTypes.node
};

export default reduxForm({
  form: 'fake'
})(FakeForm);
