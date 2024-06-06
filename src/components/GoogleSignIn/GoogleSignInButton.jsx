import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { signInWithGoogle } from '../../store/features/auth.slice';

const GoogleSignInButton = () => {
  const dispatch = useDispatch();

  const onSuccess = userInfo => {
    const { credential } = userInfo;
    console.log('userInfo', userInfo);
    if (!credential) return;
    dispatch(signInWithGoogle({ token: credential }));
  };

  const onFailure = error => {
    console.error('Google Sign-In failed:', error);
  };

  return <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} type="icon" shape="circle" useOneTap />;
};

export default GoogleSignInButton;
