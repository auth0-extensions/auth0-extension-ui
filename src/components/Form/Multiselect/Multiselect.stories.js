import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Field } from 'redux-form';

import Multiselect from './';
import FakeForm from '../FakeForm';
import { Provider, store } from '../utils';

function renderField(field) {
  return (
    <Field
      name={field.name}
      component={Multiselect}
      options={field.options}
    />
  );
}

storiesOf('Multiselect', module)
  .addDecorator(story => (<Provider store={store}><FakeForm>{story()}</FakeForm></Provider>))
  .add('default view', () => {
    const field = {
      name: 'FieldName',
      options: [
        { value: 'ariel', label: 'Ariel Gerstein', email: 'ariel@auth0.com' },
        { value: 'victor', label: 'Victor Fernandez', email: 'victor@auth0.com' },
        { value: 'ricky', label: 'Ricky Rauch', email: 'ricky@auth0.com' },
        { value: 'cherna', label: 'Tomas Cherna', email: 'cherna@auth0.com' }
      ]
    };
    return renderField(field);
  });
