import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

class InputCheckBox extends Component {
  renderErrors(validationErrors, meta, name) {
    if (validationErrors && validationErrors[name] && validationErrors[name].length) {
      return (<div className="help-block">{ validationErrors[name][0] }</div>);
    } else if (meta && meta.touched && meta.error) {
      return (<span className="help-block">{ meta.error }</span>);
    }

    return null;
  }

  renderElement(input, name, meta, validationErrors) {
    return (
      <div>
        <input {...input} id={name} type="checkbox" checked={input.value} />
        { this.renderErrors(validationErrors, meta, name) }
      </div>
    );
  }

  render() {
    const { input, meta, validationErrors, label } = this.props;
    const name = this.props.name || (input ? input.name : undefined);
    const classes = classNames({
      'form-group': true,
      'has-error': (validationErrors && validationErrors[name] && validationErrors[name].length) || (meta && meta.touched && meta.error)
    });

    if (!label) {
      return this.renderElement(input, name, meta, validationErrors);
    }

    return (
      <div className={classes}>
        <label htmlFor={name} className="control-label col-xs-3">
          {label}
        </label>
        <div className="col-xs-9">
          { this.renderElement(input, name, meta, validationErrors) }
        </div>
      </div>
    );
  }
}

InputCheckBox.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  validationErrors: PropTypes.object,
  meta: PropTypes.object,
  name: PropTypes.string.isRequired
};

export default InputCheckBox;
