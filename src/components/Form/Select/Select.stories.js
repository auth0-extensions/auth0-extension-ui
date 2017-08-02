import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Field } from 'redux-form';

import Select from './';
import FakeForm from '../../utils/FakeForm';
import { Provider, store } from '../../utils/formUtils';

function renderField(field) {
  return (
    <Field
      name={field.name}
      placeholder={field.placeholder}
      component={Select}
      loadOptions={field.loadOptions}
      label={field.label}
      multi={field.multi}
    />
  );
}

storiesOf('Select', module)
  .addDecorator(story => (<Provider store={store}><FakeForm>{story()}</FakeForm></Provider>))
  .add('default view', () => {
    const field = {
      name: 'FieldName',
      placeholder: 'my placeholder',
      loadOptions: (input, callback) => {
        callback(null, {
          options: [
            { label: 'Ariel Gerstein', value: 'ariel@auth0.com' },
            { label: 'Victor Fernandez', value: 'victor@auth0.com' },
            { label: 'Ricky Rauch', value: 'ricky@auth0.com' },
            { label: 'Tomas Cherna', value: 'cherna@auth0.com' },
            { label: 'Toon De Coninck', value: 'Toon De Coninck' }
          ],
          complete: true
        });
      }
    };
    return renderField(field);
  })
  .add('with label', () => {
    const field = {
      name: 'FieldName',
      label: 'Label',
      placeholder: 'My placeholder',
      loadOptions: (input, callback) => {
        callback(null, {
          options: [
            { label: 'Ariel Gerstein', value: 'ariel@auth0.com' },
            { label: 'Victor Fernandez', value: 'victor@auth0.com' },
            { label: 'Ricky Rauch', value: 'ricky@auth0.com' },
            { label: 'Tomas Cherna', value: 'cherna@auth0.com' },
            { label: 'Toon De Coninck', value: 'Toon De Coninck' }
          ],
          complete: true
        });
      }
    };
    return renderField(field);
  });
