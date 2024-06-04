import React from 'react';
import css from './ContactListItem.module.css';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item}>
      <div className={css.details}>
        <span className={css.name}>{contact.name}</span>
        <span className={css.phone}>{contact.number}</span>
      </div>
      <button
        className={css.button}
        onClick={() => handleDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
