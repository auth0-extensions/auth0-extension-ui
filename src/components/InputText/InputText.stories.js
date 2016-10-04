import React from 'react';
import { storiesOf } from '@kadira/storybook';
import InputText from './InputText';

function renderInputText(field) {
  return (
    <InputText
      field={field}
      label={field.label}
      type={field.type}
      fieldName={field.name}
      touched={field.touched}
      placeholder={field.placeholder}
      validationErrors={field.error}
    />
  );
}

storiesOf('InputText', module)
  .add('text view', () => {
    const field = {
      label: 'My Label',
      type: 'text',
      name: 'Field Name',
      touched: false,
      placeholder: 'My placeholder',
      error: [ ]
    };
    return renderInputText(field);
  })
  .add('with error', () => {
    const field = {
      label: 'My Label',
      type: 'text',
      name: 'Field Name',
      touched: true,
      placeholder: 'My placeholder',
      error: [ 'Required' ]
    };
    return renderInputText(field);
  });
