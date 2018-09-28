import React from 'react';
import { storiesOf } from '@storybook/react';

import TableIconCell from './';

storiesOf('TableIconCell', module)
  .add('default view', () => (
    <TableIconCell color="green" icon="573" />
  ));
