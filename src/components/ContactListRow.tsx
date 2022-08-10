import Image from 'react-bootstrap/Image';
import { Contact } from '../services/types';

interface Props {
  contact: Contact;
}

const ContactListRow: React.FC<Props> = ({ contact }) => {
  return (
    <tr>
      <td>
        <Image src={contact.avatar} />
      </td>
      <td>{contact.lastName}</td>
      <td>{contact.firstName}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.address}</td>
    </tr>
  );
};

export default ContactListRow;
