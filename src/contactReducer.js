

const initialState = {
    contacts: []
  };
  
  const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        console.log('amin',action.payload)
        return {
          ...state,
          contacts: [...state.contacts, action.payload]
        };
      case 'DELETE_CONTACT':
        console.log('amin',action.payload);
        return {
          ...state,
          contacts: state.contacts.filter(contact => contact.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default contactsReducer;
  