import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Sidebar from './';
import SidebarItem from '../SidebarItem';


// TODO:: needs react-router...

storiesOf('Sidebar', module)
  .add('default view', () => (
    <Sidebar>
      <p>Users</p>
      <p>Groups</p>
    </Sidebar>
  // ))
  // .add('with Sidebar components', () => (
  //       <Sidebar>
  //         <SidebarItem title="Users" />
  //         <SidebarItem title="Groups" />
  //         <SidebarItem title="Roles" />
  //         <SidebarItem title="Permissions" />
  //       </Sidebar>
  ));
