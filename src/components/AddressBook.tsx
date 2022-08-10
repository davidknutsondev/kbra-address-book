import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useCreateContactMutation, useGetContactsQuery } from '../services/contacts';
import CreateContactModal from './modals/CreateContactModal';
import ContactsTable from './tables/ContactsTable';

const AddressBook: React.FC = () => {
  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [searchContactsInput, setSearchContactsInput] = useState('');
  const { data, error, isLoading, refetch } = useGetContactsQuery({ searchInput: 'Rob' });
  const [createContact, { isLoading: createContactLoading }] = useCreateContactMutation();

  const mockInput = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.internet.avatar(),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
    phone: faker.phone.number('666-###-###'),
  };

  const handleRefetch = async () => {
    await refetch();
  };

  const handleClick = async () => {
    // createContact()
    // console.log('create a new contact');
    try {
      const payload = await createContact(mockInput).unwrap();
      toast.success('Successs!!!!!');
      console.log('fulfilled', payload);
      refetch();
    } catch (error) {
      console.error('rejected', error);
    }
  };

  return (
    <>
      <Container>
        <Row className="mb-3">
          <Col>
            <Button className="float-end" size="lg" variant="primary" onClick={handleShow}>
              New Contact
            </Button>
          </Col>
        </Row>
        <Row>
          <ContactsTable contacts={data} error={error} loading={isLoading} />
        </Row>
        <Row>
          <Col>
            <Button
              className="float-start"
              size="lg"
              onClick={handleClick}
              disabled={createContactLoading}
            >
              Generate Contact
            </Button>
          </Col>
        </Row>
        <CreateContactModal show={show} closeModal={closeModal} onRefetch={handleRefetch} />
        <ToastContainer />
      </Container>
    </>
  );
};

export default AddressBook;
