import { MouseEvent } from 'react';
import './style.css';
import { HomeCardData } from '../../../specs/interfaces';

interface HomeCardDetailPropsType {
  data: HomeCardData;
  detailClick: () => void;
}

function HomeCardDetail(props: HomeCardDetailPropsType) {
  const { data, detailClick } = props;
  const { description, alt_description, urls, likes, user } = data;
  const { regular } = urls;
  const { name } = user;
  const handleWrapperClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    detailClick();
  };
  const handleCardClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  const handleCloseBtnClick = () => {
    detailClick();
  };

  return (
    <div className="home-card-detail__wrapper" onClick={handleWrapperClick}>
      <div className="home-card-detail__card" onClick={handleCardClick}>
        <h3>{description}</h3>
        <div
          className="home-card-detail__img"
          style={{
            backgroundImage: `url(${regular})`,
          }}
        />
        <p>Description: {alt_description}</p>
        <p>Likes: {likes}</p>
        <p>Author: {name}</p>
        <button className="home-card-detail__close-btn" onClick={handleCloseBtnClick}>
          Close
        </button>
      </div>
    </div>
  );
}

export default HomeCardDetail;
