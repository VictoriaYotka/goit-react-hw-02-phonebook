import { Component } from "react";
import { nanoid } from 'nanoid'

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  
  handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
  
    const newContact = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value, 
    };

    if(this.state.contacts.find(({name}) => name === newContact.name)) {
      // console.log(this.state.contacts.find(({name}) => name === newContact.name))

      alert (`${newContact.name} is already in contacts`)

      
      // form.reset()
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact]
      }))
      
    }

    form.reset()
  }

  handleChange = (e) => {
    const {value} = e.target;
    this.setState({filter: value});
  }

  render () {
    return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm  
  handleSubmit={this.handleSubmit}
  />

  <h2>Contacts</h2>
  <Filter  handleChange={this.handleChange}/>
  <ContactList contacts={this.state.contacts} filter={this.state.filter}/>
</div>
    )
  }
}
