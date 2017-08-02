import React, { PropTypes } from 'react';

import MultiSelect from '../Multiselect';

const Select = (props) => <MultiSelect {...props} multi={false} />;

Select.propTypes = {
  loadOptions: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  input: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string
};

export default Select;
