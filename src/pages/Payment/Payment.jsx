import { useEffect, useState } from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '../../config/route-name.config.js';
import { VNPayTransactionStatus } from '../../constants/vnpay.constant.js';
import { Spin } from 'antd';
import ResultSuccessfully from './components/ResultViewSuccessful/ResultViewSuccessful.jsx';
import ResultFailed from './components/ResultFailed/ResultFailed.jsx';
// import { updateWalletService } from '../../services/apis/payment.service.js';
// import { useSelector } from 'react-redux';

const PaymentView = ({ handleUrlChange }) => {
  useEffect(() => {
    handleUrlChange({ url: window.location.href });
  }, [handleUrlChange]);
  return (
    <div id="container-spin">
      <Spin size="large" />
    </div>
  );
};

export const Payment = () => {
  const [step, setStep] = useState('payment');
  // const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const [money, setMoney] = useState(null);

  // const updateWallet = async ({ money }) => {
  //   try {
  //     await updateWalletService({ money, tutorId: user?.id });
  //     console.log('Calling updateWallet API');
  //   } catch (error) {
  //     console.log('ERROR AT PAYMENT', error);
  //   }
  // };
  console.log('money', money);

  const handleUrlChange = urlState => {
    if (urlState && urlState.url) {
      const url = urlState.url;
      const matchStatus = url.match(/vnp_TransactionStatus=([^&]*)/);
      const matchMoney = url.match(/vnp_Amount=([^&]*)/);
      const money_update = matchMoney ? matchMoney[1] : null;
      const vnp_TransactionStatus = matchStatus ? matchStatus[1] : null;
      if (vnp_TransactionStatus && step === 'payment') {
        if (vnp_TransactionStatus === VNPayTransactionStatus.Success) {
          setStep('success');
          const moneySlice = money_update.slice(0, -2);
          setMoney(moneySlice);
        } else {
          setStep('error');
        }
      }
    }
  };

  console.log('Payment component rendered');
  const leadingToHomepage = () => {
    navigate(routeNames.Home);
  };

  const leadingToUserProfile = () => {
    navigate(routeNames.UserProfile);
  };

  const renderStep = () => {
    switch (step) {
      case 'payment':
        return <PaymentView handleUrlChange={handleUrlChange} />;
      case 'success':
        return (
          <ResultSuccessfully
            leadingToHomepage={leadingToHomepage}
            leadingToUserProfile={leadingToUserProfile}
            money={money}
          />
        );
      case 'error':
        return <ResultFailed leadingToHomepage={leadingToHomepage} leadingToUserProfile={leadingToUserProfile} />;
      default:
        return null;
    }
  };

  return renderStep();
};

export default Payment;
