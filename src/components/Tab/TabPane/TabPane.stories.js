import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TabPane from './';

storiesOf('TabPane', module)
  .add('default view', () => (
    <TabPane title="Users" />
  ));
