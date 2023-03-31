import './style.css';

interface ModalMessageProps {
  visible: boolean;
  message: string;
}

function ModalMessage(props: ModalMessageProps) {
  return props.visible ? (
    <div className="forms-form-modal-message">
      <p>{props.message}</p>
    </div>
  ) : (
    <></>
  );
}

export default ModalMessage;
