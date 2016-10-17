import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import FakeForm from './FakeForm';

const reducer = combineReducers({
  form: formReducer
});

const createStoreWithMiddleware = applyMiddleware()(createStore);
function configureStore(initialState = { }) {
  return createStoreWithMiddleware(reducer, initialState);
}
const store = configureStore();

function addFormDecorator(component) {
  return (
    <Provider store={store}>
      <FakeForm>
        {component}
      </FakeForm>
    </Provider>
  );
}

export {
  Provider,
  store,
  addFormDecorator
};
