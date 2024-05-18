import { Col, Row } from 'antd';
import './styles.scss';
import LOGIN from '../../assets/images/Login.gif';
import { useState } from 'react';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';
import { Headline } from '../../components/Typography/Headline/Headline';
import { SubHeading } from '../../components/Typography/SubHeading';

const Login = () => {
  const [status, setStatus] = useState(1);
  const onLogin = () => {
    setStatus(1);
  };
  const onRegister = () => {
    setStatus(2);
  };
  return (
    <>
      <Row id="login-page">
        <Col xs={12} className="bg-image">
          <img src={LOGIN} alt="" />
        </Col>
        <Col xs={12} className="bg-login">
          <div className="login-form">
            <Headline size={360} classNames="primary-color" strong>
              Welcome!
            </Headline>
            <SubHeading strong style={{ marginBottom: 20 }}>
              It is really nice to see you
            </SubHeading>
            {status === 1 ? <LoginForm onRegister={onRegister} /> : <RegisterForm onLogin={onLogin} />}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;
