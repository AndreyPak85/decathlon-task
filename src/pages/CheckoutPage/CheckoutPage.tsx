import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Header } from '../../components/Header';

export const CheckoutPage = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [delivery, setDelivery] = useState('');
  const [deliveryOperator, setDeliveryOperator] = useState('');
  const [payment, setPayment] = useState<any[]>([]);

  const handleSubmit = () => {
    console.log(`name ${name}`);
    console.log(`surname ${surname}`);
    console.log(`phone ${phone}`);
    console.log(`delivery ${delivery}`);
    console.log(`delivery operator ${deliveryOperator}`);
    console.log(`payment ${payment}`);
    setName('');
    setSurname('');
    setPhone('');
    setDelivery('');
    setDeliveryOperator('');
    setPayment([]);
  };

  return (
    <>
      <Header />
      <div className='checkout-page'>
        <div className='container'>
          <Form className='checkout-page__form' onSubmit={handleSubmit}>
            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Surname'
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
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
                  <option>??????????????????</option>
                  <option>????????????????</option>
                  <option>????????????????</option>
                </Form.Control>
              </Form.Group>
            </Row>
            <Row>
              {delivery === '????????????????' ? (
                <Form.Group>
                  <Form.Label>Delivery operator</Form.Label>
                  <Form.Control
                    as='select'
                    value={deliveryOperator}
                    onChange={(e) => setDeliveryOperator(e.target.value)}
                  >
                    <option>yandex</option>
                    <option>glovo</option>
                    <option>wolt</option>
                  </Form.Control>
                </Form.Group>
              ) : null}
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Payment</Form.Label>
                <Form.Control
                  as='select'
                  value={payment}
                  multiple
                  onChange={(e: any) =>
                    setPayment(
                      [].slice
                        .call(e.target.selectedOptions)
                        .map((item: any) => item.value)
                    )
                  }
                >
                  <option value='sber'> sber</option>
                  <option value='kaspi'>????????????????</option>
                  <option value='qiwi'>????????????????</option>
                </Form.Control>
              </Form.Group>
            </Row>
            <Button onClick={handleSubmit}>Submit</Button>
          </Form>
        </div>
      </div>
    </>
  );
};
