import { Col, Row } from 'antd';
import './styles.scss';
import LOGIN from '../../assets/images/Login.gif';
import { useEffect, useState } from 'react';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';
import { Headline } from '../../components/Typography/Headline/Headline';
import { SubHeading } from '../../components/Typography/SubHeading';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error, success } = useSelector(state => state.auth);
  const token = user?.token;
  const [status, setStatus] = useState(1);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);
  const onLogin = () => {
    setStatus(1);
  };
  const onRegister = () => {
    setStatus(2);
  };
  const onForgotPassword = () => {
    setStatus(3);
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
            {status === 1 ? (
              <LoginForm
                onRegister={onRegister}
                dispatch={dispatch}
                loading={loading}
                success={success}
                error={error}
                onForgotPassword={onForgotPassword}
              />
            ) : status === 2 ? (
              <RegisterForm
                onLogin={onLogin}
                dispatch={dispatch}
                loading={loading}
                error={error}
                success={success}
                onForgotPassword={onForgotPassword}
              />
            ) : (
              <>
                <ForgotPassword dispatch={dispatch} onLogin={onLogin} onRegister={onRegister} />
              </>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;
