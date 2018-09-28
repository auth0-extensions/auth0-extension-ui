import React from 'react';
import { storiesOf } from '@storybook/react';

import TableRouteCell from './';

storiesOf('TableRouteCell', module)
  .add('default view', () => (
    <TableRouteCell route={'/someroute'}>Route name</TableRouteCell>
  ));
