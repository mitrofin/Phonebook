/* import { useState } from 'react'; */
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Section from './components/Section/section';
import Container from './components/Container/container';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperation } from './redux/contacts';
import { toast, ToastContainer } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const isError = useSelector(contactsSelectors.getError);

  useEffect(() => dispatch(contactsOperation.getContacts()), [dispatch]);

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
    <Container>
      {/* <h1 className={s.title}>Phonebook</h1> */}
      <Section title="Phonebook">
        <ContactForm /* onSubmit={handleSubmit} */ />
        <Filter />

        <ToastContainer autoClose={1500} />
        {isError && toast.error('We were unable to load contacts!')}
      </Section>

      {/* <h2 className={s.title}>Contacts:</h2> */}
      <Section title="Saved contacts">
        {isLoading && (
          <TailSpin
            heigth="150"
            width="150"
            color="#006280"
            ariaLabel="loading"
            y="150px"
          />
        )}
        <ContactList />
        <ToastContainer autoClose={1500} />
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
    </Container>
  );
};
export default App;
