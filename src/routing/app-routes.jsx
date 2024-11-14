import { Route, Routes } from "react-router-dom";
import AboutUsPage from "../app/components/company/about-us";

import ServicesPage from "../app/components/IT solutions/services/services";

import ContactUsPage from "../app/components/contactus/contact-us";
import Home1Page from "../app/components/home/index";

import LandingPage from "../app/landingPage/LandingPage";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home1Page />} />
        <Route path="/index" element={<Home1Page />} />

        <Route path="/about-us" element={<AboutUsPage />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route
          path="/web-development"
          element={<LandingPage page={"web-development"} />}
        />
        <Route
          path="/app-development"
          element={<LandingPage page={"app-development"} />}
        />
      </Routes>
    </>
  );
}

export default AppRoutes;
