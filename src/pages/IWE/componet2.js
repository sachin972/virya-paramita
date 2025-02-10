import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import ProjectSindhuja from "./iwe2025";

const IndiaEnergyWeek = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-10 px-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-blue-800 text-4xl font-bold">India Energy Week 2025</h1>
        <p className="text-gray-600 mt-2">
          11 - 14 February 2025 | Yashobhoomi, Dwarka, New Delhi, India
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Event Highlight Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="https://www.indiaenergyweek.com/images/sample-banner.jpg"
            alt="IEW Event"
            className="w-full object-cover"
          />
          <CardContent>
            <h2 className="text-xl font-semibold text-blue-800">
              Join the Conversation
            </h2>
            <p className="text-gray-600 mt-2">
              India Energy Week has become a major global event for energy
              professionals, connecting over 700 exhibitors and 70,000
              attendees from 120+ countries.
            </p>
            <Button
              variant="link"
              className="mt-4 flex items-center gap-2 text-blue-600 underline"
              onClick={() => window.open("https://www.indiaenergyweek.com/event/2025/home", "_blank")}
            >
              Visit Official Page <ArrowRight size={18} />
            </Button>
          </CardContent>
        </motion.div>

        {/* Renewable Energy Zone */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="https://www.indiaenergyweek.com/images/renewable-zone.jpg"
            alt="Renewable Energy Zone"
            className="w-full object-cover"
          />
          <CardContent>
            <h2 className="text-xl font-semibold text-blue-800">
              Renewable Energy Zone
            </h2>
            <p className="text-gray-600 mt-2">
              This zone highlights innovative renewable energy technologies and
              fosters discussions to drive India’s clean energy future.
            </p>
            <Button
              variant="link"
              className="mt-4 flex items-center gap-2 text-blue-600 underline"
              onClick={() => window.open("https://www.indiaenergyweek.com/event/2025/Renewable-Zone", "_blank")}
            >
              Learn More <ArrowRight size={18} />
            </Button>
          </CardContent>
        </motion.div>
      </div>
      <ProjectSindhuja />
    </div>
  );
};

export default IndiaEnergyWeek;
