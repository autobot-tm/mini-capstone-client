import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { signInWithGoogle } from '../../store/features/auth.slice';

const GoogleSignInButton = () => {
  const dispatch = useDispatch();

  const onSuccess = userInfo => {
    const { credential } = userInfo;
    if (!credential) return;
    dispatch(signInWithGoogle({ idToken: credential }));
  };
  return <GoogleLogin onSuccess={onSuccess} type="icon" shape="circle" useOneTap />;
};

export default GoogleSignInButton;
