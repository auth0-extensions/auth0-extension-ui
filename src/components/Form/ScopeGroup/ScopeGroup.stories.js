import React from 'react';
import { storiesOf } from '@storybook/react';
import { Field } from 'redux-form';

import ScopeGroup from './';
import FakeForm from '../../utils/FakeForm';
import { Provider, store } from '../../utils/formUtils';

function renderField(field) {
  return (
      <Field
        name={field.name}
        component={ScopeGroup}
        label={field.label}
        options={field.options}
      />
  );
}

storiesOf('ScopeGroup', module)
  .addDecorator(story => (<Provider store={store}><FakeForm>{story()}</FakeForm></Provider>))
  .add('default view', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      options: [ { value: 'op1', text: 'Option 1' }, { value: 'op2', text: 'Option 2' } ]
    };
    return renderField(field);
  })
  .add('without label', () => {
    const field = {
      name: 'FieldName',
      options: [ { value: 'op1', text: 'Option 1' }, { value: 'op2', text: 'Option 2' } ]
    };
    return renderField(field);
  });
