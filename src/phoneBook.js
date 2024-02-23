
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact, deleteContact } from './action';

const Phonebook = ({ contacts, addContact, deleteContact }) => {
  const [name, setName] = useState('');
//console.log(cont);
  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ id: Date.now(), name });
    setName('');
  };
  const handleChange = (e) => {
    //console.log(e.target.value);
    setName(e.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Add Contact</button>
      </form>
      <ul>
      { console.log('phonebook',contacts)}
        {contacts && contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}
            {console.log(contact.id)}
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts
});

export default connect(mapStateToProps, { addContact, deleteContact })(Phonebook);
