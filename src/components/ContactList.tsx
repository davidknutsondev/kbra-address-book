import Table from 'react-bootstrap/Table';
import { Contacts } from '../services/types';
import ContactListRow from './ContactListRow';

interface Props {
  contacts?: Contacts;
  error: any;
  loading: boolean;
}

const ContactList: React.FC<Props> = ({ contacts, error, loading }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {error ? (
          <tr>
            <td>Oh no, there was an error</td>
          </tr>
        ) : loading ? (
          <tr>
            <td>Loading contacts...</td>
          </tr>
        ) : contacts ? (
          <>
            {contacts.map((contact) => (
              <ContactListRow contact={contact} key={contact.id} />
            ))}
          </>
        ) : null}
      </tbody>
    </Table>
  );
};

export default ContactList;
