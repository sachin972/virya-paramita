// import Image from "next/image";
// import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
// import BlurredShape from "@/public/images/blurred-shape.svg";
// import FeaturesImage from "@/public/images/features.png";
import React from "react";
import "./features.css";
import ProgressBar from "./progressBar";

export default function Features() {
    return (
        <section className="relative">
            <div
                className="pointer-events-none absolute left-1/2 top-0 z-10 -mt-20 -translate-x-1/2"
                aria-hidden="true"
            >
                <img
                    className="max-w-none"
                    src="/images/blurred-shape-gray.svg"
                    width={760}
                    height={668}
                    alt="Blurred shape"
                />
            </div>
            <div
                className="pointer-events-none absolute bottom-0 left-1/2 z-10 -mb-80 -translate-x-[120%] opacity-50"
                aria-hidden="true"
            >
                <img
                    className="max-w-none"
                    src="/images/blurred-shape.svg"
                    width={760}
                    height={668}
                    alt="Blurred shape"
                />
            </div>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
                    {/* Section header */}
                    <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
                        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
                            <span className="inline-flex bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
                                Why Wave Energy
                            </span>
                        </div>
                        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                            Built for Modern Industries
                        </h2>
                        <p className="text-lg text-yellow-200/65">
                            Wave energy is not simply an alternative resource,
                            but it proves to be the ideal solution to the major
                            offshore activities starting from deep-sea
                            surveillance to powering oil and gas drilling
                            operations. Its global practical capacity is around
                            2 to 4 trillion kWh per year.
                        </p>
                    </div>
                    {/* <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div> */}
                    {/* Items */}
                    {/* <div className="mx-auto grid max-w-sm gap-12 grid-cols-2 md:gap-x-14 md:gap-y-16"> */}

                    <div className="grid gap-12 md:grid-cols-2">
                        {/* Pune Office */}
                        <div className="rounded-lg overflow-hidden shadow-lg bg-[url('https://viryaparamita.onrender.com/img/skills.png')] bg-contain">
                            {/* <img src="https://www.americanoceans.org/wp-content/uploads/2023/07/how-are-waves-formed-1024x683.jpeg" /> */}
                        </div>

                        {/* Mumbai Office */}
                        <div className=" rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-blue-500 via-white to-green-500">
                            <div className="relative h-44">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-2xl font-semibold text-white w-full mx-10">
                                        <ProgressBar
                                            name={"Predictability"}
                                            percentage={75}
                                        />
                                        <ProgressBar
                                            name={"Constant Supply"}
                                            percentage={75}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-44">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-2xl font-semibold text-white w-full mx-10">
                                        <ProgressBar
                                            name={"Proximity"}
                                            percentage={82}
                                        />
                                        <ProgressBar
                                            name={"Competitive Advantage"}
                                            percentage={60}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    );
}
