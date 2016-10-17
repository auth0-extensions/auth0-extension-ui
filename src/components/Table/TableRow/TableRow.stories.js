import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TableRow from './';

storiesOf('TableRow', module)
  .add('default view', () => (
    <TableRow>
      This is the TableRow children.
    </TableRow>
  ));
