import { useState } from 'react';
import { HomeCardData } from '../../../specs/interfaces';
import './style.css';
import HomeCardDetail from '../HomeCardDetail';

function HomeCard(props: HomeCardData) {
  const { urls } = props;
  const { regular } = urls;
  const [showDetail, setShowDetail] = useState(false);
  const handleClick = () => {
    setShowDetail(true);
    document.body.style.overflowY = 'hidden';
  };
  const homeCardDetail = {
    data: props,
    detailClick: () => {
      document.body.style.overflowY = 'visible';
      setShowDetail(false);
    },
  };

  return (
    <div className="home-card" onClick={handleClick}>
      <div
        className="home-card__img"
        style={{
          backgroundImage: `url(${regular})`,
        }}
      />
      {showDetail && <HomeCardDetail {...homeCardDetail} />}
    </div>
  );
}

export default HomeCard;
