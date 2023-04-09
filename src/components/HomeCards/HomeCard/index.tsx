import { useState } from 'react';
import { HomeCardAltData } from '../../../specs/interfaces';
import './style.css';
import HomeCardDetail from '../HomeCardDetail';

function HomeCard(props: HomeCardAltData) {
  const { id, server, secret, title } = props;
  const [showDetail, setShowDetail] = useState(false);
  const handleClick = () => {
    setShowDetail(true);
    document.body.style.overflowY = 'hidden';
  };

  return (
    <div className="home-card" onClick={handleClick}>
      <h3 className="home-card__name">{title}</h3>
      <div
        className="home-card__img"
        style={{
          backgroundImage: `url(https://live.staticflickr.com/${server}/${id}_${secret}.jpg)`,
        }}
      />
      {showDetail && (
        <HomeCardDetail
          {...{
            detailClick: () => {
              document.body.style.overflowY = 'visible';
              setShowDetail(false);
            },
          }}
        />
      )}
    </div>
  );
}

export default HomeCard;
