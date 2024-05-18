import { routeNames } from '../config';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import UserProfile from '../pages/UserProfile/UserProfile';

export const routePaths = {
  public: [
    {
      path: routeNames.Home,
      element: <Home />,
    },
    {
      path: routeNames.Login,
      element: <Login />,
    },
  ],
  private: [
    {
      path: routeNames.UserProfile,
      element: <UserProfile />,
    },
  ],
};
