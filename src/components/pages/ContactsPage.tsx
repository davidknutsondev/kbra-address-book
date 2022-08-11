import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useCreateContactMutation, useGetContactsQuery } from '../../services/contacts';
import CreateContactModal from '../modals/CreateContactModal';
import ContactsTable from '../tables/ContactsTable';
import SearchContactsForm from '../forms/SearchContactsForm.tsx';

const ContactsPage: React.FC = () => {
  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchContactsInput, setSearchContactsInput] = useState('');
  const { data, error, isLoading, refetch } = useGetContactsQuery({
    searchInput: searchContactsInput,
  });
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

  const handleSearch = (userInput: string): void => {
    setSearchContactsInput(userInput);
    handleRefetch();
  };

  const handleClick = async () => {
    try {
      const payload = await createContact(mockInput).unwrap();
      toast.success('Successs!!!!!');
      refetch();
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light" fixed="top">
          <Container>
            <Row className="d-flex mb-3 mt-3">
              <Col>
                <SearchContactsForm onSearch={handleSearch} />
              </Col>
              <Col>
                <Button
                  className="float-end"
                  size="lg"
                  variant="outline-primary"
                  onClick={handleShow}
                >
                  New Contact
                </Button>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </Container>

      <Container>
        <Row style={{ paddingTop: '96px' }}>
          <Col>
            <ContactsTable contacts={data} error={error} loading={isLoading} />
          </Col>
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

export default ContactsPage;
