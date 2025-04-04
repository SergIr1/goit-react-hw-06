import { configureStore, createAction } from '@reduxjs/toolkit';

export const addContact = createAction('items/addContact');
export const deleteContact = createAction('items/deleteContact');
export const filterContact = createAction('filters/filterContact');

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  filters: {
    name: '',
  },
};

const rootReducer = (state = initialState, action) => {
  console.log('Action received:', action);
  switch (action.type) {
    case addContact.type:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };

    case deleteContact.type:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            contact => contact.id !== action.payload
          ),
        },
      };

    case filterContact.type:
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.payload,
        },
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});

// export const store = configureStore({
//   reducer: (state = { value: 0 }) => state,
// });
