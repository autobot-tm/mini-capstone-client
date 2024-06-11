import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase.config';
import GoogleButton from 'react-google-button';
import { useDispatch } from 'react-redux';
import { useAuthSlice } from '../../store/features/auth.slice';

const GoogleSignInButton = () => {
  const dispatch = useDispatch();
  const { actions: authActions } = useAuthSlice();
  const loginGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const token = result.user.accessToken;
    const user = result.user;
    console.log('user', user);
    if (token) {
      dispatch(authActions.signInWithGoogle({ token }));
    }
  };
  return <GoogleButton onClick={loginGoogle} />;
};

export default GoogleSignInButton;
