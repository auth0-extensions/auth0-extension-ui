import React from 'react';
import { storiesOf } from '@kadira/storybook';

import BlankState from './';

function renderField(field) {
  return (
    <BlankState
      title={field.title}
      iconImage={field.iconImage}
      description={field.description}
    >
      This is the BlankState children.
    </BlankState>
  );
}

storiesOf('BlankState', module)
  .add('default view', () => {
    const field = {
      title: 'The title',
      iconImage: (
        <div className="no-content-image">
          no image
        </div>
      ),
      description: 'The description.'
    };
    return renderField(field);
  });
