import { NavLink, useLocation } from "react-router-dom";

export default function NavLinkWithQuery({ to, ...props }) {
  const location = useLocation();
  console.log(location);

  return <NavLink to={to + location.search} {...props} />;
}
