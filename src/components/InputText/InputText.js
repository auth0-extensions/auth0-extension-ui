import React from 'react';
import classNames from 'classnames';

function InputText(props) {
  const { field, label, type, fieldName, touched, placeholder, validationErrors } = props;
  const classes = classNames({
    'form-group': true,
    'has-error': touched && validationErrors && validationErrors.length
  });

  return (
    <div className={classes}>
      <label htmlFor={fieldName} className="control-label col-xs-3">{label}</label>
      <div className="col-xs-9">
        <input className="form-control" id={fieldName} type={type} placeholder={placeholder} {...field} />
        { touched && validationErrors && validationErrors.length && <div className="help-block">{ validationErrors[0] }</div> }
      </div>
    </div>
  );
}


InputText.propTypes = {
  field: React.PropTypes.object.isRequired,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  fieldName: React.PropTypes.string.isRequired,
  touched: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  validationErrors: React.PropTypes.array
};

export default InputText;
