import { FormEventHandler } from "react";
import Modal from "./Modal";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  value: string;
  setValue: (value: string) => boolean | void;
  variant?: 'add' | 'edit';
}

const UpsertTaskModal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, value, setValue, handleSubmit, variant = 'add' }) => {
  return (
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className='font-bold text-lg'>{variant === 'add' ? 'Add new task' : 'Edit task'}</h3>
          <div className='modal-action'>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full'
              data-testid={`todo-text-${variant}`}
            />
            <button type='submit' className='btn' data-testid={`save-${variant}-todo`}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
  );
};

export default UpsertTaskModal;
