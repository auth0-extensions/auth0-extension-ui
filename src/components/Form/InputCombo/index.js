import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class InputCombo extends Component {

  onChange = (event) => {
    const { input: { onChange } } = this.props;
    onChange(event);

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  renderOptions(options) {
    return options.map((option, index) => (
      <option key={index} value={option.value}>{option.text}</option>
    ));
  }

  renderErrors(validationErrors, meta, name) {
    if (validationErrors && validationErrors[name] && validationErrors[name].length) {
      return (<div className="help-block">{ validationErrors[name][0] }</div>);
    } else if (meta && meta.touched && meta.error) {
      return (<span className="help-block">{ meta.error }</span>);
    }

    return null;
  }

  render() {
    const { input, input: { name }, meta, validationErrors, label, options, disabled } = this.props;

    const classes = classNames({
      'form-group': true,
      'has-error': (validationErrors && validationErrors[name] && validationErrors[name].length) || (meta && meta.touched && meta.error)
    });

    return (
      <div className={classes}>
        <label htmlFor={input.name} className="control-label col-xs-3">
          {label}
        </label>
        <div className="col-xs-9">
          <select className="form-control" {...input} id={input.name} onChange={this.onChange} disabled={disabled} >
            { options && options.length > 1 && <option value="">Select your application...</option>}
            { this.renderOptions(options) }
          </select>
          { this.renderErrors(validationErrors, meta, name) }
        </div>
      </div>
    );
  }
}

InputCombo.propTypes = {
  options: PropTypes.array.isRequired,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object,
  validationErrors: PropTypes.object,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

export default InputCombo;
