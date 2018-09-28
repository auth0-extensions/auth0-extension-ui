import React from 'react';
import { storiesOf } from '@storybook/react';

import TableColumn from './';

storiesOf('TableColumn', module)
  .add('default view', () => (
    <TableColumn>
      This is the TableColumn children.
    </TableColumn>
  ));
