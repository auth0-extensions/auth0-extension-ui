import React from 'react';
import { storiesOf, action } from '@storybook/react';

import TableTotals from './';

storiesOf('TableTotals', module)
  .add('default view', () => {
    const field = {
      currentCount: 5,
      totalCount: 10
    };
    return (<TableTotals currentCount={field.currentCount} totalCount={field.totalCount} />);
  });
