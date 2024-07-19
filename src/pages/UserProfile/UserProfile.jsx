import './styles.scss';
import { Avatar, Card, Col, Divider, Menu, Modal, Row } from 'antd';
import Layout from '../../hoc/Layout';
import { Caption } from '../../components/Typography/Caption/Caption';
import ServiceForm from './components/ServiceForm/ServiceForm';
import { SubHeading } from '../../components/Typography/SubHeading/SubHeading';
import ProfileForm from './components/ProfileForm/ProfileForm';
import { useEffect, useState } from 'react';
import ChangePasswordForm from './components/ChangePasswordForm/ChangePasswordForm';
import { useDispatch, useSelector } from 'react-redux';
import COIN from '../../assets/icons/streamline--dollar-coin-solid.svg';
import ADD from '../../assets/icons/flat-color-icons--plus.svg';
import { getWalletTutorService, requestRechargeService } from '../../services/apis/payment.service';
import NumericInput from '../../components/NumericInput/NumbericInput';
import { formatCustomCurrency } from '../../utils/number-seperator';
import ServiceManagement from './components/ServiceManagement/ServiceManagement';

const UserProfile = () => {
  const user = useSelector(state => state.user.user);
  const role = user?.role;
  const idUser = user?.id;
  const dispatch = useDispatch();
  const [selectedKey, setSelectedKey] = useState('1');
  const [amount, setAmount] = useState(null);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [wallet, setWallet] = useState(0);
  const items = [
    {
      key: '1',
      label: 'Edit Profile',
    },
    {
      key: '2',
      label: 'Change Password',
    },
    role === 'TUTOR' && {
      key: '3',
      label: 'Service',
    },
    {
      key: '4',
      label: 'In Progress',
    },
  ];
  const handleMenuClick = e => {
    setSelectedKey(e.key);
  };
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = async () => {
    setConfirmLoading(true);
    try {
      if (!amount) return;
      const response_url = await requestRechargeService({ amount });
      window.location.href = response_url;
    } catch (error) {
      console.log(error);
    } finally {
      setOpen(false);
      setConfirmLoading(false);
      setAmount(null);
    }
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const getWalletDetail = async () => {
    try {
      const response = await getWalletTutorService({ id: idUser });
      setWallet(response?.money);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (role === 'TUTOR') {
      getWalletDetail();
    }
  }, []);

  return (
    <Layout>
      <div className="user-profile-page">
        <div className="container">
          <Row justify="center" gutter={[24, 24]}>
            <Col xs={24} lg={6}>
              <Card>
                <span className="user-profile-left">
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" className="user-avatar" />
                  <SubHeading strong>{user?.fullname}</SubHeading>
                  <Caption>{user?.email}</Caption>
                  {role === 'TUTOR' && (
                    <div id="wallet">
                      <span>
                        <img src={COIN} alt="dollar" />
                        <p>{formatCustomCurrency(wallet)} </p>
                        <img src={ADD} alt="plus" className="plus-icon" onClick={showModal} />
                      </span>
                    </div>
                  )}
                  <Divider dashed />
                  <Menu
                    style={{
                      width: '100%',
                    }}
                    defaultSelectedKeys={['1']}
                    mode="vertical"
                    items={items}
                    onClick={handleMenuClick}
                  />
                </span>
              </Card>
            </Col>
            <Col xs={24} lg={18}>
              {selectedKey === '1' && <ProfileForm />}
              {selectedKey === '2' && <ChangePasswordForm dispatch={dispatch} />}
              {selectedKey === '3' && role === 'TUTOR' && <ServiceForm getWalletDetail={getWalletDetail} />}
              {selectedKey === '4' && <ServiceManagement id={idUser} role={role} />}
            </Col>
          </Row>
        </div>
      </div>
      <Modal
        title="Please fill in the amount you want to deposit"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={400}
        centered>
        <NumericInput value={amount} onChange={setAmount} />
      </Modal>
    </Layout>
  );
};

export default UserProfile;
