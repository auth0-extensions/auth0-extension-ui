import React from 'react';
import { storiesOf, action } from '@storybook/react';

import Alert from './';

function renderField(field) {
  return (
    <Alert show={field.show} onDismiss={field.close} type={field.type} message={field.message} />
  );
}

storiesOf('Alert', module)
  .add('default view', () => {
    const field = {
      show: true,
      type: 'info',
      message: 'This is the alert message',
      close: action('closeAlertMessage')
    };
    return renderField(field);
  });
