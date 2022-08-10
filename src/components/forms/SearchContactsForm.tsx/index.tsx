import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

interface Props {
  onSearch: (arg: string) => void;
}

const SearchContactsForm: React.FC<Props> = ({ onSearch }) => {
  const [searchFormInput, setSearchFormInput] = useState('');

  const handleSubmit = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    onSearch(searchFormInput);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup className="float-start">
          <Form.Control
            placeholder="Search contacts"
            aria-label="Search contacts"
            value={searchFormInput}
            onChange={(event) => setSearchFormInput(event.target.value)}
          />
          <Button variant="outline-primary" size="lg" onClick={handleSubmit}>
            Search
          </Button>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

export default SearchContactsForm;
