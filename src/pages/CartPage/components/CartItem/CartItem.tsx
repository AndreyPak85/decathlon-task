import { FC } from 'react';
import { Row, Col } from 'react-bootstrap';

interface ICardItemProps {
  image: string;
  title: string;
  description: string;
  count: number;
  price: number;
}

export const CartItem: FC<ICardItemProps> = ({
  image,
  title,
  description,
  count,
  price,
}) => {
  return (
    <>
      <div className='cart-item'>
        <Row className='d-flex justify-content-between align-items-center'>
          <Col lg={1} md={1} sm={1} xl={1}>
            <img className='cart-item__img' src={image} alt='' />
          </Col>
          <Col lg={6} md={6} sm={6} xl={6}>
            <div className='cart-item__text'>
              <div className='cart-item__text__title font-weight-bold'>
                {title}
              </div>
              <div className='cart-item__text__descr'>{description}</div>
            </div>
          </Col>
          <Col lg={2} md={2} sm={2} xl={2}>
            <div className='cart-item__count text-center'>
              <button>-</button>
              <span className='cart-item__count__value'>{count}</span>
              <button>+</button>
            </div>
          </Col>
          <Col lg={1} md={1} sm={1} xl={1}>
            <div className='cart-item__price text-center'>{price}</div>
          </Col>
          <Col lg={2} md={2} sm={2} xl={2}>
            <div className='cart-item__price text-center'>{price * count}</div>
          </Col>
        </Row>
      </div>
    </>
  );
};
