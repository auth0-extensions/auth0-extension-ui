import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Tab from './';
import TabPane from '../TabPane';
import FakeContext from '../../utils/FakeContext';

storiesOf('Tab', module)
  .add('default view', () => (
    <Tab>
      <li>Users</li>
      <li>Groups</li>
    </Tab>
  ))
  .add('with TabPane components', () => {
    const context = {
      router: {
        isActive: () => (true),
        createHref: () => (true)
      }
    };
    return (
      <Tab>
        <FakeContext context={context}>
          <TabPane title="Users" route="users" />
        </FakeContext>
        <FakeContext context={context}>
          <TabPane title="Groups" route="groups" />
        </FakeContext>
      </Tab>
    );
  });
