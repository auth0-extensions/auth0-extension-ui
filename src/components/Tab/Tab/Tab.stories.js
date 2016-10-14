import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Tab from './';
import TabPane from '../TabPane';

// TODO needs react-router

storiesOf('Tab', module)
  .add('default view', () => (
    <Tab>
      <li>Users</li>
      <li>Groups</li>
    </Tab>
  // ))
  // .add('with TabPane components', () => (
  //   <Tab>
  //     <TabPane title="Users" />
  //     <TabPane title="Groups" />
  //   </Tab>
  ));;
