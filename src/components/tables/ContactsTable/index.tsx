import Table from 'react-bootstrap/Table';
import { Contacts } from '../../../types';
import ContactsTableRow from './ContactsTableRow';

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
          <tr key={'error-key'}>
            <td>Oh no, there was an error</td>
          </tr>
        ) : loading ? (
          <tr key={'loading-key'}>
            <td>Loading contacts...</td>
          </tr>
        ) : contacts ? (
          <>
            {contacts.map((contact) => (
              <ContactsTableRow contact={contact} key={contact.id} />
            ))}
          </>
        ) : null}
      </tbody>
    </Table>
  );
};

export default ContactsTable;
