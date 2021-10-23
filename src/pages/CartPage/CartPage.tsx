import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { Header } from '../../components/Header';
import { CartItem } from './components/CartItem';
//actions
import { plusCount, minusCount } from '../../store/Products/productsSlice';

export const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootStateOrAny) => state.products.cart);

  return (
    <>
      <Header />
      <div className='cart-page'>
        <div className='cart-items__wrapper container'>
          {cartItems.map((item: any) => (
            <CartItem
              id={item.product.id}
              image={item.product.image}
              title={item.product.title}
              description={item.product.description}
              count={item.count}
              price={item.product.price}
              onPlus={(id: number) => dispatch(plusCount(id))}
              onMinus={(id: number) => dispatch(minusCount(id))}
            />
          ))}
        </div>
      </div>
    </>
  );
};
