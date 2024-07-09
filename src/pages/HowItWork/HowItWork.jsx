import { useNavigate } from "react-router-dom";
import Layout from "../../hoc/Layout";
import { routeNames } from "../../config";
import './styles.scss';
import AboutSection from "../HowItWork/components/AboutSection/AboutSection";
import WorkSection from "./components/WorkSection/WorkSection";
import Community from "./components/CommunitySection/Community";
const HowItWork = () => {
  const navigate = useNavigate();
  const onAboutUs = () => {
    navigate(routeNames.AboutUs);
  };
  const onLogin = () => {
    navigate(routeNames.Login);
  };
  return (
    <Layout>
       <AboutSection onAboutUs={onAboutUs} />
       <WorkSection/>
      <Community onLogin={onLogin}/>

    </Layout>
  );
};

export default HowItWork;