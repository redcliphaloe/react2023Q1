import React from 'react';
import { FormsFormData } from '../../specs/interfaces';
import { InvalidMessages } from '../../specs/enums';
import InvalidMessage from './InvalidMessage';
import './style.css';

interface FormsFormProps {
  sendData: (data: FormsFormData) => void;
  prevId: number;
}

interface FormsFormState {
  photo: string;
  isCorrectValues: boolean;
}

enum MandatoryType {
  photo,
  name,
  sex,
  birthDate,
  continent,
  agreement,
}

class FormsForm extends React.Component<FormsFormProps, FormsFormState> {
  #defaultPhoto = '/src/assets/img/no-image.png';
  photo: React.RefObject<HTMLInputElement>;
  name: React.RefObject<HTMLInputElement>;
  male: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  birthDate: React.RefObject<HTMLInputElement>;
  continent: React.RefObject<HTMLSelectElement>;
  agreement: React.RefObject<HTMLInputElement>;
  isPhotoCorrect = true;
  isNameCorrect = true;
  isSexCorrect = true;
  isBirthDateCorrect = true;
  isContinentCorrect = true;
  isAgreementCorrect = true;

  constructor(props: FormsFormProps) {
    super(props);
    this.photo = React.createRef();
    this.name = React.createRef();
    this.male = React.createRef();
    this.female = React.createRef();
    this.birthDate = React.createRef();
    this.continent = React.createRef();
    this.agreement = React.createRef();
    this.state = { photo: this.#defaultPhoto, isCorrectValues: true };
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    this.isPhotoCorrect = this.isCorrectValue(MandatoryType.photo, this.state.photo);
    this.isNameCorrect = this.isCorrectValue(MandatoryType.name, this.name.current?.value || '');
    this.isSexCorrect = this.isCorrectValue(
      MandatoryType.sex,
      this.male.current?.checked || this.female.current?.checked || false
    );
    this.isBirthDateCorrect = this.isCorrectValue(
      MandatoryType.birthDate,
      this.birthDate.current?.value || ''
    );
    this.isContinentCorrect = this.isCorrectValue(
      MandatoryType.continent,
      this.continent.current?.value || ''
    );
    this.isAgreementCorrect = this.isCorrectValue(
      MandatoryType.agreement,
      this.agreement.current?.checked || false
    );
    if (
      !(
        this.isPhotoCorrect &&
        this.isNameCorrect &&
        this.isSexCorrect &&
        this.isBirthDateCorrect &&
        this.isContinentCorrect &&
        this.isAgreementCorrect
      )
    ) {
      this.setState({ isCorrectValues: false });
      return;
    }

    const data = {
      id: this.props.prevId + 1,
      photo: this.#defaultPhoto,
      name: this.name.current?.value || '',
      sex: this.male.current?.checked
        ? this.male.current?.value
        : this.female.current?.checked
        ? this.female.current?.value
        : '',
      birthDate: this.birthDate.current?.value || '',
      continent: this.continent.current?.value || '',
    };

    if (this.photo.current?.files?.length && this.photo.current?.files[0].type.includes('image/')) {
      data.photo = URL.createObjectURL(this.photo.current?.files[0]);
    }

    this.props.sendData(data);

    this.name.current!.value = '';
    this.male.current!.checked = false;
    this.female.current!.checked = false;
    this.birthDate.current!.value = '';
    this.continent.current!.value = '';
    this.agreement.current!.checked = false;

    this.setState({ photo: this.#defaultPhoto, isCorrectValues: false });
  };

  handleFileChange = () => {
    if (this.photo.current?.files?.length && this.photo.current?.files[0].type.includes('image/')) {
      this.setState({ photo: URL.createObjectURL(this.photo.current?.files[0]) });
    } else {
      this.setState({ photo: this.#defaultPhoto });
    }
  };

  isCorrectValue = (type: MandatoryType, value: string | boolean) => {
    switch (type) {
      case MandatoryType.photo:
        return !value.toString().includes(this.#defaultPhoto);
      case MandatoryType.name:
        return value !== '' && value.toString()[0] !== value.toString()[0].toLowerCase();
      case MandatoryType.sex:
        return !!value;
      case MandatoryType.birthDate:
        return value !== '';
      case MandatoryType.continent:
        return value !== '';
      case MandatoryType.agreement:
        return !!value;
      default:
        return false;
    }
  };

  render() {
    return (
      <form className="forms-form" onSubmit={this.handleSubmit}>
        <div className="forms-form-photo">
          <div
            className="forms-form-photo__img"
            style={{
              backgroundImage: `url(${this.state.photo})`,
            }}
          ></div>
          <label className="forms-form-photo__lbl" htmlFor="file">
            Upload photo
            <input
              type="file"
              id="file"
              style={{ display: 'none' }}
              ref={this.photo}
              onChange={this.handleFileChange}
            />
          </label>
          <InvalidMessage visible={!this.isPhotoCorrect} message={InvalidMessages.photo} />
        </div>
        <div className="forms-form-inputs">
          <label htmlFor="name">
            Name:
            <input type="text" id="name" ref={this.name} />
          </label>
          <InvalidMessage visible={!this.isNameCorrect} message={InvalidMessages.name} />
          <div>
            <label htmlFor="male">Sex: </label>
            <input type="radio" name="sex" id="male" value="Male" ref={this.male} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="sex" id="female" value="Female" ref={this.female} />
            <label htmlFor="female">Female</label>
          </div>
          <InvalidMessage visible={!this.isSexCorrect} message={InvalidMessages.sex} />
          <label htmlFor="birthDate">
            Date of birth:
            <input type="date" id="birthDate" ref={this.birthDate} />
          </label>
          <InvalidMessage visible={!this.isBirthDateCorrect} message={InvalidMessages.birthDate} />
          <label htmlFor="continent">
            Continent:
            <select id="continent" ref={this.continent}>
              <option value="" hidden></option>
              <option value="Eurasia">Eurasia</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Africa">Africa</option>
              <option value="Australia">Australia</option>
              <option value="Antarctica">Antarctica</option>
            </select>
          </label>
          <InvalidMessage visible={!this.isContinentCorrect} message={InvalidMessages.continent} />
        </div>
        <div>
          <label htmlFor="agreement">
            <input type="checkbox" id="agreement" ref={this.agreement} /> I consent to my personal
            data
          </label>
          <InvalidMessage visible={!this.isAgreementCorrect} message={InvalidMessages.agreement} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormsForm;
