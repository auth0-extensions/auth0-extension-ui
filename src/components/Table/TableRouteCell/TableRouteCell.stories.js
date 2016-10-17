import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TableRouteCell from './';

storiesOf('TableRouteCell', module)
  .add('default view', () => (
    <TableRouteCell route={'/someroute'}>Route name</TableRouteCell>
  ));
