/* import { useState } from 'react'; */
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Section from './components/Section/section';

const App = () => {
  /* const [contacts, setContacts] = useState([]); */
  /* const [filter, setFilter] = useState(''); */

  /*   useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]); */

  /* const handleSubmit = ({ name, number }) => {
    if (name.some({ name } === name)) {
      return alert(`${name} already exists in your phonebook`);
    }
    setContacts(prevState => [...prevState, contacts]);
  }; */

  /*   const handleSubmit = ({ name, number, id }) => {
    const contact = {
      id,
      name,
      number,
    };
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} already exists in your phonebook`);
    }
    //setContacts(prevState => [...prevState, contact]);
     //   const contact = {
      //id,
      //name,
      //number,
    //};
    //const alreadyFind = contacts.find(contact => contact.name === name);

    //alreadyFind
      //? alert(`${name} is already in contacts.`)
      //: setContacts(prevState => [...prevState], contact);
  }; */

  /* const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const getFilteredContactsList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }; */
  /* const getFilteredContactsList = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }; */

  /* const filteredContactsList = getFilteredContactsList(); */

  return (
    <div>
      {/* <h1 className={s.title}>Phonebook</h1> */}
      <Section title="Phonebook">
        <ContactForm /* onSubmit={handleSubmit} */ />
        <Filter />
      </Section>

      {/* <h2 className={s.title}>Contacts:</h2> */}
      <Section title="Saved contacts">
        <ContactList />
      </Section>

      {/* {getFilteredContactsList().length > 0 && (
        <ContactList
          contacts={getFilteredContactsList()}
          onDeleteButtonClick={handleDeleteContact}
        />
      )} */}
      {/* {contacts.length > 1 && (
        <Filter initialValue={filter} onFilterChange={handleFilterChange} />
      )} */}
    </div>
  );
};
export default App;
