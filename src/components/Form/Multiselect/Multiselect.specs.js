// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import { expect } from 'chai';
// import { Field } from 'redux-form';
//
// import { addFormDecorator } from '../utils';
// import Multiselect from './';
//
// const { describe, it } = global;
//
// describe('Multiselect', () => {
//   it('should show the number of options', () => {
//     const field = {
//       name: 'FieldName',
//       options: [
//         { value: 'ariel', label: 'Ariel Gerstein', email: 'ariel@auth0.com' },
//         { value: 'victor', label: 'Victor Fernandez', email: 'victor@auth0.com' },
//         { value: 'ricky', label: 'Ricky Rauch', email: 'ricky@auth0.com' },
//         { value: 'cherna', label: 'Tomas Cherna', email: 'cherna@auth0.com' }
//       ]
//     };
//     const wrapper = mount(addFormDecorator(
//       <Field
//         name={field.name}
//         component={Multiselect}
//         options={field.options}
//       />
//     ));
//     expect(wrapper.find('span')).to.have.length(4);
//   });
// });
