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
                {/* <section>
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        
                        <div className="py-12 md:py-20">
                            
                            <div className="pb-12 text-center md:pb-20">
                                <h1
                                    className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                                    data-aos="fade-up"
                                >
                                    Our Services
                                </h1>
                                <div className="mx-auto max-w-3xl">
                                    <p
                                        className="mb-8 text-lg text-yellow-200/65 md:text-xl"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        We provide services for ocean monitoring
                                        and inspection, subsea power solutions &
                                        maritime communications.
                                    </p>
                                </div>
                            </div>
                            <ModalVideo
                                thumb="/images/digital-marketing.webp"
                                thumbWidth={1104}
                                thumbHeight={576}
                                thumbAlt="Modal video thumbnail"
                                video={``}
                                videoWidth={1920}
                                videoHeight={1080}
                            />
                        </div>
                    </div>
                </section> */}
                <section>
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <div className="pb-12 md:pb-20">
                            {/* Section header */}
                            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
                                <div className="pb-12 text-center md:pb-20">
                                    <h1
                                        className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                                        data-aos="fade-up"
                                    >
                                        Our Services
                                    </h1>
                                    <div className="mx-auto max-w-3xl">
                                        <p
                                            className="mb-8 text-lg text-yellow-200/65 md:text-xl"
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
                            <div className="bg-gradient-to-br from-blue-950 via-green-300 to-green-600 text-white">
                                <div className="flex flex-col">
                                    
                                    <div className="w-full  bg-blue-800/20 p-6">
                                        <ul className="flex flex-wrap items-center justify-between gap-4 max-sm:flex-col">
                                            <li
                                                className="text-yellow-400/80 hover:text-yellow-600 cursor-pointer max-lg:basis-1/3"
                                                onClick={scrollToTheElement(
                                                    "digital-strategy"
                                                )}
                                            >
                                                <div to="/services/digital-marketing">
                                                    Ocean Monitoring System
                                                </div>
                                            </li>
                                            <li
                                                className="text-yellow-400/80 hover:text-yellow-600 cursor-pointer max-lg:basis-1/3"
                                                onClick={scrollToTheElement}
                                            >
                                                <div to="/services/content-and-engg">
                                                    SubSea Applications
                                                </div>
                                            </li>
                                            <li
                                                className="text-yellow-400/80 hover:text-yellow-600 cursor-pointer max-lg:basis-1/3"
                                                onClick={scrollToTheElement}
                                            >
                                                <div to="/services/media-planning">
                                                    Marine Communications
                                                </div>
                                            </li>
                                            <li
                                                className="text-yellow-400/80 hover:text-yellow-600 cursor-pointer max-lg:basis-1/3"
                                                onClick={scrollToTheElement}
                                            >
                                                <div to="/services/digital-transformation">
                                                    Ocean Inspection System
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="w-full p-8"
                                    id="digital-marketing"
                                >
                                    {/* Header Section */}
                                    {/* <div className="bg-blue-800/10 p-8 rounded-lg shadow-lg mb-8">
                                        <h2 className="text-yellow-400 text-lg uppercase tracking-wide">
                                            01 Digital Strategy
                                        </h2>
                                        <h1 className="text-4xl font-bold mt-4 text-yellow-500/80">
                                            The Roadmap to Your Growth
                                        </h1>
                                        <p className="text-lg text-yellow-100/90 mt-4">
                                            Our data-powered insights and
                                            growth-centric strategies are
                                            designed to expand your customer
                                            lifetime value and increase revenue
                                            in the long run.
                                        </p>
                                    </div> */}

                                    {/* Scope Section */}
                                    <div className=" bg-gray-800/50 p-8 rounded-lg shadow-lg">
                                        {/* <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                                            Scope
                                        </h3> */}
                                        <div className="grid grid-cols-1">
                                            {/* Market and Buyer Analysis */}
                                            <article>
                                                <svg
                                                    className="mb-3 fill-yellow-500"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                >
                                                    <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                                                    <path
                                                        fillOpacity=".48"
                                                        d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                                                    />
                                                </svg>
                                                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-yellow-400">
                                                    Communication & Creative
                                                    Strategy
                                                </h3>
                                                <p className="text-yellow-200/90">
                                                    We employ omni-channel
                                                    creative communication
                                                    strategy & growth strategy
                                                    defined by success metrics
                                                    <br />
                                                    Our creative strategies map
                                                    specific messaging for your
                                                    defined audiences and create
                                                    exceptional experiences in
                                                    the process, all with
                                                    pre-determined success
                                                    metrics in hand.
                                                </p>
                                            </article>

                                            {/* Marketing Strategy */}
                                            <article>
                                                <svg
                                                    className="mb-3 fill-yellow-500"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                >
                                                    <path
                                                        fillOpacity=".48"
                                                        d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z"
                                                    />
                                                    <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
                                                </svg>
                                                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-yellow-400">
                                                    Marketing Strategy
                                                </h3>
                                                <p className="text-yellow-200/90">
                                                    We build actionable and
                                                    technology-driven contextual
                                                    strategies around your
                                                    audience
                                                    <br />
                                                    In a series of short
                                                    experiments that allow us to
                                                    go live faster and see
                                                    what’s working faster, then
                                                    scaling it to achieve
                                                    long-term results. This
                                                    blueprint attracts, engages
                                                    and converts your target
                                                    audience into leads, and
                                                    also goes forward to nurture
                                                    and retain them for
                                                    long-term value.
                                                </p>
                                            </article>

                                            {/* Communication & Creative Strategy */}
                                            <article>
                                                <svg
                                                    className="mb-3 fill-yellow-500"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                >
                                                    <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                                                    <path
                                                        fillOpacity=".48"
                                                        d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                                                    />
                                                </svg>
                                                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-yellow-400">
                                                    Market and Buyer Analysis
                                                </h3>
                                                <p className="text-yellow-200/90">
                                                    With in-depth research &
                                                    user segmentation supported
                                                    by online behaviour analysis
                                                    <br />
                                                    our growth marketing
                                                    strategy defines your
                                                    consumer’s behaviour and
                                                    path to purchase. This
                                                    analysis helps us nurture
                                                    your customers across the
                                                    marketing funnel.
                                                </p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                        className="mb-5"
                                    >
                                        <a
                                            className="cursor-pointer btn group mb-4 w-full bg-gradient-to-t from-yellow-600/40 to-yellow-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                                            onClick={() => {
                                                document
                                                    .getElementById(
                                                        "enquire-now"
                                                    )
                                                    ?.click();
                                            }}
                                        >
                                            <span className="relative inline-flex items-center mb">
                                                Learn More
                                                <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                                                    -&gt;
                                                </span>
                                            </span>
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
