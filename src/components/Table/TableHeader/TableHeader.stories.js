import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TableHeader from './';

storiesOf('TableHeader', module)
  .add('default view', () => (
    <TableHeader>
      This is the TableHeader children.
    </TableHeader>
  ));
