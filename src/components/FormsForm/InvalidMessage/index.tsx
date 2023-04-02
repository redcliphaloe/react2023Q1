import { InvalidMessages } from '../../../specs/enums';
import './style.css';

interface InvalidMessagePropsType {
  visible: boolean;
  message: InvalidMessages;
}

function InvalidMessage(props: InvalidMessagePropsType) {
  const { visible, message } = props;

  return <p className="invalid-message">{visible ? message : ''}</p>;
}

export default InvalidMessage;
