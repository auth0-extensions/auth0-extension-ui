import React from 'react';
import { storiesOf } from '@storybook/react';

import Scope from './';

function renderField(field, input) {
  return (
    <Scope key={field.value} field={input} text={field.text} value={field.value} />
  );
}

storiesOf('Scope', module)
  .add('default view', () => {
    const field = {
      value: 'FieldValue',
      text: 'FieldText'
    };
    const input = { };
    return renderField(field, input);
  });
