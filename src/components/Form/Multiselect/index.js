import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import classNames from 'classnames';
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

  renderElement(input, placeholder, loadOptions, name, multi = true) {
    // NOTE: see https://github.com/erikras/redux-form/issues/82 for onBlur() react-select docs
    return (
      <Select.Async
        {...input}
        className="react-multiselect"
        name={name}
        loadOptions={loadOptions}
        optionRenderer={this.renderValue}
        valueRenderer={this.renderValue}
        onBlur={() => input.onBlur()}
        placeholder={placeholder}
        multi={multi}
      />
    );
  }

  render() {
    const { input, placeholder, loadOptions, multi, label } = this.props;
    const name = input.name || 'react-multiselect';
    const classes = classNames({ 'form-group': true });

    if (!label) {
      return this.renderElement(input, placeholder, loadOptions, name, multi);
    }

    return (
      <div className={classes}>
        <label htmlFor={name} className="react-multiselect-label control-label col-xs-3">
          {label}
        </label>
        <div className="col-xs-9">
          { this.renderElement(input, placeholder, loadOptions, name, multi) }
        </div>
      </div>
    );
  }
}

Multiselect.propTypes = {
  loadOptions: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  input: PropTypes.object,
  placeholder: PropTypes.string,
  multi: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string
};

export default Multiselect;
