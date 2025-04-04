import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/store';

export default function ContactList() {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const filteredContacts = contact.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact
              data={contact}
              onDelete={id => dispatch(deleteContact(id))}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
