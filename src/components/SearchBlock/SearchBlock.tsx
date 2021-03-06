import { useSelector, RootStateOrAny } from 'react-redux';
import { useHistory } from 'react-router';
import { icons } from '../../utils/icons';

export const SearchBlock = () => {
  const history = useHistory();
  const cart = useSelector((state: RootStateOrAny) => state.products.cart);
  return (
    <>
      <div className='header__search-block container d-flex justify-content-between align-items-center'>
        <div className='header__logo'>
          <img src={icons.logo} alt='' />
        </div>
        <div className='header__search'>
          <input className='header__search__input' type='text' />
        </div>
        <div className='header__cart'>
          <img src={icons.cart} alt='' onClick={() => history.push('/cart')} />
          <div className='header__cart__count'>{cart.length}</div>
        </div>
      </div>
    </>
  );
};
