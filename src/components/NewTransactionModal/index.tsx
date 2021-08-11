import Modal from 'react-modal';

import { Container } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose, ...props }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      {...props}
    >
      <Container>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
        />
        <input
          type="number"
          placeholder="Valor"
        />
        <input
          placeholder="Categoria"
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}