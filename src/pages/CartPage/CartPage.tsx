import { useEffect, useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
//components
import { Header } from '../../components/Header';
import { CartItem } from './components/CartItem';
//actions
import { plusCount, minusCount } from '../../store/Products/productsSlice';

export const CartPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector((state: RootStateOrAny) => state.products.cart);

  const [sum, setSum] = useState(0);
  useEffect(() => {
    if (cartItems.length > 0) {
      let sumArray = [];
      cartItems.forEach((element: any) => {
        sumArray.push(element.product.price * element.count);
      });
      setSum(
        sumArray.reduce((total, amount) => {
          return total + amount;
        })
      );
    }
  }, [cartItems]);

  return (
    <>
      <Header />
      <div className='cart-page'>
        <div className='cart-items__wrapper container'>
          {cartItems.length > 0 ? (
            <>
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
              <div className='bb-1px'></div>
              <div className='cart-page__total'>{sum.toFixed(2)}</div>
              <div className='cart-page__checkout'>
                <button onClick={() => history.push('/checkout')}>
                  Checkout
                </button>
              </div>
            </>
          ) : (
            <span>Ваша корзина пуста</span>
          )}
        </div>
      </div>
    </>
  );
};
