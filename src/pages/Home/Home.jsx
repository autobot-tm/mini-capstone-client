import { useNavigate } from 'react-router-dom';
import Layout from '../../hoc/Layout';
import AboutSection from './components/AboutSection/AboutSection';
import HeaderSection from './components/HeaderSection/HeaderSection';
import { routeNames } from '../../config';
import WorkSection from './components/WorkSection/WorkSection';
import InstructorSection from './components/InstructorSection/InstructorSection';
import { useDispatch } from 'react-redux';
import { openTermOfServiceModal } from '../../store/features/modal.slice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const handleConfirmTutor = () => {
    dispatch(openTermOfServiceModal());
  };
  return (
    <Layout>
      <HeaderSection onLogin={onLogin} handleConfirmTutor={handleConfirmTutor} />
      <AboutSection onAboutUs={onAboutUs} />
      <WorkSection onHowItWork={onHowItWork} />
      <InstructorSection onFindTutor={onFindTutor} />
    </Layout>
  );
};

export default Home;
