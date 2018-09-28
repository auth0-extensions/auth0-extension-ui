import React from 'react';
import { storiesOf } from '@storybook/react';

import Info from './';

function renderField(field) {
  return (
    <Info message={field.message} onDismiss={field.onDismiss} />
  );
}

storiesOf('Info', module)
  .add('default view', () => {
    const field = {
      message: 'This is the info message'
    };
    return renderField(field);
  });
