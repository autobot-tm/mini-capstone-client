import { Col, Row } from 'antd';
import './styles.scss';
import LOGIN from '../../assets/images/Login.gif';
import { useState } from 'react';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';

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
            <span style={{ color: '#6A307D', fontSize: 45, fontWeight: 'bold' }}>Welcome!</span>
            <span style={{ margin: 10, marginBottom: 30, fontSize: 30, fontWeight: 'bold' }}>
              It is really nice to see you
            </span>
            {status === 1 ? <LoginForm onRegister={onRegister} /> : <RegisterForm onLogin={onLogin} />}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;
