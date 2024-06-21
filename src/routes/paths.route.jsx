import { routeNames } from '../config';
import ContactUs from '../pages/ContactUs/ContactUs';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import TutorDetail from '../pages/TutorDetail/TutorDetail';
import Tutors from '../pages/Tutors/Tutors';
import UserProfile from '../pages/UserProfile/UserProfile';
import HowItWork from '../pages/HowItWork/HowItWork';
import RegulationAccount from '../pages/Regulations/RegulationAccount/RegulationAccount';
import ServiceInfor from '../pages/Regulations/ServiceInfo/ServiceInfo';
import RegulationsFind from '../pages/Regulations/RegulationsFind/RegulationsFind';
import Privacy from '../pages/Regulations/Privacy/Privacy';
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
     path: routeNames.HowItWork,
     element: <HowItWork/>,
    },
    {
      path: routeNames.ContactUs,
      element: <ContactUs />,
    },
    {
      path: routeNames.ServiceInfo,
      element: <ServiceInfor />,

    },
    {
      path: routeNames.RegulationAccount,
      element: <RegulationAccount />,
    },
    {
      path: routeNames.RegulationsFind,
      element: <RegulationsFind />,
    },
    {
      path: routeNames.Privacy,
      element: <Privacy />,
    },

  ],
  private: [
    {
      path: routeNames.UserProfile,
      element: <UserProfile />,
    },
    {
      path: routeNames.ResetPassword,
      element: <ResetPassword />,
    },
  ],
};
