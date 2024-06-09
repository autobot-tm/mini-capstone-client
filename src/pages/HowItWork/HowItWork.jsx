import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../hoc/Layout";
import { routeNames } from "../../config";
import './styles.scss';
import HeaderSection from "../HowItWork/HeaderSection/HeaderSection";
import AboutSection from "../HowItWork/AboutSection/AboutSection";
import WorkSection from "../HowItWork/WorkSection/WorkSection";
const HowItWork = () => {
    const navigate = useNavigate();
  const onLogin = () => {
    navigate(routeNames.Login);
  };
    return(
        <Layout>
            <HeaderSection onLogin={onLogin} />
            <AboutSection/>
            <WorkSection/>
        </Layout>
    );
};

export default HowItWork;