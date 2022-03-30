import { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleSubmit = () => {};
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts:</h2>
      </div>
    );
  }
}
