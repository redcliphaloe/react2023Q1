import './style.css';

interface HomeSearchButtonPropsType {
  className: string;
  onClick: () => void;
}

const HomeSearchButton = (props: HomeSearchButtonPropsType) => {
  const { className, onClick } = props;

  return <button className={className} onClick={onClick}></button>;
};

export default HomeSearchButton;
