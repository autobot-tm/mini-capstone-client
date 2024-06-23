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
  const { success, erorr } = useSelector(state => state.user);

  useEffect(() => {
    if (!token) {
      dispatch(authActions.initState());
    }
    if (token) {
      dispatch(userActions.getUserProfile());
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (success) {
      dispatch(userActions.clearSuccess());
    }
  }, [success, dispatch]);

  useEffect(() => {
    if (erorr) {
      dispatch(userActions.clearError());
    }
  }, [erorr, dispatch]);

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
