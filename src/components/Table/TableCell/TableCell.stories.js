import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TableCell from './';

storiesOf('TableCell', module)
  .add('default view', () => (
    <TableCell>
      This is the TableCell children.
    </TableCell>
  ))
  .add('styled view', () => (
    <TableCell style={{ color: 'blue' }}>
      This is the TableCell children.
    </TableCell>
  ));
