import { routeNames } from '../config';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import TutorDetail from '../pages/TutorDetail/TutorDetail';
import Tutors from '../pages/Tutors/Tutors';
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
    {
      path: routeNames.ResetPassword,
      element: <ResetPassword />,
    },
    {
      path: routeNames.FindTutor,
      element: <Tutors />,
    },
    {
      path: routeNames.TutorDetail,
      element: <TutorDetail />,
    },
  ],
  private: [
    {
      path: routeNames.UserProfile,
      element: <UserProfile />,
    },
  ],
};
