import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TableActionCell from './';

storiesOf('TableActionCell', module)
  .add('default view', () => (
    <TableActionCell>
      This is the TableActionCell children.
    </TableActionCell>
  ));
