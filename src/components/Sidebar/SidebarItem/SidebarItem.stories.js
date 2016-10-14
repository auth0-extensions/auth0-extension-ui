import React from 'react';
import { storiesOf } from '@kadira/storybook';

import SidebarItem from './';

// TODO:: needs react-router... this.context.router

storiesOf('SidebarItem', module)
  .add('default view', () => (
    <SidebarItem title="Permissions" />
  ));
