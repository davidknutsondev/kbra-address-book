import Modal from 'react-bootstrap/Modal';
import CreateContactForm from '../forms/CreateContactForm';

interface Props {
  show: boolean;
  closeModal: () => void;
  onRefetch: () => void;
}

const CreateContactModal: React.FC<Props> = ({ show, closeModal, onRefetch }) => {
  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateContactForm closeModal={closeModal} onRefetch={onRefetch} />
      </Modal.Body>
    </Modal>
  );
};

export default CreateContactModal;
