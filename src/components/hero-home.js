// import VideoThumb from "@/public/images/hero-image-01.webp";
import ModalVideo from "./modal-video";
// import Enquiry from "@/public/images/enquiry.webp";
// import Link from "next/link";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

export default function HeroHome() {
    const [show, setShow] = useState(false);
    return (
        <section>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Hero content */}
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="pb-12 text-center md:pb-20 ">
                        <h1
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                            data-aos="fade-up"
                        >
                            Renewable Wave-Energy
                        </h1>
                        <div className="mx-auto max-w-3xl">
                            <p
                                className="mb-8 text-xl text-yellow-200/65"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                Virya Paramita Energy (VPE) Private Limited is a
                                pioneering renewable wave-energy company in
                                India aiming to help safely and responsibly meet
                                the country's growing needs for energy by
                                generating electricity from waves.
                            </p>
                            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                                <div data-aos="fade-up" data-aos-delay={400}>
                                    <Link
                                        className="btn group mb-4 w-full bg-gradient-to-t from-yellow-600/40 to-yellow-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                                        to="/services"
                                    >
                                        <span className="relative inline-flex items-center">
                                            Learn More
                                            <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                                                -&gt;
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                                <div data-aos="fade-up" data-aos-delay={600}>
                                    <a
                                        className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                                        href="#0"
                                        onClick={() => setShow(true)}
                                    >
                                        Watch Video
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-10">
                        <Dialog open={show} onClose={() => setShow(false)}>
                            {/* Backdrop */}
                            <DialogBackdrop className="fixed inset-0 z-[99999] bg-black/70 transition-opacity duration-300 ease-out" />
                            {/* Fullscreen dialog content */}
                            <div className="fixed inset-0 z-[99999] flex items-center justify-center">
                                <DialogPanel className="relative w-3/4 h-3/4 overflow-hidden bg-black">
                                    {/* Close Button */}
                                    <button
                                        onClick={() => setShow(false)}
                                        className="absolute top-4 right-4 z-10 text-white text-lg p-2 rounded-full bg-black/50 hover:bg-black/70"
                                    >
                                        ✕
                                    </button>
                                    {/* Full-screen image */}
                                    <video
                                        className="w-full h-full object-contain"
                                        // src={}
                                        alt={"some video"}
                                    />
                                </DialogPanel>
                            </div>
                        </Dialog>
                    </div>

                    <ModalVideo
                        thumb="https://viryaparamita.onrender.com/img/hero-img.png"
                        thumbWidth={1104}
                        thumbHeight={576}
                        thumbAlt="Modal video thumbnail"
                        // video={``}
                        // videoWidth={1920}
                        // videoHeight={1080}
                    />
                </div>
            </div>
        </section>
    );
}
