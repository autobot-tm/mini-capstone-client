import { Route, Routes } from 'react-router-dom';
import './App.css';
import { routePaths } from './routes/paths.route';
import { PrivateRoute } from './routes/private.route';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthSlice } from './store/features/auth.slice';

function App() {
  const dispatch = useDispatch();
  const { actions: authActions } = useAuthSlice();
  const { token } = useSelector(state => state.auth);

  useEffect(() => {
    if (!token) {
      dispatch(authActions.initState());
    }
  }, [token, dispatch]);

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
