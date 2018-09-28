import React from 'react';
import { storiesOf } from '@storybook/react';

import SidebarItem from './';
import FakeContext from '../../utils/FakeContext';

function getContext() {
  return {
    router: {
      isActive: () => (true),
      createHref: () => (true)
    }
  };
}
storiesOf('SidebarItem', module)
  .add('default view', () => (
    <FakeContext context={getContext()}>
      <SidebarItem title="Permissions" route="permissions" />
    </FakeContext>
  ))
  .add('with icon view', () => (
    <FakeContext context={getContext()}>
      <SidebarItem
        title="Permissions"
        route="permissions"
        icon={<i className="icon icon-budicon-488" />}
      />
    </FakeContext>
  ))
  .add('with children', () => (
    <FakeContext context={getContext()}>
      <SidebarItem title="Permissions">
        This is the SidebarItem children.
      </SidebarItem>
    </FakeContext>
  ));
