import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TableColumn from './';

storiesOf('TableColumn', module)
  .add('default view', () => (
    <TableColumn>
      This is the TableColumn children.
    </TableColumn>
  ));
