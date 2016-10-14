import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Error from './';

function renderField(field) {
  return (
    <Error
      message={field.message}
      dismissAfter={field.dismissAfter}
    />
  );
}

storiesOf('Error', module)
  .add('default view', () => {
    const field = {
      message: 'This is the error message'//,
      // dismissAfter: 5000
    };
    return renderField(field);
  });
