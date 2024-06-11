import { Outlet, Navigate } from 'react-router-dom';
import { routeNames } from '../config/route-name.config';
import { useSelector } from 'react-redux';

export function PrivateRoute() {
  const user = useSelector(state => state.auth);
  let token = user?.token;
  if (!token) {
    const urlParams = new URLSearchParams(window.location.search);
    token = urlParams.get('token');
  }
  const isValidToken = token => {
    if (!token) return false;
    //token structure chia 3 part
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    return true;
  };
  return isValidToken(token) ? <Outlet /> : <Navigate to={routeNames.Home} />;
}
