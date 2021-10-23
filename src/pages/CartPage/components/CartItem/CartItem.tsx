import { FC } from 'react';
import { Row, Col } from 'react-bootstrap';

interface ICardItemProps {
  id: number;
  image: string;
  title: string;
  description: string;
  count: number;
  price: number;
  onPlus: (id: number) => void;
  onMinus: (id: number) => void;
}

export const CartItem: FC<ICardItemProps> = ({
  id,
  image,
  title,
  description,
  count,
  price,
  onPlus,
  onMinus,
}) => {
  return (
    <>
      <div className='cart-item'>
        <Row className='h-100 overflow-hidden d-flex justify-content-between align-items-center'>
          <Col lg={1} md={1} sm={1} xl={1}>
            <img className='cart-item__img w-100' src={image} alt='' />
          </Col>
          <Col className=' h-100 overflow-hidden' lg={6} md={6} sm={6} xl={6}>
            <div className='cart-item__text w-100 h-100 overflow-hidden '>
              <div className='cart-item__text__title font-weight-bold'>
                {title}
              </div>
              <div className='cart-item__text__descr h-100 '>{description}</div>
            </div>
          </Col>
          <Col lg={2} md={2} sm={2} xl={2}>
            <div className='cart-item__count text-center'>
              <button onClick={() => onMinus(id)}>-</button>
              <span className='cart-item__count__value'>{count}</span>
              <button onClick={() => onPlus(id)}>+</button>
            </div>
          </Col>
          <Col lg={1} md={1} sm={1} xl={1}>
            <div className='cart-item__price text-center'>{price}</div>
          </Col>
          <Col lg={2} md={2} sm={2} xl={2}>
            <div className='cart-item__price text-center'>
              {(price * count).toFixed(2)}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
