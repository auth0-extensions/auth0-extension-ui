import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Success from './';

function renderField(field) {
  return (
    <Success message={field.message} onDismiss={field.onDismiss} />
  );
}

storiesOf('Success', module)
  .add('default view', () => {
    const field = {
      message: 'This is the success message'
    };
    return renderField(field);
  });
