import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const images = [
    "/images/gallery/IMG-20250211-WA0015.jpg",
    "/images/gallery/IMG-20250211-WA0016.jpg",
    "/images/gallery/IMG-20250211-WA0017.jpg",
    "/images/gallery/IMG-20250211-WA0018.jpg",
    "/images/gallery/IMG-20250211-WA0019.jpg",
    "/images/gallery/IMG-20250211-WA0020.jpg",
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="p-8 bg-gradient-to-b from-blue-100 to-white min-h-screen">
            <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
                Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
                            onClick={() => setSelectedImage(src)}
                        />
                    </motion.div>
                ))}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className=" rounded-lg shadow-xl"
                        />
                        <button
                            className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6 text-gray-700" />
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
