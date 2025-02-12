import { Link } from "react-router-dom";

export interface MenuItemInterface {
  route: string;
  name: string;
}

const MenuItem = ({
  item,
  changeSection,
  currentLocation,
}: {
  item: MenuItemInterface;
  changeSection: Function;
  currentLocation: string;
}) => {
  return (
    <li onClick={() => changeSection()}>
      <Link
        className={currentLocation === item.route ? "active" : ""}
        to={item.route}
      >
        {item.name}
      </Link>
    </li>
  );
};

export default MenuItem;
