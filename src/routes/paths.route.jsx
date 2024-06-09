import { routeNames } from '../config';
import ContactUs from '../pages/ContactUs/ContactUs';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import TutorDetail from '../pages/TutorDetail/TutorDetail';
import Tutors from '../pages/Tutors/Tutors';
import UserProfile from '../pages/UserProfile/UserProfile';
import HowItWork from '../pages/HowItWork/HowItWork';

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
      path: routeNames.FindTutor,
      element: <Tutors />,
    },
    {
      path: routeNames.TutorDetail,
      element: <TutorDetail />,
    },
    {
    path:  routeNames.HowItWork,
    element: <HowItWork/>,
    },
    {
      path: routeNames.ContactUs,
      element: <ContactUs />,
    },
  ],
  private: [
    {
      path: routeNames.UserProfile,
      element: <UserProfile />,
    },
  ],
};
