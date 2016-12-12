import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import '../../../../node_modules/react-select/dist/react-select.css';
import './Multiselect.styl';

class Multiselect extends Component {

  renderValue(value) {
    if (value.label === value.value) {
      return (
        <span>
          <strong>{value.label}</strong>
        </span>
      );
    }

    return (
      <span>
        <strong>{value.label}</strong>
        <span> ({value.value})</span>
      </span>
    );
  }

  render() {
    const { input, placeholder, loadOptions } = this.props;

    // NOTE: see https://github.com/erikras/redux-form/issues/82 for onBlur() react-select docs
    return (
      <Select.Async
        {...input}
        className="react-multiselect"
        name="react-multiselect"
        loadOptions={loadOptions}
        optionRenderer={this.renderValue}
        valueRenderer={this.renderValue}
        onBlur={() => input.onBlur()}
        placeholder={placeholder}
        multi
      />
    );
  }
}

Multiselect.propTypes = {
  loadOptions: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  input: PropTypes.object,
  placeholder: PropTypes.string
};

export default Multiselect;
