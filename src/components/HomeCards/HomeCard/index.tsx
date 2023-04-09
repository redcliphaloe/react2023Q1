import { HomeCardAltData } from '../../../specs/interfaces';
import './style.css';

interface HomeCardData {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: string;
}

function HomeCard(props: HomeCardAltData) {
  const { id, server, secret, title } = props;

  return (
    <div className="home-card">
      <h3 className="home-card__name">{title}</h3>
      <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="photo" />
    </div>
  );
}

export default HomeCard;
