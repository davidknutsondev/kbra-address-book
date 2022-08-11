import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { toast } from 'react-toastify';
import { faker } from '@faker-js/faker';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FormValues, schema } from './schema';
import { useCreateContactMutation } from '../../../services/contacts';

interface Props {
  closeModal: () => void;
  onRefetch: () => void;
}

const CreateContactForm: React.FC<Props> = ({ closeModal, onRefetch }) => {
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

      if (payload != null && payload !== undefined) {
        toast.success('Create contact');
        setSubmitting(false);
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
              <FloatingLabel label="First Name" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="firstName"
                  name="firstName"
                  value={values.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={touched.firstName && !!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <FloatingLabel label="Last Name" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="lastName"
                  name="lastName"
                  value={values.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={touched.lastName && !!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <FloatingLabel label="Street Address" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="address"
                  name="address"
                  value={values.address}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={touched.address && !!errors.address}
                />
                <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <FloatingLabel label="Email" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="email"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={touched.email && !!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <FloatingLabel label="Phone" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="phone"
                  name="phone"
                  value={values.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={touched.phone && !!errors.phone}
                />
                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
              </FloatingLabel>
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
