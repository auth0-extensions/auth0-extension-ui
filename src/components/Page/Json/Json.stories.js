import React from 'react';
import { storiesOf } from '@storybook/react';

import Json from './';

storiesOf('Json', module)
  .add('default view', () => {
    const jsonObject = {
      name: 'json object title',
      items: {
        first: 'first',
        second: 'second'
      },
      list: [ 'first', 'second' ]
    };
    return <Json jsonObject={jsonObject} />;
  });
