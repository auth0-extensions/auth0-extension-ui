import React from 'react';
import { storiesOf, action } from '@storybook/react';

import TableAction from './';

function renderField(field) {
  return (
    <TableAction
      id={field.id}
      type={field.type}
      title={field.title}
      icon={field.icon}
      onClick={action('onClick')}
      args={field.args}
      disabled={field.disabled}
    />
  );
}

storiesOf('TableAction', module)
  .add('default view', () => {
    const field = {
      id: 'delete-permission',
      type: 'default',
      title: 'Delete Permission',
      icon: '264',
      args: [ ],
      disabled: false
    };
    return renderField(field);
  });
