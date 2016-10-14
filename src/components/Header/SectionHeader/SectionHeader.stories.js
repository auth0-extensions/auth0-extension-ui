import React from 'react';
import { storiesOf } from '@kadira/storybook';

import SectionHeader from './';

function renderField(field) {
  return (
    <SectionHeader
      title={field.title}
      description={field.description}
      isSubsection={field.isSubsection}
    >
      This is the SectionHeader children.
    </SectionHeader>
  );
}

storiesOf('SectionHeader', module)
  .add('default view', () => {
    const field = {
      title: 'This is the title',
      description: 'This is the description',
      isSubsection: true
    };
    return renderField(field);
  });
