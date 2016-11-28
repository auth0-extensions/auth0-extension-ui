import React from 'react';
import { storiesOf } from '@kadira/storybook';

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
