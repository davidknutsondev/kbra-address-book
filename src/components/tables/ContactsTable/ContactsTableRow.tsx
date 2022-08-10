import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';
import { Contact } from '../../../types';

interface Props {
  contact: Contact;
}

const ContactsTableRow: React.FC<Props> = ({ contact }) => {
  return (
    <tr>
      <td>
        <Row>
          <Col>
            <Image src={contact.avatar} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              {contact.lastName}, {contact.firstName}
            </p>
          </Col>
        </Row>
      </td>
      <td>
        <Row>
          <Col>
            <p>{contact.email}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{contact.phone}</p>
          </Col>
        </Row>
      </td>
      <td>{contact.address}</td>
    </tr>
  );
};

export default ContactsTableRow;
