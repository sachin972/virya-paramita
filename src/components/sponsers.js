import React from "react";
import { motion } from "framer-motion";

const sponsors = [
    {
        category: "Technology Partner",
        logos: [
            {
                src: "https://viryaparamita.onrender.com/img/clients/IIT_Madras.png",
                alt: "IIT Madras",
            },
            {
                src: "https://viryaparamita.onrender.com/img/clients/IITK.png",
                alt: "IIT Kanpur",
            },
        ],
    },
    {
        category: "Incubation Partner",
        logos: [
            { src: "/incubation.png", alt: "Startup Incubation IIT Kanpur" },
        ],
    },
    {
        category: "Advisory Support",
        logos: [
            {
                src: "https://viryaparamita.onrender.com/img/clients/niot.png",
                alt: "NIOT Chennai",
            },
        ],
    },
    {
        category: "Acceleration Support",
        logos: [
            {
                src: "https://viryaparamita.onrender.com/img/clients/ClimAccelerator.png",
                alt: "ClimAccelerator",
            },
            { src: "/eit.png", alt: "EIT Climate-KIC" },
            {
                src: "https://viryaparamita.onrender.com/img/clients/athens-university-of-economics-and-business-national-and-kapodistrian-university-of-athens-national-technical-university-of-athens-university-of-international-business-and-economics.png",
                alt: "Athens University",
            },
        ],
    },
    {
        category: "Government Support",
        logos: [
            { src: "/gov_india.png", alt: "Government of India" },
            { src: "/edb.png", alt: "Andhra Pradesh EDB" },
        ],
    },
];

const SponsorsComponent = () => {
    return (
        <div className="bg-blue-50 py-10 px-6 text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
                Our Sponsors
            </h2>
            <div className="grid grid-cols-1 gap-8">
                {sponsors.map((sponsor, index) => (
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-4">
                            {sponsor.category}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {sponsor.logos.map((logo, i) => (
                                <motion.div
                                    key={index}
                                    className="bg-white shadow-lg rounded-lg p-6 border border-blue-300 flex flex-col items-center w-1/6"
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        key={i}
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="h-16 w-auto object-contain"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SponsorsComponent;
