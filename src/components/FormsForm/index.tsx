import { ChangeEvent, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormsFormData } from '../../specs/interfaces';
import { InvalidMessages } from '../../specs/enums';
import InvalidMessage from './InvalidMessage';
import ModalMessage from './ModalMessage';
import './style.css';

interface FormsFormPropsType {
  sendData: (data: FormsFormData) => void;
  prevId: number;
}

interface OtherFormElements {
  agreement: boolean;
}

enum MandatoryType {
  photo,
  name,
  sex,
  birthDate,
  continent,
  agreement,
}

function FormsForm(props: FormsFormPropsType) {
  const defaultPhoto = '/src/assets/img/no-image.png';
  const hasPhoto = useRef(false);
  const { sendData, prevId } = props;
  const [photo, setPhoto] = useState(defaultPhoto);
  const [submitMessageVisible, setSubmitMessageVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormsFormData & OtherFormElements>();

  const isCorrectValue = (
    type: Exclude<MandatoryType, MandatoryType.photo | MandatoryType.agreement>,
    value: string
  ) => {
    switch (type) {
      case MandatoryType.name:
        return value !== '' && value !== value.toLowerCase();
      case MandatoryType.sex:
        return !!value;
      case MandatoryType.birthDate:
        return value !== '';
      case MandatoryType.continent:
        return value !== '';
      default:
        return false;
    }
  };

  const isChecked = (type: Extract<MandatoryType, MandatoryType.agreement>, value: boolean) => {
    switch (type) {
      case MandatoryType.agreement:
        return !!value;
      default:
        return false;
    }
  };

  const clearForm = () => {
    setPhoto(defaultPhoto);
    hasPhoto.current = false;
    reset();
  };

  const onSubmit = (submitedData: FormsFormData) => {
    const data = {
      id: prevId + 1,
      photo: photo,
      name: submitedData.name,
      sex: submitedData.sex,
      birthDate: submitedData.birthDate,
      continent: submitedData.continent,
    };
    setSubmitMessageVisible(true);
    setTimeout(() => {
      sendData(data);
      clearForm();
      setSubmitMessageVisible(false);
    }, 1000);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files?.length) {
      setPhoto(URL.createObjectURL(files[0]));
      hasPhoto.current = true;
    }
  };

  return (
    <form className="forms-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="forms-form-photo">
        <div
          className="forms-form-photo__img"
          style={{
            backgroundImage: `url(${photo})`,
          }}
        ></div>
        <label className="forms-form-photo__lbl" htmlFor="file">
          Upload photo
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="file"
            style={{ display: 'none' }}
            {...register('photo', {
              onChange: (e) => handleFileChange(e),
              validate: () => hasPhoto.current,
            })}
          />
        </label>
        <InvalidMessage
          {...{
            visible: !!errors.photo,
            message: InvalidMessages.photo,
          }}
        />
      </div>
      <div className="forms-form-inputs">
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            {...register('name', {
              validate: (value) => isCorrectValue(MandatoryType.name, value),
            })}
          />
        </label>
        <InvalidMessage {...{ visible: !!errors.name, message: InvalidMessages.name }} />
        <div>
          <label htmlFor="male">Sex: </label>
          <input
            type="radio"
            id="male"
            value="Male"
            {...register('sex', {
              validate: (value) => isCorrectValue(MandatoryType.sex, value),
            })}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            value="Female"
            {...register('sex', {
              validate: (value) => isCorrectValue(MandatoryType.sex, value),
            })}
          />
          <label htmlFor="female">Female</label>
        </div>
        <InvalidMessage {...{ visible: !!errors.sex, message: InvalidMessages.sex }} />
        <label htmlFor="birthDate">
          Date of birth:
          <input
            type="date"
            id="birthDate"
            {...register('birthDate', {
              validate: (value) => isCorrectValue(MandatoryType.birthDate, value),
            })}
          />
        </label>
        <InvalidMessage {...{ visible: !!errors.birthDate, message: InvalidMessages.birthDate }} />
        <label htmlFor="continent">
          Continent:
          <select
            id="continent"
            {...register('continent', {
              validate: (value) => isCorrectValue(MandatoryType.continent, value),
            })}
          >
            <option value="" hidden></option>
            <option value="Eurasia">Eurasia</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Africa">Africa</option>
            <option value="Australia">Australia</option>
            <option value="Antarctica">Antarctica</option>
          </select>
        </label>
        <InvalidMessage {...{ visible: !!errors.continent, message: InvalidMessages.continent }} />
      </div>
      <div>
        <label htmlFor="agreement">
          <input
            type="checkbox"
            id="agreement"
            {...register('agreement', {
              validate: (value) => isChecked(MandatoryType.agreement, value),
            })}
          />{' '}
          I consent to my personal data
        </label>
        <InvalidMessage {...{ visible: !!errors.agreement, message: InvalidMessages.agreement }} />
      </div>
      <input type="submit" value="Submit" />
      <ModalMessage {...{ visible: submitMessageVisible, message: 'The data has been saved' }} />
    </form>
  );
}

export default FormsForm;
