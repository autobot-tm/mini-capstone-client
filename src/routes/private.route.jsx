import { Outlet, Navigate } from 'react-router-dom';
import { routeNames } from '../config/route-name.config';
import { selectUser } from '../store/features/auth.slice';
import { useSelector } from 'react-redux';

export function PrivateRoute() {
  const user = useSelector(selectUser);
  const token = user?.token;
  return token ? <Outlet /> : <Navigate to={routeNames.Home} />;
}
