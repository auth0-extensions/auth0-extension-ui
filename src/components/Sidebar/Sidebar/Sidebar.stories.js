import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Sidebar from './';
import SidebarItem from '../SidebarItem';
import FakeContext from '../../utils/FakeContext';

storiesOf('Sidebar', module)
  .add('default view', () => (
    <Sidebar>
      <p>Users</p>
      <p>Groups</p>
    </Sidebar>
  ))
  .add('with Sidebar components', () => {
    const context = {
      router: {
        isActive: () => (true),
        createHref: () => (true)
      }
    };
    return (
      <Sidebar>
        <FakeContext context={context}>
          <SidebarItem title="Users" />
        </FakeContext>
        <FakeContext context={context}>
          <SidebarItem title="Groups" />
        </FakeContext>
      </Sidebar>
    );
  });
