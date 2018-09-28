import React from 'react';
import { storiesOf, action } from '@storybook/react';

import Confirm from './';

function renderField(field) {
  return (
    <Confirm
      title={field.title}
      show={field.show}
      loading={field.loading}
      onCancel={action('cancel')}
      onConfirm={action('confirm')}
      confirmMessage={field.confirm}
      className={field.className}
    >
      This is the Confirm children.
    </Confirm>
  );
}

storiesOf('Confirm', module)
  .add('default view', () => {
    const field = {
      title: 'The title',
      show: true,
      loading: false,
      confirmMessage: 'Save',
      className: 'Confirm--myclass'
    };
    return renderField(field);
  });
