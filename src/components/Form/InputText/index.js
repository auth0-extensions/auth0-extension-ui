import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class InputText extends Component {

  renderErrors(validationErrors, meta, name) {
    if (validationErrors && validationErrors[name] && validationErrors[name].length) {
      return (<div className="help-block">{ validationErrors[name][0] }</div>);
    } else if (meta && meta.touched && meta.error) {
      return (<span className="help-block">{ meta.error }</span>);
    }

    return null;
  }

  render() {
    const { input, name, meta, type, placeholder, validationErrors, label } = this.props;

    const classes = classNames({
      'form-group': true,
      'has-error': (validationErrors && validationErrors[name] && validationErrors[name].length) || (meta && meta.touched && meta.error)
    });

    return (
      <div className={classes}>
        <label htmlFor={name} className="control-label col-xs-3">
          {label}
        </label>
        <div className="col-xs-9">
          <input
            {...input}
            className="form-control"
            id={name}
            type={type || 'text'}
            placeholder={placeholder}
          />
          { this.renderErrors(validationErrors, meta, name) }
        </div>
      </div>
    );
  }
}

InputText.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  validationErrors: PropTypes.object,
  meta: PropTypes.object,
  name: PropTypes.string.isRequired
};

export default InputText;
