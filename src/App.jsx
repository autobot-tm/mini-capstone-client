import { Route, Routes } from 'react-router-dom';
import './App.css';
import { routePaths } from './routes/paths.route';
import { PrivateRoute } from './routes/private.route';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthSlice } from './store/features/auth.slice';
import { useUserSlice } from './store/features/user.slice';

function App() {
  const dispatch = useDispatch();
  const { actions: authActions } = useAuthSlice();
  const { actions: userActions } = useUserSlice();
  const { token } = useSelector(state => state.auth);
  const { success, error } = useSelector(state => state.user);

  const bubbleIcon = document.querySelector('#kmw-bubble-icon');
  useEffect(() => {
    if (!token) {
      dispatch(authActions.initState());
    }
    if (token) {
      dispatch(userActions.getUserProfile());
    }
    if (bubbleIcon) {
      bubbleIcon.click();
    } else {
      console.error('Element with ID #kmw-bubble-icon not found');
    }
  }, [token, dispatch, bubbleIcon]);

  useEffect(() => {
    if (success) {
      dispatch(userActions.clearSuccess());
    }
  }, [success, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(userActions.clearError());
    }
  }, [error, dispatch]);

  return (
    <>
      <Routes>
        {routePaths.public.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route element={<PrivateRoute />}>
          {routePaths.private.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
