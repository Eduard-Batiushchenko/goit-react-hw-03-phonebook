import React, { Component } from 'react';
import Container from './Components/Container/Container';
import shortid from 'shortid';
import Contacts from './Components/Contacts/Contacts';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import style from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      const contactsStringify = JSON.stringify(contacts);
      localStorage.setItem('contacts', contactsStringify);
    }
  }

  componentDidMount() {
    const contactsStringify = localStorage.getItem('contacts');
    if (contactsStringify) {
      const contactsParse = JSON.parse(contactsStringify);
      this.setState({ contacts: [...contactsParse] });
    }
  }

  deleteContact = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(el => el.id !== id) };
    });
  };

  formSubmitHandler = data => {
    data = { ...data, id: shortid.generate() };

    const result = this.state.contacts.some(el => el.name === data.name);
    !result
      ? this.setState({ contacts: [...this.state.contacts, data] })
      : alert(`${data.name} contact already exist`);
  };

  handleFilterInput = filterValue => {
    this.setState({ filter: filterValue });
  };

  render() {
    const { contacts, filter } = this.state;

    const filterInpurt = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <Container>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className={style.title}>Contacts:</h2>
        <Filter handleFilterInput={this.handleFilterInput} />
        <Contacts
          filterInpurt={filterInpurt}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
