export function ContactList({ contacts, filter, handleDeleteButton }) {
    const filteredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul>
            {filteredContacts.map(({id, name, number}) => <li key={id}>{name}: {number}
            <button onClick={() => handleDeleteButton(id)}>Delete</button>
            </li>)}
        </ul>
    )
}