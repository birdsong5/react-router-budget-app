// rrd imports
import { Form, NavLink } from "react-router-dom";

//assets
import logomark from "../assets/logomark.svg";

const Nav = ({ username }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logomark} alt="" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {username && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
