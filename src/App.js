import "./App.css";

// import { Inter } from "next/font/google";
// import localFont from "next/font/local";

import React, { useEffect } from "react";
import Header from "./components/ui/header";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import Footer from "./components/ui/footer";
import Home from "./pages/home";
import Services from "./pages/services/Services";
import PrivacyPolicy from "./pages/privacy-policy/Privacy_Policy";
import Contact from "./pages/contact/Contact";
import Aos from "aos";
import { ToastContainer } from "react-toastify";
import Team from "./pages/Team/team";
import PortfolioPage from "./pages/Portfolio/portfolio";
import NewsPartnersPage from "./pages/newsAndPartners/newsAndPartners";
import IndiaEnergyWeek from "./pages/IWE/componet2";
import AboutUs from "./pages/about/About";
import OceanMonitoringSystem from "./pages/services/oceanMonitoringSystem/oceanMonitoringSystem";
import SubSeaApllications from "./pages/services/subSeaApplications/subSeaApplications";
import MarineCommunications from "./pages/services/marineCommunications/marineCommunications";
import OceanInspectionSystem from "./pages/services/oceanInspectionSystem/oceanInspectionSystem";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
    useEffect(() => {
        Aos.init({
            once: true,
            // disable: "phone",
            duration: 600,
            easing: "ease-out-sine",
        });
    }, []);
    return (
        <Router>
            <div
                className={`font-inter text-base text-gray-200 antialiased bg-gradient-to-r from-cyan-500 to-blue-500 w-full`} // TO be fixed: ${inter.variable} ${nacelle.variable}
            >
                <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
                    <ScrollToTop />
                    <Header />
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/solutions" Component={Services}>
                            <Route
                                path="/solutions/"
                                Component={OceanMonitoringSystem}
                            />
                            <Route
                                path="/solutions/ocean-monitoring"
                                Component={OceanMonitoringSystem}
                            />
                            <Route
                                path="/solutions/sub-sea-applications"
                                Component={SubSeaApllications}
                            />
                            <Route
                                path="/solutions/marine-communication"
                                Component={MarineCommunications}
                            />
                            <Route
                                path="/solutions/ocean-inspection"
                                Component={OceanInspectionSystem}
                            />
                        </Route>
                        <Route path="/portfolio" Component={PortfolioPage} />
                        <Route path="/contact" Component={Contact} />
                        <Route path="/team" Component={Team} />
                        <Route path="/iew-2025" Component={IndiaEnergyWeek} />

                        <Route
                            path="/news-and-partners"
                            Component={NewsPartnersPage}
                        />
                        <Route
                            path="/privacy-policy"
                            Component={PrivacyPolicy}
                        />
                        <Route path="/about" Component={AboutUs} />
                    </Routes>
                    <ToastContainer />

                    <Footer />
                </div>
            </div>
        </Router>
    );
}
