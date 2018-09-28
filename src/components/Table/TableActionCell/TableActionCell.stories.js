import React from 'react';
import { storiesOf } from '@storybook/react';

import TableActionCell from './';

storiesOf('TableActionCell', module)
  .add('default view', () => (
    <TableActionCell>
      This is the TableActionCell children.
    </TableActionCell>
  ));
