import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TableIconCell from './';

storiesOf('TableIconCell', module)
  .add('default view', () => (
    <TableIconCell color="green" icon="573" />
  ));
