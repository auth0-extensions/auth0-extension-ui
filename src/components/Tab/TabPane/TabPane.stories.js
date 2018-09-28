import React from 'react';
import { storiesOf } from '@storybook/react';

import TabPane from './';
import FakeContext from '../../utils/FakeContext';

storiesOf('TabPane', module)
  .add('default view', () => {
    const context = {
      router: {
        isActive: () => (true),
        createHref: () => (true)
      }
    };
    return (
      <FakeContext context={context}>
        <TabPane title="Users" route="users" />
      </FakeContext>
    );
  });
