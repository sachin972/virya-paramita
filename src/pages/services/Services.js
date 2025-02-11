import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import ModalVideo from "../../components/modal-video";
import {
    Outlet,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
// import Link from "next/link";
import { Link } from "react-router-dom";

// import DigitalMarketing from "@/public/images/digital-marketing.webp";

export default function Services({ children }) {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 600,
            easing: "ease-out-sine",
        });
    });

    const scrollToTheElement = (id) => {
        const targetElement = document.getElementById(id);
        // .scrollIntoView({ behavior: "smooth" });
        // targetElement.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <main className="relative flex grow flex-col p-4 sm:p-6">
                <section>
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <div className="pb-12 md:pb-20">
                            {/* Section header */}
                            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
                                <div className="pb-12 text-center md:pb-20">
                                    <h1
                                        className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-blue-900 md:text-5xl"
                                        data-aos="fade-up"
                                    >
                                        Our Services
                                    </h1>
                                    <div className="mx-auto max-w-3xl">
                                        <p
                                            className="mb-8 text-lg text-blue-900/65 md:text-xl"
                                            data-aos="fade-up"
                                            data-aos-delay={200}
                                        >
                                            We provide services for ocean
                                            monitoring and inspection, subsea
                                            power solutions & maritime
                                            communications.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-950 to-cyan-600 text-white">
                                <div className="flex flex-col">
                                    <div className="w-full  bg-blue-800/20 p-6">
                                        <ul className="flex flex-wrap items-center justify-between gap-4 max-sm:flex-col">
                                            <li
                                                className="text-white hover:text-blue-600 cursor-pointer max-lg:basis-1/3"
                                                onClick={scrollToTheElement(
                                                    "digital-strategy"
                                                )}
                                            >
                                                <Link to="/services/ocean-monitoring">
                                                    Ocean Monitoring System
                                                </Link>
                                            </li>
                                            <li
                                                className="text-white hover:text-blue-600 cursor-pointer max-lg:basis-1/3"
                                                onClick={scrollToTheElement}
                                            >
                                                <Link to="/services/sub-sea-applications">
                                                    SubSea Applications
                                                </Link>
                                            </li>
                                            <li
                                                className="text-white hover:text-blue-600 cursor-pointer max-lg:basis-1/3"
                                                onClick={scrollToTheElement}
                                            >
                                                <Link to="/services/marine-communication">
                                                    Marine Communications
                                                </Link>
                                            </li>
                                            <li
                                                className="text-white hover:text-blue-600 cursor-pointer max-lg:basis-1/3"
                                                onClick={scrollToTheElement}
                                            >
                                                <Link to="/services/ocean-inspection">
                                                    Ocean Inspection System
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Outlet />
                                </div>
                                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                        className="mb-5"
                                    >
                                        <a className="cursor-pointer btn group mb-4 w-full bg-gradient-to-t from-blue-600/40 to-blue-900 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto">
                                            <Link to={"/contact"}>
                                                <span className="relative inline-flex items-center mb">
                                                    Learn More
                                                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                                                        -&gt;
                                                    </span>
                                                </span>
                                            </Link>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
