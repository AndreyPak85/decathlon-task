import { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { CardColumns } from 'react-bootstrap';
//components
import { Header } from '../../components/Header';
import { ProductCard } from '../../components/ProductCard';
import { Loader } from '../../components/Loader';
//api thunks
import { asyncGetProductsThunk } from '../../store/Products/productsThunk';
//actions
import { addToCart } from '../../store/Products/productsSlice';
import { is } from 'immer/dist/internal';

export const MainPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: RootStateOrAny) => state.products.isLoading
  );
  const products = useSelector(
    (state: RootStateOrAny) => state.products.products
  );

  useEffect(() => {
    dispatch(asyncGetProductsThunk());
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <Header />
      <div className='main-page'>
        <div className='container'>
          <CardColumns>
            {products.map((product: any) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                onAddToCart={(id: number) => dispatch(addToCart(product))}
              />
            ))}
          </CardColumns>
        </div>
      </div>
    </>
  );
};
