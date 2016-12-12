import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Field } from 'redux-form';

import InputCheckBox from './';
import FakeForm from '../../utils/FakeForm';
import { Provider, store } from '../../utils/formUtils';

function renderField(field) {
  return (
    <Field
      name={field.name}
      component={InputCheckBox}
      label={field.label}
      validationErrors={field.validationErrors}
    />
  );
}

storiesOf('InputCheckBox', module)
  .addDecorator(story => (<Provider store={store}><FakeForm>{story()}</FakeForm></Provider>))
  .add('default view', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      validationErrors: { }
    };
    return renderField(field);
  })
  .add('with error from validationErrors', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      validationErrors: { FieldName: [ 'Required' ] }
    };
    return renderField(field);
  })
  .add('without label', () => {
    const field = {
      name: 'FieldName'
    };
    return renderField(field);
  });
