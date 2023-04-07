import './style.css';

interface HomeSearchButtonPropsType {
  className: string;
  onClick: () => void;
}

function HomeSearchButton(props: HomeSearchButtonPropsType) {
  const { className, onClick } = props;

  return <button className={className} onClick={onClick}></button>;
}

export default HomeSearchButton;
