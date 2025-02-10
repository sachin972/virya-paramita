import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
// import ProjectSindhuja from "./iwe2025";
// import Document from "react-pdf/dist/cjs/Document.js";
// import Page from "react-pdf/dist/cjs/Page.js";
import PDF from "./pdf.pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const IndiaEnergyWeek = () => {
    return (
        <div className="bg-blue-50 min-h-screen py-10 px-5">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8"
            >
                <h1 className="text-blue-800 text-4xl font-bold">
                    India Energy Week 2025
                </h1>
                <p className="text-gray-600 mt-2">
                    11 - 14 February 2025 | Yashobhoomi, Dwarka, New Delhi,
                    India
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 p-5 m-5">
                {/* Event Highlight Card */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                    <img
                        src="	https://i.ytimg.com/vi_webp/G8g4Hx_g9ik/maxresdefault.webp"
                        alt="IEW Event"
                        className="w-full object-cover"
                    />
                    <CardContent>
                        <h2 className="text-xl font-semibold text-blue-800">
                            Join the Conversation
                        </h2>
                        <p className="text-gray-600 mt-2">
                            India Energy Week has become a major global event
                            for energy professionals, connecting over 700
                            exhibitors and 70,000 attendees from 120+ countries.
                        </p>
                        <Button
                            variant="link"
                            className="mt-4 flex items-center gap-2 text-blue-600 underline"
                            onClick={() =>
                                window.open(
                                    "https://www.indiaenergyweek.com/event/2025/home",
                                    "_blank"
                                )
                            }
                        >
                            Visit Official Page <ArrowRight size={18} />
                        </Button>
                    </CardContent>
                </motion.div>

                {/* Renewable Energy Zone */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                    <img
                        src="https://images.cvent.com/60d08ede2c904d4ebb94d8438de6461f/pix/57a7a2d789674f89863ff61ccae05535!_!fcd899c7e5e27fcdecc11d4f6418ecdd.jpg?f=webp"
                        alt="Renewable Energy Zone"
                        className="w-full object-cover"
                    />
                    <CardContent>
                        <h2 className="text-xl font-semibold text-blue-800">
                            Renewable Energy Zone
                        </h2>
                        <p className="text-gray-600 mt-2">
                            This zone highlights innovative renewable energy
                            technologies and fosters discussions to drive
                            India’s clean energy future.
                        </p>
                        <Button
                            variant="link"
                            className="mt-4 flex items-center gap-2 text-blue-600 underline"
                            onClick={() =>
                                window.open(
                                    "https://www.indiaenergyweek.com/event/2025/Renewable-Zone",
                                    "_blank"
                                )
                            }
                        >
                            Learn More <ArrowRight size={18} />
                        </Button>
                    </CardContent>
                </motion.div>
            </div>
            <div
                className="mx-auto"
                style={{
                    height: "600px",
                    width: "70%",
                    border: "1px solid #ddd",
                }}
            >
                <Worker
                    workerUrl={`https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js`}
                >
                    <Viewer fileUrl={PDF} defaultScale={1} initialPage={1} />
                </Worker>
            </div>
        </div>
    );
};

export default IndiaEnergyWeek;
