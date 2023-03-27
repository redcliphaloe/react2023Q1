import React from 'react';
import { FormsFormData } from '../../specs/interfaces';
import './style.css';

interface FormsFormProps {
  sendData: (data: FormsFormData) => void;
  prevId: number;
}

interface FormsFormState {
  photo: string;
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

  constructor(props: FormsFormProps) {
    super(props);
    this.photo = React.createRef();
    this.name = React.createRef();
    this.male = React.createRef();
    this.female = React.createRef();
    this.birthDate = React.createRef();
    this.continent = React.createRef();
    this.agreement = React.createRef();
    this.state = { photo: this.#defaultPhoto };
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      id: this.props.prevId + 1,
      photo: this.#defaultPhoto,
      name: this.name.current?.value || '',
      sex: this.male.current?.checked
        ? this.male.current?.value
        : this.female.current?.checked
        ? this.female.current?.value
        : '',
      birhDate: this.birthDate.current?.value || '',
      continent: this.continent.current?.value || '',
    };

    if (this.photo.current?.files?.length && this.photo.current?.files[0].type.includes('image/')) {
      data.photo = URL.createObjectURL(this.photo.current?.files[0]);
    }

    this.props.sendData(data);
  };

  handleFileChange = () => {
    if (this.photo.current?.files?.length && this.photo.current?.files[0].type.includes('image/')) {
      this.setState({ photo: URL.createObjectURL(this.photo.current?.files[0]) });
    } else {
      this.setState({ photo: this.#defaultPhoto });
    }
  };

  render() {
    return (
      <form className="forms-form" onSubmit={this.handleSubmit}>
        <div className="forms-form-photo">
          <div
            className="forms-form-photo__img"
            style={{
              backgroundImage: this.photo.current?.files?.length
                ? `url(${this.state.photo})`
                : `url(${this.state.photo})`,
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
        </div>
        <div className="forms-form-inputs">
          <label htmlFor="name">
            Name:
            <input type="text" id="name" ref={this.name} />
          </label>
          <div>
            <label htmlFor="male">Sex: </label>
            <input type="radio" name="sex" id="male" value="Male" ref={this.male} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="sex" id="female" value="Female" ref={this.female} />
            <label htmlFor="female">Female</label>
          </div>
          <label htmlFor="birthDate">
            Date of birth:
            <input type="date" id="birthDate" ref={this.birthDate} />
          </label>
          <label htmlFor="continent">
            Continent:
            <select id="continent" ref={this.continent}>
              <option hidden>Select from list</option>
              <option value="Eurasia">Eurasia</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Africa">Africa</option>
              <option value="Australia">Australia</option>
              <option value="Antarctica">Antarctica</option>
            </select>
          </label>
        </div>
        <label htmlFor="agreement">
          <input type="checkbox" id="agreement" ref={this.agreement} /> I consent to my personal
          data
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormsForm;
