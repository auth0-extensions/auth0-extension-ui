import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Field } from 'redux-form';

import InputText from './';
import FakeForm from '../../utils/FakeForm';
import { Provider, store } from '../../utils/formUtils';

function renderField(field) {
  return (
      <Field
        name={field.name}
        component={InputText}
        label={field.label}
        placeholder={field.placeholder}
        validationErrors={field.validationErrors}
      />
  );
}

storiesOf('InputText', module)
  .addDecorator(story => (<Provider store={store}><FakeForm>{story()}</FakeForm></Provider>))
  .add('default view', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      placeholder: 'My placeholder',
      validationErrors: { }
    };
    return renderField(field);
  })
  .add('with error', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      placeholder: 'My placeholder',
      validationErrors: { FieldName: [ 'Required' ] }
    };
    return renderField(field);
  });
