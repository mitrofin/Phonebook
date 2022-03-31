import { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList';
export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleSubmit = contactObj => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactObj],
      };
    });
  };

  getFilteredContactsList = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredContactsList = this.getFilteredContactsList();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts:</h2>
        {filteredContactsList.length > 0 && (
          <ContactList contacts={filteredContactsList} />
        )}
      </div>
    );
  }
}
