import React from 'react';
import { storiesOf, action } from '@storybook/react';

import Pagination from './';

function renderField(field) {
  return (
    <Pagination
      handlePageChange={action('handlePageChange')}
      totalItems={field.totalItems}
      perPage={field.perPage}
    />
  );
}

storiesOf('Pagination', module)
  .add('default view', () => {
    const field = {
      totalItems: 5,
      perPage: 2
    };
    return renderField(field);
  });
