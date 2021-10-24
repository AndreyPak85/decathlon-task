import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav className='nav'>
        <div className='container d-flex align-items-center'>
          <NavLink
            className='nav__item'
            exact
            to='/'
            activeClassName='active-link'
          >
            Main
          </NavLink>
          <NavLink
            className='nav__item'
            exact
            to='/cart'
            activeClassName='active-link'
          >
            Cart
          </NavLink>
        </div>
      </nav>
    </>
  );
};
