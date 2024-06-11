import { useNavigate } from "react-router-dom";
import Layout from "../../hoc/Layout";
import { routeNames } from "../../config";
import './styles.scss';
import AboutSection from "../HowItWork/components/AboutSection/AboutSection";
const HowItWork = () => {
  const navigate = useNavigate();
  const onAboutUs = () => {
    navigate(routeNames.AboutUs);
  };
  return (
    <Layout>
       <AboutSection onAboutUs={onAboutUs} />
    </Layout>
  );
};

export default HowItWork;