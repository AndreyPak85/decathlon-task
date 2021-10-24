import { FC } from 'react';
import { Card } from 'react-bootstrap';

interface IProductCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  onAddToCart: (id: number) => void;
}

export const ProductCard: FC<IProductCardProps> = ({
  id,
  title,
  description,
  image,
  price,
  onAddToCart,
}) => {
  return (
    <>
      <Card className='product-card'>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className='d-flex align-items-center justify-content-between'>
          {price + '$'}{' '}
          <button className='btn-add-cart' onClick={() => onAddToCart(id)}>
            Add to cart
          </button>
        </Card.Footer>
      </Card>
    </>
  );
};
