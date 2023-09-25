//assets
import logomark from "../assets/logomark.svg";

const Nav = ({ username }) => {
  return (
    <nav>
      <img src={logomark} alt="" height={30} />
    </nav>
  );
};

export default Nav;
