import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import DragAndDrop from './';

storiesOf('DragAndDrop', module)
  .add('default view', () => (<DragAndDrop onDrop={action('onDrop')} />));
