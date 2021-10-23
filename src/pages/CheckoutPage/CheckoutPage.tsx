import { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Header } from '../../components/Header';

export const CheckoutPage = () => {
  const [delivery, setDelivery] = useState('');

  return (
    <>
      <Header />
      <div className='checkout-page'>
        <div className='container'>
          <Form className='checkout-page__form'>
            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Name' />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Surname</Form.Label>
                <Form.Control type='text' placeholder='Surname' />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Phone</Form.Label>
                <Form.Control type='number' placeholder='phone' />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label>Delivery</Form.Label>
                <Form.Control
                  as='select'
                  value={delivery}
                  onChange={(e) => setDelivery(e.target.value)}
                >
                  <option></option>
                  <option>самовывоз</option>
                  <option>доставка</option>
                  <option>постамат</option>
                </Form.Control>
              </Form.Group>
            </Row>
            <Row>
              {delivery === 'доставка' ? (
                <Form.Group>
                  <Form.Label>Delivery</Form.Label>
                  <Form.Control as='select'>
                    <option>yandex</option>
                    <option>glovo</option>
                    <option>wolt</option>
                  </Form.Control>
                </Form.Group>
              ) : null}
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};
