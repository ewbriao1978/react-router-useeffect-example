import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img src="https://reactjs.org/logo-og.png" alt="React Logo" width={50} height={50} />
          </li>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs page</Link>
          </li>
          <li>
            <Link to="/contact">Contact page</Link>
          </li>
        </ul>
      </nav>
      <h2> Tela escolhida abaixo: </h2> 
      <br/>
      <Outlet />
    </>
  )
};

export default Layout;
