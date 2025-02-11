import { motion } from "framer-motion";

const newsItems = [
    {
        id: 1,
        title: "India Today",
        date: "Feb 22, 2022",
        link: "#",
        description:
            "1st time in India: IIT Madras and NIOT bring OCEANS Conference",
    },
    {
        id: 2,
        title: "Career360",
        date: "Dec 05, 2022",
        link: "#",
        description:
            "IIT Madras develops, deploys device to generate electricity from sea waves",
    },
    {
        id: 3,
        title: "NDTV",
        date: "Dec 05, 2022",
        link: "#",
        description:
            "IIT Madras Researchers Develop, Deploy Ocean Wave Energy Converter",
    },
    {
        id: 4,
        title: "The Hindu",
        date: "Dec 14, 2022",
        link: "#",
        description:
            "Vizag startup works with IIT-Madras to generate electricity from ocean waves",
    },
    {
        id: 5,
        title: "Business Standard",
        date: "Dec 05, 2022",
        link: "#",
        description:
            "IIT Madras generates power from sea waves, aims to go commercial by 2024",
    },
];

const partners = [
    {
        id: 1,
        name: "NIOT",
        logo: "https://viryaparamita.onrender.com/img/clients/niot.png",
        website: "#",
    },
    {
        id: 2,
        name: "IIT Madras",
        logo: "https://viryaparamita.onrender.com/img/clients/IIT_Madras.png",
        website: "#",
    },
    {
        id: 3,
        name: "University of Athens",
        logo: "https://viryaparamita.onrender.com/img/clients/athens-university-of-economics-and-business-national-and-kapodistrian-university-of-athens-national-technical-university-of-athens-university-of-international-business-and-economics.png",
        website: "#",
    },
    {
        id: 4,
        name: "IIT Kanpur",
        logo: "https://viryaparamita.onrender.com/img/clients/IITK.png",
        website: "#",
    },
    {
        id: 5,
        name: "T-Hub",
        logo: "https://viryaparamita.onrender.com/img/clients/hyderabad-t-hub-startup-company-business-incubator-entrepreneurship-others-miscellaneous-text-trademark.png",
        website: "#",
    },
    {
        id: 6,
        name: "Clim Accelerator",
        logo: "	https://viryaparamita.onrender.com/img/clients/ClimAccelerator.png",
        website: "#",
    },
];

export default function NewsPartnersPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-10 px-5">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-4xl font-extrabold text-blue-800 mb-12"
            >
                NEWS & PARTNERS
            </motion.h1>

            <div className="max-w-7xl mx-auto mt-12">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">
                    Our Partners
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {partners.map((partner) => (
                        <motion.a
                            key={partner.id}
                            href={partner.website}
                            target="_blank"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                            className="bg-white shadow-lg rounded-lg p-6 border border-blue-300 flex flex-col items-center w-1/6"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-20 h-20 object-contain mb-2"
                            />
                            <span className="text-blue-800 font-semibold">
                                {partner.name}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">
                    Latest News
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {newsItems.map((news) => (
                        <motion.div
                            key={news.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white shadow-lg rounded-lg p-4 border border-blue-300"
                        >
                            <h3 className="text-lg font-bold text-blue-800">
                                {news.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                                {news.date}
                            </p>
                            <p className="text-gray-700 mb-4">
                                {news.description}
                            </p>
                            <a
                                href={news.link}
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                Read More
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
