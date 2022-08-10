import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { toast } from 'react-toastify';
import { faker } from '@faker-js/faker';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FormValues, schema } from './schema';
import { useCreateContactMutation } from '../../../services/contacts';

interface Props {
  closeModal: () => void;
  onRefetch: () => void;
}

const CreateContactForm: React.FC<Props> = ({ closeModal, onRefetch }) => {
  // const formRef = useRef<FormikValues>();
  // const formRef = useRef<FormikProps<FormikValues>>(null);
  const [createContact, { isLoading }] = useCreateContactMutation();

  const initialValues = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
  };

  const handleSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    try {
      setSubmitting(true);
      const payload = await createContact({
        firstName: values.firstName,
        lastName: values.lastName,
        avatar: faker.internet.avatar(),
        address: values.address,
        email: values.email,
        phone: values.phone,
      }).unwrap();

      console.log('PAYLOAD', payload);

      // if (payload) {
      if (false) {
        toast.success('Added new contact');
        // onSubmitFinish();
        setSubmitting(true);
        closeModal();
        onRefetch();
      } else {
        setSubmitting(false);
        throw new Error('It was not possible to create contact');
      }
    } catch (error) {
      toast.error((error as Error).message);
    }
  };
  return (
    <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues}>
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        isSubmitting,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group>
              <InputGroup hasValidation>
                <FloatingLabel label="First Name" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.firstName}
                  />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <InputGroup hasValidation>
                <FloatingLabel label="Last Name" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isInvalid={!!errors.lastName}
                  />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <InputGroup hasValidation>
                <FloatingLabel label="Street Address" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    isInvalid={!!errors.address}
                  />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <InputGroup hasValidation>
                <FloatingLabel label="Email" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <InputGroup hasValidation>
                <FloatingLabel label="Phone" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                  />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="float-end">
            <Col>
              <Button
                size="lg"
                className="me-2"
                variant="secondary"
                disabled={isLoading || isSubmitting}
                onClick={closeModal}
              >
                Close
              </Button>
              <Button size="lg" type="submit" disabled={isLoading || isSubmitting}>
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default CreateContactForm;
