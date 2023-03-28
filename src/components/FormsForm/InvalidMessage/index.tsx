import React from 'react';
import { InvalidMessages } from '../../../specs/enums';
import './style.css';

class InvalidMessage extends React.Component<{ visible: boolean; message: InvalidMessages }> {
  render() {
    return <p className="invalid-message">{this.props.visible ? this.props.message : ' '}</p>;
  }
}

export default InvalidMessage;
