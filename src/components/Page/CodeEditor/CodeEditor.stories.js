import React from 'react';
import { storiesOf } from '@storybook/react';

import CodeEditor from './';
require('codemirror/mode/xml/xml');

storiesOf('CodeEditor', module)
  .add('default view', () => {
    const messageOptions = {
      mode: 'xml'
    };
    const value = '<div>\nHello! This is the <strong>code editor</strong>.\n<p>New paragraph.</p>\n</div>';
    return <CodeEditor value={value} options={messageOptions} />;
  });
