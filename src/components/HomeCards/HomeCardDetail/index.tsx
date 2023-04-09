import { MouseEvent } from 'react';
import './style.css';

interface HomeCardDetailPropsType {
  detailClick: () => void;
}

function HomeCardDetail(props: HomeCardDetailPropsType) {
  const { detailClick } = props;
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
        <button className="home-card-detail__close-btn" onClick={handleCloseBtnClick}>
          Close
        </button>
      </div>
    </div>
  );
}

export default HomeCardDetail;
