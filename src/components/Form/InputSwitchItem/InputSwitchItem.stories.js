import React from 'react';
import { storiesOf } from '@storybook/react';
import { Field } from 'redux-form';

import InputSwitchItem from './';
import FakeForm from '../../utils/FakeForm';
import { Provider, store } from '../../utils/formUtils';

function renderField(field) {
  return (
    <Field
      name={field.name}
      component={InputSwitchItem}
      title={field.title}
      description={field.description}
    />
  );
}

storiesOf('InputSwitchItem', module)
  .addDecorator(story => (<Provider store={store}><FakeForm>{story()}</FakeForm></Provider>))
  .add('default view', () => {
    const field = {
      title: 'My Title',
      description: (<span>My Description</span>),
      name: 'FieldName'
    };
    return renderField(field);
  });
