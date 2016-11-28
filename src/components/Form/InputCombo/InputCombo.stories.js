import React from 'react';
import { storiesOf } from '@kadira/storybook';
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
      options: [ { value: 1, text: 'Option 1' }, { value: 2, text: 'Option 2' } ],
      validationErrors: { }
    };
    return renderField(field);
  })
  .add('with error from validationErrors', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      options: [ { value: 1, text: 'Option 1' }, { value: 2, text: 'Option 2' } ],
      validationErrors: { FieldName: [ 'Required' ] }
    };
    return renderField(field);
  });
