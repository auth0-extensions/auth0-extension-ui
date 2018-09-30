import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Scope from '../Scope';

export default class ScopeGroup extends Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    label: PropTypes.string
  }

  renderElement(input, options) {
    return (
      <div
        className="form-control"
        id={input.name}
        style={{
          maxHeight: '151px',
          overflowY: 'scroll',
          height: 'auto',
          padding: '12px 12px 2px 12px',
          boxShadow: 'none'
        }}
      >
        {options.map(option =>
          <Scope
            key={option.value}
            field={input}
            text={option.text}
            value={option.value}
          />
        )}
      </div>
    );
  }

  render() {
    const { input, input: { name }, label, options } = this.props;

    if (!label) {
      return this.renderElement(input, options);
    }

    return (
      <div className="form-group">
        <label htmlFor={input.name} className="control-label col-xs-3">
          {label}
        </label>
        <div className="col-xs-9">
          { this.renderElement(input, options) }
        </div>
      </div>
    );
  }
}
