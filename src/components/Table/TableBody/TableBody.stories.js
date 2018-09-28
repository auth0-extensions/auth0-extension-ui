import React from 'react';
import { storiesOf } from '@storybook/react';

import TableBody from './';

storiesOf('TableBody', module)
  .add('default view', () => (
    <TableBody>
      This is the TableBody children.
    </TableBody>
  ));
