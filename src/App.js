import { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import s from './index.css';

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
  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = filter => {
    this.setState({
      filter,
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
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2 className={s.title}>Contacts:</h2>
        {contacts.length > 1 && (
          <Filter
            initialValue={filter}
            onFilterChange={this.handleFilterChange}
          />
        )}

        {filteredContactsList.length > 0 && (
          <ContactList
            contacts={filteredContactsList}
            onDeleteButtonClick={this.handleDeleteContact}
          />
        )}
      </div>
    );
  }
}
