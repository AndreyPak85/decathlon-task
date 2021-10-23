import { useSelector, RootStateOrAny } from 'react-redux';
import { Header } from '../../components/Header';
import { CartItem } from './components/CartItem';

export const CartPage = () => {
  const cartItems = useSelector((state: RootStateOrAny) => state.products.cart);
  return (
    <>
      <Header />
      <div className='cart-page'>
        <div className='cart-items__wrapper container'>
          {cartItems.map((item: any) => (
            <CartItem
              image={item.product.image}
              title={item.product.title}
              description={item.product.description}
              count={item.count}
              price={item.product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};
