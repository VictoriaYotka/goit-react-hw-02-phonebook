export function ContactList({ contacts, filter }) {
    const filteredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul>
            {filteredContacts.map(contact => <li key={contact.id}>{contact.name}: {contact.number}</li>)}
        </ul>
    )
}