import style from './TopTabNavigation.module.scss';

const NavItem = ({ title, active, onClick }) => {
  return (
    <div
      className={[style.navItem, active && style.navItem__active].join(' ')}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

const TopTabNavigation = ({ data, activeTab, onTabChange }) => {
  return (
    <div className={style.container}>
      {data.map((v, i) => (
        <NavItem
          key={i}
          title={v}
          active={activeTab === i}
          onClick={() => onTabChange(i)}
        />
      ))}
    </div>
  );
};

export default TopTabNavigation;
