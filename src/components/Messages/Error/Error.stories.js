import React from 'react';
import { storiesOf } from '@storybook/react';

import Error from './';

function renderField(field) {
  return (
    <Error message={field.message} onDismiss={field.onDismiss} />
  );
}

storiesOf('Error', module)
  .add('default view', () => {
    const field = {
      message: 'This is the error message'
    };
    return renderField(field);
  });
