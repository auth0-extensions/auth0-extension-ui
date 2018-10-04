import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Field } from 'redux-form';

import VirtualizedSelect from './';
import FakeForm from '../../utils/FakeForm';
import { Provider, store } from '../../utils/formUtils';

function renderField(field) {
  return (
    <Field
     name={field.name}
     placeholder={field.placeholder}
     component={VirtualizedSelect}
     options={field.options}
     label={field.label}
     multi={field.multi}
     displayLabelOnly={field.displayLabelOnly}
    />
  );
}

storiesOf('VirtualizedSelect', module)
  .addDecorator(story => (<Provider store={store}><FakeForm>{story()}</FakeForm></Provider>))
  .add('default view', () => {
    const field = {
      name: 'FieldName',
      placeholder: 'my placeholder',
      options: [
          { value: 'ariel@auth0.com', label: 'Ariel Gerstein' },
          { value: 'victor@auth0.com', label: 'Victor Fernandez' },
          { value: 'ricky@auth0.com',label: 'Ricky Rauch'  },
          { value: 'cherna@auth0.com',label: 'Tomas Cherna'  }
      ]
    };
    return renderField(field);
  })

  .add('with label', () => {
    const field = {
      name: 'FieldName',
      label: 'Label',
      placeholder: 'My placeholder',
      options: [
            { label: 'Ariel Gerstein', value: 'ariel@auth0.com' },
            { label: 'Victor Fernandez', value: 'victor@auth0.com' },
            { label: 'Ricky Rauch', value: 'ricky@auth0.com' },
            { label: 'Tomas Cherna', value: 'cherna@auth0.com' }
        ]
    };
    return renderField(field);
    })
    .add('with displayLabelOnly', () => {
        const field = {
            name: 'FieldName',
            label: 'Label',
            placeholder: 'My placeholder',
            displayLabelOnly: true,
            options: [
                { label: 'Ariel Gerstein', value: 'ariel@auth0.com' },
                { label: 'Victor Fernandez', value: 'victor@auth0.com' },
                { label: 'Ricky Rauch', value: 'ricky@auth0.com' },
                { label: 'Tomas Cherna', value: 'cherna@auth0.com' }
            ]
        };
        return renderField(field);
    })
    .add('default view with multi', () => {
        const field = {
            name: 'FieldName',
            placeholder: 'my placeholder',
            multi:true,
            options: [
                { value: 'ariel@auth0.com', label: 'Ariel Gerstein' },
                { value: 'victor@auth0.com', label: 'Victor Fernandez' },
                { value: 'ricky@auth0.com', label: 'Ricky Rauch' },
                { value: 'cherna@auth0.com', label: 'Tomas Cherna' }
            ]
        };
        return renderField(field);
    })
    .add('with label with multi', () => {
        const field = {
            name: 'FieldName',
            label: 'Label',
            placeholder: 'My placeholder',
            multi:true,
            options: [
                { label: 'Ariel Gerstein', value: 'ariel@auth0.com' },
                { label: 'Victor Fernandez', value: 'victor@auth0.com' },
                { label: 'Ricky Rauch', value: 'ricky@auth0.com' },
                { label: 'Tomas Cherna', value: 'cherna@auth0.com' }
            ]
        };
        return renderField(field);
    })
    .add('with displayLabelOnly with multi', () => {
        const field = {
            name: 'FieldName',
            label: 'Label',
            placeholder: 'My placeholder',
            displayLabelOnly: true,
            multi:true,
            options: [
                { label: 'Ariel Gerstein', value: 'ariel@auth0.com' },
                { label: 'Victor Fernandez', value: 'victor@auth0.com' },
                { label: 'Ricky Rauch', value: 'ricky@auth0.com' },
                { label: 'Tomas Cherna', value: 'cherna@auth0.com' }
            ]
        };
        return renderField(field);
    });
