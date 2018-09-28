import React from 'react';
import { storiesOf, action } from '@storybook/react';

import DragAndDrop from './';

storiesOf('DragAndDrop', module)
  .add('default view', () => (<DragAndDrop onDrop={action('onDrop')} />));
