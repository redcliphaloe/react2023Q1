import './style.css';

interface ModalMessagePropsType {
  visible: boolean;
  message: string;
}

function ModalMessage(props: ModalMessagePropsType) {
  const { visible, message } = props;

  return visible ? (
    <div className="forms-form-modal-message">
      <p>{message}</p>
    </div>
  ) : (
    <></>
  );
}

export default ModalMessage;
