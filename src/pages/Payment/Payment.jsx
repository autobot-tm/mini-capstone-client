import { useEffect, useState } from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import SpinLoading from '../../components/SpinLoading/SpinLoading';
import ResultSuccessfully from './components/ResultSucessfully/ResultSuccessfully';
import ResultFailed from './components/ResultFailed/ResultFailed.jsx';
import { routeNames } from '../../config/route-name.config.js';
import { VNPayTransactionStatus } from '../../constants/vnpay.constant.js';

const PaymentView = ({ handleUrlChange }) => {
  useEffect(() => {
    handleUrlChange({ url: window.location.href });
  }, [handleUrlChange]);
  return (
    <div className="container">
      <SpinLoading />
    </div>
  );
};

export const Payment = () => {
  const [step, setStep] = useState('payment');
  const navigate = useNavigate();

  const handleUrlChange = urlState => {
    if (urlState && urlState.url) {
      const url = urlState.url;
      const match = url.match(/vnp_TransactionStatus=([^&]*)/);
      const vnp_TransactionStatus = match ? match[1] : null;
      if (vnp_TransactionStatus) {
        if (vnp_TransactionStatus === VNPayTransactionStatus.Success) {
          setStep('success');
        } else {
          setStep('error');
        }
      }
    }
  };

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
        return <ResultSuccessfully leadingToHomepage={leadingToHomepage} leadingToUserProfile={leadingToUserProfile} />;
      case 'error':
        return <ResultFailed leadingToHomepage={leadingToHomepage} leadingToUserProfile={leadingToUserProfile} />;
      default:
        return null;
    }
  };

  return renderStep();
};

export default Payment;
