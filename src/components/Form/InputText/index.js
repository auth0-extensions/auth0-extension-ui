import React from 'react';
import classNames from 'classnames';

const InputText = field => {
  const validationErrors = field.validationErrors;
  const classes = classNames({
    'form-group': true,
    'has-error': validationErrors && validationErrors[field.name] && validationErrors[field.name].length
  });

  return (
    <div className={classes}>
      <label htmlFor={field.name} className="control-label col-xs-3">
        {field.label}
      </label>
      <div className="col-xs-9">
        <input
          {...field.input}
          className="form-control"
          id={field.name}
          type={field.type || 'text'}
          placeholder={field.placeholder}
        />
        { field.validationErrors && validationErrors[field.name] && validationErrors[field.name].length && <div className="help-block">{ validationErrors[field.name][0] }</div> }
      </div>
    </div>
  );
};

export default InputText;
