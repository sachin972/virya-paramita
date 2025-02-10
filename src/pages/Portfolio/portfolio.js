import { useState } from "react";
import { motion } from "framer-motion";
import Testimonials from "../../components/testimonials";

const categories = ["All", "App", "Card", "Web"];

const portfolioItems = [
    {
        id: 1,
        category: "Card",
        image: "image1.jpg",
        title: "Sindhuja-1 Successfully Deployed",
    },
    {
        id: 2,
        category: "Card",
        image: "image2.jpg",
        title: "NIT Srinagar & IIT Madras Collaboration",
    },
    {
        id: 3,
        category: "Web",
        image: "image3.jpg",
        title: "Ocean Wave Energy Converter",
    },
    {
        id: 4,
        category: "App",
        image: "image4.jpg",
        title: "IIT Madras Research Breakthrough",
    },
    {
        id: 5,
        category: "Web",
        image: "image5.jpg",
        title: "Sea Wave Power Generation",
    },
    {
        id: 6,
        category: "Card",
        image: "image6.jpg",
        title: "BaySlope Renewable Energy",
    },
    {
        id: 7,
        category: "Web",
        image: "image7.jpg",
        title: "India's Renewable Energy Future",
    },
];

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredItems =
        selectedCategory === "All"
            ? portfolioItems
            : portfolioItems.filter(
                  (item) => item.category === selectedCategory
              );

    return (
        <>
            {/* <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-10 px-5">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-4xl font-extrabold text-blue-800 mb-4"
                >
                    PORTFOLIO
                </motion.h1>
                <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
                    Our cutting-edge innovations in ocean wave energy conversion
                    have the potential to revolutionize renewable energy
                    solutions. Explore our projects and breakthroughs.
                </p>

                <div className="flex justify-center gap-4 mb-8">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`px-5 py-2 rounded-full border-2 font-semibold transition-all shadow-md ${
                                selectedCategory === category
                                    ? "bg-blue-800 text-white border-blue-800 shadow-lg"
                                    : "bg-white text-blue-800 border-blue-800 hover:bg-blue-200"
                            }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                            className="bg-white shadow-xl rounded-lg overflow-hidden border border-blue-300 transform transition-all"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-blue-800">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div> */}
            <Testimonials />
        </>
    );
}
