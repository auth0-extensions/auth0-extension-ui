import React from 'react';
import { storiesOf } from '@storybook/react';
import { Field } from 'redux-form';

import InputCombo from './';
import FakeForm from '../../utils/FakeForm';
import { Provider, store } from '../../utils/formUtils';

function renderField(field) {
  return (
    <Field
      name={field.name}
      component={InputCombo}
      label={field.label}
      placeholder={field.placeholder}
      options={field.options}
      validationErrors={field.validationErrors}
    />
  );
}

storiesOf('InputCombo', module)
  .addDecorator(story => (<Provider store={store}><FakeForm>{story()}</FakeForm></Provider>))
  .add('default view', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      placeholder: 'My placeholder',
      options: [ { value: 1, text: 'Option 1' }, { value: 2, text: 'Option 2' } ],
      validationErrors: { }
    };
    return renderField(field);
  })
  .add('with error from validationErrors', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      placeholder: 'My placeholder',
      options: [ { value: 1, text: 'Option 1' }, { value: 2, text: 'Option 2' } ],
      validationErrors: { FieldName: [ 'Required' ] }
    };
    return renderField(field);
  })
  .add('without label', () => {
    const field = {
      name: 'FieldName',
      placeholder: 'My placeholder',
      options: [ { value: 1, text: 'Option 1' } ]
    };
    return renderField(field);
  });
