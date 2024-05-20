import { useNavigate } from 'react-router-dom';
import Layout from '../../hoc/Layout';
import AboutSection from './components/AboutSection/AboutSection';
import HeaderSection from './components/HeaderSection/HeaderSection';
import { routeNames } from '../../config';
import WorkSection from './components/WorkSection/WorkSection';
import InstructorSection from './components/InstructorSection/InstructorSection';

const Home = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate(routeNames.Login);
  };
  const onAboutUs = () => {
    navigate(routeNames.AboutUs);
  };
  const onHowItWork = () => {
    navigate(routeNames.HowItWork);
  };
  const onFindTutor = () => {
    navigate(routeNames.FindTutor);
  };
  return (
    <Layout>
      <HeaderSection onLogin={onLogin} />
      <AboutSection onAboutUs={onAboutUs} />
      <WorkSection onHowItWork={onHowItWork} />
      <InstructorSection onFindTutor={onFindTutor} />
    </Layout>
  );
};

export default Home;
