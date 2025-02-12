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
import Spotlight from "../../components/spotlight";

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
                                        Our Solutions
                                    </h1>
                                    <div className="mx-auto max-w-3xl">
                                        <p
                                            className="mb-8 text-lg text-blue-900/65 md:text-xl"
                                            data-aos="fade-up"
                                            data-aos-delay={200}
                                        >
                                            We provide solutions for ocean
                                            monitoring and inspection, subsea
                                            power solutions & maritime
                                            communications.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white">
                                <div className="flex flex-col">
                                    <section>
                                        <div className="mx-auto max-w-6xl px-4 sm:px-6">
                                            <div className="pb-12 md:pb-20">
                                                {/* Section header */}
                                                <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
                                                    <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-black after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-black">
                                                        <span className="inline-flex bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                                                            Sindhuja I
                                                        </span>
                                                    </div>
                                                    <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-black md:text-4xl">
                                                        Get to use resources to
                                                        gett better results
                                                    </h2>
                                                    <p className="text-lg text-black">
                                                        Setting up power plants
                                                        by leveraging the
                                                        potential of sea waves
                                                        to generate green energy
                                                    </p>
                                                </div>
                                                {/* Spotlight items */}
                                                <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
                                                    {/* Card 1 */}
                                                    <a
                                                        className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                                                        href="#0"
                                                    >
                                                        <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                                            {/* Arrow */}
                                                            <div
                                                                className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-neutral-100 opacity-0 transition-opacity group-hover/card:opacity-100"
                                                                aria-hidden="true"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={9}
                                                                    height={8}
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        fill="#F4F4F5"
                                                                        d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            {/* Image */}
                                                            <img
                                                                className="inline-flex"
                                                                src="/images/workflow-01.png"
                                                                width={350}
                                                                height={288}
                                                                alt="Workflow 01"
                                                            />
                                                            {/* Content */}
                                                            <div className="p-6">
                                                                <div className="mb-3">
                                                                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                                                                        <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
                                                                            Minimal Raw Material & Land Requirement
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <p className="text-yellow-100">
                                                                    This
                                                                    technology
                                                                    lowers the
                                                                    cost of
                                                                    operations
                                                                    greatly
                                                                    because it
                                                                    requires
                                                                    minimal land
                                                                    and no raw
                                                                    materials of
                                                                    any type.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    {/* Card 2 */}
                                                    <a
                                                        className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                                                        href="#0"
                                                    >
                                                        <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-emerald-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-emerald-950/50 after:via-emerald-950/25 after:to-emerald-950/50">
                                                            {/* Arrow */}
                                                            <div
                                                                className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                                                                aria-hidden="true"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={9}
                                                                    height={8}
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        fill="#F4F4F5"
                                                                        d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            {/* Image */}
                                                            <img
                                                                className="inline-flex"
                                                                src="/images/workflow-02.png"
                                                                width={350}
                                                                height={288}
                                                                alt="Workflow 02"
                                                            />
                                                            {/* Content */}
                                                            <div className="p-6">
                                                                <div className="mb-3">
                                                                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                                                                        <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
                                                                            Green
                                                                            Energy
                                                                            &
                                                                            Carbon
                                                                            Credits
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <p className="text-yellow-100">
                                                                    The
                                                                    ever-increasing
                                                                    demand for
                                                                    green energy
                                                                    and net
                                                                    carbon
                                                                    neutrality
                                                                    creates a
                                                                    large
                                                                    potential
                                                                    market.
                                                                    Additionally,
                                                                    this will
                                                                    provide
                                                                    carbon
                                                                    cresits for
                                                                    sale.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    {/* Card 3 */}
                                                    <a
                                                        className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                                                        href="#0"
                                                    >
                                                        <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                                            {/* Arrow */}
                                                            <div
                                                                className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                                                                aria-hidden="true"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={9}
                                                                    height={8}
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        fill="#F4F4F5"
                                                                        d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            {/* Image */}
                                                            <img
                                                                className="inline-flex"
                                                                src="/images/workflow-03.png"
                                                                width={350}
                                                                height={288}
                                                                alt="Workflow 03"
                                                            />
                                                            {/* Content */}
                                                            <div className="p-6">
                                                                <div className="mb-3">
                                                                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                                                                        <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
                                                                            Designed
                                                                            for
                                                                            India
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <p className="text-yellow-100">
                                                                    For waves
                                                                    with a
                                                                    shorter
                                                                    period and
                                                                    lower
                                                                    height,
                                                                    point
                                                                    absorbers
                                                                    are more
                                                                    appropriate.
                                                                    For Indian
                                                                    coastal
                                                                    circumstances,
                                                                    this type of
                                                                    small-scale
                                                                    wave devices
                                                                    works best.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Spotlight>
                                            </div>
                                        </div>
                                    </section>
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
