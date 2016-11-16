import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import SearchBar from './';

function renderField(field) {
  return (
    <SearchBar
      placeholder={field.placeholder}
      searchOptions={field.searchOptions}
      showInstructions={field.showInstructions}
      iconCode={field.iconCode}
      handleKeyPress={action('handleKeyPress')}
      handleReset={action('handleReset')}
      handleOptionChange={action('handleOptionChange')}
      searchValue={field.searchValue}
    />
  );
}

storiesOf('SearchBar', module)
  .add('default view', () => {
    const field = {
      placeholder: 'The placeholder',
      searchOptions: [
        {
          value: 'user',
          title: 'User'
        },
        {
          value: 'email',
          title: 'Email'
        }
      ]
    };
    return renderField(field);
  })
  .add('instructions view', () => {
    const field = {
      placeholder: 'The placeholder',
      searchOptions: [
        {
          value: 'user',
          title: 'User'
        },
        {
          value: 'email',
          title: 'Email'
        }
      ],
      showInstructions: true
    };
    return renderField(field);
  })
  .add('with diferent icon', () => {
    const field = {
      placeholder: 'The placeholder',
      searchOptions: [
        {
          value: 'user',
          title: 'User'
        },
        {
          value: 'email',
          title: 'Email'
        }
      ],
      iconCode: 488
    };
    return renderField(field);
  })
  .add('with init search value', () => {
    const field = {
      placeholder: 'The placeholder',
      searchOptions: [
        {
          value: 'user',
          title: 'User'
        },
        {
          value: 'email',
          title: 'Email'
        }
      ],
      iconCode: 488,
      searchValue: 'test'
    };
    return renderField(field);
  });
