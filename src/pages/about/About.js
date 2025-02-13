import { motion } from 'framer-motion';
import { Card, CardContent } from "../../components/ui/card";
import { Typography } from "@mui/material";
import { CheckCircle } from "lucide-react";

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  const points = [
    "Sustainable Development Goals (SDG) is the creed that underpins VPE's bespoke initiatives in creating a self-reliant and self-generating energy system in India.",
    "The company's initial goal is to harvest 1 GW power from the enormously large wave potential of the Indian coast, diversifying the country's total energy production scenario.",
    "VPE is a torchbearer in promoting the use of wave energy sources and will be the beacon in disseminating the 'Blue Economy' in India.",
  ];

  return (
    <div className=" bg-blue-50 p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={contentVariants}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center pt-10">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">About Us</h1>
          <Typography variant="body1" className="text-gray-700 md:py-10">
            VPE endeavors to bring an efficient class of indigenous wave energy converters (WECs) to market, enabling cost-effective low and no-carbon solutions to climate change.
          </Typography>
        </div>
        <div className="max-w-7xl mx-auto mt-8 md:py-10">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start mt-4"
            >
              <CheckCircle className="text-blue-600 mr-2" />
              <Typography className="text-gray-600">{point}</Typography>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-16 md:pb-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="shadow-xl">
          <CardContent>
            <h2 className="text-2xl font-bold text-blue-800 md:pb-10">History</h2>
            <p className="mt-4 text-gray-700 py-3">
              Sai Arun Kiran Karthik, an Australian-trained entrepreneur, founded the first private wave energy company in India, Virya Paramita Energy (VPE) Private Limited, in 2020. Inspired by India's vast 40 GW wave power, VPE aims to foster cutting-edge technologies in sustainable energy.
            </p>
            <p className="mt-4 text-gray-700">
              With Prof. Abdus Samad, a faculty member in the Ocean engineering department of IIT Madras, as its driving force, VPE has gained extensive experience in marine energy, optimization of turbomachinery systems, computational fluid dynamics, tidal turbines, surrogate-based optimization, design and testing of oscillating water column and point absorber type wave energy converters, hydrodynamic modeling, control optimization of WECs, and artificial lift. VPE has a strong product innovation growth, attracting funds and technical assistance from global and national bodies such as the Maritime Clim Accelerator, the government of Andhra Pradesh, India, and the National Institute of Ocean Technology.
            </p>
            <p className="mt-4 text-gray-700">
              Prof. Abhijit Chaudhuri, a faculty member in the Fluid Mechanics group at IIT Madras, has been a key mentor of VPE, working on fluid mechanics and wave hydrodynamics. He has worked on tsunami wave interaction with onshore structures, explosive instability due to nonlinear wave mixing, and energy-supported desalination systems. VPE has recently signed a Joint Development Agreement with IIT Madras and incubated its startup at the Indian Institute of Technology, Kanpur.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AboutUs;
