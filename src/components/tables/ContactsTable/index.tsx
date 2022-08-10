import Table from 'react-bootstrap/Table';
import { Contacts } from '../../../types';
import ContactListRow from './ContactsTableRow';

interface Props {
  contacts?: Contacts;
  error: any;
  loading: boolean;
}

const ContactsTable: React.FC<Props> = ({ contacts, error, loading }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact Info.</th>
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

export default ContactsTable;
