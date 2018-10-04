import React, { Component, PropTypes } from 'react';
import Select from 'react-virtualized-select';
import classNames from 'classnames';
import '../../../../node_modules/react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import createFilterOptions from 'react-select-fast-filter-options';
import './VirtualizedSelect.styl';

class VirtualizedSelect extends Component {

  renderErrors(validationErrors, meta, name) {
    if (validationErrors && validationErrors[name] && validationErrors[name].length) {
      return (<div className="help-block">{validationErrors[name][0]}</div>);
    } else if (meta && meta.touched && meta.error) {
      return (<span className="help-block">{meta.error}</span>);
    }

    return null;
  }

    renderValue = (value) => {
      if (value.label === value.value || this.props.displayLabelOnly) {
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

	renderOption = ({ focusedOption, focusOption, key, labelKey, option, selectValue, style, valueArray }) => {
		const className = ['VirtualizedSelectOption']
        if (option === focusedOption) {
            className.push('VirtualizedSelectFocusedOption')
        }
        if (option.disabled) {
            className.push('VirtualizedSelectDisabledOption')
        }
        if (valueArray && valueArray.indexOf(option) >= 0) {
            className.push('VirtualizedSelectSelectedOption')
        }
        const events = option.disabled
            ? {}
            : {
                onClick: () => selectValue(option),
                onMouseEnter: () => focusOption(option)
            }
        const val = this.renderValue(option)
        return (
            <div className={className.join(' ')} key={key}
                style={style}
                title={option.title}
                {...events}
            >
                {val}
            </div>
        );
  }

  renderElement(input, placeholder, options, name, validationErrors, meta, multi = false) {
    // NOTE: see https://github.com/erikras/redux-form/issues/82 for onBlur() react-select docs
    const tokenizer = {
        tokenize: (text) => text.split(/[\s]+/)
    };
    const filterOptions = createFilterOptions({ options, tokenizer });
    return (
      <div>
        <Select
          {...input}
          className="react-multiselect"
          name={name}
          ignoreAccents={false}
          options={options}
          filterOptions={filterOptions}
          optionRenderer={this.renderOption}
          valueRenderer={this.renderValue}
          onBlur={() => input.onBlur()}
          placeholder={placeholder}
          multi={multi}
        />
        {this.renderErrors(validationErrors, meta, name)}
      </div>
    );
  }

  render() {
    const { input, placeholder, options, multi, label, validationErrors, meta, meta: { touched, error } } = this.props;
    const name = input.name || 'react-multiselect';
    const classes = classNames({
      'form-group': true,
      'has-error': (validationErrors && validationErrors[name] && validationErrors[name].length) || (touched && error)
    });

    if (!label) {
      return this.renderElement(input, placeholder, options, name, validationErrors, meta, multi);
    }

    return (
      <div className={classes}>
        <label htmlFor={name} className="react-multiselect-label control-label col-xs-3">
          {label}
        </label>
        <div className="col-xs-9">
          {this.renderElement(input, placeholder, options, name, validationErrors, meta, multi)}
        </div>
      </div>
    );
  }
}

VirtualizedSelect.propTypes = {
  options: PropTypes.array.isRequired,
  displayLabelOnly: PropTypes.bool,
  onBlur: PropTypes.func,
  input: PropTypes.object,
  placeholder: PropTypes.string,
  multi: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  validationErrors: PropTypes.object,
  meta: PropTypes.object
};

export default VirtualizedSelect;
