import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase.config';
import GoogleButton from 'react-google-button';
import { useDispatch } from 'react-redux';
import { signInWithGoogle } from '../../store/features/auth.slice';

const GoogleSignInButton = () => {
  const dispatch = useDispatch();
  const loginGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const token = result.user.accessToken;
    const user = result.user;
    console.log('user', user);
    if (token) {
      dispatch(signInWithGoogle({ token }));
    }
  };
  return <GoogleButton onClick={loginGoogle} />;
};

export default GoogleSignInButton;
