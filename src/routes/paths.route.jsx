import { routeNames } from '../config'
import Home from '../pages/Home/Home'
import UserProfile from '../pages/UserProfile/UserProfile'

export const routePaths = {
  public: [
    {
      path: routeNames.Home,
      element: <Home />,
    },
  ],
  private: [
    {
      path: routeNames.UserProfile,
      element: <UserProfile />,
    },
  ],
}
